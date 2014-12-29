/**
 * --------------------------------------------------------
 * 功能描述 log4日志操作
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-7-28 下午4:49
 * --------------------------------------------------------
 */
var log4js=require('log4js'),
    config=require('../config/config.js');

log4js.configure({//log4js配置
    "appenders": [{//控制台输出
            type:"console",
            category: "console"
        },{//文件输出
            "type": "file",
            "filename": '../logs/log.log',
            "maxLogSize":config.logMaxSize,
            "backups":config.logFileNum,
             "category": 'logger'
        }
    ],
    replaceConsole: true,//替换console.log
    lerels:{
        dateFileLog:'INFO'
    }
})//日志的配置

var dateFileLog = log4js.getLogger('dateFileLog');
exports.logger = dateFileLog;

exports.use = function(app) {
    //页面请求日志,用auto的话,默认级别是WARN
    //app.use(log4js.connectLogger(dateFileLog, {level:'auto', format:':method :url'}));
    app.use(log4js.connectLogger(dateFileLog, {level:'debug', format:':method :url'}));
}