function loadtemp(e){var n="/manage/"+e,c=new EJS({url:n}).render();$("#info-toggle").html(c)}var bpUI=new function(){var e=this;e.logOut=function(e){$(e).click(function(){document.cookie="user=;expires="+new Date(0),document.location.href="/manage"})},e.showLi=function(e){var n=e.attr("out1"),c=e.attr("out2");$(".index-show-ul").css({display:"none"}),$(".click-left-1").css({display:"block"}),$(".click-left-2").css({display:"block"}),$("#"+n).css({display:"block"}),$("#"+c).css({color:"yellow"})},e.showSpan=function(e){var n=e.attr("out");e.index()<2?($(".click-left-1").css({display:"none"}),$(".click-left-1 span").removeAttr("style"),$(".click-left-2").css({display:"none"}),$(".click-left-2-3").removeAttr("style"),$(".click-left-2 li").removeAttr("style"),$("#info-toggle div").removeAttr("style"),$(".index-info").removeAttr("style"),$(".index-show-ul").css({display:"block"})):($(".click-left-1 span").removeAttr("style"),$(".click-left-2-3").removeAttr("style"),$(".index-info").removeAttr("style"),$("#"+n).css({display:"block"}),e.css({color:"yellow"}))},e.showSecondLi=function(e){var n=$(".click-left-2-3 li");n.removeAttr("style"),e.css({color:"red"}),$("#info-toggle div").removeAttr("style"),$(".index-info").css({display:"none"})},e.choiceAll=function(){var e=$(".main-liuyan-1 em").eq(0).children("span").eq(0),n=e.attr("class"),c="glyphicon glyphicon-check",i="glyphicon glyphicon-unchecked";n==i?(e.attr("class",c),$(".main-liuyan-4 em").attr("class",c)):(e.attr("class",i),$(".main-liuyan-4 em").attr("class",i))},e.choiceOne=function(e){var n="glyphicon glyphicon-check",c=e.attr("class");c==n?e.attr("class","glyphicon glyphicon-unchecked"):e.attr("class","glyphicon glyphicon-check")},e.del=function(){var e=$(".main-liuyan-4 em").hasClass("glyphicon-check"),n=$(".main-liuyan-4 em").filter(".glyphicon-check");e&&n.parent().remove()},e.city=function(e){var n=e.text();$(".dropdown button").html(n+' <span class="caret"></span>')},e.firstPage=function(e){var n=e.text(),c=e.parent().siblings();c.html(n+' <span class="caret"></span>')},e.p_out=function(){var e=parseInt($(".main-liuyan-1 em").eq(1).text()),n=parseInt($(".main-liuyan-1 em").eq(2).text());e==n&&$(".main-liuyan-4 p").css({display:"block"})},e.userRecoShow=function(){$.ajax({type:"POST",url:"/manage/userReco/page",data:"&city=全部",dataType:"JSON",success:function(e){for(var n=0;n<e.length;n++)$(".main-liuyan-4 ul").prepend('<li><em class="glyphicon glyphicon-unchecked" _id='+e[n]._id+"></em><span>"+e[n].nickname+"</span><span>"+e[n].city+" </span></li>");$(".main-liuyan-4 em").bind("click",function(){bpUI.choiceOne($(this))})}})}},bpLayer=new function(){var e=this;e.iframe=function(e,n,c,i){$.layer({type:2,maxmin:!1,shadeClose:!1,title:c,shade:[.5,"#ccc"],offset:["150px",""],area:[e+"px",n+"px"],iframe:{src:i,scrolling:"no"}})}};bpUI.logOut(".index-logout"),$(".index-show-ul li").bind("click",function(){bpUI.showLi($(this))}),$(".click-left-1 span").bind("click",function(){bpUI.showSpan($(this))}),$(".click-left-2-3 li").bind("click",function(){bpUI.showSecondLi($(this))});