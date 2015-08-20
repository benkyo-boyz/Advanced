Vue.component('car-component', {
  template: '#car-component',
  props: ['catalogCar']
});

var vm = new Vue({
  el: '#vue-app',

  data: {
    sortKey: 'name'
  },

  created: function() {
    var url = 'http://www.carsensorlab.net/webapi/V2/catalogSearch/?output=json&brand=' + encodeURIComponent('フェラーリ');
    console.log(url);
    this.$http.jsonp(url, function (data, status, request) {
      this.$set('catalogCar', data.catalogCar);
    }).error(function (data, status, request) {
      console.error(status);
    });
  },

  methods: {
    onClick: function (sortKey) {
      this.sortKey = sortKey;
    }
  }
});

