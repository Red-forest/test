layer.use("skin/layer.ext.css",function(){layer.ext&&layer.ext()}),layer.extv="1.3",layer.prompt=function(t,e,i){var a={},t=t||{},n={area:["auto","auto"],offset:[t.top||"200px",""],title:t.title||"信息",dialog:{btns:2,type:-1,msg:'<input type="'+function(){return 1===t.type?"password":2===t.type?"file":"text"}()+'" class="xubox_prompt xubox_form" id="xubox_prompt" value="" />',yes:function(i){var n=a.prompt.val();""===n?a.prompt.focus():n.replace(/\s/g,"").length>(t.length||1e3)?layer.tips("最多输入"+(t.length||1e3)+"个字数","#xubox_prompt",2):(layer.close(i),e&&e(n))},no:i},success:function(){a.prompt=$("#xubox_prompt")}};return 3===t.type&&(n.dialog.msg='<textarea class="xubox_prompt xubox_form xubox_formArea" id="xubox_prompt"></textarea>'),$.layer(n)},layer.tab=function(t){var t=t||{},e=t.data||[],i={type:1,border:[0],area:["auto","auto"],title:!1,shade:t.shade,offset:t.offset,move:[".xubox_tabmove",!0],closeBtn:!1,page:{html:'<div class="xubox_tab" style="'+function(){return t.area=t.area||[],"width:"+(t.area[0]||"500px")+"; height:"+(t.area[1]||"300px")+'">'}()+'<span class="xubox_tabmove"></span><div class="xubox_tabtit">'+function(){var t=e.length,i=1,a="";if(t>0)for(a='<span class="xubox_tabnow">'+e[0].title+"</span>";t>i;i++)a+="<span>"+e[i].title+"</span>";return a}()+'</div><ul class="xubox_tab_main">'+function(){var t=e.length,i=1,a="";if(t>0)for(a='<li class="xubox_tabli xubox_tab_layer">'+(e[0].content||"content未传入")+"</li>";t>i;i++)a+='<li class="xubox_tabli">'+(e[i].content||"content未传入")+"</li>";return a}()+'</ul><span class="xubox_tabclose" title="关闭">X</span></div>'},success:function(t){var e=$(".xubox_tabtit").children(),i=$(".xubox_tab_main").children(),a=$(".xubox_tabclose");e.on("click",function(){var t=$(this),e=t.index();t.addClass("xubox_tabnow").siblings().removeClass("xubox_tabnow"),i.eq(e).show().siblings().hide()}),a.on("click",function(){layer.close(t.attr("times"))})}};return $.layer(i)},layer.photos=function(t){t=t||{};var e={imgIndex:1,end:null,html:$("html")},i=$(window),a=t.json,n=t.page;if(a){var r=a.data;if(1!==a.status)return void layer.msg("未请求到数据",2,8);if(e.imgLen=r.length,!(r.length>0))return void layer.msg("没有任何图片",2,8);e.thissrc=r[a.start].src,e.pid=r[a.start].pid,e.imgsname=a.title||"",e.name=r[a.start].name,e.imgIndex=a.start+1}else{var s=$(n.parent).find("img"),o=s.eq(n.start);e.thissrc=o.attr("layer-img")||o.attr("src"),e.pid=o.attr("pid"),e.imgLen=s.length,e.imgsname=n.title||"",e.name=o.attr("layer-pname"),e.imgIndex=n.start+1}var l={type:1,border:[0],area:[(t.html?915:600)+"px","auto"],title:!1,shade:[.9,"#000",!0],shadeClose:!0,offset:["25px",""],bgcolor:"",page:{html:'<div class="xubox_bigimg"><img src="'+e.thissrc+'" alt="'+(e.name||"")+'" layer-pid="'+(e.pid||"")+'"><div class="xubox_imgsee">'+function(){return e.imgLen>1?'<a href="" class="xubox_iconext xubox_prev"></a><a href="" class="xubox_iconext xubox_next"></a>':""}()+'<div class="xubox_imgbar"><span class="xubox_imgtit"><a href="javascript:;">'+e.imgsname+" </a><em>"+e.imgIndex+"/"+e.imgLen+"</em></span></div></div></div>"+function(){return t.html?'<div class="xubox_intro">'+t.html+"</div>":""}()},success:function(i){e.bigimg=i.find(".xubox_bigimg"),e.imgsee=e.bigimg.find(".xubox_imgsee"),e.imgbar=e.imgsee.find(".xubox_imgbar"),e.imgtit=e.imgbar.find(".xubox_imgtit"),e.layero=i;var a=e.imgs=e.bigimg.find("img");clearTimeout(e.timerr),e.timerr=setTimeout(function(){$("html").css("overflow","hidden").attr("layer-full",e.index)},10),a.load(function(){e.imgarea=[a.outerWidth(),a.outerHeight()],e.resize(i),t.success&&t.success(t)}),e.event()},end:function(){layer.closeAll(),e.end=!0}};return e.event=function(){e.bigimg.hover(function(){e.imgsee.show()},function(){e.imgsee.hide()}),l.imgprev=function(){e.imgIndex--,e.imgIndex<1&&(e.imgIndex=e.imgLen),e.tabimg()},e.bigimg.find(".xubox_prev").on("click",function(t){t.preventDefault(),l.imgprev()}),l.imgnext=function(){e.imgIndex++,e.imgIndex>e.imgLen&&(e.imgIndex=1),e.tabimg()},e.bigimg.find(".xubox_next").on("click",function(t){t.preventDefault(),l.imgnext()}),$(document).keyup(function(t){if(!e.end){var i=t.keyCode;t.preventDefault(),37===i?l.imgprev():39===i?l.imgnext():27===i&&layer.close(e.index)}}),e.tabimg=function(){var t,i,n;if(e.imgs.removeAttr("style"),a){var o=r[e.imgIndex-1];t=o.src,i=o.pid,n=o.name}else{var l=s.eq(e.imgIndex-1);t=l.attr("layer-img")||l.attr("src"),i=l.attr("layer-pid")||"",n=l.attr("layer-pname")||""}e.imgs.attr({src:t,"layer-pid":i,alt:n}),e.imgtit.find("em").text(e.imgIndex+"/"+e.imgLen),e.imgsee.show()}},e.resize=function(a){var n={},r=[i.width(),i.height()];n.limit=r[0]-r[0]/r[1]*(60*r[0]/r[1]),n.limit<600&&(n.limit=600);var s=[n.limit,r[1]>400?r[1]-50:400];s[0]=t.html?s[0]:s[0]-300,layer.area(e.index,{width:s[0]+(t.html?15:0),height:s[1]}),n.flwidth=s[0]-(t.html?300:0),e.imgs.css(e.imgarea[0]>n.flwidth?{width:n.flwidth}:{width:e.imgarea[0]}),e.imgs.outerHeight()<s[1]&&e.imgs.css({top:(s[1]-e.imgs.outerHeight())/2}),e.imgs.css({visibility:"visible"}),e.bigimg.css({width:n.flwidth,height:s[1],"background-color":t.bgcolor}),t.html&&a.find(".xubox_intro").css({height:s[1]}),n=null,r=null,s=null},i.on("resize",function(){e.end||(e.timer&&clearTimeout(e.timer),e.timer=setTimeout(function(){e.resize(e.layero)},200))}),e.index=$.layer(l),e.index},layer.photosPage=function(t){t=t||{},$(t.parent).find("img").each(function(e){$(this).on("click",function(){$(this);layer.photos({html:t.html,success:t.success,page:{title:t.title,id:t.id,start:e,parent:t.parent}})})})};