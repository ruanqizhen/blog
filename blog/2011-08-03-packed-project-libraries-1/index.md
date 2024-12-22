---
title: "Packed Project Libraries 1"
date: "2011-08-03"
tags: 
  - "我和labview"
---

[https://labview.qizhen.xyz/](https://labview.qizhen.xyz/)

我使用Visual Studio的时间远比使用LabVIEW多。Visual Studio可以每次打开一个Solution，一个Solution包含多个Project。一般来说，我会为一个软件产品创建一个Solution。这个软件产品可能由多个文件组成，比如说有一个EXE，两个DLL组成，那么就为他们创建三个Project。每个Project的源代码都是独立的，可以设置自己如何编译，每个Project就可以被分开来开发。Projects之间是可以有依赖关系的，比如说编译EXE的时候可以自动的把另两个DLL先编译一遍。

LabVIEW的“项目”这个概念都是最近几年才有的，因此在这方面没有Visual Studio强大。在LabVIEW中，只有Project这一级，而没有Solution。这在开发大型程序时是有一些不便的。我觉得最严重的问题是程序模块划分不好做：所有的VI都只能放在一个Project中。最终生成的可执行文件是一个比较大的EXE文件；每次编译都有编译项目中所有的文件，很耗时；所有代码都混在一起，不容易彻底分隔开。

有些公司发布的产品不是可执行文件而是一个功能库，供其它程序调用的。他们或者以VI的形式发布，这样他们的VI源程序会被放置到用户的工程中去，很不合理；或者以DLL文件的形式发布，LabVIEW中调用DLL又很麻烦。

这个问题一直到 LabVIEW 2010 发布后才有所改善。LabVIEW 2010 增加了一种新的文件格式 Packed Project Libraries (\*.lvlibp)。这种文件格式兼有原来[lvlib](http://ruanqizhen.wordpress.com/2005/07/09/%E5%88%A9%E7%94%A8labview%E5%B7%A5%E7%A8%8B%E5%BA%93%E5%AE%9E%E7%8E%B0%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B/)和[llb](http://ruanqizhen.wordpress.com/2006/06/26/%E5%A6%82%E4%BD%95%E5%88%9B%E5%BB%BA%E5%92%8C%E4%BD%BF%E7%94%A8-labview-%E4%B8%AD%E7%9A%84-llb-%E6%96%87%E4%BB%B6/)文件格式的一些优点，再模块化程序的时候，可以考虑使用Packed Project Libraries 。
