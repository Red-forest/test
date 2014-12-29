
/**
 *--------------------------------------------------
 * ���ջ�ȡ��types���ݣ�����Api
 * @Author: ����(iheetao@126.com)
 * @Date: 14-11-21 ����2:00
 *--------------------------------------------------
 */

var home = {},
	tools = require('../lib/tools.js'),
	typesApi = require('../models/typesApi.js'),
	async = require('async');

	
home.v = function(req, res) {
	res.render('types');
}
	
home.index = function (req, res) {//Ĭ�Ϸ�������ȡ����
	var id = {
		"$id": req.body.id
	};
	typesApi.getById(id, '*', function(err, doc) {
		if(err) {
			res.send('err:' + err);
			return;
		}
		res.send(doc);
	});	
}


home.update = function (req, res) {//��������
	var typesInfo = {
		"$id": 9,
		"$pid": parseInt(req.body.pid),
		"$name": req.body.name,
		"$ename": req.body.ename,
		"$brief": req.body.brief,
		"$tempid": parseInt(req.body.tempid),
		"$templistid": parseInt(req.body.templistid),
		"$weight": parseInt(req.body.weight)
	};
	typesApi.update(typesInfo, function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}

home.page = function (req, res) {//ҳ��
	var pid = {
		"$pid": req.body.pid
	};
	typesApi.page(pid, '*', function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}


home.page1 = function (req, res) {//ҳ��
	var pid = {
		"$pid": 100
	};
	typesApi.page(pid, '*', function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.render('tlist',{doc:doc});
		
	});
		
}


home.create = function (req, res) {//�������
	var typesInfo = {
		"$pid": parseInt(req.body.pid),
		"$name": req.body.name,
		"$ename": req.body.ename,
		"$brief": req.body.brief,
		"$tempid": parseInt(req.body.tempid),
		"$templistid": parseInt(req.body.templistid),
		"$weight": parseInt(req.body.weight)
	};
	typesApi.create(typesInfo, function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}


home.delete = function (req, res) {//ɾ������
	var typesInfo = {
		"$id": 20
	};
	typesApi.delete(typesInfo, function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}

module.exports = home;



