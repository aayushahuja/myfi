var models = require('./models/models');
//var Router = require('./models/router');
//var User   = require	
function getRouters(res){
	models.Router.find(function(err, routers) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(routers); // return all todos in JSON format
		});
};

function getUsers(res){
	models.User.find(function(err, users) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(users); // return all todos in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/routers', function(req, res) {

		// use mongoose to get all todos in the database
		getRouters(res);
	});

	// create todo and send back all todos after creation
	app.post('/api/routers', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		console.log(req);
		models.Router.create({
			ssid : req.body[0].ssid,
			bssid : req.body[0].bssid,
			password : req.body[0].password
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getRouters(res);
		});

	});

	app.get('/api/users', function(req, res) {

		// use mongoose to get all todos in the database
		getUsers(res);
	});

	// create todo and send back all todos after creation
	app.post('/api/users', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		console.log(req);
		models.User.create({
			name : req.body[0].name,
			phone : req.body[0].phone,
			password : req.body[0].password
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getUsers(res);
		});

	});

	// delete a todo
	app.delete('/api/todos/:router_id', function(req, res) {
		Todo.remove({
			ssid : req.body.ssid,
			bssid : req.body.bssid
		}, function(err, todo) {
			if (err)
				res.send(err);

			getRouters(res);
		});
	});

	// application -------------------------------------------------------------
	/*
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
	*/
};