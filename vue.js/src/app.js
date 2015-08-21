var Vue = require('vue');
Vue.use(require('vue-resource'));
var carComponent = require('./views/car-component.html');

Vue.component('car-component', {
  template: carComponent,

  props: ['catalogCar'],

  data() {
    return {
      toggle: false
    }
  },

  methods: {
    accordion() {
      this.toggle = !this.toggle;
      event.preventDefault();
    }
  }
});

var vm = new Vue({
  el: '#vue-app',

  data: {
    catalogCar: {},
    toggle: false
  },

  ready() {
    var url = 'http://www.carsensorlab.net/webapi/V2/catalogSearch/?output=json&brand=' + encodeURIComponent('フェラーリ');
    this.$http.jsonp(url, function (data, status, request) {
      this.$set('catalogCar', data.catalogCar);
    }).error(function (data, status, request) {
      console.error(status);
    });
  }
});
