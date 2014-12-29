
var modules = {},
    db = require('../../lib/sqlite.js');

//，获取数据
modules.get = function (JSON, fields, callback) {
    db.get("SELECT " + fields + " FROM modules WHERE id = $id", JSON, function(err, rows) {
		callback(err, rows);
    });
}

//更新数据
modules.update = function (JSON, callback) {
    db.run("UPDATE modules SET name = $name,content=$content WHERE id = $id", JSON, function(err, rows) {
		callback(err, rows);
    });
}

//翻页操作
modules.turnpage = function (JSON, fields, callback) {
    db.all("SELECT " + fields + " FROM modules where id >= $num ORDER BY id desc limit $limit", JSON, function(err, rows) {
		callback(err, rows);
    });
}

//添加数据
modules.create = function (JSON, callback) {
    db.run("INSERT INTO modules (name, content) VALUES ($name, $content)", JSON, function(err, rows) {
		callback(err, rows);
    });
}

module.exports = modules;

























