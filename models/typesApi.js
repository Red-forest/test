
  /**
 *--------------------------------------------------------
 * Api接口
 * @Author: 海涛(iheetao@126.com)
 * @Date: 14-11-21 下午2:02
 *--------------------------------------------------------
 */
 
var typesApi = {},
    types = require('./data/types.js'),
    tools = require('../lib/tools.js'),
	async = require('async');

typesApi.getById = function(id, fields, callback){
	types.getById(id, fields, function(err, doc) {
		callback(err, doc);
	});
}

typesApi.update = function(typesInfo, callback){
	types.update(typesInfo, function(err, doc) {
		callback(err, doc);
	});
}

typesApi.page = function(pid, fields, callback){
	types.pageByPid(pid, fields, function(err, doc) {
		callback(err, doc);
	});
}

typesApi.create = function(typesInfo, callback){
	types.create(typesInfo, function(err, doc) {
		callback(err, doc);
	});
}

typesApi.delete = function(typesInfo, callback){
	types.delete(typesInfo, function(err, doc) {
		callback(err, doc);
	});
}



module.exports = typesApi;










