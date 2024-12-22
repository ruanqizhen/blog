---
title: "构建医院信息系统"
date: "2006-02-25"
tags: 
  - "我的文章"
---
```
**构建医院信息系统 （草稿）**

              **阮奇桢**

**摘　要：**

本文提供了一个构建中小型医院通用信息系统的解决方案。

## 一. 概述

### 1.      为什么要使用医院信息系统

医院信息系统将医院的管理思想、医院各部门的业务经验以及当今最新计算机技术的完美统一起来。运用医院信息系统将大大提高医院的整体效率，最大限度地发挥人力、物力资源，从而创造更大利润。医院的数据将全部保留，为临床循证管理决策提供科学数据。

对于管理者来说，医院信息系统将帮助他们快速、准确地掌握医院情况、从而消除管理漏洞、未经来做出准确决策和合理规划。

### 2.      通用信息系统组成

本文将要介绍的是一个较完整的面向中小型医院的通用信息系统。它覆盖了医院主要管理职能和病人在医院就诊的各主要环节。

该系统大致实现如下管理、运营等功能：

门诊部门的：收费、医生工作站、药房管理；

住院部门的：结算、药房划价、医生工作站、药房管理、病房医嘱管理；

医技工作站（放射、功能科等）；

药库：物流管理、财务管理；

其它设备、物资、固定资产等的管理；

人事部门：人事管理、工资系统；

针对病人的：病案管理、收费管理；

查询系统，等。

### 3.      系统设计要求

一个较为完善的医院信息管理系统用应满足以下要求：

在功能方面，医院信息系统需要满足医院三类用户的需求，即医院的领导和管理人员、各类医务人员和保障系统运行的系统管理人员。还需要为公众提供所需的查询服务。

实用性要求：需要符合我国医院实际操作流程的习惯，界面友好、易学易用。

技术先进：能够不间断服务，且高速、便捷。

安全可靠：能够保证数据安全，不收病毒、黑客的攻击。

模块化设计，具有良好的可扩充性，更新、升级方便。

信息共享、准确及时交流信息。

维护方便。

查询功能强大：可以对每个系统的业务情况、统计报表，在任意时间内进行汇总、查询，同时对几种情况可以任意组合查询、统计；院领导通过查询系统，可及时了解业务情况、财务情况。

## 二. 硬件体系结构

### 1.      总体结构

本系统将采用以太网技术，将全院构建为统一的局域网。

<table cellspacing="0" cellpadding="0" border="0"><tbody><tr style="height:39pt;"><td valign="top" width="516"><p><span lang="EN-US" style="font-size:14pt;line-height:150%;"><font color="#000000" size="3"></font></span></p></td></tr></tbody></table>

网络拓扑采用经典的“三层层次模型”和二层设计相结合的设计方法。在医院网络的核心层一级骨干的主交换机采用采用全冗余无单点故障的千兆路由交换机；主要服务其余各部门之间连接均采千兆骨干光纤接口以及及核心交换机间的均衡链路连接；部门内工作站，才有百兆以太网连接。

### 2.      硬件最低要求

数据库服务器：数量：2；CPU：Intel Pentium 4  2.4GHz；内存：1 GB；硬盘：120 G SCSI  RAID 5；

DICOM数据库服务器服务器：数量：1；CPU：Intel Pentium 4  2.4GHz；内存：1 GB；硬盘：400 G SCSI  RAID 5； 配光盘塔；

web服务器：数量：10；CPU：Intel Pentium 4  2.4GHz；内存：1 GB；硬盘：40 G SCSI；

客户端：数量：500；CPU：x86 兼容 500MHz；内存：256M；硬盘：40 G。

## 三. 软件体系结构

### 1.      总体结构

采用的是比较流行的三层的Browse/Server结构。这种结构将整个应用划分为三层：用户界面层、商业逻辑层和数据库层。用户界面层负责处理用户的输入和向用户的输出，但并不负责解释其含义，但进行合法性验证；商业逻辑层是上下两层的纽带，它用来建立实际的数据库连接，根据用户的请求生成SQL语句检索或更新数据库，并把结果返回给客户端，这一层以动态链接库的形式实现；数据库层负责实际的数据存储和检索。请参阅下图。

<table cellspacing="0" cellpadding="0" width="576" border="1"><tbody><tr style="height:139.75pt;page-break-inside:avoid;"><td valign="top" width="576"><p><span lang="EN-US"><font face="Times New Roman" color="#000000" size="3">&nbsp;</font></span></p><p><font face="Times New Roman" color="#000000" size="3"></font><span lang="EN-US"><font face="Times New Roman" color="#000000" size="3">&nbsp;</font></span></p><br><p><font face="Times New Roman" color="#000000" size="3"></font><span lang="EN-US"><font size="3"><font color="#000000"><font face="Times New Roman"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></font></font></font></span></p><p><font face="Times New Roman" color="#000000" size="3"></font><table cellspacing="0" cellpadding="0" width="100%"><tbody><tr><td style="border-right:#ece9d8;border-top:#ece9d8;border-left:#ece9d8;border-bottom:#ece9d8;background-color:transparent;"><div><p align="center"><span style="font-family:宋体;"><font color="#000000" size="3">存储过程</font></span></p><p align="center"><span style="font-family:宋体;"><font color="#000000" size="3">事务处理</font></span></p><p align="center"><span style="font-family:宋体;"><font color="#000000" size="3">数据维护</font></span></p><p align="center"><span style="font-family:宋体;"><font color="#000000" size="3">并发处理</font></span></p><p align="center"><span style="font-family:宋体;"><font color="#000000" size="3">……</font></span></p></div></td></tr></tbody></table><span style="z-index:7;left:0;"><table cellspacing="0" cellpadding="0" width="100%"><tbody><tr><td style="border-right:#ece9d8;border-top:#ece9d8;border-left:#ece9d8;border-bottom:#ece9d8;background-color:transparent;"><div><p><span style="font-family:宋体;"><font color="#000000" size="3">建立连接</font></span></p><p><span style="font-family:宋体;"><font color="#000000" size="3">分析请求</font></span></p><p><span style="font-family:宋体;"><font color="#000000" size="3">分发请求</font></span></p><p><span style="font-family:宋体;"><font color="#000000" size="3">获取结果</font></span></p><p><span style="font-family:宋体;"><font color="#000000" size="3">……</font></span></p></div></td></tr></tbody></table></span><span lang="EN-US"><font face="Times New Roman" color="#000000" size="3">&nbsp;</font></span></p><br><p><font face="Times New Roman" color="#000000" size="3"></font><span style="z-index:1;left:0;"><table cellspacing="0" cellpadding="0" width="100%"><tbody><tr><td style="border-right:#ece9d8;border-top:#ece9d8;border-left:#ece9d8;border-bottom:#ece9d8;background-color:transparent;"><div><p><span lang="EN-US"><font face="Times New Roman" color="#000000" size="3">&nbsp;</font></span></p></div></td></tr></tbody></table></span><font face="Times New Roman" color="#000000" size="3"></font><font face="Times New Roman" color="#000000" size="3"></font><font face="Times New Roman" color="#000000" size="3"></font><font size="3"><font color="#000000"><span style="font-family:宋体;">发送处理请求</span><span lang="EN-US"></span></font></font></p><p><font color="#000000" size="3"></font><font color="#000000" size="3"></font><font color="#000000" size="3"></font><font size="3"><font color="#000000"><span lang="EN-US"><span><font face="Times New Roman">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </font></span></span><span style="font-family:宋体;">……</span><span lang="EN-US"></span></font></font></p><p><font color="#000000" size="3"></font><font color="#000000" size="3"></font><font color="#000000" size="3"></font><font size="3"><font color="#000000"><span style="font-family:宋体;">返回结果</span><span lang="EN-US"></span></font></font></p><p><span lang="EN-US"><font size="3"><font color="#000000"><font face="Times New Roman"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></font></font></font></span></p><p><span lang="EN-US"><font face="Times New Roman" color="#000000" size="3">&nbsp;</font></span></p><p><span lang="EN-US"><font face="Times New Roman" color="#000000" size="3">&nbsp;</font></span></p><p><span lang="EN-US"><font face="Times New Roman" color="#000000" size="3">&nbsp;</font></span></p><p><font size="3"><font color="#000000"><b><i><span style="font-family:宋体;">用户界面层</span></i></b><b><i><span lang="EN-US"><font face="Times New Roman"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></font></span></i></b><b><i><span style="font-family:宋体;">商业逻辑层</span></i></b><b><i><span lang="EN-US"><span><font face="Times New Roman">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </font></span></span></i></b><b><i><span style="font-family:宋体;">数据库层</span></i></b><b><i><span lang="EN-US"></span></i></b></font></font></p><p><span lang="EN-US"><font face="Times New Roman" color="#000000" size="3">&nbsp;</font></span></p><p><span lang="EN-US"><font face="Times New Roman" color="#000000" size="3">&nbsp;</font></span></p></td></tr></tbody></table>

采用三层结构的优点是各逻辑层既相互独立又紧密联系，任何一层的改动都不会影响到其它逻辑层的工作，非常有利于系统的扩充。随着医疗改革的不断深入，医院的现行业务必然会有所改变，由于体系结构上的特点，本产品能够很方便、迅速的做出调整，适应这种变化。

其中服务和客户端采用web服务加浏览器模式。这种模式的好处是，客户端不需要另外安装软件，大大节省了系统安装、维护和生级的成本。

### 2.      数据库服务

操作系统Windows 2003 Server，数据库服务软件采用Microsoft SQL Server 2000。

SQL Server 2000是一项全面完整的数据库与分析产品。从借助浏览器实现的数据库查询功能到内容丰富的扩展标记语言（XML）支持特性均可有力地证明，SQL Server 2000无谓为全面支持Web功能的数据库解决方案。与此同时，SQL Server 2000还在可伸缩性与可靠性方面保持着多项基准测试纪录，完全满足一个医院的数据库需求。

### 3.      web服务

商业逻辑层使用web服务完成。操作系统Windows 2000 Advance Serve，web服务软件采用Microsoft Internet Information Service 6.0。

### 4.      客户端

操作系统Windows 9x 系列或NT系列，客户端软件Microsoft Internet Explorer 5.0 或以上。

## 四. 软件开发

具体开发过程仅实现了一个例子：门诊挂号功能

### 1.      开发工具

由于采用了web服务加浏览器模式，全部开发工作均在服务端完成。服务端按照部门分布在10台左右服务器上。任何一台服务器均可向全体用户提供服务，不同服务器之间数据交换通过数据库完成。服务程序采用.NET架构。

开发语言：asp .NET  C#版

开发工具：Microsoft Visual Studio 7.1

### 2.      门诊系统工作流程

门诊挂号位于流程最前端，它需要完成以下几个功能：

1、门诊计划:

专家应诊计划配置：为选定科室的专家进行应诊时间配置，分别为某一天进行配置，和对全周进行配置。

2、挂号：选择挂号类别、挂号医生、挂号科室，根据系统初始定义自动生成挂号费单据。挂专家号时必须输入挂号医生。

3、改号：已经退号的病人是不能进行换号的。对已挂号的病人进行换号，选定要换号的病人，将挂号信息自动显示出来，并选择要进行新挂号的科室等信息，保存换号信息。也可以对选定的病人进行退号操作, 已退号的病人不能进行退号操作。

4、工作量统计：用户根据工作需要自己选择分类标准

### 3.      界面

以下是挂号服务界面：

<table cellspacing="0" cellpadding="0" border="0"><tbody><tr style="height:147.75pt;"><td valign="top" width="573"><p><span lang="EN-US" style="color:black;"><font size="3"></font></span></p></td></tr></tbody></table>

考虑到不使病人等待太久，挂号服务应尽量简洁。比如如图所示界面，病人编号、姓名由病人所持社保卡或就医卡自动输入，挂号医生只需选择管好类型和科室。

其中，挂挂专家号时，页面自动跳到医生情况查询页面。查询所需科室专家的时间按状况，为病人选择合适的医生和时间。

号结束后，客户端打印机根据挂号信息、打印出收费单据，和就医时的排队编号。挂号信息由门诊部们服务器提交至数据库。需要提供医疗服务的科室的服务器发现数据更新，则向医师发出提示。

比如图示的例子，内科服务器发现专家工作安排有变化，则下载最新的日程按排道专家的客户机，以供专家查阅。

### 4.      程序设计

使用Visual Studio .net 的可视化编成环境，可以使得程序编写变得非常简单。按照Visual Studio .net向导的提示，为服务创见一个工程。为每个服务创建一个aspx文件。例如如上所述的挂号服务。首先在aspx页面添加界面控件，简单程序可就在aspx文件内完成，否则可以添加新的C# 模块。如下图所示事例：

<table cellspacing="0" cellpadding="0" width="576" border="1"><tbody><tr style="height:15.75pt;"><td valign="top" width="576"><p><span lang="EN-US" style="color:black;"><font size="3"></font></span></p></td></tr></tbody></table>

## 五. 费用估算

### 1.      服务器15台 + 系统软件：￥1,000,000

### 2.      路由器交换机等：￥100,000

### 3.      客户机500台\+ 系统软件：￥3,000,000

### 4.      网络布线：￥200,000

### 5.      软件开发：10人，六个月，￥1,000,000

### 6.      合计约：￥6,000,000

**参考资料：**

\[1\].《现代远程医疗与医院信息系统（HIS）建设全书》，光明日报出版社

\[2\].《医院信息系统软件设计应注意的几个问题》，郭根栓，山西省职业病防治研究所

\[3\].《葫芦岛市中以医院计算机管理系统建设》，李筱筠，葫芦岛市中以医院信息中心

\[4\].《医院管理软件大世界》，http://www.chis.com.cn

- [生物信息学的发展、现状与展望](http://spaces.msn.com/ruanqizhen/blog/cns!5852D4F797C53FB6!1224.entry)
- [医用软件概述](http://spaces.msn.com/ruanqizhen/blog/cns!5852D4F797C53FB6!1225.entry)

```