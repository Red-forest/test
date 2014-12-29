var tools = {},
	crypto = require('crypto'),
	fs = require('fs'),
	xss = require('xss'),
	path = require('path'),
	config = require('../config/config.js');

/*************************************************************/
/**
 * 校验数据类型合法性
 * @type {{}}
 */
tools.checkData = {};

/* 校验相关的操作
 * @param str
 * @returns {boolean}
 */
tools.checkData.checkEmail = function (str) {
	var reg = /^\w+((-|\.)\w+)*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	return reg.test(str);
}

/**
 * 数据是否为整型
 * @param d  待校验值,为数字或者NAN
 * @param min  待校验值,为数字或者NAN
 * @param max  待校验值,为数字或者NAN
 * @returns true / false
 */
tools.checkData.checkInt = function (d, min, max) {
	min = min ? min : 0;
	max = max ? max : 100;
	if (isNaN(d)) {
		return false;
	}
	if (d >= min && d <= max) {
		return true;
	}
	return false;
}

tools.checkData.checkLogin = function(req) {//判断登录状态
	var key = req.cookies.key;
	var id = req.cookies.id;
	var neoid = req.cookies.nid;
	if(tools.sha1(id + neoid + config.keySalt + tools.getIp(req)) !== key) {
		return false;
	}
	return true;
}


/****************************************************************************
 * 工具相关的操作
 */
/**
 * Return md5 hash of the given string and optional encoding,
 * defaulting to hex.
 *
 *     utils.md5('wahoo');
 *     // => "e493298061761236c96b02ea6aa8a2ad"
 *
 * @param {String} str
 * @param {String} encoding
 * @return {String}
 * @api public
 */
tools.md5 = function (str, encoding) {
	return crypto
		.createHash('md5')
		.update(str)
		.digest(encoding || 'hex');
}
/**
 * sha1加密
 * @param str 将加密的字符串
 * @param salt  盐
 * @returns {*}
 */
tools.sha1 = function (str, salt) {
	return crypto.createHash('sha1').update(str + salt).digest('hex');
}
/**
 * 获取字符串长度，区分中英文
 * @param str
 * @returns {Number}
 */
tools.getCharLen = function (str) {
	return str.replace(/[^\x00-\xff]/g, "rr").length;
}
/**
 * 截取字符串
 * @param s
 * @param l   长度
 * @param st   补充的结尾字符
 * @returns {*}
 */
tools.subStr = function (s, l, st) {
	var T = false;
	if (tools.getCharLen(s) > l) {
		st = st ? st : '';
		l -= tools.getCharLen(st);
		var S = escape(s);
		var M = S.length;
		var r = '';
		var C = 0;
		for (var i = 0; i < M; i++) {
			if (C < l) {
				var t = S.charAt(i);
				if (t == '%') {
					t = S.charAt(i + 1);
					if (t == 'u') {
						r += S.substring(i, i + 6);
						C += 2;
						i += 5;
					}
					else {
						r += S.substring(i, i + 3);
						C++;
						i += 2;
					}
				}
				else {
					r += t;
					C++;
				}
			}
			else {
				T = true;
				break;
			}
		}
	}
	return T ? unescape(r) + st : s;
}

tools.time = {};
/**
 * 计算时间差，返回秒数
 * @param time1
 * @param time2
 * @returns {number}
 */
tools.time.subTime = function (time1, time2) {
	var t1 = new Date(time1), t2;
	if (time2 == undefined) {
		t2 = new Date();//当前时间
	}
	else {
		t2 = new Date(time2);
	}
	return (t2.getTime() - t1.getTime()) / 1000;//时间差的秒数
}
/**
 * 从ObjectId中获取时间
 * 生成格式:2013-12-14 10:58:35
 * @param ObjectId
 * @returns {string}
 */
tools.time.getObjectIdTime = function (ObjectId) {
	var time = parseInt(ObjectId.substring(0, 8), 16);
	var now = new Date(time * 1000);
	return now.toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
}
/**
 * 格式化时间
 * @param format
 * @returns {string}
 */
tools.time.formatTime = function (format) {
	var format = typeof format === 'undefined' ? false : format.toLowerCase(),
		now = new Date(),
		time = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
	if (format === 'y-m-d h:m:s') {
		time += ' ' + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	}
	return time;
};
/**
 * 根据年龄获取出生日期
 * @param age
 * @returns {string}
 */
tools.time.getBorn = function(age) {
	var now = new Date();
	return (now.getFullYear() - age) + "-" + (now.getMonth() + 1) + "-" + now.getDate();
}
/**
 * 根据出生日获取年龄
 * @param strBirthday
 * @returns {*}
 */
tools.time.getAge = function(strBirthday){
	var returnAge;
	var strBirthdayArr=strBirthday.split("-");
	var birthYear = strBirthdayArr[0];
	var birthMonth = strBirthdayArr[1];
	var birthDay = strBirthdayArr[2];

	d = new Date();
	var nowYear = d.getFullYear();
	var nowMonth = d.getMonth() + 1;
	var nowDay = d.getDate()

	if(nowYear == birthYear)
	{
		if(birthMonth<nowMonth)
			returnAge=0;//同年月份为今月前，0岁
		else
		if(birthMonth==nowMonth && birthDay<=nowDay)
			returnAge = 0;//同年同月日期为今天前 0岁
		else
			returnAge = -1;//同年同月但日为今天后或今月后，日期无效
	}
	else
	{
		var ageDiff = nowYear - birthYear ; //年之差
		if(ageDiff > 0)
		{
			if(nowMonth == birthMonth)
			{
				var dayDiff = nowDay - birthDay;//日之差
				if(dayDiff < 0)
				{
					returnAge = ageDiff - 1;
				}
				else
				{
					returnAge = ageDiff ;
				}
			}
			else
			{
				var monthDiff = nowMonth - birthMonth;//月之差
				if(monthDiff < 0)
				{
					returnAge = ageDiff - 1;
				}
				else
				{
					returnAge = ageDiff ;
				}
			}
		}
		else
		{
			returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
		}
	}
	return returnAge;//返回周岁年龄
}

/**
 * 过滤xss攻击代码
 * 属性参考：https://github.com/leizongmin/js-xss
 * @param str
 */
tools.xssFilter = function (str, movehtml) {
	if (!str) {
		return '';
	}
	str = xss(str);
	if (movehtml) {
		str = tools.htmlToString(str);
	}
	return str;
}
/**
 * html和sql字符过滤
 * @param text
 * @returns {XML}
 */
tools.htmlToString = function (text) {
	text = text.replace(/&/g, "&amp;");
	text = text.replace(/"/g, "&quot;");
	text = text.replace(/</g, "&lt;");
	text = text.replace(/>/g, "&gt;");
	text = text.replace(/'/g, "&#146;");
	text = text.replace(/$/g, "");
	return  text;
}
/**
 * 转义json关键词
 * @param str
 * @returns {XML}
 */
tools.jsonFilter = function (str) {
	str = str.replace(/\\/g, "\\\\");
	str = str.replace(/\b/g, "\\\b");
	str = str.replace(/\t/g, "\\\t");
	str = str.replace(/\n/g, "\\\n");
	str = str.replace(/\f/g, "\\\f");
	str = str.replace(/\r/g, "\\\r");
	str = str.replace(/"/g, "\"");
	return str;
}
/**
 * 清除文本中的html代码
 * @param str
 * @returns {XML}
 */
tools.removeHtml = function (str) {
	str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
	str.value = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
	//str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
	return str;
}

/**
 * 判断reffer
 * method：对请求方式的校验
 */
tools.checkReffer = function (req, method) {
	var reqMethod = req.method;
	if (reqMethod != method) {
		return false;
	}
	var reffer = req.headers.referer;
	if (!reffer) {
		reffer = config.webDomain;
	}
	if (reffer.indexOf(config.webDomain) > -1) {//判断reffer
		return true;
	}
	return false;
}

/**
 * 发送错误消息
 * @param res
 * @param err
 */
tools.error = function (res, err) {
	res.send('{"status":"' + err + '"}');
}

/**
 * 获取ip地址
 * @param req
 * @returns {*}
 */
tools.getIp = function (req) {
	var headers = req.headers;
	var ip = headers['x-real-ip'] || headers['x-forwarded-for'];
	if (ip) {
		return ip;
	}
	return req.connection.remoteAddress;
}

/**
 * 合并两个json，并覆盖重复键
 * @param des
 * @param src
 * @param override
 */
tools.mergeJson = function(jsonArray) {
	var json1 = jsonArray[0]
	var json2 = jsonArray[1];
	var json = {};
	var jsonj = {};
	for(var v in json1) {
		json[v] = json1[v];
	}
	for(var v1 in json2) {
		if(json[v1] == undefined) {
			jsonj[v1] = json2[v1];
		}
	}
	return JSON.parse((JSON.stringify(json) + JSON.stringify(jsonj)).replace('}{',','));
}

module.exports = tools;


