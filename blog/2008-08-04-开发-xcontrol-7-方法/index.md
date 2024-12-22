---
title: "开发 XControl 7 - 方法"
date: "2008-08-04"
tags: 
  - "我和labview"
---

  方法与属性类似，它在控件的调用节点中出现。与属性不同，属性通常就是指某一个数值，而方法可以有多个参数，同时读写多个数值。

  方法的创建和实现方法都和属性类似。它对应的VI所作的工作也是读写XControl的状态。

    黑白棋中有一个方法：“走一步棋”。它的实现如下：

[![](http://byfiles.storage.msn.com/y1pxWuyMR_jXzt6N25dyjriRw0XNMpMODGGesWYUxV1rR38HvVONcDjm7XISpJwGMJLaz1eXOxealc?PARTNER=WRITER)](http://q0by9q.bay.livefilestore.com/y1py_DytCJIYBJ7Lx-SPXZGVtt1nbreZ0fSIDX8Zj6vgq-YzidiXokC4wVFXaLLQocvmYpfLVErkuY?PARTNER=WRITER)

    首先，判断落子的位置是否合理。如果是，则修改状态中相应的数据，落子位置。走一步棋之后，控件的数据和外观都需要做相应修改的。这部分修改没办法在方法VI中完成，只能在外观功能VI中实现。当方法VI修改了XControl的状态后，外观功能VI的“显示状态更改”事件会立刻被触发，所以相应代码可以放在外观功能VI的显示状态更改事件处理分支中。

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
