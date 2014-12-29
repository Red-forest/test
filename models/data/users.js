
 /**
 *--------------------------------------------------------
 * 数据库操作
 * @Author: 海涛(iheetao@126.com)
 * @Date: 14-11-21 下午2:01
 *--------------------------------------------------------
 */

var users = {},
    db = require('../../lib/sqlite.js');

//获取数据,by id
users.getById = function (id, fields, callback) {
    db.get("SELECT " + fields + " FROM users WHERE id = $id", id, function(err, rows) {
		callback(err, rows);
    });
}

//获取数据,by name
users.getByName = function (name, fields, callback) {
    db.get("SELECT " + fields + " FROM users WHERE name = $name", name, function(err, rows) {
		callback(err, rows);
    });
}

//更新数据
users.update = function (userInfo, callback) {
    db.run("UPDATE users SET name = $name, pwd = $pwd, email = $email WHERE id = $id", userInfo, function(err, rows) {
		callback(err, rows);
    });
}

//翻页操作
users.page = function (fields, cp, mp, callback) {
    db.all("SELECT " + fields + " FROM users where id >= $cp ORDER BY id desc limit $mp", {"$cp": cp, "$mp": mp}, function(err, rows) {
		callback(err, rows);
    });
}

//添加数据
users.create = function (userInfo, callback) {
    db.run("INSERT INTO users (name, pwd, email) VALUES ($name, $pwd, $email)", userInfo, function(err, rows) {
		callback(err, rows);
    });
}

//删除数据
users.delete = function (id, callback) {
    db.run("DELETE FROM users WHERE id = $id", id, function(err, rows) {
		callback(err, rows);
    });
}




module.exports = users;

























