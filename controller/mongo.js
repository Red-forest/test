
/**
 *--------------------------------------------------
 * 接收获取的数据，调用Api
 * @Author: 海涛(iheetao@126.com)
 * @Date: 14-11-21 下午1:57
 *--------------------------------------------------
 */

var home = {},
	tools = require('../lib/tools.js'),
	mongoApi = require('../models/mongoApi.js'),
	config = require('../config/config.js'),
	async = require('async');

home.index = function (req, res) {
	console.log('123');
	var userId = '5487d17f520b080a64b4b99d';
	var field = '';
	mongoApi.find(userId, field, function (err, doc) {
		if(err) {
			res.send('err:' + err);
			return;
		}
		res.send(doc);
	});
};

home.create = function (req, res) {
	var userId = '3',
		name = 'd',
		age = 25,
		hobby = 'read';
		
	mongoApi.create(userId, name, age, hobby, function (err, doc) {
		if(err) {
			res.send('err:' + err);
		}
		res.send(doc);
	});
};

home.update = function (req, res) {
	var userId = '3',
		update = {name:'Kate',hobby:'eat'};
		
	mongoApi.update(userId, update, function (err, doc) {
		if (err) {
			res.send('err:' + err);
		}
		res.send(doc);
	});
}

home.page = function (req, res) {
	var userId = req.body.name,
		options = {sort:'age',limit: 5};

	mongoApi.page(userId, options, function (err, doc) {
		if (err) {
			res.send('err:' + err);
		}
		res.send(doc);
	});
}

home.del = function (req, res) {
	var userId = {name: "b"};
	mongoApi.del(userId, function (err, doc) {
		if(err) {
			res.send('err:' + err);
		}
		res.send('删除成功！');
	});
}







module.exports = home;



