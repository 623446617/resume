!function () {
    let view = View('.swiper-container');

    let controller = Controller({
        mySwiper: null,
        swiperOpts: {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            autoplay:true,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        },
        init: function () {
            this.initSwiper();// => this.initSwiper.call(this)
        },
        bindEvents: function () {

        },
        initSwiper: function () {
            this.mySwiper = new Swiper(this.view, this.swiperOpts);
        }
    });
    controller.init.call(controller, view);
}.call();
