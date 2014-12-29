/**
 * --------------------------------------------------------
 * witch js 工具类，包含前台字符串、cookie、图片缩放，特殊字符过滤等操作
 * @Version 0.5
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-2-12 下午3:16
 * --------------------------------------------------------
 */
var tools = new function () {
	_self = this;
	_self.randomChar = function (l) {//获取l位随机数
		var x = "0123456789qwertyioplkjhgfsazxcvbnm";
		var tmp = "";
		for (var i = 0; i < l; i++) {
			tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
		}
		return tmp;
	}

	_self.getCharLen = function (str) {//获取字符串长度，区分中英文
		return str.replace(/[^\x00-\xff]/g, "rr").length;
	}

	_self.imgCenter = function (I, l) {//图片上下居中，I：img对象，l相框高度
		var i = new Image();
		i.src = I.src;
		var h = i.height;
		if (h > 0) {
			var mt = (l - h) / 2;
			$(I).css("margin-top", mt);
		}
	}

	_self.subStr = function (s, l, st) {//截取字符串，区分中英文

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

	_self.xss = function (siteurl, ishtml) {//前端过滤
		siteurl = siteurl.replace(/<(script|link|style|iframe)(.|\n)*\/\1>\s*/ig, "");//过滤危险标签
		if (ishtml == true) {
			siteurl = siteurl.replace(/<\/?(?!br|\/)[^>]*>/g, ''); //去除HTML tag//(/<\/?(?!br|/?p|img)[^>]*>/g,'');
		}
		siteurl = siteurl.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
		return siteurl;
	}

	_self.getPara = function (name) {//获取url的参数
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return '';
	}

	_self.subTime = function (time1, time2) {//计算时间差time2-time1，返回时间差的毫秒数
		var t1 = new Date(time1), t2;
		if (time2 == undefined) {
			t2 = new Date();//当前时间
		}
		else {
			t2 = new Date(time2);
		}
		return (t2.getTime() - t1.getTime()) / 1000;//时间差的秒数
	}

	//时间格式化
	_self.formatTime = function (fmt, time) {// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
		// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
		var t = new Date();
		if(time) {
			t = new Date(time.replace('T',' ').replace(/-/g,'/').split('.')[0]);
		}
		var o = {
			"M+": t.getMonth() + 1, //月份
			"d+": t.getDate(), //日
			"h+": t.getHours(), //小时
			"m+": t.getMinutes(), //分
			"s+": t.getSeconds(), //秒
			"q+": Math.floor((t.getMonth() + 3) / 3), //季度
			"S": t.getMilliseconds() //毫秒
		};
		if(time) {
			o['h+'] = o['h+'] + 8;
		}
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}

	/**
	 * 将标准时间转化成指定的格式
	 * @param time
	 * @param format
	 * @returns {*}
	 */
	_self.format = function(time, format){
		var t = new Date(time);
		var tf = function(i){return ((i < 10 ? '0' : '') + i)};
		return format.toString().replace(/yyyy|MM|dd|hh|mm|ss/g, function(a){
			switch(a){
				case 'yyyy':
					return tf(t.getFullYear());
					break;
				case 'MM':
					return tf(t.getMonth() + 1);
					break;
				case 'mm':
					return tf(t.getMinutes());
					break;
				case 'dd':
					return tf(t.getDate());
					break;
				case 'hh':
					return tf(t.getHours());
					break;
				case 'ss':
					return tf(t.getSeconds());
					break;
			}
		})
	}

	/**
	 * 获取csrf字符串
	 * * @param isparent 是否子窗口获取父窗口
	 * @returns {*|jQuery}
	 */
	_self.getCsrf = function(isparent) {
		if(isparent) {
			return '&_csrf=' + parent.$('#csrf').val();
		}
		return '&_csrf=' + $('#csrf').val();
	}

	/**
	 *
	 * @param ObjectId
	 * @returns {string}
	 */
	_self.getObjectIdTime = function (ObjectId, fmt){
		var time = parseInt(ObjectId.substring(0, 8), 16);
		var t = new Date(time * 1000);
		var o = {
			"M+": t.getMonth() + 1, //月份
			"d+": t.getDate(), //日
			"h+": t.getHours(), //小时
			"m+": t.getMinutes(), //分
			"s+": t.getSeconds(), //秒
			"q+": Math.floor((t.getMonth() + 3) / 3), //季度
			"S": t.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
		//return now.toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ").replace('上午','&nbsp;&nbsp;');
	}
}


/*页面cookie操作*/
var pageCookie = new function () {
	var ckie = this;
	ckie.getCookie = function (name) {//获取cookie,c:cookie总名称,name:cookie名称//PearForumUser=User=admin&Pass=B49E1F42A57A05E216366FA122C6E8C9B1E3BF42
		var v = "0";
		var t = document.cookie;
		var us = t.split(';');
		for (var i = 0; i < us.length; i++) {
					if ($.trim(us[i].split('=')[0]) == name) {
						v = decodeURI(us[i].split('=')[1]);
						break;
					}
		}
		return v;
	}
	ckie.setCookie = function (c, s, vs, d, p) {
		var v = c + '=' + s + '=' + vs;
		v += d ? '; max-age=' + (d * 24 * 60 * 60) : '';
		v += p ? '; path=' + p : '; path=/';
		document.cookie = v;
	}
}


/***
 * 会员后台弹窗调用
 */
var spaceLayer = new function() {
	var _self = this;
	/**
	 * 弹出iframe弹窗
	 * @param width
	 * @param height
	 * @param title
	 * @param src
	 */
	_self.iframe = function(width, height, title, src,isparent) {
		if(isparent) {
			parent.$.layer({
				type: 2,
				maxmin: false,
				shadeClose: false,
				title: title,
				shade: [0.5,'#fff'],
				offset: ['150px',''],
				area: [width + 'px', height + 'px'],
				iframe: {src: src,scrolling:'no'}
			});
		}
		else {
			$.layer({
				type: 2,
				maxmin: false,
				shadeClose: false,
				title: title,
				shade: [0.5,'#fff'],
				offset: ['150px',''],
				area: [width + 'px', height + 'px'],
				iframe: {src: src,scrolling:'no'}
			});
		}
	}

	/**
	 * 弹窗提示
	 * @param msg
	 * @param icon 1，3，5
	 * @param title
	 * @param fun
	 */
	_self.alert = function(msg, icon, title, fun) {
		icon = icon ? icon : 5;
		title = title ? title : '错误';
		if(fun) {
			layer.alert(msg, icon, title, fun);
		}
		else {
			layer.alert(msg, icon, title);
		}
	}
	/**
	 * 弹出小提示，弹出提示前关闭所有提示
	 * @param id
	 * @param time
	 */
	_self.tips = function(id, msg, style,time,guide) {
		if($('.xubox_tips').length > 0) {
			layer.closeTips();
		}
		time = time ? time : 3;
		style = style ? style : 'line-height:30px;font-size:18px;';
		guide = guide ? guide : '';
		layer.tips(msg, '#' + id, {
			guide: guide,
			style: ['background-color:#fff; color:#000;font-size:18px;line-height:47px;' + style, '#fff'],
			time: time
		});
	}
	/**
	 * 点击出现弹窗
	 * @param obj 点击元素
	 * @param dropObj 下拉元素
	 * @param display 鼠标离开是否消失
	 */
	_self.tipForm = function(obj, dropObj, display) {
		$(obj).on('click', function() {
			var o = $(dropObj);
			o.css({
				'display': 'block'
			}).focus();

			if(display) {
				o.on('blur', function() {
					o.css({
						'display': 'none'
					});
				});
			}
		});
	}
}
/**
 * 输入框字数判断
 * @param obj
 * @param maxLen
 * @param defaultStr
 * @param tipObj
 */
var areaCheck = function(obj, maxLen, defaultStr, tipObj,filter) {
	var _self = this;
	_self.obj = $(obj);
	_self.maxLen = maxLen;
	_self.filter = filter;
	_self.defaultStr = defaultStr;
	_self.tipObj = $(tipObj);

	/**
	 * 输入框获取焦点事件
	 */
	_self.focus = function() {
		_self.obj.bind('focus', function() {
			var val = $.trim(_self.obj.val());
			if(val == _self.defaultStr) {
				_self.obj.val('');
			}
		});
	}

	/**
	 * 给输入框绑定keydown和keyup事件
	 */
	_self.keyEvent =  function() {
		_self.obj.bind('keydown', function() {_self.keyCheck(); });
		_self.obj.bind('keyup', function() {_self.keyCheck(); });
	}

	_self.keyCheck =function() {
		var value = $.trim(_self.obj.val());
		if(_self.filter) {
			value = value.replace(/(\n)/g, "").replace(/(\t)/g, "").replace(/(\r)/g, "").replace(/\s*/g, "");//过滤回车和空格
		}
		var len = tools.getCharLen(value);
		if(len < _self.maxLen){
			_self.tipObj.html('还能输入<i>'+ parseInt(parseInt(_self.maxLen - len)/2) +'</i>个字');
		}
		else{
			_self.tipObj.html('您已超出<i>'+ parseInt((len - _self.maxLen)/2) +'</i>个字');
		}
	}
}

var labInput = function(thisobj,str) {
	var _self = this;
	var o = $(thisobj);
	_self.inputFocus = function() {//清除整站标签输入框默认提示
		o.bind('focus',function() {
			if($.trim(o.val()) == str) {
				o.val('');
			}
		});
	}

	_self.inputBlur = function() {
		o.bind('blur',function() {
			if($.trim(o.val()) == '') {
				o.val(str);
			}
		});
	}
}


function setHeadMenu() {//设置菜单选中样式
	var url = document.location.href.split('/')[3];
	var o = $('.m-menu');
	var al =  $('.m-menu > div >a');
	if(o) {
		switch(url) {
			case "space":
				$(al[1]).addClass('m-defaultshort');
				break;
			case "rmsearch":
				$(al[2]).addClass('m-defaultshort');
				break;
			case "say":
				$(al[3]).addClass('m-defaultshort');
				break;
			case "anli":
				$(al[4]).addClass('m-defaultlong');
				break;
			case "":
				$(al[0]).addClass('m-defaultshort');
				break;
		}
	}
}
setHeadMenu();
/**
 * 整站的域名类
 * @type {{avatar: string}}
 */
var siteDom = {
	avatar: 'http://rm-avatar.b0.upaiyun.com',
	photo: 'http://rm-photo.b0.upaiyun.com',
	say: 'http://rm-say.b0.upaiyun.com'
}

var siteData = {
	know: ["高中", "中专", "大专", "学士", "硕士", "博士", "博士后"]
};
/**
 * 整站登录模块
 */
var LoginModule = new function () {
	var _self = this;
	_self.remPassword = function (thisobj) {
		var o = $(thisobj).find('em');
		if (o.attr('class') == 'noremember') {
			o.removeClass('noremember');
			o.addClass('rememberok');
		}
		else {
			o.removeClass('rememberok');
			o.addClass('noremember');
		}
	}
	_self.login = function() {//用户登录
		var username = $.trim($('#username').val());
		var password = $.trim($('#password').val());
		if(username == '' || password == '') {
			spaceLayer.alert('用户名和密码不能为空');
			return;
		}
		$('#logsubmit').click();
		var issave = $('#f-cb').attr('class') == 'rememberok' ? true : false;

		$.ajax({
			type: 'post',
			url:'/index/login',
			data:'name=' + username + '&password=' + password +'&_csrf=' + $('#csrf').val() + '&issave=' + issave,
			dataType: 'json',
			success: function(msg) {
				if(msg.state == 'true') {
					document.location.href = '/space/';
				}
				else {
					spaceLayer.alert('帐号或者密码错误，请重新登录');
				}
			}
		});
	}

  _self.keydown = function(event) {
		if(event.keyCode == 13) {
			LoginModule.login();
		}
	}

	_self.loginOut = function() {//退出登录
		$.ajax({
			type:'post',
			url:'/index/loginout',
			data: tools.getCsrf(),
			dataType:"json",
			success: function(msg) {
				layer.msg('已经退出登录', 1, function() {
					document.location.href = '/';
				});
			}
		});
	}

	_self.checkLogin = function() {//打印登录状态
		var id = pageCookie.getCookie('id');
		if(id != '0') {//已经登录-
			var avatar = unescape(pageCookie.getCookie('avatar'));
			var nickanem = pageCookie.getCookie('nickname');
			var url = document.location.href.split('/')[3].replace('#','');
			if(url == 'space') {
				var s = '<span><a href="/space/">' + nickanem + '</a>|<a href="javascript:void(0);" onclick="LoginModule.loginOut();">退出</a></span><img src="' + siteDom.avatar + avatar + '!v1">';
				$('.m-showhead').html(s);
			}
			else {
				var s = '<div class="m-showhead"><span><a href="/space/">' + nickanem + '</a>|<a href="javascript:void(0);" onclick="LoginModule.loginOut();">退出</a></span><img src="' + siteDom.avatar + avatar + '!v1"></div>';
				$('.f-fun').html(s);
			}
		}
	}
}

setTimeout(function() {LoginModule.checkLogin();},100);

$(window).unbind();


function show(thisobj,obj){//整站tip
	$(thisobj).focus();
	if($('#'+obj).css('display')=='none'){
		$('#'+obj).css('display','block');
	}
	else{
		$('#'+obj).css('display','none');
	}
	$(thisobj).blur(function() {
		$('#'+obj).css('display','none');
	})
}


