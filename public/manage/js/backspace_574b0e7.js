



/*
 *	UI 控制界面的转换
 *	海涛
 *	2014-12-26
 */

var bpUI = new function () {
	var _self = this;
	
	//点击退出按钮后清除cookie并退出（需修改）
	_self.logOut = function (btn) {
		$(btn).click(function () {
			document.cookie = 'user=' + ';expires=' + new Date(0);
			document.location.href = '/manage';
		});
	};
	
	//登陆后默认左侧列表点击后的效果
	_self.showLi =function (obj) {
		var id = obj.attr('out1');
		var num = obj.attr('out2');
		$('.index-show-ul').css({'display':'none'});
		$('.click-left-1').css({'display':'block'});
		$('.click-left-2').css({'display':'block'});
		$('#' + id).css({'display':'block'});
		$('#' + num).css({'color':'yellow'});
	};
	

	
	
	
	//最左侧小图标点击效果	
	_self.showSpan = function (obj) {
		var id = obj.attr('out');
		if(obj.index() < 2) {
			$('.click-left-1').css({'display':'none'});
			$('.click-left-1 span').removeAttr('style');
			$('.click-left-2').css({'display':'none'});
			$('.click-left-2-3').removeAttr('style');
			$('.click-left-2 li').removeAttr('style');
			$('#info-toggle div').removeAttr('style');
			$('.index-info').removeAttr('style');
			$('.index-show-ul').css({'display':'block'});
			
		} else {
			$('.click-left-1 span').removeAttr('style');
			$('.click-left-2-3').removeAttr('style');
			$('.index-info').removeAttr('style');
			$('#' + id).css({'display':'block'});
			obj.css({'color':'yellow'});		
		};
	};

	//左侧中间列表的点击效果
	_self.showSecondLi = function (obj) {
		var _this = $('.click-left-2-3 li');
		_this.removeAttr('style');
		obj.css({'color':'red'});
		$('#info-toggle div').removeAttr('style');
		$('.index-info').css({'display':'none'});
	};	
	
	
	//点击全选按钮后全部选择效果
	_self.choiceAll = function () {
		var obj = $('.main-liuyan-1 em').eq(0).children('span').eq(0);
		var flag = obj.attr('class');
		var choice = 'glyphicon glyphicon-check';
		var notChoice = 'glyphicon glyphicon-unchecked';
		if(flag == notChoice) {
			obj.attr('class', choice);
			$('.main-liuyan-4 em').attr('class', choice);
		} else {
			obj.attr('class',notChoice);
			$('.main-liuyan-4 em').attr('class', notChoice);
		};
	};	
	
	//单个选择效果
	_self.choiceOne = function (obj) {
		var check = 'glyphicon glyphicon-check';
		var choice = obj.attr('class');
		if(choice == check) {	
			obj.attr('class','glyphicon glyphicon-unchecked');
		} else {
			obj.attr('class','glyphicon glyphicon-check');
		};
	};
	
	//删除数据
	_self.del = function () {
		var check = $('.main-liuyan-4 em').hasClass('glyphicon-check');
		var del = $('.main-liuyan-4 em').filter('.glyphicon-check');
		if(check) {
			del.parent().remove();
		}
	}
	
	//选择城市
	_self.city = function (obj) {
		var city = obj.text();
		$('.dropdown button').html(city + ' <span class="caret"></span>');
	}
	
	//文章管理页面的下拉选择
	_self.firstPage = function (obj) {
		var page = obj.text();
		var view = obj.parent().siblings();
		view.html(page + ' <span class="caret"></span>');
	}
	
	//当到达最后一页的时候显示(已经是最后一页)
	_self.p_out = function () {
		var em2 = parseInt($('.main-liuyan-1 em').eq(1).text());
		var em3 = parseInt($('.main-liuyan-1 em').eq(2).text());

		if(em2 == em3) {
			$('.main-liuyan-4 p').css({'display':'block'});
		};	
	};
	
	//前台人员推荐（默认显示所有数据）
	_self.userRecoShow = function () {
		$.ajax({
			type: 'POST',
			url : '/manage/userReco/page',
			data: '&city=全部',
			dataType: 'JSON',
			success : function (msg) {
				for(var i = 0; i < msg.length; i++ ) {
					$('.main-liuyan-4 ul').prepend('<li><em class="glyphicon glyphicon-unchecked" _id=' + msg[i]._id + '></em><span>' + msg[i].nickname + '</span><span>' + msg[i].city + ' </span></li>');
				};
				
				$('.main-liuyan-4 em').bind('click', function() {
					bpUI.choiceOne($(this));//单选
				});				
			}
		});
	}
	
}//------UI结尾------

var bpLayer = new function () {
	var _self = this;
	
	_self.iframe = function (width, height, title, src) {
		$.layer({
			type: 2,
			maxmin: false,
			shadeClose: false,
			title: title,
			shade: [0.5, '#ccc'],
			offset: ['150px', ''],
			area: [width + 'px', height + 'px'],
			iframe: {src: src, scrolling: 'no'}
		});
	};
	
};



function loadtemp(tempName) {	
	var addr = '/manage/' + tempName;
	var template = new EJS({url: addr}).render();	
	$('#info-toggle').html(template);
}



bpUI.logOut('.index-logout');

$('.index-show-ul li').bind('click', function () {
	bpUI.showLi($(this));
});

$('.click-left-1 span').bind('click', function () {
	bpUI.showSpan($(this));
});

$('.click-left-2-3 li').bind('click', function () {
	bpUI.showSecondLi($(this));
});
