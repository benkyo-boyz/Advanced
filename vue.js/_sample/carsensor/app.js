var vm = new Vue({
  el: '#viewport',

  data: {
    sortKey: 'name'
  },

  ready: function() {
    this.$http.jsonp('http://www.carsensorlab.net/webapi/V2/brandList/?output=json', function (data, status, request) {
      this.$set('brandList', data.brand);
    }).error(function (data, status, request) {
      // handle error
    });
  },

  methods: {
    onClick: function (sortKey) {
      this.sortKey = sortKey;
    }
  }
});
