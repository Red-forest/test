/**
 * Created with JetBrains WebStorm.
 * User: 赵海涛
 * Date: 14-12-2
 * Time: 下午17:58
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose'),
	config = require('../config/config.js');
	mongoose.connect(config.MongodbConnectString);
	
exports.mongoose = mongoose;
	

