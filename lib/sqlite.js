

var config = require('../config/config.js'),
	sqlite3 = require('sqlite3').verbose(),
	db = new sqlite3.Database(config.sqliteDB,function(err,doc) {
		if(err) {
			console.log('err' + err);
		}
	});

module.exports = db;

























