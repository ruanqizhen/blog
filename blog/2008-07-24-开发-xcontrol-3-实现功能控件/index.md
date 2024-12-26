---
title: "开发 XControl 3 - 实现功能控件"
date: "2008-07-24"
tags: 
  - "我和labview"
---

    XControl 有两个功能控件，本别定义XControl的数据类型，和XControl使用到的内部数据的数据类型。

    首先考虑数据功能控件，它用于定义XControl的接线端的数据类型。我们使用一个二维的U16数组表示棋盘布局，所以在数据功能控件中要使用一个二维数组。

![](http://byfiles.storage.msn.com/y1p93K4W2p5lm0JfWdoTQpnev9GMqqwc4WTQ9NW8_dw6Z41wPAbhn9r7hKRFad6cIvj?PARTNER=WRITER)

![](http://byfiles.storage.msn.com/y1pbtGUyMosB9F6nPTR1V2BtD6ITur8Bj_OTj2Z0O8nKQfVGnavSAe5TAnJt4b9LKU6?PARTNER=WRITER)

     其次就要来考虑状态功能控件，这个控件类型的数据在XControl的功能VI中又被称为显示状态。但它实际上的用途并不局限于帮助显示，实际上，XControl运行所需的全部变量，都应当被包含在这个功能控件中。

    左面这幅图就是我所列出的运行一个黑白棋XControl所需的一些变量。

    在我们编写的黑白棋程控件中，将会用到一下内部数据：

    method，当用户运行一个XControl的方法时，设置这一变量。这一变量对应每个方法有不同的值。这样，在XControl的外观功能VI中，就可以知道用户调用的是什么方法了。

    current color，用于表明当前应该落什么颜色的棋子。

    available black position，黑色棋子可以防止的位置。

    available white position，白色棋子可以防止的位置。

    Interactive Action，是一个用户自定义事件。当用户在棋盘上落下一子时，XControl就产生这个事件，通知使用了它的VI。

    row 和 column 用于记录上次落子的位置。

    先不需了解这里边每一个数据具体的含义和用法。在后面使用到它们的时候还会详细介绍。实际在编写XControl的时候，也不需要一次把状态功能控件就设计好。可以一边实现XControl的功能，一边对其进行补充。

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
