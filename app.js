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
			, image: 'http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjwMg6r7ALIj_WjMUJQcbhmMVjNbl9oS-4QPlLTWak0a7HPiSGwF'
		}
		, {
			name: 'Pulp'
			, author: 'Charles Bukowski'
			, image: 'http://s28.postimg.org/wqsdt4ij1/images.jpg'
		}	
		, {
			name: 'Golem e o gênio - uma fábula eterna'
			, author: 'Helene Wecker'
			, image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcST1ROOXGT341SEzl_xGdj7B0ueUdRIPRbwfB9jGb1la5_NesLi'
		}
	];

	res.send(books);
});

app.listen(3000, function() {
  console.log('Magic happens on :3000');
});
