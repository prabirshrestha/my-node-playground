var express = require('express'),
	app = express.createServer();

app.use(express.logger());

app.get('/', function (req, res) {
	res.send('Hello world');
});

app.listen(3000);
console.log('Express server started on port %s', app.address().port);