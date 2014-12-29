


var userRecoApi = {},
	userReco = require('./data/userReco.js'),
	config = require('../config/config.js'),
	tools = require('../lib/tools.js'),
	async = require('async');


userRecoApi.find = function (a, callback) {
	userReco.find(a, function (err, doc) {
		callback(err, doc);
	});
};

userRecoApi.create = function (uid, neoid, city, nickname, callback) {
	userReco.create(uid, neoid, city, nickname, function (err, doc) {
		callback(err, doc);
	});
	
}

userRecoApi.page = function (City, options, callback) {
	userReco.page(City, options, function (err, doc) {
		callback(err, doc);
	});
	
}

userRecoApi.del = function (_id, callback) {
	userReco.del(_id, function (err, doc) {
		callback(err, doc);
	});
}


module.exports = userRecoApi;






