!function () {
    let view = View('#topNavBar');
    let model  = Model();
    let controller = Controller({
        init: function () {
            this.sticky();
            this.bindEvents();
        },
        bindEvents: function () {
            window.addEventListener('scroll', () => {
                this.sticky();
            });
        },
        sticky: function () {
            var scrollDistance = window.scrollY / 80;
            this.view.style.backgroundColor = 'rgba(255,255,255,' + scrollDistance + ')';

            if (scrollDistance === 0) {
                this.view.classList.remove('sticky');
            } else {
                this.view.classList.add('sticky');
            }
        }
    });
    controller.init.call(controller, view, model);

}.call();
