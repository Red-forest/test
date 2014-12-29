/*
 * 整站路由
 * 此方法接管所有非静态请求
 */

var config = require('../config/config.js'),
	tools = require('../lib/tools.js');

module.exports = function (app) {
	app.all('*', function (req, res) {
	console.log('1');
		try {
			var upath = req.path,
				urlpath = upath.split('/');

			if (upath.indexOf('.') > -1 || urlpath.length > 5 || upath.indexOf('//') > -1) {
				res.render('/tippage/404', {'state': '该地址不存在'});
				return;
			}

			var len = urlpath.length;
			if (urlpath[len - 1] == '') {
				urlpath.pop();
				if (len < 4) {
					len = urlpath.push('index');
				}
			}
			if (len === 2) {
				urlpath = ['', urlpath.pop(), 'index'];
			}

			var last = urlpath.pop();
			//console.log('end:' + '../controller'+ urlpath.join('/') +'.js' + ' ' + last);
			if(urlpath.join('/').indexOf('space1') > -1) {
				var key = req.cookies.key;
				var id = req.cookies.id;
				var neoid = req.cookies.nid;
				if(tools.sha1(id + neoid + config.keySalt + tools.getIp(req)) !== key) {
					res.render('tippage/error', {'state': '0'});
					return;
				}
			}
			require('../controller' + urlpath.join('/') + ".js")[last](req, res);
		}
		catch (err) {
			console.log(err);
			res.render('tippage/404', {'state': '该地址不存在'});
		}
	});
}