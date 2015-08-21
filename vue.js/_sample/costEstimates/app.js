var vm = new Vue({
  el: '#viewport',

  data: {
    jyukensapuri: {
      uxdgCreationCost: 20000000,
      devSavingsCostRate: 0.243,
      devCost: 700000 * 9
    },
    benkyosapuri: {
      uxdgCreationCost: 20000000,
      devSavingsCostRate: 0.113,
      devCost: 7800000
    },
    zexy: {
      uxdgCreationCost: 20000000,
      devSavingsCostRate: 0.243,
      devCost: 700000 * 9
    },
    carsensor: {
      uxdgCreationCost: 20000000,
      devSavingsCostRate: 0.243,
      devCost: 700000 * 9
    },
    shingakunet: {
      uxdgCreationCost: 20000000,
      devSavingsCostRate: 0.243,
      devCost: 700000 * 9
    }
  },

  ready: function() {
    //this.$http.jsonp('http://www.carsensorlab.net/webapi/V2/brandList/?output=json', function (data, status, request) {
    //  this.$set('brandList', data.brand);
    //}).error(function (data, status, request) {
    //  // handle error
    //});
  },

  methods: {
    onClick: function (sortKey) {
      this.sortKey = sortKey;
    }
  }
});

console.log(vm.benkyosapuri.uxdgCreationCost - (vm.benkyosapuri.uxdgCreationCost * 100 / (100 + vm.benkyosapuri.devSavingsCostRate * 100)));
