!function () {
    let view = {
        el: '#experience',
        render: function (array) {

            let str = array.map((data, i) => {
                let template = `
                <li class="${i % 2 === 1 && 'right-item'}">
                    <i></i>
                    <div class="time-line-content">
                        <h2 class="title">${data.title}</h2>
                        <h3 class="subtitle">${data.subtitle}</h3>
                        <span class="time">${data.time}</span>
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
                description: '1.负责前端项目开发<br>2. 负责前端项目的优化和重构工作，保证项目稳定可靠运行'
            },
            {
                title: '大连旭阳软件有限公司',
                subtitle: '前端开发',
                time: '2017.08-2020.06',
                description: '1.负责前端项目搭建、开发<br>2. 负责前端项目的优化和重构工作，保证项目稳定可靠运行'
            },
            {
                title: '大连千松科技有限公司',
                subtitle: '前端开发',
                time: '2015.09-2017.07',
                description: '1.负责IOS产品app开发<br>2.负责web页面开发以及框架搭建，优化系统。'
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
