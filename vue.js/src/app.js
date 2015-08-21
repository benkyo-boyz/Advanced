var Vue = require('vue');
Vue.use(require('vue-resource'));
var carComponent = require('./views/car-component.html');

Vue.component('car-component', {
  template: carComponent,
  props: ['catalogCar']
});

var vm = new Vue({
  el: '#vue-app',

  ready: function() {
    var url = 'http://www.carsensorlab.net/webapi/V2/catalogSearch/?output=json&brand=' + encodeURIComponent('フェラーリ');
    this.$http.jsonp(url, function (data, status, request) {
      this.$set('catalogCar', data.catalogCar);
    }).error(function (data, status, request) {
      console.error(status);
    });
  }
});
