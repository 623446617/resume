!function () {
    let view = View('nav.menu');
    let controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.initAnimate();
            this.bindEvents();
        },
        initAnimate: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }

            requestAnimationFrame(animate);
        },
        bindEvents: function () {
            let aTags = this.view.querySelectorAll('nav.menu > ul > li > a');

            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick =  (ev) => {
                    // 阻止默认事件
                    ev.preventDefault();
                    let a = ev.currentTarget,
                        href = a.getAttribute('href'),
                        el = document.querySelector(href);

                    var li = a.parentNode;
                    li.classList.add('active');

                    this.scrollToElement(el);
                    /*
                    let count = 24;                         // 动画执行次数
                    let animationTime = 500;                // 动画在一秒中内完成
                    let currentTop = window.scrollY;        // 当前位置
                    let targetTop = top - 80;               // 目标位置
                    let distance = targetTop - currentTop;  // 移动距离

                    let t = animationTime / count;          // 一次动画执行时间
                    let s = distance / count;               // 一次动画移动距离

                    var i = 0;
                    let id = setInterval(function () {
                        i = i + 1;
                        if (i === count)  {
                            window.clearInterval(id);
                        }
                        window.scrollTo(0, window.scrollY + s);
                    }, t);*/


                }
            }
        },
        scrollToElement: function (el) {

            let top = el.offsetTop;

            let currentTop = window.scrollY;        // 当前位置
            let targetTop = top - 80;               // 目标位置
            let distance = Math.abs(targetTop - currentTop);  // 移动距离

            let sh = document.documentElement.scrollHeight;
            let ch = document.documentElement.clientHeight;

            if (sh - targetTop < ch + 120) {
                targetTop = top - ch + el.clientHeight + 50;
            }

            /*
            * 假设移动100px 用时 300ms, 则速度是 v (100/300)
            * 则当速度相同的情况下，移动distance(前移动距离)，用时多长时间？
            *
            * 解：
            *   distance/time = 100/300
            *   time = distance / 100 * 300
            *
            * */
            // let time = distance / 100 * 300;
            //
            // if (time > 500) {
            //     time = 500;
            // }

            var coords = {y: currentTop};
            var tween = new TWEEN.Tween(coords)
                .to({y: targetTop}, 500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y);
                })
                .start();
        }
    }

    controller.init.call(controller, view);
}.call();

