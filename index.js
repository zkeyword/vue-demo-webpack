var fs      = require('fs'),
	express = require('express'),
	app     = express(),
	Mock    = require('mockjs');


	
app.get('/', function (req, res) {
	res.sendfile('index.html');
});

app.use('/dist', express.static('dist'));


app.get('/grid', function (req, res) {
	var Random = Mock.Random,
		data   = Mock.mock({
			'rows|10': [{
				'id': '@integer(60, 1000)',
				'name': '@cname',
				'email': '@email',
				'address': '@region',
				'time': '@datetime',
				'tel': '@integer(13000000000, 13900000000)',
				'type': '@integer(1, 5)',
				'sex': '@integer(0, 1)',
				'photo': Random.image('160x200')
			}],
			'total': 50
		});
	
	res.send( JSON.stringify(data, null, 4) );
});

app.post('/soytime/data/loadSchool', function (req, res) {
	var Random = Mock.Random,
		data   = Mock.mock({
			'result|10': [{
				'school_id': '@integer(60, 1000)',
				'school_name': '@cname'
			}],
			'success': '@integer(0, 1)'
		});
		
	res.send( JSON.stringify(data, null, 4) );
});

app.put('/put', function (req, res) {
	res.send( JSON.stringify([], null, 4) );
});

app.del('/del', function (req, res) {
	res.send( JSON.stringify([], null, 4) );
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});