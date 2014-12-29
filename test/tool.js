/**
 * --------------------------------------------------------
 * 功能描述
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-9-17 下午6:29
 * --------------------------------------------------------
 */
require('should');
var tools = require('../lib/tools.js');
var name = 'zhaojian';

describe("name", function() {
	 it("名称应该是zhaojian", function() {
		 tools.checkData.checkEmail('').should.equal(false);
	 });
});