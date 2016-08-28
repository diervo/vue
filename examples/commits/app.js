var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=2&sha='
var isPhantom = navigator.userAgent.indexOf('PhantomJS') > -1

/**
 * Test mocks
 */

var mocks = {
  master: [{sha:'111111111111', commit: {message:'one', author:{name:'Evan',date:'2014-10-15T13:52:58Z'}}},{sha:'111111111111', commit: {message:'hi', author:{name:'Evan',date:'2014-10-15T13:52:58Z'}}}],
  dev: [{sha:'222222222222', commit: {message:'two', author:{name:'Evan',date:'2014-10-15T13:52:58Z'}}},{sha:'111111111111', commit: {message:'hi', author:{name:'Evan',date:'2014-10-15T13:52:58Z'}}}]
}

function mockData () {
  this.commits = mocks[this.currentBranch]
}

/**
 * Actual demo
 */

var demo = new Vue({

  el: '#demo',

  data: {
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null,
    mytest: {
      foo: { bar: "Test!" },
      zin: [1,2,3]
    }
  },

  created: function () {
    this.fetchData();
  },

  watch: {
    currentBranch: 'fetchData'
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },
  methods: {
    doTest: function (e) {
        this.mytest.foo.bar = "Test | Random:" + Math.random().toFixed(2);
        this.commits[0].commit.author.name = "XXX:" + Math.random();
    },
    fetchData: function () {
      var self = this
      setTimeout(function () {
          self.commits = mocks[self.currentBranch];
      });
    }
  }
})
