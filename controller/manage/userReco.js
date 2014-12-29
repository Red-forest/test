
/**
 *--------------------------------------------------
 * 接收获取的数据，调用Api
 * @Author: 海涛(iheetao@126.com)
 * @Date: 14-11-21 下午1:57
 *--------------------------------------------------
 */

var home = {},
	config = require('../../config/config.js'),
	tools = require('../../lib/tools.js'),
	userRecoApi = require('../../models/userRecoApi.js'),
	async = require('async');
	

	
home.index = function (req, res) {
	userRecoApi.find(a, function (err, doc) {
		if(err) {
			res.send('err:' + err);
			return;
		}
		res.send(doc);
	});
};

home.create = function (req, res) {
	var uid = req.body.uid,
		neoid = parseInt(req.body.neoid),
		city = req.body.city,
		nickname = req.body.nickname;
	userRecoApi.create(uid, neoid, city, nickname, function (err, doc) {
		if(err) {
			res.send('err:' + err);
		}
		res.send(doc);
	});
};

home.page = function (req, res) {
	console.log('a');
	var ct = req.body.city,
		City = {};
		options = {sort:{'_id':1},limit: 100};
	if (ct != '全部') {
		City = {city: ct};
	};
	
	userRecoApi.page(City, options, function (err, doc) {
		if (err) {
			res.send('err:' + err);
		}
		res.send(doc);
	});
};

home.del = function (req, res) {
	var _id = req.body.id;
	var array = _id.split(',');
	for (var i = 0; i < array.length-1; i++) {
		userRecoApi.del(array[i], function (err, doc) {
			if(err) {
				res.send('err:' + err);
			}
			res.send({state: 'true'});
		});
	};
};


module.exports = home;








