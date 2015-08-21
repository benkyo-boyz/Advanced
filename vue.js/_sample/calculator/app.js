Vue.filter('floor', function (value, digit) {
  var multiplier = Math.pow(10, +digit);
  return Math.floor(value * multiplier) / multiplier;
});

Vue.filter('round', function (value, digit) {
  var multiplier = Math.pow(10, +digit);
  return Math.round(value * multiplier) / multiplier;
});

var vm = new Vue({
  el: '#viewport'
});
