


var mongoApi = {},
	User = require('./data/mongo.js'),
	config = require('../config/config.js'),
	tools = require('../lib/tools.js'),
	async = require('async');


mongoApi.find = function (userId, field, callback) {
	User.find(userId, field, function (err, doc) {
		callback(err, doc);
	});
};

mongoApi.create = function (userId, name, age, hobby, callback) {
	User.create(userId, name, age, hobby, function (err, doc) {
		callback(err, doc);
	});
	
}

mongoApi.update = function (userId, update, callback) {
	User.update(userId, update, function (err, doc) {
		callback(err, doc);
	});
}

mongoApi.page = function (userId, options, callback) {
	User.page(userId, options, function (err, doc) {
		callback(err, doc);
	});
}

mongoApi.del = function (userId, callback) {
	User.del(userId, function (err, doc) {
		callback(err, doc);
	});
}







module.exports = mongoApi;






