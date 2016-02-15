var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

var monte = {name: 'monte', id: 0, age: 50, gender: 'male'};
var paul = {name: 'paul', id: 1, age: 30, gender: 'male'};
var mary = {name: 'mary', id: 2, age: 40, gender: 'female'};

var bears = [monte, paul, mary];

app.get('/api/bears', function(req, res){
	res.json(bears);
});

//localhost:3000/api/bear/45432
//localhost:3000/api/bear/...
app.get('/api/bear/:id', function(req, res){

	var id = Number(req.params.id);

	console.log(id);

	bears.forEach(function(foundBear){
		if (foundBear.id === id) {
			res.json(foundBear);
		}
	});
});


app.post('/api/bear', function(req, res){
	var newBear = {};

	console.log('about to create a new bear');

	newBear.name = req.body.name;
	newBear.age = req.body.age;
	newBear.gender = req.body.gender;
	newBear.id = new Date().getTime();

	console.log('pushing: ', newBear);

	bears.push(newBear);

	res.json(bears);
});

app.listen(3000, function(){
	console.log('the server is up and running..');
});  