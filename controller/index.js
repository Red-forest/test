var home = {},
	tools = require('../lib/tools.js'),
	config = require('../config/config.js'),
	async = require('async');

home.index = function (req, res) {
		res.render('index',{title:config.webTitle});
}


home.loginout = function(req, res) {//退出登录
	res.clearCookie('id');
	res.clearCookie('nickname');
	res.clearCookie('avatar');
	res.clearCookie('key');
	res.clearCookie('nid');
	res.send('{"state":"true"}');
}


module.exports = home; 