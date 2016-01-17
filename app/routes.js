var Router = require('./models/router');

function getRouters(res){
	Router.find(function(err, routers) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(routers); // return all todos in JSON format
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
		Router.create({
			ssid : req.body.ssid,
			bssid : req.body.bssid,
			password : req.body.password
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getRouters(res);
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