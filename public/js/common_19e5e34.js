function show(e,i){$(e).focus(),"none"==$("#"+i).css("display")?$("#"+i).css("display","block"):$("#"+i).css("display","none"),$(e).blur(function(){$("#"+i).css("display","none")})}function SubForm(){CheckReg.checkNick(),CheckReg.checkaccount(),CheckReg.checkpsd(),CheckReg.checkanswer();var e=$("#yixuan>li");if(e.length>1){var i="";e.each(function(){$(this).find("input").length<1&&(i+=$(this).find("b").html()+"$")}),i=i.substring(0,i.length-1),cl=!0}var n="";$(".m-regitem>span").each(function(){var e=$(this).find("label>em");n+="area"==this.attr("id")?e.eq(0).attr("tid")+"="+e.eq(0).html()+"&"+e.eq(1).attr("tid")+"="+e.eq(1).html()+"&":e.attr("tid")+"="+e.html()+"&"}),cn&&cu&&cp&&ca&&cl&&$.ajax({type:"post",url:"/controller/index/reg",data:"op=reg&"+n+"lab="+i+"&nick="+$("#nickname").val()+"&account="+$("#account").val()+"&password="+$("#password").val()+"&answer="+$("#answer").val(),success:function(e){if("true"==e){var i=window,n='<div class="successtip"><p>注册<em class="ifork3" onclick="closeTip(this)"></em></p><div><span>建议：注册成功后，请到您的个人空间进一步完善个人资<br/> 料。得到更多会员的关注，享受更多功能。</span></div><a href="http://www.baidu.com" class="m-ensure">确定</a></div>';if(0==i.$("shade").length){i.$("body").append('<div class="shade"></div>'),i.$("body").append(n);var s=$(window).width(),a=$(window).height(),t=$(".successtip"),r=t.width(),l=t.height();t.css({left:(s-r)/2,top:(a-l)/2})}}}})}var s1='<strong><b class="m-right">正确</b>|</strong>',s2='<strong><b class="m-error">错误</b>|</strong>',s3='<b class="m-right">正确</b>',s4='<b class="m-error">错误</b>';s5='<strong><b class="m-error">此标签已添加</b>|</strong>',s6='<strong><b class="m-error">标签数量已满</b>|</strong>';var cn=!1,cu=!1,cp=!1,ca=!1,cl=!1,CheckReg=new function(){var e=this;e.checkNick=function(){var e=$("#nickname"),i=$.trim(e.val()),n=tools.getCharLen(i),s=/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,a=e.next().find("em");""==i?(a.prev().remove(),a.before(s2),cn=!1):n>12?(a.prev().remove(),a.before(s2),cn=!1):s.test(i)?(a.prev().remove(),a.before(s1),cn=!0):(a.prev().remove(),a.before(s2),cn=!1)},e.checkaccount=function(){var e=$("#account"),i=$.trim(e.val()),n=tools.getCharLen(i),s=/^[A-Za-z0-9]+$/,a=e.next().find("em");""==i?(a.prev().remove(),a.before(s2),cu=!1):n>12?(a.prev().remove(),a.before(s2),cu=!1):s.test(i)?(a.prev().remove(),a.before(s1),cu=!0):(a.prev().remove(),a.before(s2),cu=!1)},e.checkpsd=function(){var e=$("#password"),i=$.trim(e.val()),n=tools.getCharLen(i),s=/^[A-Za-z0-9]+$/,a=e.next().find("em");""==i?(a.prev().remove(),a.before(s2),cp=!1):n>12?(a.prev().remove(),a.before(s2),cp=!1):s.test(i)?(a.prev().remove(),a.before(s1),cp=!0):(a.prev().remove(),a.before(s2),cp=!1)},e.checkanswer=function(){var e=$("#answer"),i=$.trim(e.val()),n=tools.getCharLen(i),s=/^[\s\S]+$/,a=e.next().find("em");""==i?(a.prev().remove(),a.before(s2),ca=!1):n>40?(a.prev().remove(),a.before(s2),ca=!1):s.test(i)?(a.prev().remove(),a.before(s1),ca=!0):(a.prev().remove(),a.before(s2),ca=!1)}},TabForm=new function(){var e=this;e.printNian=function(){for(var e=$(".biaodannian"),i="",n=1930;2001>n;n++)i+='<li value="'+n+'">'+n+"</li>";e.html(i)},e.printYue=function(){var e=$(".biaodanyue"),n="";for(i=1;13>i;i++)n+='<li value="'+i+'">'+i+"</li>";e.html(n)},e.printRi=function(){var e=$(".biaodanri"),n="";for(i=1;32>i;i++)n+='<li value="'+i+'">'+i+"</li>";e.html(n)},e.showItem=function(e,n){var s=$("."+n),a=$(e);"none"==s.css("display")&&s.css("display","block"),s.focus(),s.blur(function(){s.css("display","none")}),s.find("li").unbind("click"),s.find("li").bind("click",function(){var e=$(this).html();if("biaodanyue"==n){var t="";if($("#day").attr("value",1),$("#day>label").find("em").html(1),4==e||6==e||9==e||11==e)for(i=1;31>i;i++)t+='<li value="'+i+'">'+i+"</li>";else if(2==e)for(i=1;29>i;i++)t+='<li value="'+i+'">'+i+"</li>";else for(i=1;32>i;i++)t+='<li value="'+i+'">'+i+"</li>";$(".biaodanri").html(t),a.find("label>em").html(e),a.attr("value",e)}else if("biaodanarea"==n){var r=$(this).parent().prev().find("li").html();a.find("label>em").eq(0).html(r),a.find("label>em").eq(1).html(e)}else a.find("label>em").html(e),a.attr("value",e);s.css("display","none")})},e.closeTip=function(){$(this).parent().parent().empty().remove(),document.location.href="http://www.baidu.com"}},LabelSelect=new function(){var e=this;e.delLabel=function(e){var i=$(e),n=i.parent().parent(),s=n.find("li").last();i.parent().remove(),n.parent().next().find("em").prev().remove(),"none"==s.css("display")&&s.css("display","block")},e.writeLabel=function(){var e=$("#yixuan"),i=e.parent().next().find("em"),n=e.find("li>input"),s=$.trim(n.val()),a=/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,t=tools.getCharLen(s),r=!0;if(""==s)layer.msg("标签内容不能为空",1),i.prev().remove();else if(t>10)layer.msg("内容过长",1),i.prev().remove(),i.before(s2);else if(a.test(s)){if(e.find("li").each(function(){return s==$(this).find("b").html()?(i.prev().remove(),i.before(s5),r=!1,layer.msg("标签重复了",1),!1):void 0}),r){i.prev().remove(),i.before(s1),n.val(""),n.parent().before("<li><b>"+s+'</b><em onclick="LabelSelect.delLabel(this)" class="delicon" ></em></li>');var l=e.find("li").length;l>8&&n.parent().css("display","none")}}else layer.msg("格式错误",1),i.prev().remove(),i.before(s2)},e.selLabel=function(e){var i=$(e).html(),n=$("#yixuan"),s=n.find("li").last(),a=n.parent().next().find("em"),t=!0;if("block"==s.css("display")){if(n.find("li").each(function(){var e=$(this).find("b").html();return i==e?(layer.msg("该标签已存在",1),a.prev().remove(),a.before(s5),t=!1,!1):void 0}),t){a.prev().remove(),a.before(s1),n.find("li").last().before("<li><b>"+i+'</b><em onclick="LabelSelect.delLabel(this)" class="delicon"></em></li>');var r=n.find("li").length;r>8&&n.find("li").last().css("display","none")}}else a.prev().remove(),a.before(s6)}},SlideShow=new function(){var e=this;e.headSlide=function(e){var i=$(e).parent();i.find("img").stop().animate({left:"0px",opacity:0,width:0,height:0},"slow",function(){}),i.find("span").stop().animate({left:"0px",opacity:1,width:"933px",height:"217px"},"slow",function(){i.find("span").css("display","block")})},e.backSlide=function(e){var i=$(e).parent();i.find("span").stop().animate({left:"0px",opacity:0,width:0,height:0},"slow",function(){}),i.find("img").stop().animate({left:"0px",opacity:1,width:"933px",height:"210px"},"slow",function(){i.find("img").css("display","block")})},e.sumSlide=function(e){var i=$(e),n=i.parent(),s=i.index();n.find("em").css("display","none"),i.find("em").css("display","block"),n.prev().find("img").css("display","none"),n.prev().find("img").eq(s).css("display","block")}},SearchTab=new function(){var e=this;e.searchMember=function(e,i){var n=$("."+e),s=$(i);"none"==n.css("display")?n.css("display","block"):n.css("display","none"),n.focus(),n.unbind(),n.find("li").unbind(),setTimeout(function(){n.bind("blur",function(){n.css("display","none")})},50),n.find("li").bind("click",function(){s.find("i").html($(this).html()),n.css("display","none")})}};