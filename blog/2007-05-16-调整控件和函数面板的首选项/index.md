---
title: "调整控件和函数面板的首选项"
date: "2007-05-16"
tags: 
  - "我和labview"
---

    LabVIEW 在 8.0 版对控件和函数面板作了一次较大调整。LabVIEW 功能越来越强大，控件和函数面板上的东西越来越多。如果增加面板的嵌套深度，用户每次选取面板上的一个控件和函数都要多点几下鼠标，而且对不熟悉位置的东西找起来也相当费劲；如果扩充每一个面板上的容量，一个面板上图标太多，用户会眼花，也不利于查找。所以 LabVIEW 8 调整了面板的显示方式：最顶层面板所有栏目都以文字的方式显示，纵向排成一列。其中第一个栏目是默认就展开的，可以直接看到次级面板的内容；其它栏目都收起，鼠标挪上去，才看得到它里面的内容。  
    我现在用的是 LabVIEW 8.2 版，它的函数面板看上去是这样的：（在程序框图的空白处点击鼠标右键）

![](http://byfiles.storage.msn.com/y1pPUK7j7lmY1UBvErvVuOxSwd6Q0Cp52H1DdPtUzMpS3JSye71bRPXX2OKwpHPtZ-w)  
图1：用鼠标右键弹出函数面板

    函数和子 VI 被分为几大类，每个类的名字被列在弹出的菜单上，其中最前面一个类是展开的。因为第一个分类中的函数最常用。  
    但是，有些人可能最常用的函数是在其它分类中的。这样可以调整一下，比如最常用的是 Express VI，就可以把它最常用挪到最前面来。

    用鼠标点弹出菜单左上角的图钉，就可以吧弹出菜单固定住。固定后的菜单每一项左端有两个竖线，和一个三角。点击三角可以展开和收缩这个类里的图标，鼠标放到两个竖线上，鼠标就会变成带箭头的十字花。这是就可以按下鼠标拖动这个条目了。点在 Express 项目的竖线上，然后把它托到最上面。如图2、图3所示：

![](http://byfiles.storage.msn.com/y1pPUK7j7lmY1UJtg9uvc20fSJparIIooQLMkuK4Ox2YkhzIzyOpf94UUggtQ6Z-NVG)  ![](http://byfiles.storage.msn.com/y1pPUK7j7lmY1VVTpwHM6UacGmuRdKUhaXwmBPczoTAo9o3eDatEVm4U-B7wdPyIgI0)  
图2, 3：鼠标点在连个竖线上可以拖动这个项目

    从此以后，Express 就在最上面了。看图4，再在程序框图上点鼠标右键，弹出的函数面板，最上面一栏展开的就已经变成 Express 了。

![](http://byfiles.storage.msn.com/y1pPUK7j7lmY1UeaSePSTlB03XMwNUt_7zhI6IhtdyZnR5EraFthz41qWcU8kFqDZst)  
图4：新的函数面板

    你可能会发现，自己的 LabVIEW 在鼠标右击程序框图后，只显示出几个分类，其他的类别统统都缩了起来。用户是可以自己制定显示或隐藏哪些分类的。在函数或控件面板钉住的状态下（如图2这种状态），点击面板最上方的“View”按钮，就会出现让你更改显示或隐藏分类的菜单。

    如果你觉得 LabVIEW 的面板布局不是很合理，你要用的东西分散在不同的类别里，用哪个坐首选项都不太方便。那也没有关系，在 LabVIEW 8.5 中又多了一个类别，叫 Favorite （我的最爱）。在函数或控件面板钉住的状态下，右键点击其它类别的函数，或子面板标题，弹出菜单上有一项就是加入到 Favorite 中。把你最常用的函数都放到 Favorite 里去，再把 Favorite 移到面板的最上端作为首选项，就可以了。

**相关文章：  
**    [我和 LabVIEW](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
