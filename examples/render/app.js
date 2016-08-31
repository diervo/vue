var testChild = Vue.component('testChild', {
    props: { name: String, time: Number },
    template: '<div class="testChild"><p>ParentpassedName: {{name}}</p></div>'
});

var test = Vue.component('test', {
    props: { a: String, b:Number },
    data:  function () {
        console.log('Data instanciation');
        return { test: 1 };
    },
    template: [
        '<div class="test"><p><span>{{a}}</span><span>{{b}}</span></p></div>'
    ].join(''),
    created: function () {
        console.log('>> created!');
    },
    updated: function () {
        console.log('>> updated');
    },
    beforeUpdate: function () {
        console.log('>> beforeUdpate');
    },
});

var App = Vue.component('App', {
    props: { a: Number, b: Number },
    template: [
        '<div class="app">',
            '<template v-for="item in items">',
                '<button @click="test">',
                    '<p><span>{{item.name}}</span>',
                    '<test :b="bPrime" :a="item.val"></test>',
                '</button>',
            '</template>',
        '</div>'
    ].join(''),
    data: function () {
        return {
            c: 0, 
            appName: 'ifTest',
            items: [
                {name: 'Foo',  val: "01" },
                {name: 'Bar',  val: "02" },
                {name: 'Buzz', val: "03" }
            ]
    };
    },
    methods: {
        test: function (e) {
            var t = this.items.shift();
            this.items.push(t);
            this.items.push({name: 'Zin', val: 'zinzin'});
        }
    },
    computed: {
        bPrime: function () {
            return this.b + this.c;
        }
    }
});

var VUEAPP = new Vue({
    el: '#app',
    replace: false,
    template: '<App :a="111" :b="222"> </App>',
    data: function () {
        return {
            enabled1: true,
            enabled2: true,
            enabled3: true,
            time: Date.now()
        };
    },
    methods: {
        toggle: function (i) {
            this['enabled' + i] = !this["enabled" + i];
        },
        updateTime: function () {
            this.time = Date.now();
        }
    }
});