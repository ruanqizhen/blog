---
title: "使用 Google 桌面的一点感想"
date: "2006-05-18"
tags: 
  - "码农札记"
---

    我们公司有很多软件和文件在公司的几台文件服务器上。经常有人需要安装一个软件时，不知道上哪去找。如果要根据文件内容找到一个以前放置在服务器上的文件就更困难了。

    我们公司的 Email 系统使用的是 Lotus Notes，它的数据过搜索功能非常差，比如一些我们常用的数据库，只允许搜索每个项目标题中出现的文字。如果只知道一个项目大致内容，不知道标题，就没办法把它搜索出来。

  
   使用 Google Desktop 企业版基本上可以解决我们所遇到的问题了。 Google Desktop 可以为所有本地盘符下的文件和指定的网路路经下的文件建立索引，使用户快速找到需要的文件。可以解析文件内容。可以检索 Lotus Notes 邮件，数据库。  
    但是它也有一些缺点，比如：每个用户都需要自己安装一份，并设置需要抓取的网络路经。索引文件是比较大的，一般有几个G，需要占用每个用户的硬盘。当很多用户设置抓取网络路经后，会大大增加服务器和网络的负担。不能检索服务器上的没有在Windows下共享的 Notes 数据库。

  
   我觉得一个可行的改进措施是公司IT部门利用 Google Desktop 提供的 API 做一些针对性地开发。比如在在某一台服务器上设置搜索引擎，负责抓取我们本地所有文件服务器上的文件，和公共的 Lotus Notes 数据库。员工可以利用浏览器访问这台服务器查询搜索结果。
