(function() {
  new Vue({
    el: '#beerApp'
    , data: {
      items: []
      , showImages: false
    }
    , ready: function() {
      var url = '/api/books';
      var self = this;
      this.$http.get(url, function(res) {
        console.log(res);
        self.$set('items', res);
      });
    }
    , hover: function() {
      console.log('ok');
    }
  });
})();
