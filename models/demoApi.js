
 
var demoApi = {},
    demo = require('./data/demo.js')
    config = require('../config/config.js'),
    tools = require('../lib/tools.js'),
	async = require('async');

	
demoApi.get = function(JSON, fields, callback){
	demo.get(JSON, fields, function(err, doc) {
		callback(err, doc);
	});
}

demoApi.update = function(JSON, callback){
	demo.update(JSON, function(err, doc) {
		callback(err, doc);
	});
}

demoApi.page = function(JSON, fields, callback){
	demo.turnpage(JSON, fields, function(err, doc) {
		callback(err, doc);
	});
}

demoApi.create = function(JSON, callback){
	demo.create(JSON, function(err, doc) {
		callback(err, doc);
	});
}





module.exports = demoApi;










