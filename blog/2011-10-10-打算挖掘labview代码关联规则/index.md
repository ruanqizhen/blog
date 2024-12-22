---
title: "打算挖掘LabVIEW代码关联规则"
date: "2011-10-10"
tags: 
  - "我和labview"
---

[https://labview.qizhen.xyz/](https://labview.qizhen.xyz/)

最近想研究一下：编写LabVIEW程序时，某些节点是否常常搭配使用。比如，“Open Config Data.vi”和“Read Key.vi”就常常放在一起使用。我的目标就是找出所有这种搭配使用的节点。

在大量的已有程序中找出这种搭配关系是一个关联规则挖掘的过程。

LabVIEW程序中每两个节点都有可能搭配在一起，当然只有达到一定支持度和置信度的搭配对于我来说才是有意义的。 支持度是指一种搭配的数量占所有各种搭配数量的比例。比如我收集了LabVIEW程序中，所有搭配数量是10,000个，“Open Config Data.vi”和“Read Key.vi”搭配在一起出现了10次，这种搭配的支持度就是0.001。 “Open Config Data.vi”和“Read Key.vi”搭配除以所有包含“Open Config Data.vi”的搭配就是它的置信度。比如“Open Config Data.vi”除了和“Read Key.vi”搭配还可以和“Write Key.vi”搭配。若“Open Config Data.vi”和“Write Key.vi”搭配的数量也是10，那么“Open Config Data.vi”和“Read Key.vi”搭配的置信度就是0.5。

想调查这件事纯粹是个人好奇，打算看看大家写的程序有无规律可循。我觉得一个好的编程语言是不应当有这种规律的。因为，假如某种搭配的支持度非常高，就应当把这种搭配做成一个子VI，更方便程序员编程。
