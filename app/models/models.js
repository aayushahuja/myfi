var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var router_schema = new Schema({
	ssid : {type : String, default: ''},
	bssid : {type : String, default: ''},
	password : {type : String, default: ''},
});

var Router = mongoose.model('Router', router_schema);


var user_schema = new Schema({
	name : {type : String, default: ''},
	phone : {type : String, default: ''},
	password : {type : String, default: ''},
});

var User = mongoose.model('User', router_schema);

module.exports = {
	Router : Router,
	User   : User
};