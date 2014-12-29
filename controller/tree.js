var home = {},
	tools = require('../lib/tools.js'),
	articleApi = require('../models/articleApi.js'),
	async = require('async');
	
	
	home.index = function(req, res) {
		res.render('ztree');
	}
	
module.exports = home;