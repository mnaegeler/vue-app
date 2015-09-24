(function() {
  /*
   * API
   * http://api.redtube.com/?data=redtube.Videos.searchVideos&output=json&search=hard&tags[]=Teen&thumbsize=medium
   */

  new Vue({
    el: '#redApp'
    , data: {
      items: []
    }
    , ready: function() {
      var url = 'api.json';
      var self = this;
      this.$http.get(url, function(res) {
        self.$set('items', res.videos);
      });
    }
    , hover: function() {
      console.log('ok');
    }
  });
})();
