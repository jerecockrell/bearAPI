var express = require('express');
var app = express();

var monte = {name: 'monte', id: 0, age: 50, gender: 'male'};
var paul = {name: 'paul', id: 1, age: 30, gender: 'male'};
var mary = {name: 'mary', id: 2, age: 40, gender: 'female'}

var bears = [monte, paul, mary]

app.get('/api/bears', function(req, res){
	res.json(bears)
});

app.listen(3000, function(){
	console.log('the server is up and running..')
});  