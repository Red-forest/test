
module.exports = {
   //web属性配置
    listenPort:2119,//监听端口
    uploadFolder:'/tmp/upload', //文件上传的临时目录
    postLimit:1024*1024*100,//限制上传的postbody大小，单位byte
    webTitle:'witch',//网站标题
    staticMaxAge:604800000, //静态文件的缓存周期，建议设置为7天，单位毫秒
    md5Salt:'XDq-MW.Q',//供后端加密使用的盐
    keySalt:'H0UK*Lwd',//供前端加密使用的盐
    loginTimes:3,//登录次数，超出则锁定
    lockUserTime:1800,//锁定时间，单位秒
    webDomain:'192.168.1.202:3000',//网站主域名，用于判断Referer
//session配置
    sessionExpire:43200000, //session过期时间，12小时，ms
    clearSessionSetInteval:120000, //自动清理垃圾session时间，2小时
	  sessiconSecret: 'H0UK*Lwd', //session加密密匙
//mongodb 配置
    MongodbConnectString:'mongodb://127.0.0.1:27017/test?safe=true&wtimeoutMS=2000&maxPoolSize=15', //MongoDB连接字符串
//redis配置
    redisPort:'6379',
    redisIp:'192.168.1.117',
    redisMaxPoll:500,//redis最大连接池
    redisTimeOut:600000,//连接过期时间，过期连接将被删除//单位ms//现在定义为10分钟
    redisDataBase:0,//默认使用的redis数据库下标，默认从0开始
	//sqlite配置
    sqliteDB:'sqlite3.db'
}