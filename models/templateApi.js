
 
var templateApi = {},
    template = require('./data/template.js')
    tools = require('../lib/tools.js'),
	async = require('async');

	
templateApi.getById = function(id, fields, callback){
	template.getById(id, fields, function(err, doc) {
		callback(err, doc);
	});
}

templateApi.update = function(templateInfo, callback){
	template.update(templateInfo, function(err, doc) {
		callback(err, doc);
	});
}

templateApi.page = function(fields, cp, mp, callback){
	template.page(fields, cp, mp, function(err, doc) {
		callback(err, doc);
	});
}

templateApi.pageByType = function(type, fields, callback){
	template.pageByType(type, fields, function(err, doc) {
		callback(err, doc);
	});
}

templateApi.create = function(templateInfo, callback){
	template.create(templateInfo, function(err, doc) {
		callback(err, doc);
	});
}

templateApi.del = function(templateInfo, callback){
	template.del(templateInfo, function(err, doc) {
		callback(err, doc);
	});
}


module.exports = templateApi;










