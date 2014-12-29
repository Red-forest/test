
 
var modulesApi = {},
    modules = require('./data/modules.js')
    config = require('../config/config.js'),
    tools = require('../lib/tools.js'),
	async = require('async');

	
modulesApi.get = function(JSON, fields, callback){
	modules.get(JSON, fields, function(err, doc) {
		callback(err, doc);
	});
}

modulesApi.update = function(JSON, callback){
	modules.update(JSON, function(err, doc) {
		callback(err, doc);
	});
}

modulesApi.page = function(JSON, fields, callback){
	modules.turnpage(JSON, fields, function(err, doc) {
		callback(err, doc);
	});
}

modulesApi.create = function(JSON, callback){
	modules.create(JSON, function(err, doc) {
		callback(err, doc);
	});
}





module.exports = modulesApi;










