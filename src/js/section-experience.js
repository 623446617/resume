!function () {
    let view = {
        el: '#experience',
        render: function (array) {

            let str = array.map((data, i) => {
                let template = `
                <li class="${i % 2 === 1 && 'right-item'}">
                    <i></i>
                    <div class="time-line-content">
                        <h2 class="title">${data.title}<span class="time">${data.time}</span></h2>
                        <h3 class="subtitle">${data.subtitle}</h3>
                        <p class="description">${data.description}</p>
                    </div>
                </li>
            `;
                return template;
            }).join('');

            document.querySelector(`${this.el} .time-line`).innerHTML = `<ul class="clearfix" style="height: 440px;">${str}</ul>`;
        }
    };


    let model = {
        data: [
            {
                title: '大连文思海辉信息技术有限公司',
                subtitle: '前端开发',
                time: '2020.07-至今',
                description: '在该公司，作为前端开发工程师主要负责的工作有：<br>' +
                    '1. 对前端项目的开发与搭建，以及解决项目中出现的各种问题<br>' +
                    '2. 对前端项目的优化与重构，保证项目稳定可靠运行<br>' +
                    '3. 推动与后端开发的接口协调工作，减小项目中的耦合程度<br>' +
                    '4. 积极与美工配合，探讨设计元素在开发中的可行性，减小开发难度'
            },
            {
                title: '大连旭阳软件有限公司',
                subtitle: '前端开发',
                time: '2017.08-2020.06',
                description: '在该公司，作为前端开发工程师主要负责的工作有：<br>' +
                    '1. 对前端项目的开发与搭建，以及解决项目中出现的各种问题<br>' +
                    '2. 对前端项目的优化与重构，保证项目稳定可靠运行<br>' +
                    '3. 推动与后端开发的接口协调工作，减小项目中的耦合程度<br>' +
                    '4. 积极与美工配合，探讨设计元素在开发中的可行性，减小开发难度'
            },
            {
                title: '大连千松科技有限公司',
                subtitle: '前端开发',
                time: '2015.09-2017.07',
                description: '在该公司，作为前端开发工程师主要负责的工作有：<br>' +
                    '1.负责ios端APP开发、测试，以及打包发布。<br>' +
                    '2.负责web页面开发以及框架搭建，优化系统。'
            }
        ]
    };

    let controller = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view;
            this.model = model;

            this.view.render(this.model.data);
        }
    }

    controller.init.call(controller, view, model);
}.call();
