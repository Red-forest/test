
/**
 *--------------------------------------------------
 * 数据库操作
 * @Author: 海涛(iheetao@126.com)
 * @Date: 14-11-24 下午10:32
 *--------------------------------------------------
 */

var article = {},
    db = require('../../lib/sqlite.js');

//获取数据
article.getById = function (id, fields, callback){
	db.get("SELECT " + fields + " FROM article WHERE id = $id", id, function (err, rows) {
		callback(err, rows);
	});
}

//更新数据
article.update = function (articleInfo, callback) {
	db.run("UPDATE article SET name = $name, img = $img, content = $content, brief = $brief, typesid = $typesid, count = $count, reco = $reco, addtime = $addtime, uid = $uid WHERE id = $id", articleInfo, function (err, rows) {
		callback(err, rows);
	});
}

//更新点击率
article.updateCount = function (id, callback) {
	db.run("UPDATE article SET count = count + 1 WHERE id = $id", id, function (err, rows) {
		callback(err, rows);
	});
}


//page操作
article.page = function (typesid, field, reco, sort, cp, mp, callback) {

	var sql = "SELECT " + field + ", b.name as username, c.name as typename FROM article as a, users as b, types as c WHERE a.uid = b.id AND a.typesid = c.id AND a.typesid = $typesid ";
	
	if(reco != 0) {
		sql += " AND reco = $reco";
	}
	
	sql += " AND typesid >= $cp ORDER BY $sort DESC LIMIT $mp"
	
	console.log(sql);
	
	db.all(sql, {
			"$typesid": 4,	
			"$reco": 1,	
			"$sort": 'id',
			"$cp":1,
			"$mp": 2	
		}, function (err, rows) {
		callback(err, rows);
	});
}


//添加数据
article.create = function (articleInfo, callback) {
	db.run("INSERT INTO article (name, img, content, brief, typesid, count, reco, addtime, uid) VALUES ($name, $img, $content, $brief, $typesid, $count, $reco, $addtime, $uid)", articleInfo, function (err, rows) {
		callback(err, rows);
	});
}


//删除数据
article.del = function (articleInfo, callback) {
    db.run("DELETE FROM article WHERE id = $id", articleInfo, function(err, rows) {
		callback(err, rows);
    });
}


module.exports = article;




