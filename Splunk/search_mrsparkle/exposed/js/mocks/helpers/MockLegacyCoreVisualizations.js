define([
            'jquery',
            'underscore',
            'views/shared/LazyView',
            'views/shared/jschart/LazyJSChart',
            'views/shared/map/LazyMap',
            'views/shared/singlevalue/LazySingleValue',
            'views/shared/results_table/LazyResultsTable',
            'views/shared/jschart/vizeditorschemas/line_chart',
            'views/shared/jschart/vizeditorschemas/area_chart',
            'views/shared/jschart/vizeditorschemas/column_chart',
            'views/shared/jschart/vizeditorschemas/bar_chart',
            'views/shared/jschart/vizeditorschemas/pie_chart',
            'views/shared/jschart/vizeditorschemas/scatter_chart',
            'views/shared/jschart/vizeditorschemas/bubble_chart',
            'views/shared/singlevalue/viz_editor_schema',
            'views/shared/jschart/vizeditorschemas/gauge',
            'views/shared/map/vizeditorschemas/marker_map',
            'views/shared/map/vizeditorschemas/choropleth_map',
            'views/shared/results_table/viz_editor_schema',
            'views/shared/eventsviewer/viz_editor_schema',
            'views/shared/jschart/pivot_schemas',
            'views/shared/singlevalue/pivot_schema'
        ],
        function(
            $,
            _,
            LazyView,
            LazyJSChart,
            LazyMap,
            LazySingleValue,
            LazyResultsTable,
            lineChartSchema,
            areaChartSchema,
            columnChartSchema,
            barChartSchema,
            pieChartSchema,
            scatterChartSchema,
            bubbleChartSchema,
            singleValueSchema,
            gaugeSchema,
            markerMapSchema,
            choroplethMapSchema,
            resultsTableSchema,
            eventsViewerSchema,
            chartPivotSchemas,
            singleValuePivotSchema) {

    var DEFAULT_TRELLIS_HEIGHT = 400;

    var chartSizeConfig = {
        resizable: true,
        minHeight: 100,
        maxHeight: 10000,
        heightAttribute: 'display.visualizations.chartHeight',
        defaultTrellisHeight: DEFAULT_TRELLIS_HEIGHT
    };

    var mapSizeConfig = {
        resizable: true,
        minHeight: 200,
        maxHeight: 10000,
        heightAttribute: 'display.visualizations.mapHeight',
        defaultTrellisHeight: DEFAULT_TRELLIS_HEIGHT
    };

    var singleValueSizeConfig = {
        resizable: true,
        minHeight: 50,
        maxHeight: 10000,
        heightAttribute: 'display.visualizations.singlevalueHeight',
        defaultHeight: 115,
        defaultTrellisHeight: DEFAULT_TRELLIS_HEIGHT,
        trellisMinWidths: [70, 130, 230],
        trellisPerRow: [10, 6, 4]
    };

    var BUILTIN_VISUALIZATIONS = [
        {
            id: 'line',
            label: _('Line Chart').t(),
            icon: 'chart-line',
            preview: 'line.png',
            description: _('Track values and trends over time.').t(),
            searchHint: '| timechart count [by comparison_category]',
            recommendFor: ['timechart', 'predict'],
            factory: LazyJSChart,
            editorSchema: lineChartSchema,
            pivotSchema: chartPivotSchemas.LINE,
            matchConfig: {
                'display.general.type': 'visualizations',
                'display.visualizations.type': 'charting',
                'display.visualizations.charting.chart': 'line'
            },
            size: chartSizeConfig
        },
        {
            id: 'area',
            label: _('Area Chart').t(),
            icon: 'chart-area',
            preview: 'area.png',
            description: _('Track changes in aggregated values over time.').t(),
            searchHint: '| timechart count [by comparison_category]',
            recommendFor: ['timechart'],
            factory: LazyJSChart,
            editorSchema: areaChartSchema,
            pivotSchema: chartPivotSchemas.AREA,
            matchConfig: {
                'display.general.type': 'visualizations',
                'display.visualizations.type': 'charting',
                'display.visualizations.charting.chart': 'area'
            },
            size: chartSizeConfig
        },
        {
            id: 'column',
            label: _('Column Chart').t(),
            icon: 'chart-column',
            preview: 'column.png',
            description: _('Compare values or fields.').t(),
            searchHint: '| stats count by comparison_category',
            recommendFor: ['timechart', 'top', 'rare'],
            factory: LazyJSChart,
            editorSchema: columnChartSchema,
            pivotSchema: chartPivotSchemas.COLUMN,
            matchConfig: {
                'display.general.type': 'visualizations',
                'display.visualizations.type': 'charting',
                'display.visualizations.charting.chart': 'column'
            },
            size: chartSizeConfig
        },
        {
            id: 'bar',
            label: _('Bar Chart').t(),
            icon: 'chart-bar',
            preview: 'bar.png',
            description: _('Compare values or fields.').t(),
            searchHint: '| stats count by comparison_category',
            recommendFor: ['top', 'rare'],
            factory: LazyJSChart,
            editorSchema: barChartSchema,
            pivotSchema: chartPivotSchemas.BAR,
            matchConfig: {
                'display.general.type': 'visualizations',
                'display.visualizations.type': 'charting',
                'display.visualizations.charting.chart': 'bar'
            },
            size: chartSizeConfig
        },
        {
            id: 'pie',
            label: _('Pie Chart').t(),
            icon: 'chart-pie',
            preview: 'pie.png',
            description: _('Compare categories in a dataset.').t(),
            searchHint: '| stats count by comparison_category',
            recommendFor: ['top', 'rare'],
            factory: LazyJSChart,
            editorSchema: pieChartSchema,
            pivotSchema: chartPivotSchemas.PIE,
            matchConfig: {
                'display.general.type': 'visualizations',
                'display.visualizations.type': 'charting',
                'display.visualizations.charting.chart': 'pie'
            },
            size: chartSizeConfig
        },
        {
            id: 'scatter',
            label: _('Scatter Chart').t(),
            icon: 'chart-scatter',
            preview: 'scatter.png',
            description: _('Show relationships between discrete values in two dimensions.').t(),
            searchHint: '| stats x_value_aggregation y_value_aggregation by name_category [comparison_category]',
            factory: LazyJSChart,
            editorSchema: scatterChartSchema,
            pivotSchema: chartPivotSchemas.SCATTER,
            matchConfig: {
                'display.general.type': 'visualizations',
                'display.visualizations.type': 'charting',
                'display.visualizations.charting.chart': 'scatter'
            },
            size: chartSizeConfig
        },
        {
            id: 'bubble',
            label: _('Bubble Chart').t(),
            icon: 'chart-bubble',
            preview: 'bubble.png',
            description: _('Show relationships between discrete values in three dimensions.').t(),
            searchHint: '| stats x_value_aggregation y_value_aggregation size_aggregation by name_category [comparison_category]',
            factory: LazyJSChart,
            editorSchema: bubbleChartSchema,
            pivotSchema: chartPivotSchemas.BUBBLE,
            matchConfig: {
                'display.general.type': 'visualizations',
                'display.visualizations.type': 'charting',
                'display.visualizations.charting.chart': 'bubble'
            },
            size: chartSizeConfig
        },
        {
            id: 'singlevalue',
            label: _('Single Value').t(),
            icon: 'single-value',
            preview: 'singlevalue.png',
            description: _('Track a metric with context and trends.').t(),
            searchHint: '| timechart count',
            recommendFor: ['timechart'],
            factory: LazySingleValue,
            editorSchema: singleValueSchema,
            pivotSchema: singleValuePivotSchema,
            matchConfig: {
                'display.general.type': 'visualizations',
                'display.visualizations.type': 'singlevalue'
            },
            size: singleValueSizeConfig
        },
        {
            id: 'radialGauge',
            label: _('Radial Gauge').t(),
            icon: 'gauge-radial',
            preview: 'radialGauge.png',
            description: _('Show a single value in relation to customized ranges.').t(),
            searchHint: '| stats count',
            factory: LazyJSChart,
            editorSchema: gaugeSchema,
            pivotSchema: chartPivotSchemas.GAUGE,
            matchConfig: {
                'display.general.type': 'visualizations',
                'display.visualizations.type': 'charting',
                'display.visualizations.charting.chart': 'radialGauge'
            },
            size: chartSizeConfig
        },
        {
            id: 'fillerGauge',
            label: _('Filler Gauge').t(),
            icon: 'gauge-filler',
            preview: 'fillerGauge.png',
            description: _('Show a single value and its current range.').t(),
            searchHint: '| stats count',
            factory: LazyJSChart,
            editorSchema: gaugeSchema,
            pivotSchema: chartPivotSchemas.GAUGE,
            matchConfig: {
                'display.general.type': 'visualizations',
                'display.visualizations.type': 'charting',
                'display.visualizations.charting.chart': 'fillerGauge'
            },
            size: chartSizeConfig
        },
        {
            id: 'markerGauge',
            label: _('Marker Gauge').t(),
            icon: 'gauge-marker',
            preview: 'markerGauge.png',
            description: _('Show a single value in relation to customized ranges.').t(),
            searchHint: '| stats count',
            factory: LazyJSChart,
            editorSchema: gaugeSchema,
            pivotSchema: chartPivotSchemas.GAUGE,
            matchConfig: {
                'display.general.type': 'visualizations',
                'display.visualizations.type': 'charting',
                'display.visualizations.charting.chart': 'markerGauge'
            },
            size: chartSizeConfig
        },
        {
            id: 'mapping',
            label: _('Cluster Map').t(),
            icon: 'location',
            preview: 'mapping.png',
            description: _('Show aggregated values in a geographic region.').t(),
            searchHint: '| geostats count [by category] latfield=lat longfield=lon',
            recommendFor: ['geostats'],
            factory: LazyMap,
            editorSchema: markerMapSchema,
            matchConfig: {
                'display.general.type': 'visualizations',
                'display.visualizations.type': 'mapping',
                'display.visualizations.mapping.type': 'marker'
            },
            size: mapSizeConfig,
            isSplittable: false
        },
        {
            id: 'choropleth',
            label: _('Choropleth Map').t(),
            icon: 'choropleth-map',
            preview: 'choropleth.png',
            description: _('Show how values vary over a geographic region.').t(),
            searchHint: '| stats count by featureId | geom geo_countries featureIdField=featureId',
            recommendFor: ['geom'],
            factory: LazyMap,
            editorSchema: choroplethMapSchema,
            matchConfig: {
                'display.general.type': 'visualizations',
                'display.visualizations.type': 'mapping',
                'display.visualizations.mapping.type': 'choropleth'
            },
            size: mapSizeConfig
        },
        {
            id: 'statistics',
            label: _('Statistics Table').t(),
            icon: 'table',
            preview: 'statistics.png',
            description: _('Show results organized in rows and columns.').t(),
            recommendFor: ['timechart', 'top', 'rare', 'predict'],
            factory: LazyResultsTable,
            editorSchema: resultsTableSchema,
            matchConfig: {
                'display.general.type': 'statistics'
            },
            isSplittable: false
        },
        // The registry contains an entry for the events viewer, even though the
        // rendering system doesn't support it.  By doing it this way, we can abstract
        // details away from the configuration views that consume the registry, and
        // leave ourselves open to adding events viewer rendering support later.
        {
            id: 'events',
            label: _('Events').t(),
            icon: 'list',
            preview: 'events.png',
            description: _('List events from search results.').t(),
            factory: function() {
                throw new Error('The events viewer is not supported as a mod viz renderer');
            },
            editorSchema: eventsViewerSchema,
            matchConfig: {
                'display.general.type': 'events'
            },
            isSplittable: false
        }
    ];

    return BUILTIN_VISUALIZATIONS;
});
