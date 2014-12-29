/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-3-31
 * Time: 上午10:23
 * To change this template use File | Settings | File Templates.
 */

function show(thisobj,obj){
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

/**
 * 注册
 */
var s1='<strong><b class="m-right">正确</b>|</strong>',
    s2='<strong><b class="m-error">错误</b>|</strong>',
    s3='<b class="m-right">正确</b>',
    s4='<b class="m-error">错误</b>';
    s5='<strong><b class="m-error">此标签已添加</b>|</strong>';
    s6='<strong><b class="m-error">标签数量已满</b>|</strong>';
var cn=false,cu=false,cp=false,ca=false,cl=false;
var CheckReg=new function(){
  var _self=this;
  _self.checkNick=function(){
    var o=$('#nickname');
    var nick=$.trim(o.val());
    var l=tools.getCharLen(nick);
    var reg=/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
    var oo=o.next().find('em');
    if(nick==''){
      oo.prev().remove();
      oo.before(s2);
      cn=false;
    }
    else{
      if(l>12){
        oo.prev().remove();
        oo.before(s2);
        cn=false;
      }
      else if(!reg.test(nick)){
        oo.prev().remove();
        oo.before(s2);
        cn=false;
      }
      else{
        oo.prev().remove();
        oo.before(s1);
        cn=true;
      }
    }
  }
  _self.checkaccount=function(){
    var o=$('#account');
    var acc=$.trim(o.val());
    var l=tools.getCharLen(acc);
    var reg=/^[A-Za-z0-9]+$/;
    var oo=o.next().find('em');
    if(acc==''){
      oo.prev().remove();
      oo.before(s2);
      cu=false;
    }
    else{
      if(l>12){
        oo.prev().remove();
        oo.before(s2);
        cu=false;
      }
      else if(!reg.test(acc)){
        oo.prev().remove();
        oo.before(s2);
        cu=false;
      }
      else{
        oo.prev().remove();
        oo.before(s1);
        cu=true;
      }
    }
  }
  _self.checkpsd=function(){
    var o=$('#password');
    var psd=$.trim(o.val());
    var l=tools.getCharLen(psd);
    var reg=/^[A-Za-z0-9]+$/;
    var oo=o.next().find('em');
    if(psd==''){
      oo.prev().remove();
      oo.before(s2);
      cp=false;
    }
    else{
      if(l>12){
        oo.prev().remove();
        oo.before(s2);
        cp=false;
      }
      else if(!reg.test(psd)){
        oo.prev().remove();
        oo.before(s2);
        cp=false;
      }
      else{
        oo.prev().remove();
        oo.before(s1);
        cp=true;
      }
    }
  }
  _self.checkanswer=function(){
    var o=$('#answer');
    var ans=$.trim(o.val());
    var l=tools.getCharLen(ans);
    var reg=/^[\s\S]+$/;
    var oo=o.next().find('em');
    if(ans==''){
      oo.prev().remove();
      oo.before(s2);
      ca=false;
    }
    else{
      if(l>40){
        oo.prev().remove();
        oo.before(s2);
        ca=false;
      }
      else if(!reg.test(ans)){
        oo.prev().remove();
        oo.before(s2);
        ca=false;
      }
      else{
        oo.prev().remove();
        oo.before(s1);
        ca=true;
      }
    }
  }
}

var TabForm=new function(){
  var _self=this;
  _self.printNian=function(){
    var o=$('.biaodannian'),s='';
    for(var i=1930;i<2001;i++){
      s+='<li value="'+i+'">'+i+'</li>';
    }
    o.html(s);
  }
  _self.printYue=function(){
    var o=$('.biaodanyue'),s='';
    for(i=1;i<13;i++){
      s+='<li value="'+i+'">'+i+'</li>';
    }
    o.html(s);
  }
  _self.printRi=function(){
    var o=$('.biaodanri'),s='';
    for(i=1;i<32;i++){
      s+='<li value="'+i+'">'+i+'</li>';
    }
    o.html(s);
  }
  _self.showItem=function(thisobj,obj){
    var o=$('.'+obj);
    var oo=$(thisobj);
    if(o.css('display')=='none'){
      o.css('display','block');
    }
    o.focus();
    o.blur(function(){
      o.css('display','none');
    });
    o.find('li').unbind('click');
    o.find('li').bind('click',function(){
      var value=$(this).html();
      if(obj=='biaodanyue'){
        var s='';
        $('#day').attr('value',1);
        $('#day>label').find('em').html(1);
        if(value==4 || value==6 || value==9 || value==11){
          for(i=1;i<31;i++){
            s+='<li value="'+i+'">'+i+'</li>';
          }
        }
        else if(value==2){
          for(i=1;i<29;i++){
            s+='<li value="'+i+'">'+i+'</li>';
          }
        }
        else{
          for(i=1;i<32;i++){
            s+='<li value="'+i+'">'+i+'</li>';
          }
        }
        $('.biaodanri').html(s);
        oo.find('label>em').html(value);
				oo.attr('value',value);
      }
      else if(obj=='biaodanarea'){
        var pro=$(this).parent().prev().find('li').html();
        oo.find('label>em').eq(0).html(pro);
        oo.find('label>em').eq(1).html(value);
      }
      else{
        oo.find('label>em').html(value);
				oo.attr('value',value);
      }
      o.css('display','none');
    })
  }
  _self.closeTip=function(obj){
    $(this).parent().parent().empty().remove();
    document.location.href="http://www.baidu.com";
  }
}

var LabelSelect=new function(){
  var _self=this;
  _self.delLabel=function(thisobj){
    var o=$(thisobj),oo= o.parent().parent(),o1=oo.find('li').last();
     o.parent().remove();
     oo.parent().next().find('em').prev().remove();
    if(o1.css('display')=='none'){
      o1.css('display','block');
    }
  }
  _self.writeLabel=function(){
      var o=$('#yixuan'),lab=o.parent().next().find('em');
      var oo= o.find('li>input'),value= $.trim(oo.val());
      var reg=/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
      var l=tools.getCharLen(value);
      var mark=true;
      if(value==''){
				layer.msg('标签内容不能为空',1);
        lab.prev().remove();
      }
      else{
        if(l>10){
					layer.msg('内容过长',1);
          lab.prev().remove();
          lab.before(s2);
        }
        else if(!reg.test(value)){
					layer.msg('格式错误',1);
					lab.prev().remove();
					lab.before(s2);
				}
        else{
          o.find('li').each(function(){
            if(value==$(this).find('b').html()){
              lab.prev().remove();
              lab.before(s5);
              mark=false;
							layer.msg('标签重复了',1);
              return false;
            }
          });
          if(mark){
            lab.prev().remove();
            lab.before(s1);
            oo.val('');
            oo.parent().before('<li><b>'+value+'</b><em onclick="LabelSelect.delLabel(this)" class="delicon" ></em></li>');
            var n= o.find('li').length;
            if(n>8){
              oo.parent().css('display','none');
            }
          }
        }
      }
  }
  _self.selLabel=function(thisobj){
    var value=$(thisobj).html(),oo=$('#yixuan'),a=oo.find('li').last(),b=oo.parent().next().find('em');
    var mark=true;
    if(a.css('display')=='block'){
      oo.find('li').each(function(){
        var value1=$(this).find('b').html();
        if(value==value1){
					layer.msg('该标签已存在',1);
          b.prev().remove();
          b.before(s5);
          mark=false;
          return false;
        }
      })
      if(mark){
        b.prev().remove();
        b.before(s1);
        oo.find('li').last().before('<li><b>'+value+'</b><em onclick="LabelSelect.delLabel(this)" class="delicon"></em></li>');
        var n= oo.find('li').length;
        if(n>8){
          oo.find('li').last().css('display','none');
        }
      }
    }
    else{
      b.prev().remove();
      b.before(s6);
    }
  }
}

function SubForm(){
  CheckReg.checkNick();
  CheckReg.checkaccount();
  CheckReg.checkpsd();
  CheckReg.checkanswer();
  var l=$('#yixuan>li');
  if(l.length>1){
    var s='';
    l.each(function(){
      if($(this).find('input').length<1){
        s+=$(this).find('b').html()+'$';
      }
    })
    s=s.substring(0, (s.length-1));
    cl=true;
  }
  var d='';
  $('.m-regitem>span').each(function(){
    var o=$(this).find('label>em');
    if(this.attr('id')=='area'){
      d+=o.eq(0).attr("tid")+'='+o.eq(0).html()+'&'+ o.eq(1).attr("tid")+'='+ o.eq(1).html()+'&';
    }
    else{
      d+= o.attr("tid")+'='+ o.html()+'&';
    }
  })
  if(cn&&cu&&cp&&ca&&cl){
    $.ajax({
      type:'post',
      url:'/controller/index/reg',
      data:'op=reg&'+d+'lab='+s+'&nick='+$('#nickname').val()+'&account='+$('#account').val()+'&password='+$('#password').val()+'&answer='+$('#answer').val(),
      success:function(msg){
        if(msg=='true'){
          var W=window,
              a='<div class="successtip"><p>注册<em class="ifork3" onclick="closeTip(this)"></em></p><div><span>建议：注册成功后，请到您的个人空间进一步完善个人资<br/> 料。得到更多会员的关注，享受更多功能。</span></div><a href="http://www.baidu.com" class="m-ensure">确定</a></div>';
          if(W.$('shade').length==0){
            W.$('body').append('<div class="shade"></div>');
            W.$('body').append(a);
            var Ww=$(window).width(),Wh=$(window).height(),o=$('.successtip'),w= o.width(),h= o.height();
            o.css({'left': (Ww-w)/2,'top':(Wh-h)/2});
          }
        }
      }
    })
  }

}

/**
 * 首页轮显
 */
var SlideShow = new function () {
	var _self = this;
	_self.headSlide = function (thisobj) {
		var o = $(thisobj).parent();
		o.find('img').stop().animate({left: "0px", opacity: 0, width: 0, height: 0}, 'slow', function () {
			//o.find('img').css('display','none');
		});
		o.find('span').stop().animate({left: "0px", opacity: 1, width: '933px', height: '217px'}, 'slow', function () {
			o.find('span').css('display', 'block');
		});
	}

	_self.backSlide = function (thisobj) {
		var o = $(thisobj).parent();
		o.find('span').stop().animate({left: "0px", opacity: 0, width: 0, height: 0}, 'slow', function () {
		});

		o.find('img').stop().animate({left: "0px", opacity: 1, width: '933px', height: '210px'}, 'slow', function () {
			o.find('img').css('display', 'block');
		});
	}

	_self.sumSlide = function (thisobj) {
		var o = $(thisobj), po = o.parent(), num = o.index();
		po.find('em').css('display', 'none');
		o.find('em').css('display', 'block');
		po.prev().find('img').css('display', 'none');
		po.prev().find('img').eq(num).css('display', 'block');
	}
}




var SearchTab = new function () {
	var _self = this;
	_self.searchMember = function (obj, thisobj) {
		var o = $("." + obj), oo = $(thisobj);
		if (o.css('display') == 'none') {
			o.css('display', 'block');
		}
		else {
			o.css('display', 'none');
		}
		o.focus();
		o.unbind();
		o.find("li").unbind();
		setTimeout(function () {
			o.bind('blur', function () {
				o.css('display', 'none');
			});
		}, 50);
		o.find('li').bind('click', function () {
			oo.find('i').html($(this).html());
			o.css('display', 'none');
		});
	}
}

