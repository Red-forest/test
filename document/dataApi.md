
��̨���ݿ��������
=====
###article��
> ���±� article
>
> int        id             //���
>
> String     name  50       //����

> String     img   50       //ͼƬ

> max        content        //����

> String     brief   1000   //��Ҫ

> int        typesid        //��ĿID

> int        count          //�����

> int        reco           //�Ƽ�

> time       addtime        //���ʱ��

> int       uid   //������id

```javascript
/****
 * �������
 * /
 
 article.create = function(articleInfo, callback) {
 
 }
 /*
  * ͨ��id��ȡ����
  * /
 article.getById = function(id, fields, callback) {
 
 }
 /*
  * ��������,�˴�������������ĸ���
  * /
 article.update = function(articleInfo, callback) {
 
 }
 
 /**
  * �������µ����
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
###users��
> ���±� users
>
> int        id             //���
>
> String     name  50       //����

> String     pwd   50       //���� sha1����

> String        email        //�ʼ�


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
ģ���
====

> ģ����� template

> int        id             //���

> String     name  50       //����

> String     path  50       //·��

> int        styleid        //���ID

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

��Ŀ types
======

> int       id              //���

> int       pid             //��ĿID

> String    name  50        //����

> String    ename 50        //Ӣ������

> String    brief   1000    //��Ҫ

> int       tempid          //ģ��ID

> int       templistid    //�б�ģ��ID

> int       weight          //Ȩ��


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