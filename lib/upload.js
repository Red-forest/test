/** 上传相关函数
 * --------------------------------------------------------
 * 功能描述
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-6-16 下午3:48
 * --------------------------------------------------------
 */
/**
 * --------------------------------------------------------
 * 功能描述文件上传
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-6-11 下午3:54
 * --------------------------------------------------------
 */

var upload = {},
	tools = require('./tools.js'),
	objectid = require('objectid'),
	fs = require('fs'),
	UPyun = require('./upyun.js').UPYun;

/**
 * 上传文件到又拍云
 * @param file   req.files.imgFile
 * @param namespace   又拍云上的空间名称
 * @param del  是否删除原图，{isdel:true,v:'v2'}//v为用什么版本替换
 * @param callback //执行完成的回调函数
 */
upload.upload = function (file, namespace, del, callback) {//上传文件到又拍云
	var imgExt = 'gif,jpg,jpeg,png,bmp';
	var path = file.path;
	console.log(path);
	//console.log(path.path);//服务器端临时存储使用的路径，注意文件名是没有后缀扩展名的
	//console.log(path.size);//文件大小
	//console.log(path.type);//文件的mime类型,image/jpeg
	if(path.size > 5242880) {//上传文件大于5M
		fs.unlink(path,function(err) {//删除临时文件

		});
		callback('上传文件大于5M');
		return;
	}
	/*if(imgExt.indexOf(path.type.split('/')[1]) == -1) {
		fs.unlink(path.path,function(err) {//删除临时文件

		});
		callback('文件格式不合法');
		return;
	}*/
	var fileContent = fs.readFileSync(path);//获取文件内容
	var upyun = new UPyun(namespace);
	var filepath = '/' + tools.time.formatTime().replace(/-/g,'/') + '/' + objectid() + '.jpg';//上传到云上的文件路径
	var op = {};//自定义连接头
	if(del.isdel == true) {
		op.header = {'x-gmkerl-thumbnail': del.v};//用什么版本覆盖原图
	}
	upyun.writeFile(filepath, fileContent, true, function(err, data) {

		if (err) {//执行错误
			console.log('[' + JSON.stringify(err) + ']');
			callback(err);
		}
		else {
			fs.unlink(path,function(err) {//删除临时文件

			});
			callback(null, filepath);//执行回调
		}
	}, op);
}

/**
 * 删除文件
 * @param file 文件路径
 * @param namespace
 * @param callback
 */
upload.del = function (file, namespace, callback) {
	var upyun = new UPyun(namespace);
	upyun.deleteFile(file, function(err) {
		callback(err);
	});
}

module.exports = upload;

