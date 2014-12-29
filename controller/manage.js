


var home = {},
	tools = require('../lib/tools.js'),
	config = require('../config/config.js'),
	async = require('async');

home.index = function (req, res) {
	res.render('login');
}

home.space = function (req, res) {
	res.render('space');
}


module.exports = home;




