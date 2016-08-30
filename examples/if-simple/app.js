var test = Vue.component('test', {
    props: { name: String, time: Number },
    template: '<div class="test"><p>Bind: {{name}}</p><p> Last updated: {{time}}</p></div>'
});

var App = Vue.component('App', {
    props: { show1: Boolean, show2:Boolean, show3: Boolean, time: Number },
    template: [
        '<div class="app">',
            '<h2 v-if="show1">',
                '<test :name="appName + 1" :time="time">',
                '</test>',
            '</h2>',
        '</div>'
    ].join(''),
    data: function () {
        return { appName: 'ifTest' }
    }
});

var VUEAPP = new Vue({
    el: '#app',
    replace: false,
    template: '<App :show1="enabled1" :show2="enabled2" :show3="enabled3" :time="time"></App>',
    data: function () {
        return {
            enabled1: true,
            time: Date.now()
        };
    },
    methods: {
        toggle: function (i) {
            this.enabled1 = !this.enabled1;
        },
        updateTime: function () {
            this.time = Date.now();
        }
    }
});