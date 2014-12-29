


//+ - 号变换
var op = function (obj) {
	var o = $(obj);
	var a = o.attr('class');
	
	if (a.indexOf('span-mark-1') > -1) {
		o.removeClass('span-mark-1').addClass('span-mark-2');
		o.parent().children('ul').slideUp(50);	
	} else if (a.indexOf('span-mark-2') > -1){
		o.removeClass('span-mark-2').addClass('span-mark-1');
		o.parent().children('ul').slideDown(50);
	};
};

//节点操作
var change = function (obj) {
	var o = $(obj);
	var w = parseInt(o.css('width'));
	var a = o.offset();
	var b = $('#main').offset();
	var x = a.left - b.left + w + 'px';
	var y = a.top - b.top + 'px';
	$('#menu').css({'display':'block','left':x,'top':y}).attr('m',o.attr('id'));
		
	setTimeout("miss()",2000);
	console.log('a');
	$('#main').dblclick(function () {
		$('#menu').removeAttr('style');
	});
	
};

$("#menu").mouseenter(function () {
		$("#menu").addClass('n');
	});
$("#menu").mouseleave(function () {
		$("#menu").removeClass('n');
		$("#menu").removeAttr('style');
	});

	
var miss = function () {

	if ($("#menu").hasClass('n')) {
		setTimeout("$('#menu').removeAttr('style');",5000);
	} else {
		setTimeout("$('#menu').removeAttr('style');",100);
	};
};
	







//添加节点
var add = function () {
	$('#menu-span-1').click(function () {
		var id = $("#menu").attr('m');
		var a = $("#" + id).siblings().attr('class');
		
		if (a.indexOf('span-mark-1') > -1) {
			$('<ul class="tree-ul-2"><li><span class="span-mark-3"></span><span class="span-word ab" id="112">目录112</span></li></ul>').insertAfter($('#' + id));
			
		} else if (a.indexOf('span-mark-2') > -1) {
			$('<li><span class="span-mark-2 tt op"></span><span class="span-word ab" id="117">目录117</span></li>').insertAfter($('#' + id).parent());
		} else {
			$('#' + id).siblings().attr('class','span-mark-1');
			$('<ul class="tree-ul-2"><li><span class="span-mark-3"></span><span class="span-word ab" id="117">目录119</span></li></ul>').insertAfter($('#' + id));
		};
		
		$('#' + id).siblings().unbind().bind('click', function () {
			op(this);
		});
		
		$('.ab').unbind().bind('mouseover', function () {
			change(this);
		});
		
		$('.tt').unbind().bind('click', function () {
			op(this);
		});
	});	
};

//修改节点
var rename = function () {
	$('#menu-span-2').click(function () {
		var id = $("#menu").attr('m');
		var w = parseInt($("#" + id).css('width')) + 60;
		var a = $("#" + id).offset();
		var b = $("#main").offset();
		var x = a.left - b.left + 'px';
		var y = a.top - b.top - 6 + 'px';
		$('#menu').css('display:none');
		$('#rename').css({'display':'block','left':x,'top':y,'width':w}).attr('value',$('#' + id).text()).select();
		
		$(function () {
			document.onkeydown = function (event) {
				var e = event||window.event;
				if (e&&e.keyCode == 13) {
					$("#rename").blur();
				}
			}
		});	
	
		$("#rename").blur(function () {
			var a = $('#rename').val();
			if (a != '') {
				$("#" + id).text(a);
			}
			$('#rename').removeAttr('style');
		});
		
		$('#menu').removeAttr('style');
	});
};

//删除节点
var del = function () {
	$('#menu-span-3').click(function () {
		var id = $("#menu").attr('m');
		var text = $('#' + id).parent().siblings().text();
		//alert(text);
		if (text != '') {
			$('#' + id).parent().remove();
			$('#menu').css({'display':'none'});
		} else {
			$('#' + id).parent().parent().remove();
			$('#menu').css({'display':'none'});
		};	
	});
};





var ab = function () {
	setTimeout("(change(this));",10);
	$('.ab').mouseover(change(this));
};

$(".op").click(function () {
	op(this);
});

$('.span-word').mouseover(function () {
	change(this);
});

add();
rename();
del();




