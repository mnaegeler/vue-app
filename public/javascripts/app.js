(function() {
  new Vue({
    el: '#booksApp'
    , data: {
      items: []
      , filterTerm: ''
      , showItem: null
    }
    , ready: function() {
      var url = '/api/books';
      var self = this;
      this.$http.get(url, function(res) {
        self.$set('items', res);
      });
    }
    , methods: {
      doShowItem: function(event) {
        var item = +event.currentTarget.rel;
        for(var i = 0, len = this.items.length; i < len; i++) {
          if(this.items[i].id == item) {
            this.$set('showItem', this.items[i]);
            break;
          }
        }
        $('#modal1').openModal();
      }
    }
  });
})();
