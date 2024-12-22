---
title: "LabVIEW 2009 新功能 - 传引用"
date: "2009-10-22"
tags: 
  - "我和labview"
---

以前版本的LabVIEW虽然也有多种方法可以让数据以引用的方式在程序间传递，但是用起来都有些麻烦。LabVIEW有了构建数据传引用的节点，大大简化了传引用的程序代码。

新添的有关传引用的两个节点在函数选板“Programing->Application Control->Memory Control”中，分别是“New Data Value Reference”和“Delete Data Value Reference”。“New Data Value Reference”用于创建一个数据的引用，“Delete Data Value Reference”可以从引用中取回原来的数据。
```
[![](images/2164c17de6232bcb5d447b2ce76ffb58.png)![](images/3be27c18e9f30a62e8a14bb1e7585b99.png)![](images/image[31].png)](http://ruanqizhen.wordpress.com/wp-content/uploads/2009/10/1113580f142f6f23fb4f637c04d5a822.png)[](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!4402.entry)

```