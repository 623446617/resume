!function () {
    let view = {
        el: '#projects',
        render: function (array) {

            let str = array.map((data, i) => {
                let template = `
                <li class="base-shadow">
                    <h3>${data.title}<span>${data.time}</span></h3>
                    <h4>${data.subtitle}</h4>
                    <ol class="description">
                        ${data.list}
                    </ol>
                </li>
            `;
                return template;
            }).join('');

            document.querySelector(`${this.el} .projects-body`).innerHTML = str;
        }
    };


    let model = {
        data: [
            {
                title: '小辉智询',
                subtitle: '前端开发',
                time: '2020.07-至今',
                list: `<li>开发工具和数据库：Pycharm、Webstorm、Git、Redis</li>
                <li>使用语言和技术： JavaScript、Python、NodeJS、React</li>
                <li>项目描述：小辉智询是一款专注于汽车后市场领域的智能云询问产品。帮助企业收集、组织数据并进行分析，将AI技术注入企业的管理和生产中，全面提高了企业效率。</li>
                <li>责任描述：前端框架搭建，编码（80%）、需求分析（10%）、概要设计（10%）</li>`
            },
            {
                title: '北京旭阳大数据平台',
                subtitle: '前端开发',
                time: '2019.12-2020.06',
                list: `<li>开发工具和数据库：Webstorm、PxCook、Git、NavicatPremium12、mysql</li>
                <li>使用语言和技术：TypeScript、NodeJS、Angular</li>
                <li>项目描述：旭阳大数据平台是以企业全域大数据建设为中心，技术上覆盖大数据从采集、加工、分析、预测、服务、消费的全链路的各个环节，对企业内部和企业外部提供服务。</li>
                <li>责任描述：前端框架搭建，编码（80%）、需求分析（10%）、概要设计（10%）</li>`
            },
            {
                title: '大连农商行自动化运维(POC)',
                subtitle: '运维开发',
                time: '2019.09-2019.11',
                list: `<li>开发工具和数据库：PyCharm、SecureCRT、WinSCP、SVN</li>
                <li>使用语言和技术：Linux、Python、Zabbix、Ansible</li>
                <li>项目描述：针对大连农商行的银行系统服务器进行实时监控、预测、报警以及脚本的运行。</li>
                <li>责任描述：编码（80%）、需求分析（10%）、概要设计（10%）</li>`
            },
            {
                title: '大连银行跑批作业系统(POC)',
                subtitle: '前端开发',
                time: '2019.04-2019.08',
                list: `<li>开发工具和数据库：NavicatPremium12、Idea、Webstorm、Nginx、Axure、SVN、mysql</li>
                <li>使用语言和技术：Java、JavaScript、React.js、JSX、NodeJS、Webpack</li>
                <li>项目描述：针对大连银行跑批作业系统中的脚本任务进行手动启动以及定时启动，并实时监测系统中的任务是否发生错误，进而选择手动重启还是跳过。</li>
                <li>责任描述：前端框架搭建，编码（80%）、需求分析（10%）、单体测试（10%）</li>`
            },
            {
                title: 'Tracker项目',
                subtitle: '前端开发',
                time: '2019.01-2019.03',
                list: `<li>开发工具和数据库：Webstorm、Nginx、Axure、Git</li>
                <li>使用语言和技术：Vue、NodeJS、Webpack</li>
                <li>项目描述：对安装在汽车上的定位硬件设备在地图上进行实时追踪。</li>
                <li>责任描述：编码（80%）、单体测试（20%）</li>`
            },
            {
                title: '大连海事局科技平台四期',
                subtitle: '前端开发',
                time: '2017.08-2018.12',
                list: `<li>开发工具和数据库：NavicatPremium12、Idea、Webstorm、Apache-Tomcat、SVN、Oracle</li>
                <li>使用语言和技术：JavaScript、backbone.js、Java、Spring、SpringMVC、Mybatis</li>
                <li>项目描述：针对海事局内部项目进行流程操作。</li>
                <li>责任描述：编码（80%）、单体测试（20%）</li>`
            },
            {
                title: '孕卫士',
                subtitle: 'IOS开发',
                time: '2016.07-2017.07',
                list: `<li>开发工具：XCode、Git</li>
                <li>使用语言：Object-C</li>
                <li>项目描述：基于孕妇健康评估及管理的互联网医疗产品。</li>
                <li>责任描述：编码、测试与打包发布。</li>`
            },
            {
                title: '营养门诊',
                subtitle: 'IOS开发',
                time: '2015.09-2016.07',
                list: `<li>开发工具：XCode、Git</li>
                <li>使用语言：Object-C</li>
                <li>项目描述：关于妊娠期糖尿病的饮食治疗的互联网医疗APP。</li>
                <li>责任描述：编码、测试与打包发布。</li>`
            },
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
