
 
var messagesApi = {},
    messages = require('./data/messages.js')
    config = require('../config/config.js'),
    tools = require('../lib/tools.js'),
	async = require('async');

	
messagesApi.get = function(JSON, fields, callback){
	messages.get(JSON, fields, function(err, doc) {
		callback(err, doc);
	});
}

messagesApi.update = function(JSON, callback){
	messages.update(JSON, function(err, doc) {
		callback(err, doc);
	});
}

messagesApi.page = function(JSON, fields, callback){
	messages.turnpage(JSON, fields, function(err, doc) {
		callback(err, doc);
	});
}

messagesApi.create = function(JSON, callback){
	messages.create(JSON, function(err, doc) {
		callback(err, doc);
	});
}





module.exports = messagesApi;










