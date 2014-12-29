/**
 * --------------------------------------------------------
 * 功能描述 表单模拟处理函数
 * @Version 0.5
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-6-16 上午11:51
 * --------------------------------------------------------
 */
var search = new function() {
	var _self = this;
	/**
	 * 下拉
	 * @param obj
	 * @param dropObj
	 * @param bigObj 若存在，则改变obj的值，同时会影响到bigObj的值
	 */
	_self.dropDown = function(obj, dropObj, bigObj, dropObjBig, max) {
		var o = $(obj);//点击对象
		var od = $(dropObj);//下拉对象
		var op = o.parent();//点击对象的父对象
		var opOffset = op.offset();
		var offset = o.offset();

		//alert(od.html());
		//var left = offset.left - opOffset.left;
		//var top = offset.top - opOffset.top;

		od.css({
			'display': 'block'
			//'left': left + 'px',
			//'top': top + 'px'
		}).focus();

		od.find('li').unbind().bind('click', function() {//下拉绑定点击事件
			var ot = $(this);
			o.find('label').html(ot.text());
			o.attr('value',ot.attr('val'));
			od.css('display','none');
			var value1 = o.attr('value1');
			if(value1 != undefined && value1 != o.attr('value')) {
				docEdit.update(o);
			}

			if(bigObj != undefined) {
				var label = $(bigObj).find('label');
				var min = parseInt(ot.text());
				if(parseInt(label.text()) < min) {//存在大小关系
					label.text(min).attr('value',min);

					var li = '';
					for(var i = min;i<= max; i++) {
						li += '<li val="' + i + '">' + i + '</li>';
					}
					$(dropObjBig).html(li);

				}
			}
		});
		od.bind('blur', function() {
			od.css('display','none');
		});
	}
	/**
	 * 存在大小关系的下拉
	 * @param obj
	 * @param textObj 比较对象的文本框
	 * @param dropObj textObj弹出的下拉的对象
	 * @param dropObjBig 弹出的下拉的对象
	 * @param max 最大值
	 */
	_self.dropDownRel = function(obj, textObj, dropObj, dropObjBig, max) {
		var o = $(obj);
		var min = parseInt($(textObj + '> label').text());
		var li = '';
		for(var i = 20;i<= max; i++) {
			li += '<li val="' + i + '">' + i + '</li>';
		}
		$(dropObj).html(li);
		$(dropObjBig).html(li);

		//更新后面的值
		//if(parseInt(o.text()) < min) {
		//o.text(min);
		//}

		$(textObj).on('click', function() {search.dropDown(textObj, dropObj, obj, dropObjBig, max);});//绑定下拉事件
		$(obj).on('click', function() {search.dropDown(obj, dropObjBig);});//绑定下拉事件
	}
	/**
	 * 复选框
	 * @param obj
	 * @param choose  选中的class
	 * @param normal  非选中的class
	 */
	_self.checkBox = function(obj, choose, normal) {
		var o = $(obj);
		var cl = o.attr('class');
		if(cl.indexOf(choose) > -1) {
			o.removeClass(choose).addClass(normal);
			o.attr('value','0');
		}
		else {
			o.removeClass(normal).addClass(choose);
			o.attr('value','1');
		}
	}
	/**
	 * 文本输入框的处理
	 */
	_self.input = function(obj) {
		$(obj).find('input').bind('click', function() {
			 if($(this).val().indexOf('不限') > -1) {
				 $(this).val('');
			 }
		});
	}
	/**
	 * 获取所有的筛选条件,文本
	 * @param obj
	 * @param inputClass
	 */
	_self.getWhere = function(obj) {
		var s = '';
		$(obj).find('label').each(function() {
			s += $(this).text() +' / ';
		});
		s = s.substring(0, s.length - 3);
		return s;
	}
	/**
	 * 得到程序级的筛选条件,键值对为：name="", value=""
	 * @param obj
	 */
	_self.getFilter = function(obj) {
		var s = '';
		var value = '';
		$(obj).find('.input').each(function() {
			value = $(this).attr('value');
			if(value.indexOf('不限') > -1) {
				value = '';
			}
			s += $(this).attr('name') + '=' + value + '&';
		});
		if(s != '') {
			s = s.substring(0, s.length-1);
		}
		return s;
	}
	/**
	 * 获取csrf字符串
	 * * @param isparent 是否子窗口获取父窗口
	 * @returns {*|jQuery}
	 */
	_self.getCsrf = function(isparent) {
		return '&_csrf=' + $('#csrf').val();
	}
}