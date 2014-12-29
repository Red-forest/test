


var mongo = require('../../lib/mongoose.js'),
	schema = mongo.mongoose.Schema;
	


var userSchema = new schema({
	uid: String,
	neoid: Number,
	city: String,
	nickname: String
});



var user = mongo.mongoose.model('userRecos', userSchema);

var userReco = {};


userReco.find = function (a, callback) {
	user.find({}, function (err, doc) {
		callback(err, doc);
	});
}

userReco.create = function (uid, neoid, city, nickname, callback) {
	user.create({uid: uid, neoid: neoid, city: city, nickname: nickname}, function (err, doc) {
		callback(err, doc);
	});
}

userReco.page = function (City, options, callback) {
	user.find(City, {}, options, function (err, doc) {
		callback(err, doc);
	});
}

userReco.del = function (_id, callback) {
	user.remove({_id:_id}, function (err, doc) {
		callback(err, doc);
	});
}


module.exports = userReco;










