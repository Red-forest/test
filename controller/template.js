
/**
 *--------------------------------------------------
 * 接收获取的template数据，调用Api
 * @Author: 海涛(iheetao@126.com)
 * @Date: 14-11-24 下午10:31
 *--------------------------------------------------
 */

var home = {},
	tools = require('../lib/tools.js'),
	templateApi = require('../models/templateApi.js'),
	async = require('async');


home.index = function (req, res) {//默认方法，通过id获取数据
	var id = {
		"$id": 3
	};
	templateApi.getById(id, '*', function(err, doc) {
		if(err) {
			res.send('err:' + err);
			return;
		}
		res.send(doc);
	});
		
}


home.update = function (req, res) {//更新数据
	var templateInfo = {
		"$id": 10,
		"$name": 'Tom',
		"$path": 'abcde',
		"$styleid": 2,
		"$typelistid": 2,
	};
	templateApi.update(templateInfo, function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}



home.page = function (req, res) {//翻页操作

	templateApi.page('*', 8, 2, function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}


home.pageByType = function (req, res) {//类型翻页操作
	var type = {
		"$type": 10
	};
	templateApi.pageByType(type, '*', function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}


home.create = function (req, res) {//添加数据
		
	var templateInfo = {
		"$name": 'Jay',
		"$path": 'eTom',
		"$styleid": 1,
		"$stylelistid": 13
	};
	templateApi.create(templateInfo, function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}


home.del = function (req, res) {//删除数据
	var templateInfo = {
		"$id": 10
	};
	templateApi.del(templateInfo, function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}


module.exports = home;



