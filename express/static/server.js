var express = require('express'),
	app = express.createServer();

app.get('/', function (req, res) {
	res.send('Hello!!! <a href="/public.txt">Some static content</a>');
});

app.use(express.static(__dirname + '/public'));

app.listen('3000');
console.log('Express server started on port %s', app.address().port);