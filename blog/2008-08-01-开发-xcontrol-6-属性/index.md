---
title: "开发 XControl 6 - 属性"
date: "2008-08-01"
tags: 
  - "我和labview"
---

    在程序中，可以通过控件的属性节点来读取或设置一个控件的某些属性，比如它的位置，颜色等等。你可以为你的XControl实例控件添加自定义的属性，以供程序运行时使用。

    在项目浏览窗口的XControl上点击鼠标右键，选“新建->属性”，即可为XControl添加属性。每个属性对应两个VI，分别用于读写属性。去掉其中一个VI，属性就变成只读或只写的了。属性读写VI中的代码非常简单，基本上就是读出XControl状态中的某个数据，或者把某个数据写到XControl状态中去。

    我们的黑白棋控件中有一个只读属性是得到当前该下什么颜色的棋子。他的实现如下：

[![](http://byfiles.storage.msn.com/y1prG5TKY81fDEGDnq9RcnO2jA4uk95XLwgqgquvGG80X-DX15Bmie8msA95BDGFVX-?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pJpYW67IAC8tHjLHh3LWHrt6FfYbdCGYcyKVTPQCM-oU1mJOmaxpZfJyI8G6MAcXr?PARTNER=WRITER)

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
