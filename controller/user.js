
/**
 *--------------------------------------------------
 * 接收获取的users数据，调用Api
 * @Author: 海涛(iheetao@126.com)
 * @Date: 14-11-21 下午1:57
 *--------------------------------------------------
 */

var home = {},
	tools = require('../lib/tools.js'),
	usersApi = require('../models/usersApi.js'),
	async = require('async');

home.s = function (req, res) {
	res.render('user');
}
	

home.index = function (req, res) {//默认方法，通过id获取数据
	var id = {
		"$id": req.body.id
	};
	usersApi.getById(id, '*', function(err, doc) {
		if(err) {
			res.send('err:' + err);
			return;
		}
		res.send(doc);
	});
		
}

home.login = function (req, res) {
	var id = {
		"$id": req.body.id
	};
	var pwd = req.body.pwd;
	
	usersApi.getById(id, 'pwd', function(err, doc) {
		if(err) {
			res.send('err:' + err);
			return;
		};
		//res.send(doc);
		console.log(doc);
		if(doc.pwd == pwd) {
			res.send('{"state":"true"}');
		} else {
			res.send('{"state":"false"}');
		};
	});
	
	/*
		var username = req.body.name;
		var password = req.body.password;
		userApi.userLogin(username, passsword, function (err, doc) {
			if(err || !doc) {
				res.send('{"state":"'+err+'"}');
				return;
			}
			res.cookie('id', doc._id);
			res.cookie('nickname', doc.nickName);
			res.cookie('avatar',doc.avatar);
			res.cookie('nid', doc.neoid);
			res.send('{"state":"true"}');		
		})
		
	
		home.loginout = function(req, res) {//退出登录
			res.clearCookie('id');
			res.clearCookie('nickname');
			res.clearCookie('avatar');
			res.clearCookie('key');
			res.clearCookie('nid');
			res.send('{"state":"true"}');
		}
	
	*/
}






home.name = function (req, res) {//通过name获取数据
	var name = {
		"$name": 'Kate'
	};
	usersApi.getByName(name, '*', function(err, doc) {
		if(err) {
			res.send('err:' + err);
			return;
		}
		res.send(doc);
	});
		
}




home.update = function (req, res) {//更新数据
	var userInfo = {
		"$id": 1,
		"$name": 'Tom',
		"$pwd": 'abcde',
		"$email": 'wewewewewe'
	};
	usersApi.update(userInfo, function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}



home.page = function (req, res) {//翻页操作

	usersApi.page('*', 2, 10, function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}



home.create = function (req, res) {//添加数据
		
	var userInfo = {
		"$name": 'Jay',
		"$pwd": 'eTom',
		"$email": 'email'
	};
	usersApi.create(userInfo, function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}


home.delete = function (req, res) {//删除数据
	var userInfo = {
		"$id": 1
	};
	usersApi.delete(userInfo, function(err, doc) {
		if(err) {
			res.send(err);
			return;
		}
		res.send(doc);
	});
		
}


module.exports = home;



