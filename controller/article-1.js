
/**
 *--------------------------------------------------
 * 接收获取的article数据，调用Api
 * @Author: 海涛(iheetao@126.com)
 * @Date: 14-12-22 下午17:30
 *--------------------------------------------------
 */

var home = {},
	tools = require('../lib/tools.js'),
	articleApi = require('../models/articleApi.js'),
	async = require('async');

	
home.index = function (req, res) {//默认，获取数据
	var id = {
		"$id": 3
	}
	articleApi.getById(id, '*', function (err, doc) {
		if(err) {
			res.send('err:' + err);
			return;
		}
		res.send(doc);
	});
}
	
	
	
home.update = function (req, res) {//更新数据
	var articleInfo = {
		"$id": 2,
		"$name": 'Tom',
		"$img": 0,
		"$content": 0,
		"$brief": 0,
		"$typesid": 0,
		"$count": 0,
		"$reco": 0,
		"$addtime": '11:12:13',
		"$uid": 0
	}
	articleApi.update(articleInfo, function (err, doc) {
		if(err) {
			res.send('err:' + err);
			return;
		}
		res.send(doc);
	});
}
	
	
home.updateCount = function (req, res) {//更新点击率
	var id = {
		"$id": 2
	}
	articleApi.updateCount(id, function (err, doc) {
		if(err) {
			res.send('err:' + err);
			return;
		}
		res.send(doc);
	});
}	
	
	
home.page = function (req, res) {//翻页操作
	var typesid = 2,
		field = 'a.*',
		reco = 4,
		sort = 'id',
		cp = 2,
		mp = 2;
	articleApi.page(typesid, field, reco, sort, cp, mp, function (err, doc) {
		if (err) {
			res.send('err:' + err);
			return;
		};
		res.send(doc);
	});
}
	
	
home.create = function (req, res) {//新建数据
	var articleInfo = {
		"$name": 'd',
		"$img": 103,
		"$content": 'ddd',
		"$brief": 004,
		"$typesid": 4,
		"$count": 4,
		"$reco": 4,
		"$addtime": '21:12:31',
		"$uid": 4
	};
	articleApi.create(articleInfo, function (err, doc) {
		if(err) {
			res.send('err:' + err);
			return;
		};
		res.send(doc);
	});
}
	
	
	
home.del = function (req, res) {//删除数据
	var articleInfo = {
		"$id": 9
	};
	articleApi.del(articleInfo, function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}

module.exports = home;



