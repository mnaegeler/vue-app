var exp = require('express')
  , app = exp()
  , request = require('request')
  ;
app.set('view engine', 'jade');
app.set('views', './views');
app.set('view cache', false);
app.use(exp.static('./public'));

app.get('/', function(req, res) {
  return res.render('index');
});

app.get('/api/videos', function(req, res) {
  var url = 'http://api.redtube.com/?data=redtube.Videos.searchVideos&output=json&search=hard&tags[]=Teen&thumbsize=medium';
  request(url, function(err, resp, body) {
    return res.send(resp.body);
  });

});

app.listen(3000, function() {
  console.log('Magic happens on :3000');
});
