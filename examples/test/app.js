
window.App = Vue.component('app', {
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

debugger;

window.VUEAPP = new Vue({
    el: '#demo',
    template: `
        <div class="container"><app test="xx"/></div>
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
