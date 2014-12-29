
/**
 *--------------------------------------------------
 * 数据库操作
 * @Author: 海涛(iheetao@126.com)
 * @Date: 14-11-24 下午10:32
 *--------------------------------------------------
 */

var template = {},
    db = require('../../lib/sqlite.js');

//，获取数据
template.getById = function (id, fields, callback) {
    db.get("SELECT " + fields + " FROM template WHERE id = $id", id, function(err, rows) {
		callback(err, rows);
    });
}

//更新数据
template.update = function (templateInfo, callback) {
    db.run("UPDATE template SET name = $name, path = $path, styleid = $styleid  WHERE id = $id", templateInfo, function(err, rows) {
		callback(err, rows);
    });
}

//翻页操作
template.page = function (fields, cp, mp, callback) {
    db.all("SELECT " + fields + " FROM template where id >= $cp ORDER BY id desc limit $mp", {"$cp": cp, "$mp": mp}, function(err, rows) {
		callback(err, rows);
    });
}

//类型翻页操作
template.pageByType = function (type, fields, callback) {
    db.all("SELECT " + fields + " FROM template WHERE stylelistid = $type", type, function(err, rows) {
		callback(err, rows);
    });
}


//添加数据
template.create = function (templateInfo, callback) {
    db.run("INSERT INTO template (name, path, styleid, stylelistid) VALUES ($name, $path, $styleid, $stylelistid)", templateInfo, function(err, rows) {
		callback(err, rows);
    });
}

//删除数据
template.del = function (templateInfo, callback) {
    db.run("DELETE FROM template WHERE id = $id", templateInfo, function(err, rows) {
		callback(err, rows);
    });
}


module.exports = template;

























