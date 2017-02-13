
window.App = Vue.component('app', {
    template: `
        <div class="app">
            <input type="text" v-model="foo"></input>
            <button v-on:click="add">Add</button>
          <ul>
            <li v-for="i in list">{{i.label}}</li>
          </ul>
        </div>
    `,
    data: function () {
      return {
          foo: 'Yay!',
          list: [
              { label: 't1', foo: 1 },
              { label: 't2', foo: 2 },
              { label: 't3', foo: 3 }
          ]
      };
    },
    methods: {
        test: function () {
            console.log('Test');
        },
        add: function () {
            const newList = this.list.slice();
            const tmp = newList.pop();
            newList.push({ label: Math.random() });
            newList.unshift(tmp);
            this.list = newList;
        }
    },created: function () {
        window._appInstance = this;
    },
    updated: function (e) {
        console.log('u!!', arguments);
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
