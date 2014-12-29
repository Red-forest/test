
var messages = {},
    db = require('../../lib/sqlite.js');

//，获取数据
messages.get = function (JSON, fields, callback) {
    db.get("SELECT " + fields + " FROM messages WHERE id = $id", JSON, function(err, rows) {
		callback(err, rows);
    });
}

//更新数据
messages.update = function (JSON, callback) {
    db.run("UPDATE messages SET name=$name,ipone=$ipone,sex=$sex,age=$age,address=$address,email=$email,content=$content WHERE id = $id", JSON, function(err, rows) {
		callback(err, rows);
    });
}

//翻页操作
messages.turnpage = function (JSON, fields, callback) {
    db.all("SELECT " + fields + " FROM messages where id >= $num ORDER BY id desc limit $limit", JSON, function(err, rows) {
		callback(err, rows);
    });
}

//添加数据
messages.create = function (JSON, callback) {
    db.run("INSERT INTO messages (name,ipone,sex,age,address,email,content) VALUES ($name,$ipone,$sex,$age,$address,$email,$content)", JSON, function(err, rows) {
		callback(err, rows);
    });
}

module.exports = messages;

























