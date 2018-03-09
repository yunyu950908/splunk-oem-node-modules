import mvc from 'splunkjs/mvc';
import _ from 'underscore';

const ComponentBindingMixin = {
    bindToComponentSetting(settingName, fn, fnContext) {
        this.listenTo(this.settings, `change:${settingName}`, (model, newComponentNames) => {
            if (this.binding) {
                this.binding.dispose();
            }
            this.binding = this.bindToComponent(newComponentNames, fn, fnContext);
        }, this);

        const initialComponentNames = this.settings.get(settingName);
        this.binding = this.bindToComponent(initialComponentNames, fn, fnContext);
    },
    bindToComponent(id, fn, fnContext) {
        if (!fn) {
            throw new Error('callback function is required');
        }
        const ids = (_.isArray(id) ? id : [id]).filter(_.identity);
        const onComponentChange = (registry, changedId) => {
            const changedComponent = registry.get(changedId) || null;
            // changedComponent could be null in this case.
            const allComponents = ids.map(cid => registry.get(cid)).filter(_.identity);
            fn.call(fnContext, allComponents, changedComponent);
        };
        const ret = {
            dispose: () => {
                _.each(ids, (cid) => {
                    // We register on the "change:{id}" event
                    this.stopListening(mvc.Components, `change:${cid}`, onComponentChange);
                }, this);
            },
        };
        // no component to bind
        if (ids.length === 0) {
            fn.call(fnContext, [], null);
            return ret;
        }
        _.each(ids, (cid) => {
            // We register on the "change:{id}" event
            this.listenTo(mvc.Components, `change:${cid}`, onComponentChange);
        }, this);
        // initial call
        _.defer(() => {
            _.each(ids, (cid) => {
                // We register on the "change:{id}" event
                onComponentChange(mvc.Components, cid);
            }, this);
        });
        return ret;
    },
};

export default ComponentBindingMixin;
