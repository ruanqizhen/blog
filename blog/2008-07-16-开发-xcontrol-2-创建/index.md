---
title: "开发 XControl 2 - 创建"
date: "2008-07-16"
---

    在项目浏览器上，点击鼠标右键，选择“新建->XControl”，就可以创建一个新的XControl。

![](http://byfiles.storage.msn.com/y1pyjVe9BuNpJVAbpAFXWjp3lF9grbWSOnAB2IuQUg95B0chtGOGhQfUjlJCLfQcWxf?PARTNER=WRITER)

    XControl 在结构上是一种特殊的库，他包含一些特定的更能VI，和一些可选的属性、方法VI及其它相关文件。在新建的 XControl 上已经包含了4个必须的功能VI（控件）：数据、状态、外观、初始化。XControl 还有两个可选的功能VI：反初始化和转换状态以保存。  
    简要介绍这几个功能VI的功能是：  
    数据：用来定义XControl的数据类型。  
    状态：定义所有XControl内部使用到的数据。  
    外观：这是XControl中最主要的功能VI，用以实现XControl的界面和界面上的行为。  
    初始化：设置XControl的初始状态。  
    反初始化：负责清理工作。  
    转换状态以保存：用于把XControl内部的某些数据保存在使用它的VI中。

    下面对XControl做一些基础的设置，比如修改它的图标、版本号等，然后保存。  
    XControl功能VI的文件名并不一定与其功能名相同。比如，为了方便更多人使用，我使用了英文名称来保存我的XControl：

![](http://byfiles.storage.msn.com/y1pEkezIhPI_SRwtAsD5UWio8u4vVBi8c-vIT75EcxbR4b_mXJ7svyRqQbf5B_eflQ4?PARTNER=WRITER) 

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
