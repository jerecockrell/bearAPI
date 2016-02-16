var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

var monte = {name: 'monte', id: 0, age: 50, gender: 'male'};
var paul = {name: 'paul', id: 1, age: 30, gender: 'male'};
var mary = {name: 'mary', id: 2, age: 40, gender: 'female'};

var bears = [monte, paul, mary];

app.get('/api/bears', function(req, res){
	
	var careBear = {title: 'no bear with that id'};
	var id = Number(req.params.id);

	bears.forEach(function(bear){
		if(bear.id === id) {
			careBear = bear;
		}
	});

	res.json(bears);

});

app.delete('/api/bear/:id', function(req, res){  
	
	var id = Number(req.params.id);      // requesting a number as an input parameter and calling it "id"
	var index = '';					     // setting "index" to an empty string

	bears.forEach(function(bear){		 // looping through "bears" array to find the element that has the id number requested 
		if(bear.id === id){
			index = bears.indexOf(bear); // assigning the element position number to "index"
		}
	})
	res.json(bears.splice(index, 1));    // deleting the index position: the bear corresponding to that id number
	console.log(bears);
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