
window.App = Vue.component('app', {
    template: `
        <foo x="2"/>
    `,
    data: function () {
      return {
          foo: 'Yay!'
      };
    },
    methods: {
        test: function () {
            console.log('Test');
        }
    }
});


Vue.component('foo', {
    template: `
        <div class="app">
          <p>{{foo}}</p>
        </div>
    `,
    data: function () {
      return {
          foo: 'Yay!'
      };
    },
    methods: {
        test: function () {
            console.log('Test');
        }
    }
});

window.VUEAPP = new Vue({
    el: '#demo',
    template: `
        <div class="container">
            <h1><span>test</span></h1>
            <app test="xx"/>
        </div>
    `,
    data: function () {
        return {
            test: 'This is a test literal',
            branches: ['master', 'dev'],
            currentBranch: 'master',
            commits: null
        };
    },  
    created: function () {
        console.log('Created!');
    },
    methods: {
        test: function () {
            console.log('Method Test!');
        }
    }
})
