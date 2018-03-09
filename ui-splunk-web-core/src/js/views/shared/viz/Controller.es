import debugModule from 'debug';
import $ from 'jquery';
import _ from 'underscore';
import { util as splunkUtil } from 'splunk';
import { getSources, getSplitData, getSuggestedFieldNames } from 'views/shared/viz/utils/DataFormatter';
import VisualizationBase from 'views/shared/viz/Base';
import LazyView from 'views/shared/LazyView';
import Paginator from 'views/shared/Paginator';
import BaseModel from 'models/Base';
import GenericResultJson from 'models/services/search/jobs/GenericResultJson';
import console from 'util/console';
import { DEBUG } from 'util/env';
import Printer from 'helpers/Printer';
import LinearScale from 'splunk/scales/LinearScale';
import CategoryScale from 'splunk/scales/CategoryScale';
import './Controller.pcss';

const debug = DEBUG ? debugModule('viz.Controller') : $.noop;

const TRELLIS_PREFIX = 'display.visualizations.trellis';

const SUPPORTED_LAYOUTS = ['wrap'];
const SUPPORTED_SIZE_CATEGORIES = ['small', 'medium', 'large'];

const SIZE_CATEGORY_MIN_WIDTHS = [190, 280, 450];

// print min sizes assume that the page width is always 800
const PRINT_SIZE_CATEGORY_MIN_WIDTHS = [120, 185, 370];

const FACETS_PER_ROW = [6, 4, 2];

const DEFAULT_FACETS_PER_ROW = 1;
const DEFAULT_FACETS_PER_PAGE = 20;
const DEFAULT_SIZE_CATEGORY = 'medium';
const DEFAULT_SIZE_CATEGORY_INDEX = 1;
const DEFAULT_LAYOUT = 'wrap';

const SCROLLBAR_WIDTH = 17;
const FACET_HORIZONTAL_PADDING = 10;

const FIELD_AGGREGATION = '_aggregation';

// export defaults for tests
export {
    DEFAULT_FACETS_PER_ROW,
    DEFAULT_FACETS_PER_PAGE,
    DEFAULT_SIZE_CATEGORY,
    DEFAULT_SIZE_CATEGORY_INDEX,
    DEFAULT_LAYOUT,
    SUPPORTED_LAYOUTS,
    SUPPORTED_SIZE_CATEGORIES,
    SIZE_CATEGORY_MIN_WIDTHS,
    PRINT_SIZE_CATEGORY_MIN_WIDTHS,
    FACET_HORIZONTAL_PADDING,
};

function propName(propertyName) {
    return `${TRELLIS_PREFIX}.${propertyName}`;
}

function int(number) {
    return parseInt(number, 10);
}

// this function makes sure that generated ids
// do not contain characters that wouldn't work as a selector
// it also ensures that the returned domIds are unique
const domId = (() => {
    const facetIds = {};
    return (id) => {
        if (!facetIds[id]) {
            const existingValidDomIds = _.values(facetIds);
            let validDomId;
            let suffix = '';
            do {
                validDomId = `${id.replace(/[^a-z0-9\-_]+/gi, '_') + suffix}`;
                suffix = +new Date();
            } while (existingValidDomIds.indexOf(validDomId) > -1);
            facetIds[id] = validDomId;
        }
        return facetIds[id];
    };
})();

// export utility functions to test
export {
    domId,
};

export default VisualizationBase.extend({
    className: 'viz-controller',

    initialize(options, ...args) {
        debug('initialize', 'options', options);

        VisualizationBase.prototype.initialize.call(this, options, ...args);

        this.options = options;
        this.children.vizList = {};
        this.sharedScales = {};
        this.isLoaded = false;
        this.isRendered = false;

        this.prevDataOffset = 0;
        this.dataOffset = 0;
        this.isPaging = false;
        this.paginatorModel = new BaseModel({
            length: 0,
            count: this.getFacetsPerPage(),
            offset: 0,
        });

        this.$el.width(this.options.width || '100%');
        this.$el.height(this.options.height || '100%');

        this.$facetsContainer = $('<div class="facets-container"></div>');
        this.$facetsContainer.appendTo(this.$el);

        this.$actionBar = $('<div class="action-bar clearfix"></div>');
        this.children.paginator = new Paginator({
            model: this.paginatorModel,
        });
        this.children.paginator.render().$el.appendTo(this.$actionBar);
        this.$actionBar.appendTo(this.$el);

        this.setDisplayMode();

        this.listenTo(this.paginatorModel, 'change:offset', () => {
            this.dataOffset = this.paginatorModel.get('offset');
            this.invalidate('formatDataPass');
            this.invalidate('updateViewPass');
        });
    },

    onConfigChange(changedAttributes) {
        if (_.keys(this.trellisProperties(changedAttributes)).length > 0) {
            this.setDisplayMode();

            _.each(Object.keys(this.children.vizList), (id) => {
                this.removeChild(id);
            });
            _.each(this.sharedScales, (scale) => {
                scale.dispose();
            });
            this.sharedScales = {};

            this.invalidate('formatDataPass');
            this.invalidate('updateViewPass');
        }
    },

    setDisplayMode() {
        this.callChildFunction('setDisplayMode', this.getDisplayMode());
    },

    getDisplayMode() {
        return (
            (
                this.isInFacetMode() && (
                    this.getSizeCategory() !== 'large' ||
                    // for single value we always want display mode to be simple if facet mode is active
                    this.model.config.get('display.visualizations.type') === 'singlevalue'
                )
            ) ? 'simple' : 'complete'
        );
    },

    prepareForBrowserPrint() {
        this.isPrinting = true;
        this.containerHeightBeforePrint = this.$el.height();
        this.$el.height('100%');
        if (this.isPaging) {
            this.$actionBar.hide();
        }
    },

    restoreAfterBrowserPrint() {
        this.isPrinting = false;
        this.$el.height(this.containerHeightBeforePrint);
        if (this.isPaging) {
            this.$actionBar.show();
        }
    },

    getPrintContainerHeight() {
        const pageWidth = Printer.PRINT_PAGE_WIDTH;
        // facetSize will always contain numeric values due to the fixed pageWidth and fixed min sizes
        const facetSize = this.getPanelDimensions(pageWidth, PRINT_SIZE_CATEGORY_MIN_WIDTHS);
        const facetsPerRow = this.getFacetsPerRow(this.getSizeCategory());
        const facetsCount = Object.keys(this.children.vizList).length;
        const rows = Math.ceil(facetsCount / facetsPerRow);
        const facetPadding = (2 * FACET_HORIZONTAL_PADDING) + 14; // 12px font-size, 2px margin-bottom
        return (rows * facetSize.height) + (rows * facetPadding);
    },

    formatData(data, config) {
        // profiling:start
        if (DEBUG) {
            window.console.timeStamp('formatData: Begin');
            window.console.time('formatData');
        }

        debug('formatData', 'data', data, 'config', config);

        if (this.options.id === 'statistics') {
            // profiling:end
            if (DEBUG) {
                window.console.timeEnd('formatData');
                window.console.timeStamp('formatData: End');
            }

            return [$.extend(true, {}, data, { split_meta: { id: 'stats' } })];
        }

        // populate the "split-by" dropdown menu items
        this.formatDataForSplitByDropdownMenu(data);

        // split datasets
        const dataToSplit = $.extend(true, {}, data);

        if (!dataToSplit.split_meta) {
            dataToSplit.split_meta = {};
        }
        dataToSplit.split_meta.id = 'viz';

        if (!this.isInFacetMode() || !_.has(dataToSplit, 'fields')) {
            this.isPaging = false;
            this.paginatorModel.set('length', 0);

            // profiling:end
            if (DEBUG) {
                window.console.timeEnd('formatData');
                window.console.timeStamp('formatData: End');
            }

            return [dataToSplit];
        }

        const splitByFields = this.getSplitByFields();
        debug('formatData', 'splitByFields', splitByFields);

        const isAggregate = this.isAggregateSources();
        debug('formatData', 'isAggregate', isAggregate);

        const splitDatasets = getSplitData([dataToSplit], {
            fields: splitByFields,
            is_aggregated: isAggregate,
        });

        this.paginatorModel.set('length', splitDatasets.length);
        this.isPaging = splitDatasets.length > this.getFacetsPerPage();
        const pagedDatasets = splitDatasets.splice(this.dataOffset, this.getFacetsPerPage());
        debug('formatData', 'pagedDatasets', pagedDatasets);

        // profiling:end
        if (DEBUG) {
            window.console.timeEnd('formatData');
            window.console.timeStamp('formatData: End');
        }

        return pagedDatasets;
    },

    formatDataForSplitByDropdownMenu(data) {
        if (!_.has(data, 'fields')) {
            return;
        }

        let splitByField;
        const splitByFields = getSuggestedFieldNames(data.fields);
        const splitSources = _.keys(getSources(data.fields));

        if (_.size(splitByFields) !== 0) {
            //  Set the first one as default split-by
            splitByField = splitByFields[0];
        } else {
            // Set 'aggregation' as default split-by
            splitByField = FIELD_AGGREGATION;
        }

        // Add "aggregation" in the dropdown menu
        splitByFields.push(FIELD_AGGREGATION);

        // Set transient property in config model
        this.model.config.set(
            {
                splitByField: this.model.config.get(propName('splitBy')) || splitByField,
                splitByFields: splunkUtil.fieldListToString(splitByFields),
                splitSources: splunkUtil.fieldListToString(splitSources),
            },
            {
                transient: true,
            },
        );
    },

    updateView(data, config, async) {
        // profiling:start
        if (DEBUG) {
            window.console.timeStamp('updateView: Begin');
            window.console.time('updateView');
        }

        debug('updateView', 'data', data, 'config', config);

        const doneRendering = async();

        if (!_.isArray(data)) {
            doneRendering();
        }

        this.$el[this.isInFacetMode() ? 'addClass' : 'removeClass']('facets-mode-active');

        const currVizIds = Object.keys(this.children.vizList);
        const nextVizIds = [];
        const nextVizDataList = {};
        _.each(data, (datum) => {
            if (datum.split_meta && datum.split_meta.id) {
                nextVizIds.push(datum.split_meta.id);
                nextVizDataList[datum.split_meta.id] = datum;
            }
        });

        // If there is no data, we still draw a viz and let it handle that case
        if (nextVizIds.length === 0) {
            nextVizIds.push('empty');
            nextVizDataList.empty = {
                fields: [],
                rows: [],
                columns: [],
                results: [],
            };
        }

        const renderedDfdList = [];

        // Update "existing" viz
        const updatedIds = _.intersection(nextVizIds, currVizIds);
        renderedDfdList.push(..._.map(updatedIds, id =>
            this.updateChild(id, nextVizDataList[id]),
        ));

        // Create "missing" viz
        const createdIds = _.difference(nextVizIds, currVizIds);
        renderedDfdList.push(..._.map(createdIds, id =>
            this.appendChild(id, nextVizDataList[id]),
        ));

        // Remove "superfluous" viz
        const removedIds = _.difference(currVizIds, nextVizIds);
        _.each(removedIds, (id) => {
            this.removeChild(id);
        });

        debug('updateView', 'this.children.vizList', this.children.vizList);

        this.prevDataOffset = this.dataOffset;

        this.updateFacetsContainerHeight();

        $.when(...renderedDfdList).done(() => {
            doneRendering();
        });

        // profiling:end
        if (DEBUG) {
            window.console.timeEnd('updateView');
            window.console.timeStamp('updateView: End');
        }
    },

    remove(...args) {
        _.each(this.children.vizList, (viz, id) => {
            this.removeChild(id);
        });

        VisualizationBase.prototype.remove.apply(this, args);
        this.isRendered = false;
        return this;
    },

    render(...args) {
        VisualizationBase.prototype.render.apply(this, args);
        this.isRendered = true;
        return this;
    },

    load() {
        this.isLoaded = true;
        return this;
    },

    getInitialDataParams() {
        if (_.isFunction(this.options.factory.getInitialDataParams)) {
            return this.options.factory.getInitialDataParams(this.model.config.toJSON());
        }
        return {};
    },

    trellisProperties(dictionary) {
        const trellisConfig = {};
        _.each(dictionary, (value, key) => {
            if (key.indexOf(TRELLIS_PREFIX) === 0
                || key === 'display.visualizations.type') {
                trellisConfig[key] = value;
            }
        });
        return trellisConfig;
    },

    reflow() {
        this.updatePanelSize();
        this.updateFacetsContainerHeight();
        _.each(Object.keys(this.children.vizList), (id) => {
            const viz = this.children.vizList[id];
            viz.invalidateReflow();
        }, this);
    },

    _shouldUpdateViewOnDataChange(data, previousData) {
        if (_.isEmpty(data) || _.isEmpty(previousData) || this.dataOffset !== this.prevDataOffset) {
            return true;
        }

        return !_.isEqual(data, previousData);
    },

    getPanelDimensions(width,
        minWidths = SIZE_CATEGORY_MIN_WIDTHS,
        facetsPerRowOverride = FACETS_PER_ROW) {
        const sizeCategory = this.getSizeCategory();
        const sizeCategoryIndex = this.getSizeCategoryIndex(sizeCategory);
        let facetsPerRow = this.getFacetsPerRow(sizeCategory, facetsPerRowOverride);
        let facetsWidth;

        do {
            // if it's only one column, it should be width & height 100% - for now
            if (facetsPerRow === 1) {
                return {
                    width: '100%',
                    height: '100%',
                };
            }
            facetsWidth = int(width / facetsPerRow) - FACET_HORIZONTAL_PADDING;
            facetsPerRow -= 1;
            // as long as facetsWidth is smaller than the minimum facets width
            // decrease the facetsPerRow until it either fits or it's only 1 facet per row
        } while (facetsWidth < minWidths[sizeCategoryIndex]);

        const aspectRatio = 16 / 9;
        const facetsHeight = int(facetsWidth / aspectRatio);

        return {
            width: facetsWidth,
            height: facetsHeight,
        };
    },

    getFacetsContainerHeight() {
        return this.isPaging ? `${this.$el.height() - 35}px` : '100%';
    },

    getLayout() {
        if (this.model && this.model.config.get(propName('layout'))) {
            const layout = this.model.config.get(propName('layout'));
            if (SUPPORTED_LAYOUTS.indexOf(layout) === -1) {
                debug('Unsupported Layout: ', splunkUtil.escapeHtml(layout));
                return DEFAULT_LAYOUT;
            }
            return layout;
        }
        return DEFAULT_LAYOUT;
    },

    getSizeCategory() {
        if (this.model && this.model.config.get(propName('size'))) {
            const sizeCategory = this.model.config.get(propName('size'));
            if (SUPPORTED_SIZE_CATEGORIES.indexOf(sizeCategory) === -1) {
                debug('Unsupported size: ', splunkUtil.escapeHtml(sizeCategory));
                return DEFAULT_SIZE_CATEGORY;
            }
            return sizeCategory;
        }
        return DEFAULT_SIZE_CATEGORY;
    },

    getSizeCategoryIndex(sizeCategory) {
        const sizeCategoryIndex = SUPPORTED_SIZE_CATEGORIES.indexOf(sizeCategory);
        if (sizeCategoryIndex === -1) {
            debug('Unsupported size: ', splunkUtil.escapeHtml(sizeCategory));
            return DEFAULT_SIZE_CATEGORY_INDEX;
        }
        return sizeCategoryIndex;
    },

    getFacetsPerRow(sizeCategory, facetsPerRow = FACETS_PER_ROW) {
        if (this.options.id !== 'statistics' && this.isInFacetMode()) {
            return facetsPerRow[this.getSizeCategoryIndex(sizeCategory)];
        }
        return DEFAULT_FACETS_PER_ROW;
    },

    getFacetsPerPage() {
        // could be configurable in the future: add early return here
        return DEFAULT_FACETS_PER_PAGE;
    },

    isInFacetMode() {
        if (this.model && splunkUtil.normalizeBoolean(this.options.isSplittable !== false)) {
            return splunkUtil.normalizeBoolean(this.model.config.get(propName('enabled')) || false);
        }
        return false;
    },

    appendChild(id, data) {
        debug('appendChild', id, data);
        const options = this.getOptions(data);
        // Update DATA
        const viz = new this.options.factory(options); // eslint-disable-line new-cap
        const declaredScales = _.isFunction(this.options.factory.getDataContract)
            ? this.options.factory.getDataContract().scales : {};

        let vizScaleDictionary = {};
        if (splunkUtil.normalizeBoolean(this.model.config.get(propName('scales.shared')))) {
            vizScaleDictionary = this.sharedScales;
        }

        if (this.isInFacetMode()) {
            _.each(declaredScales, (value, key) => {
                if (!_.contains(_.keys(vizScaleDictionary), key)) {
                    if (value.type === 'categorical') {
                        vizScaleDictionary[key] = new CategoryScale();
                    } else {
                        vizScaleDictionary[key] = new LinearScale();
                    }
                }
            });
        }

        if (_.isFunction(viz.setScaleDictionary)) {
            viz.setScaleDictionary(vizScaleDictionary);
        }

        // Viz may render async
        const vizRenderedDfd = new $.Deferred();

        // Handle child events. Most events get re-triggered, but the
        // render event is swallowed and a promise is resolved.
        this.listenTo(viz, 'all', (...args) => {
            if (args[0] === 'rendered') {
                this.stopListening(viz, 'rendered');
                vizRenderedDfd.resolve();
            } else if (args[0] === 'drilldown') {
                const updatedArgs = this.updateArgsForDrilldown(args, data);
                debug('appendChild', 'drilldown', 'updatedArgs', updatedArgs);
                this.trigger(...updatedArgs);
            } else {
                this.trigger(...args);
            }
        });

        this.children.vizList[id] = viz;
        const sizeConfig = options.size || {};
        const panelDimensions = this.getPanelDimensions(
            this.$el.width() - SCROLLBAR_WIDTH,
            // trellis min sizes and trellis per row can be set in VisualizationRegistry
            // if it's not set, it will fall back to defaults
            sizeConfig.trellisMinWidths,
            sizeConfig.trellisPerRow);

        const $panel = $(`<div
                class="viz-panel ${this.isInFacetMode() ? 'viz-facet' : ''} viz-facet-size-${this.getSizeCategory()}"
                id="facet-${domId(id)}" />`,
        )
            .width(panelDimensions.width)
            .height(panelDimensions.height);

        const $facetLabel = $('<div class="facet-label"></div>');

        if (data.split_meta && data.split_meta.value) {
            $facetLabel
                .text(data.split_meta.value)
                .attr('title', data.split_meta.value);
            $facetLabel.appendTo($panel);
        }

        viz.appendTo($panel);

        viz.activate();
        viz.wake();
        viz.render();

        $panel.appendTo(this.$facetsContainer);

        if (this.isLoaded) {
            if (viz && viz instanceof LazyView) {
                viz.load();
                viz.wrappedViewLoaded().then(() => {
                    viz.invokeOnChildren('setDisplayMode', this.getDisplayMode());
                });
            }
        }

        return vizRenderedDfd;
    },

    updateArgsForDrilldown(args, data) {
        /* eslint-disable no-param-reassign */
        debug('updateArgsForDrilldown', 'args', args, 'data', data);

        // Attach split context in the payload only if we drilldown on split dataset.
        if (data
            && data.split_meta
            && !_.isEmpty(data.split_meta.name)
            && !_.isEmpty(data.split_meta.value)) {
            // Extract split-names and split-values from the split dataset.
            const values = (data.split_meta.value || '').split('|');
            const names = (data.split_meta.name || '').split('|');
            let count = 0;

            const nameValueMap = {};
            names.forEach((name, index) => {
                nameValueMap[name] = values[index];

                // Update row.context
                if (name !== 'data_source') {
                    args[1].rowContext = $.extend({}, args[1].rowContext, {
                        [`trellis.split.${name}`]: values[index],
                    });

                    if (count === 0) {
                        args[1].rowContext['trellis.name'] = name;
                        args[1].rowContext['trellis.value'] = values[index];
                    } else {
                        args[1].rowContext[`trellis.name${count + 1}`] = name;
                        args[1].rowContext[`trellis.value${count + 1}`] = values[index];
                    }
                    count += 1;
                }

                // Update data
                if (_.contains(args[1].fields, name) && args[1].data[name] === undefined) {
                    args[1].data[name] = values[index];
                }
            });

            // Attach split data source in the payload (if necessary).
            if (nameValueMap.data_source) {
                args[1].splitDataSource = nameValueMap.data_source;
                delete nameValueMap.data_source;
            }

            // Attach split context in the payload (if necessary).
            if (Object.keys(nameValueMap).length > 0) {
                args[1].splitContext = nameValueMap;
            }
        }

        return args;
        /* eslint-enable no-param-reassign */
    },

    updateChild(id, data) {
        const vizRenderedDfd = new $.Deferred();
        if (_.isEqual(data, this.children.vizList[id].model.searchData.toJSON())) {
            vizRenderedDfd.resolve();
        } else {
            this.children.vizList[id].model.searchData.set(data);

            this.listenToOnce(this.children.vizList[id], 'rendered', () => {
                vizRenderedDfd.resolve();
            });
        }

        return vizRenderedDfd;
    },

    removeChild(id) {
        // Update DATA
        const viz = this.children.vizList[id];
        this.stopListening(viz);
        viz.deactivate({ deep: true }).remove();
        delete this.children.vizList[id];

        // Update DOM
        $(`#facet-${domId(id)}`, this.$facetsContainer).remove();
    },

    getOptions(data) {
        let currentOptions = this.options;

        if (this.options.id !== 'statistics') {
            const options = Object.assign({}, this.options);
            options.model = {};

            _.each(this.options.model, (value, key) => {
                if (key !== 'searchData') {
                    options.model[key] = value;
                }
            });

            options.model.searchData = new GenericResultJson(data);
            options.model.searchDataParams.set(this.getInitialDataParams(), { silent: true });

            currentOptions = options;
        }

        return currentOptions;
    },

    getSplitByField() {
        return this.model.config.get('splitByField') || '';
    },

    getSplitByFields() {
        const splitByFields = [];

        let fields = this.model.config.get('splitByFields') || '';
        fields = splunkUtil.stringToFieldList(fields);

        const field = this.getSplitByField();
        if (field !== FIELD_AGGREGATION) {
            if (_.contains(fields, field)) {
                splitByFields.push(field);
            } else if (fields.length > 0) {
                splitByFields.push(fields[0]);
            }
        }

        return splitByFields;
    },

    isAggregateSources() {
        return this.getSplitByField() !== FIELD_AGGREGATION;
    },

    updatePanelSize() {
        debug('updatePanelSize');
        const sizeConfig = this.getOptions(this.data).size || {};
        const panelDimensions = this.getPanelDimensions(
            this.$el.width() - SCROLLBAR_WIDTH,
            this.isPrinting ? PRINT_SIZE_CATEGORY_MIN_WIDTHS : sizeConfig.trellisMinWidths,
            sizeConfig.trellisPerRow);
        $('.viz-panel', this.$facetsContainer)
            .width(panelDimensions.width)
            .height(panelDimensions.height);
        return this;
    },

    updateFacetsContainerHeight() {
        this.$facetsContainer.height(this.getFacetsContainerHeight());
    },

    callChildFunction(fnName, ...args) {
        _.each(this.children.vizList, (viz) => {
            if (!viz || !_(viz[fnName]).isFunction()) {
                console.warn(`${fnName} method is not supported by the current visualization`);
                return;
            }
            viz[fnName](...args);
        });
    },
});
