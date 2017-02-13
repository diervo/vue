var EmptyList = Vue.component('Emptylist', {
    template: '<p>Empty list</p>'
});

var TableList = Vue.component('TableList', {
    template: '<ul><li>hardcoded</li></ul>'
});

Vue.component('smart-list', {
  functional: true,
  render: function (createElement, context) {
    function appropriateListComponent () {
        debugger;
      const items = context.props.items;
      if (items.length === 0) {
          return EmptyList;
      } else {
          return TableList;
      }
      
    }
    return createElement(
      appropriateListComponent(),
      context.data,
      context.children
    )
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    isOrdered: Boolean
  }
});



window.App = Vue.component('app', {
    template: `
        <div class="app">
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
              { label: 't1' },
              { label: 't2' }, 
              { label: 't3' }
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
    }
});



window.VUEAPP = new Vue({
    el: '#demo',
    template: `
        <smart-list :items="list"/>
    `,
    data: function () {
        return {
            test: 'This is a test literal',
            branches: ['master', 'dev'],
            currentBranch: 'master',
            commits: null,
            list: []
        };
    },  
    created: function () {
        console.log('Created!');
        setTimeout(() => {
            this.list.push('x');
        }, 1000);
    },
    methods: {
        test: function () {
            console.log('Method Test!');
        }
    }
})

