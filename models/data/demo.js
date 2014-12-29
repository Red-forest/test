
var demo = {},
    db = require('../../lib/sqlite.js');

//，获取数据
demo.get = function (JSON, fields, callback) {
    db.get("SELECT " + fields + " FROM user WHERE name = $name", JSON, function(err, rows) {
		callback(err, rows);
    });
}

//更新数据
demo.update = function (JSON, callback) {
    db.run("UPDATE user SET age = $age WHERE name = $name", JSON, function(err, rows) {
		callback(err, rows);
    });
}

//翻页操作
demo.turnpage = function (JSON, fields, callback) {
    db.all("SELECT " + fields + " FROM user where age >= $num ORDER BY age desc limit $limit", JSON, function(err, rows) {
		callback(err, rows);
    });
}

//添加数据
demo.create = function (JSON, callback) {
    db.run("INSERT INTO user (name, age, sex, hobby) VALUES ($name,$age,$sex,$hobby)", JSON, function(err, rows) {
		callback(err, rows);
    });
}

module.exports = demo;

























