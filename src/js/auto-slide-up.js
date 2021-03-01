!function () {
    function debounce(fn, delay) {
        let timer;
        return function () {
            window.clearTimeout(timer);
            timer = window.setTimeout(function () {
                fn.call(undefined, arguments);
            }, delay);
        }
    }
    function throttle(fn, delay = 1000) {
        // 节流开关
        let run = true;
        // 返回函数
        return function () {
            if (!run) {
                return;
            }
            let timer = setTimeout(() => {
                fn.apply(this, arguments);
                window.clearTimeout(timer);
                run = true;
            }, delay);

            run = false;
        }
    }

    function slideUp() {
        /*
        * 滚动到指定元素时，元素高亮
        * */
        var minIndex = 0,               // 距视口顶部最小距离元素索引
            y = window.scrollY;         // 滚动位置


        // 指定元素的集合（被标记）
        let tags = document.querySelectorAll('[data-x]');

        for (let i = 0; i < tags.length; i++) {
            // 所有元素清除高亮
            // tags[i].classList.remove('active');

            let tag = tags[i],
                rect = tag.getBoundingClientRect(),
                clientHeight = document.documentElement.clientHeight;

            if (rect.bottom > 0 && rect.bottom <= clientHeight + 100 || rect.top <= clientHeight / 2 + 100) {
                tag.classList.add('active');
                minIndex = i;
            }


          /*  let top = tags[i].offsetTop,      // 每个元素到顶部距离
                minTop = tags[minIndex].offsetTop;   // 最小距离元素到顶部距离

            // 比较 （每个元素到顶部距离 减去 滚动距离的绝对值）与（最小距离元素到顶部距离 减去 滚动距离的绝对值）
            if (Math.abs(top - y) <= Math.abs(minTop - y)) {
                minIndex = i;
            }*/
        }
        // 新的最小距离元素添加高亮
        var minDom = tags[minIndex];
        // minDom.classList.add('active');

        var id = minDom.id;
        var a = document.querySelector('a[href="#' + id + '"]');
        var li = a.parentNode;

        var liList = li.parentNode.children;
        for (var i = 0; i < liList.length; i++) {
            liList[i].classList.remove('active');
        }

        li.classList.add('active');
    }
    slideUp();

    let fn = throttle(slideUp, 500);
    window.addEventListener('scroll', () => {
        fn();
    });
}.call();
