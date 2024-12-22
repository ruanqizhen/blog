---
title: "框架插件结构两种实现方法的对比"
date: "2010-08-02"
tags: 
  - "我和labview"
---

这里说的框架插件结构是指程序启动时或运行中，去查看硬盘某个路径下，有哪些插件模块，然后把它们调用起来的这样一种程序结构。LabVIEW中实现这样的程序机构有两种方法，一是利用LabVIEW Scripting中动的态调用VI，二是利用LVClass。下面比较一下这两种方法各自的优缺点。

<table border="1" cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="100">&nbsp;</td><td valign="top" width="300">动态调用VI</td><td valign="top" width="300">LVClass</td></tr><tr><td valign="top" width="100">LabVIEW版本</td><td valign="top" width="300">LabVIEW很早的版本就具备了动态调用VI的功能。</td><td valign="top" width="300">LabVIEW 8.2开始才支持面向对象的程序设计。</td></tr><tr><td valign="top" width="100">开发的难度</td><td valign="top" width="300">相对来说比较直观易懂。</td><td valign="top" width="300">对于已经了解了LabVIEW面向对象编程的用户来说，做一个插件也是比较简单的。但是如果完全没接触过面向对象这个概念，还要先花不少时间去学习面向对象编程。</td></tr><tr><td valign="top" width="100">插件的形式</td><td valign="top" width="300">插件是一个单独的VI，插件所有的功能都必须在这个VI中实现。</td><td valign="top" width="300">插件是一个对象（类的实例）。插件对象可以拥有多个方法。一个新的插件被添加进来后，它的所有方法可以自动应用于框架程序中任何调用了插件方法的地方。</td></tr><tr><td valign="top" width="100">总结</td><td valign="top" width="300">适合简单程序</td><td valign="top" width="300">适合大型程序</td></tr></tbody></table>
