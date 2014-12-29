
后台数据库基本操作
=====
###article表
> 文章表 article
>
> int        id             //编号
>
> String     name  50       //名称

> String     img   50       //图片

> max        content        //内容

> String     brief   1000   //概要

> int        typesid        //栏目ID

> int        count          //点击率

> int        reco           //推荐

> time       addtime        //添加时间

> int       uid   //发布人id

```javascript
/****
 * 添加文章
 * /
 
 article.create = function(articleInfo, callback) {
 
 }
 /*
  * 通过id获取文章
  * /
 article.getById = function(id, fields, callback) {
 
 }
 /*
  * 更新文章,此处不包含点击量的更新
  * /
 article.update = function(articleInfo, callback) {
 
 }
 
 /**
  * 更新文章点击量
  * /
 article.updateCount = function(id, callback) {

 }
 
 article.page = function(nodeid, fields, reoc, sort, cp, mp, callback) {
    s = select fields,b.name,c.name from article as a,user as b,node as c 
    where a.uid=b.id and a.nodeid = c.id and a.nodeid = nodeid   
    
    if  reco
      s += and a.reco = reco
      
    s += sort
    
    s += skip (cp-1)*mp
    s += limt mp  
    
      
    
 }
 
 
```
###users表
> 文章表 users
>
> int        id             //编号
>
> String     name  50       //名称

> String     pwd   50       //密码 sha1加密

> String        email        //邮件


```javascript
/****
 * create user
 * /
 
 users.create = function(userInfo, callback) {
 
 }
 /*
  * get userInfo by id
  * /
 users.getById = function(id, fields, callback) {
 
 }
 /**
  * get userInfo by user name
 user.getByName = function(name, fields, callback) {
 
 }
 /*
  * update user,except password
  * /
 users.update = function(usersInfo, callback) {
 
 }
 
 /**
  * page user list
  * /
 users.page = function(fields, cp, mp, callback) {
   
    
 }
 
 
```
模板表
====

> 模板管理 template

> int        id             //编号

> String     name  50       //名称

> String     path  50       //路径

> int        styleid        //类别ID

```javascript
/****
 * create template
 * /
 
 template.create = function(templateInfo, callback) {
 
 }
 /*
  * get templateInfo by id
  * /
 template.getById = function(id, fields, callback) {
 
 }
 /**
  * page templateInfo by template type
  */
 template.pageByType = function(name, fields, callback) {
 
 }
 /*
  * update template,except path
  * /
 template.update = function(templateInfo, callback) {
 
 }
 
 /**
  * page template list
  * /
 template.page = function(fields, cp, mp, callback) {
   
    
 }
 
 
```

栏目 types
======

> int       id              //编号

> int       pid             //栏目ID

> String    name  50        //名称

> String    ename 50        //英文名称

> String    brief   1000    //概要

> int       tempid          //模板ID

> int       templistid    //列表模板ID

> int       weight          //权重


```javascript
/****
 * create article types
 * /
 
 types.create = function(typesInfo, callback) {
 
 }
 /*
  * get typesInfo by id
  * /
 types.getById = function(id, fields, callback) {
 
 }
 /**
  * page typesInfo by pid
  * /
 types.pageByPid = function(pid, fields, callback) {
 
 }
 /*
  * update types,except pid
  * /
 types.update = function(typesInfo, callback) {
 
 }
 
 
```