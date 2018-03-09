import BaseView from 'views/Base';
import ReactDOM from 'react-dom';
import React from 'react';

const ReactAdapterBaseView = BaseView.extend({

    getComponent() {
        throw new Error('getComponent() not implemented');
    },
    render() {
        ReactDOM.render(this.getComponent(), this.el);
        return this;
    },
    remove() {
        ReactDOM.unmountComponentAtNode(this.el);
        return BaseView.prototype.remove.call(this);
    },
}, {
    wrapComponent(Component) {
        return ReactAdapterBaseView.extend({
            getComponent() {
                return React.createElement(Component);
            },
        });
    },
});

export default ReactAdapterBaseView;