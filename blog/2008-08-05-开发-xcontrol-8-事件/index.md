---
title: "开发 XControl 8 - 事件"
date: "2008-08-05"
tags: 
  - "我和labview"
---

    非常遗憾的的是，XControl实例控件的事件不能够自定义。我们只能够通过用户自定义事件来实现这一功能。实现的方法是，先造一个用户自定义事件，在XControl的状态中把它保存下来，为它写一个XControl属性，这样用户就可以在程序中得到这个自定义的事件。用户在程序中把这个事件注册到需要接收事件的事件处理结构上，以后就可以接收来自XControl控件的事件了。

    事件的生成和抛出在前面两节中介绍过了（[开发 XControl 5 - 其他功能 VI](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!3436.entry)，和[开发 XControl 4 - 外观功能VI](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!3426.entry)）。下面看一下如何在用户界面中使用这个事件：

    通过XControl的属性得到在XControl中创建的用户自定义事件，在用户应用程序中注册这个事件，然后就可以接受XControl抛出的该事件了。

![](http://byfiles.storage.msn.com/y1pR5gHSl0Odrxj0m3tfDRmWewU166S_fiIkoMV5Zg2W8J1lq-ki_XTwoWiKqgpDQKi?PARTNER=WRITER)

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
