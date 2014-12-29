 /**
 *--------------------------------------------------------
 * 数据库操作
 * @Author: 海涛(iheetao@126.com)
 * @Date: 14-11-21 下午2:01
 *--------------------------------------------------------
 */

var types = {},
    db = require('../../lib/sqlite.js');

	
//获取数据
types.getById = function (id, fields, callback) {
    db.get("SELECT " + fields + " FROM types WHERE id = $id", id, function(err, rows) {
		callback(err, rows);
    });
}


//更新数据
types.update = function (typesInfo, callback) {
    db.run("UPDATE types SET pid = $pid, name = $name, ename = $ename, brief = $brief, tempid = $tempid, templistid = $templistid, weight = $weight WHERE id = $id", typesInfo, function(err, rows) {
		callback(err, rows);
    });
}

//page types by parent id
types.pageByPid = function (pid, fields, callback) {
    db.all("SELECT " + fields + " FROM types where pid = $pid ORDER BY weight desc,id desc", pid, function(err, rows) {
		callback(err, rows);
    });
}

//添加数据
types.create = function (typesInfo, callback) {
    db.run("INSERT INTO types (pid, name, ename, brief, tempid, templistid, weight) VALUES ($pid, $name, $ename, $brief, $tempid, $templistid, $weight)", typesInfo, function(err, rows) {
		callback(err, rows);
    });
}

//删除数据
types.delete = function (typesInfo, callback) {
    db.run("DELETE FROM types WHERE id = $id", typesInfo, function(err, rows) {
		callback(err, rows);
    });
}

module.exports = types;


