
window.App = Vue.component('app', {
    props: ['test', 'test2'],
    template: [
        '<div class="app">',
            '<p>test.a: <span>{{test.a}}</span></p>',
            '<p>test2: <span>{{test2}}</span></p>',
        '</div>',
    ].join(''),
    data: function () {
      return { bar: "bar!" };
    },
    computed: {
        propTest: function () {
            return "test.a]: " + this.test.a;
        }
    },
    created: function () {
        window._app = this;
        setTimeout(function () {
            this.test.c.x = 10;
        }.bind(this), 2000);
    },
    updated: function () {
        console.log('!!!');
        console.log(arguments);
    }
});

debugger;

window.VUEAPP = new Vue({
    el: '#demo',
    template: `
        <div class="container">
            <app :test="foo" :test2="bar" />
            <p>{{foo.c.x}}</p>
            <p>{{bar}}</p>
        </div>
    `,
    data: function () {
        return { foo: { a: 1, b:2, c: {x : 11} }, bar: 10 };
    }
})
