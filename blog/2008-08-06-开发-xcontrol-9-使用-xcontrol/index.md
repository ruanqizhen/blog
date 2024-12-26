---
title: "开发 XControl 9 - 使用 XControl"
date: "2008-08-06"
tags: 
  - "我和labview"
---

    关于XControl还有好几个方面的知识点没有介绍到，包括：版本控制、错误处理、得到调用VI的信息、调试、调整界面大小、发布快捷菜单、动画的实现、一些注意事项等。不过，这些细节问题在这个黑白棋控件中没有体现出来。所以以后有机会再讨论。

    作为这一组XControl话题的结束篇，介绍一下演示使用黑白棋控件的范例。

    这是演示程序的界面，只有黑白棋XControl控件和必要的几个控件。

![](http://byfiles.storage.msn.com/y1pQQi2uJqD-tRhKV63aFq6WfRIn8HXiIPHo6BggI8tweRtwyoSrbZ3iKaDsoqSwLqe?PARTNER=WRITER)

    其程序框图如下，这是一个典型的事件处理结构。

    首先程序注册必要的事件：一个XControl的事件，在用户走子后通知应用程序；一个用户自定义事件，这里仅用于初始化。

![](http://byfiles.storage.msn.com/y1pmpYBiuponp7SlTqBjpRexeCzft0JmftNmPnj4yx_fwgDjKYwmqz74qyTWWYT51_0?PARTNER=WRITER)

    程序初始化，与用户点“New”按钮做的事情相同，都是调用黑白棋控件的New Game方法，开始一盘新的游戏。

    之后就等待用户（黑方）在棋盘上走一子。之后，程序判断应该黑方走还是白方走。如果轮到白方走，程序就在所有可以落子的地方随机选出一个位置，走一白子。（程序没有实现人工智能部分）

    黑白都不可走时，程序计算输赢。

在这里下载黑白棋控件和示例程序：[http://decibel.ni.com/content/docs/DOC-1801](http://decibel.ni.com/content/docs/DOC-1801)

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
