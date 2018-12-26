SET NAMES UTF8;
DROP DATABASE IF EXISTS myself;
CREATE DATABASE myself CHARSET=UTF8;
USE myself;

#用户表
CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(8),
    upwd VARCHAR(50),
    email VARCHAR(32)
);

#留言表
CREATE TABLE message(
     mid INT PRIMARY KEY AUTO_INCREMENT,
     mTime DATETIME,
     mContent NVARCHAR(150),
     mName VARCHAR(8),
     mUid  INT
);


INSERT INTO user VALUES
(1,'cyf',md5('123456'),'cyf@qq.com'),
(NULL,'lsj',md5('123456'),'lsj@qq.com'),
(NULL,'fxy',md5('123456'),'fxy@qq.com'),
(NULL,'jy',md5('123456'),'jy@qq.com'),
(NULL,'cyb',md5('123456'),'cyb@qq.com'),
(NULL,'yxn',md5('123456'),'yxn@qq.com'),
(NULL,'cfx',md5('123456'),'cfx@qq.com'),
(NULL,'lwh',md5('123456'),'lwh@qq.com');

INSERT INTO message VALUES
(NULL,'2018-12-15','欢迎各位来到留言板页面，本人是一枚程序员，此网站是我个人开发的，图片资源都是以前拍过的艺术照，然后简单的处理了以下。我叫蔡云飞，1997年9月5日！','cyf',1),
(NULL,'2018-12-15','欢迎各位来到留言板页面，本人是一枚程序员，此网站是我个人开发的，图片资源都是以前拍过的艺术照，然后简单的处理了以下。我叫蔡云飞，1997年9月5日！','lsj',2),
(NULL,'2018-12-15','欢迎各位来到留言板页面，本人是一枚程序员，此网站是我个人开发的，图片资源都是以前拍过的艺术照，然后简单的处理了以下。我叫蔡云飞，1997年9月5日！','cyb',3),
(NULL,'2018-12-15','欢迎各位来到留言板页面，本人是一枚程序员，此网站是我个人开发的，图片资源都是以前拍过的艺术照，然后简单的处理了以下。我叫蔡云飞，1997年9月5日！','yxn',4),
(NULL,'2018-12-15','欢迎各位来到留言板页面，本人是一枚程序员，此网站是我个人开发的，图片资源都是以前拍过的艺术照，然后简单的处理了以下。我叫蔡云飞，1997年9月5日！','fxy',5),
(NULL,'2018-12-15','欢迎各位来到留言板页面，本人是一枚程序员，此网站是我个人开发的，图片资源都是以前拍过的艺术照，然后简单的处理了以下。我叫蔡云飞，1997年9月5日！','jy',6),
(NULL,'2018-12-15','欢迎各位来到留言板页面，本人是一枚程序员，此网站是我个人开发的，图片资源都是以前拍过的艺术照，然后简单的处理了以下。我叫蔡云飞，1997年9月5日！','lwh',7),
(NULL,'2018-12-15','欢迎各位来到留言板页面，本人是一枚程序员，此网站是我个人开发的，图片资源都是以前拍过的艺术照，然后简单的处理了以下。我叫蔡云飞，1997年9月5日！','cfx',8);