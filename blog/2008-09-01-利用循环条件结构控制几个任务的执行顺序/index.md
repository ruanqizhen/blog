---
title: "利用循环条件结构控制几个任务的执行顺序"
date: "2008-09-01"
tags: 
  - "我和labview"
---

[https://lv.qizhen.xyz/#docs/pattern\_state\_machine](https://lv.qizhen.xyz/#docs/pattern_state_machine)

循环条件结构不是一个基本结构，它是指在循环结构内套一个条件结构，这样的复合结构。这是LabVIEW中常见的程序结构之一。

假设需要编写这样一个测试程序，它有多个测试任务：任务A、任务B……，需要顺序执行每一个测试任务。这是一个典型的顺序结构的程序，可以采用上一章提到的顺序程序的编写方法。它的代码如下：

![](http://byfiles.storage.msn.com/y1pvesQ6SZRpeZvNEZGDmbEiq7k3gPDUfr-ctyNSgmDgEAv8XmEJdZIR8_u_TXvVAn5ACnVpyry3Ww?PARTNER=WRITER)   
图1：顺序执行测试任务

如果程序要求更复杂一些，这个简短的顺序结构就不够灵活了。比如，有多中产品需要测试，但每种产品的测试流程不一样，有的产品需要测试任务ABC，有的需要测试任务CDB，等。针对不同产品编写不同的测试程序不是一种高效的方法。

高效的方法是把测试任务做为测试程序的输入，程序根据用户每次指定的测试任务顺序来调用测试任务。这个程序可以使用循环条件结构来完成。它的程序如图2所示。

![](http://byfiles.storage.msn.com/y1plEZwcAqmCAnY-Ubp5RU6i3cDyi1s2vKYEYAkVo5yQzhUxMECDEKOaYvhMROaHG7Kw4rob09YLSo?PARTNER=WRITER)   
图2：按照输入的顺序执行测试任务

这个程序中的“任务队列”应该是一个输入控件，这样用户不需要改动程序，就可以改变它的输入值。但是在这里为了便于观看，把它变成了一个常量。“任务队列”是一个数组，元素按照找任务执行的顺序排列。这样在程序运行时，循环每迭代一次，循环结构从“任务队列”中取出一个任务，然后由条件结构判断该任务并进入相应的分支，执行该任务。

[《我和 LabVIEW》目录](https://lv.qizhen.xyz/)
