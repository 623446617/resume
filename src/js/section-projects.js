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
                list: `<li>开发工具：Pycharm、Webstorm、Git-Bash</li>
                <li>使用技术： Webpack、React、Scss、Python、NodeJS、Git</li>
                <li>项目描述：小辉智询是一款专注于汽车后市场领域的智能云询问产品。帮助企业收集、组织数据并进行分析，将AI技术注入企业的管理和生产中，全面提高了企业效率。</li>
                <li>责任描述：前端部分都由本人负责，主要包括功能模块开发、系统性能优化、根据美工提供设计图实现UI样式效果，还包括服务端脚本的编写。</li>`
            },
            {
                title: '北京旭阳大数据平台',
                subtitle: '前端开发',
                time: '2019.12-2020.06',
                list: `<li>开发工具：Webstorm、PxCook、Git-bash</li>
                <li>使用技术：TypeScript、Less、Angular、Git</li>
                <li>项目描述：旭阳大数据平台是以企业全域大数据建设为中心，技术上覆盖大数据从采集、加工、分析、预测、服务、消费的全链路的各个环节，对企业内部和企业外部提供服务。</li>
                <li>责任描述：功能模块开发、通用组件的封装、系统性能优化、根据美工提供设计图实现UI样式效果、项目使用手册的编写。</li>`
            },
            {
                title: '大连农商行自动化运维(POC)',
                subtitle: '运维开发',
                time: '2019.09-2019.11',
                list: `<li>开发工具：PyCharm、SecureCRT、WinSCP、SVN</li>
                <li>使用技术：Linux、Python、Zabbix、Ansible</li>
                <li>项目描述：针对大连农商行提供的测试服务器进行各项功能的实时监控、风险预警、任务执行。</li>
                <li>责任描述：测试服务器环境部署，shell脚本与python脚本的开发，配置触发器、监控项、邮件报警等功能。</li>`
            },
            {
                title: '大连银行跑批作业系统(POC)',
                subtitle: '前端开发',
                time: '2019.04-2019.08',
                list: `<li>开发工具：Webstorm、Axure、SVN</li>
                <li>使用技术：Webpack、React、JSX、NodeJS、Nginx</li>
                <li>项目描述：针对大连银行提供的测试版跑批作业系统，进行任务的手动启动以及定时启动，并实时监测系统中的任务是否发生错误，进而选择手动重启还是跳过。</li>
                <li>责任描述：前端部分都由本人负责，主要包括前端框架的搭建、功能模块开发、系统性能优化、根据美工提供设计图实现UI样式效果。</li>`
            },
            {
                title: 'Tracker项目',
                subtitle: '前端开发',
                time: '2019.01-2019.03',
                list: `<li>开发工具：Webstorm、Nginx、Axure、SVN</li>
                <li>使用语言和技术：Webpack、Vue、NodeJS</li>
                <li>项目描述：对安装在汽车上的定位硬件设备在地图上进行实时追踪。</li>
                <li>责任描述：功能模块开发、根据美工提供设计图实现UI样式效果。</li>`
            },
            {
                title: '大连海事局科技平台四期',
                subtitle: '前端开发',
                time: '2017.08-2018.12',
                list: `<li>开发工具：NavicatPremium12、Idea、Webstorm、Tomcat、SVN、Oracle</li>
                <li>使用技术：Backbone、Html、JavaScript、Css、Java、Spring、SpringMVC、Mybatis</li>
                <li>项目描述：针对海事局内部项目进行流程操作。</li>
                <li>责任描述：前端功能模块与后端接口的编写与测试。</li>`
            },
            {
                title: '孕卫士',
                subtitle: 'IOS开发',
                time: '2016.07-2017.07',
                list: `<li>开发工具：XCode、Git</li>
                <li>使用技术：Object-C</li>
                <li>项目描述：孕妇通过八大核心功能针对不同时期进行答题测评与记录，给出专业的建议或诊断，为母婴健康保驾护航。</li>
                <li>责任描述：根据美工提供的设计图进行UI界面的开发、对打包后的App进行测试，测试通过后提交到AppStore发布。</li>`
            },
            {
                title: '营养门诊',
                subtitle: 'IOS开发',
                time: '2015.09-2016.07',
                list: `<li>开发工具：XCode、Git</li>
                <li>使用技术：Object-C</li>
                <li>项目描述：营养门诊是一款根据国际通用FEL法（食物交换份法），为孕妇个体制定饮食方案，调节血糖，控制母婴体重的专业孕期营养软件。</li>
                <li>责任描述：根据美工提供的设计图进行UI界面的开发、对打包后的App进行测试，测试通过后提交到AppStore发布。</li>`
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
