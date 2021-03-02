/**
 * @作者: mxw
 * @日期: 2020/9/1
 * @模块:
 **/
!function () {
    let view = View('#connect');
    let model = Model();
    let controller = Controller({
        submit: null,
        init: function () {
            this.submit = this.view.querySelector('#submit');
        },
        bindEvents: function () {
            this.submit.addEventListener('click', this.postMessage.bind(this));
        },
        postMessage: async function () {
            let name = this.view.querySelector('#name');
            let email = this.view.querySelector('#email');
            let message = this.view.querySelector('#message');
            let res = await this.model.post('/api/connect/create', {
                name: name.value,
                email: email.value,
                message: message.value
            });
            if(res.code === '1') {
                name.value = '';
                email.value = '';
                message.value = '';
                alert('提交成功！');
            }
            console.log(res);
        }
    });
    controller.init.call(controller, view, model);
}.call();
