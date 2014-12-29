
 /**
 *--------------------------------------------------------
 * Api接口
 * @Author: 海涛(iheetao@126.com)
 * @Date: 14-11-21 下午2:01
 *--------------------------------------------------------
 */
var usersApi = {},
    users = require('./data/users.js'),
    tools = require('../lib/tools.js'),
	async = require('async');

	
usersApi.getById = function(id, fields, callback){
	users.getById(id, fields, function(err, doc) {
		callback(err, doc);
	});
}

usersApi.getByName = function(name, fields, callback){
	users.getByName(name, fields, function(err, doc) {
		callback(err, doc);
	});
}


usersApi.update = function(userInfo, callback){
	users.update(userInfo, function(err, doc) {
		callback(err, doc);
	});
}

usersApi.page = function(fields, cp, mp, callback){
	users.page(fields, cp, mp, function(err, doc) {
		callback(err, doc);
	});
}

usersApi.create = function(userInfo, callback){
	users.create(userInfo, function(err, doc) {
		callback(err, doc);
	});
}

usersApi.delete = function(userInfo, callback){
	users.delete(userInfo, function(err, doc) {
		callback(err, doc);
	});
}



module.exports = usersApi;










