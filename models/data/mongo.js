


var mongo = require('../../lib/mongoose.js'),
	schema = mongo.mongoose.Schema;
	


var userSchema = new schema({
	id: String,
	name: String,
	age: Number,
	hobby: String
});



var user = mongo.mongoose.model('foos', userSchema);

var User = {};


User.find = function (userId, field, callback) {
	user.findById(userId, field, function (err, doc) {
		callback(err, doc);
	});
}

User.create = function (userId, name, age, hobby, callback) {
	user.create({id: userId, name: name, age: age, hobby: hobby}, function (err, doc) {
		callback(err, doc);
	});
}

User.update = function (userId, update, callback) {
	user.update({id: userId}, update,{multi:false}, function (err, doc) {
		callback(err, doc);
	});
}


User.page = function (userId, options, callback) {
	user.find({name: userId},{},options, function (err, doc) {
		callback(err, doc);
	});
}

User.del = function (userId, calback) {
	user.remove(userId, function (err, doc) {
		callback(err, doc);
	});
}


module.exports = User;

