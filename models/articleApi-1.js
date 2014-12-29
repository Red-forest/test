
 
var articleApi = {},
    article = require('./data/article.js')
    tools = require('../lib/tools.js'),
	async = require('async');

	
articleApi.getById = function(id, fields, callback){
	article.getById(id, fields, function(err, doc) {
		callback(err, doc);
	});
}

articleApi.update = function(articleInfo, callback){
	article.update(articleInfo, function(err, doc) {
		callback(err, doc);
	});
}

articleApi.updateCount = function(id, callback){
	article.updateCount(id, function(err, doc) {
		callback(err, doc);
	});
}

articleApi.page = function(typesid, field, reco, sort, cp, mp, callback){
	article.page(typesid, field, reco, sort, cp, mp, function(err, doc) {
		callback(err, doc);
	});
}

articleApi.create = function(articleInfo, callback){
	article.create(articleInfo, function(err, doc) {
		callback(err, doc);
	});
}

articleApi.del = function(articleInfo, callback){
	article.del(articleInfo, function(err, doc) {
		callback(err, doc);
	});
}




module.exports = articleApi;










