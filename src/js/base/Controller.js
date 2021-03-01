window.Controller = function (options) {
    return {
        ...options,
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view;
            this.model = model;
            options.init.call(this);
            options.bindEvents.call(this);
        }
    }
}