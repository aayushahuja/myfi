var mongoose = require('mongoose');

module.exports = mongoose.model('Router', {
	ssid : {type : String, default: ''},
	bssid : {type : String, default: ''},
	password : {type : String, default: ''},
});