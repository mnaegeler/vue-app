var exp = require('express')
  , app = exp()
	, fs = require('fs')
  ;
app.set('view engine', 'jade');
app.set('views', './views');
app.set('view cache', false);
app.use(exp.static('./public'));

app.get('/', function(req, res) {
  return res.render('index');
});

app.get('/api/books', function(req, res) {
	var books = [
		{
			name: '1984'
			, author: 'George Orwell'
			, image: '/images/1984.jpg'
      , id: 1
		}
		, {
			name: 'Pulp'
			, author: 'Charles Bukowski'
			, image: '/images/pulp.gif'
      , id: 2
		}	
    , {
      name: 'Cartas na rua'
			, author: 'Charles Bukowski'
      , image: '/images/cartas-na-rua.jpg'
      , id: 3
    }
		, {
			name: 'Golem e o gênio'
			, author: 'Helene Wecker'
			, image: '/images/golem-e-o-genio.png'
      , id: 4
		}
	];

	res.send(books);
});

app.listen(3000, function() {
  console.log('Magic happens on :3000');
});
