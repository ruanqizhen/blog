---
title: "其它常用调试工具和方法"
date: "2006-09-29"
tags: 
  - "我和labview"
---

    除了断点和探针这两种最常用的调试工具外，我们也经常要借助一些其它的工具和方法来找到程序的问题所在。

### 1\. 性能和内存查看工具（Profile Performance and Memory）

    调试的目的并不一定仅要找出功能性错误，有时是要找到程序效率低下的原因，或者潜在危险，如内存泄漏等。这时就要用到 LabVIEW 的性能和内存查看工具了。参见：[LabVIEW 的运行效率 1 - 找到程序运行速度的瓶颈](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1738.entry)。

### 2.  显示缓存分配工具（Show Buffer Allocation）

    显示缓存分配工具是另一检查 LabVIEW 代码内存分配情况的强大工具。参见：[LabVIEW 程序的内存优化](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1493.entry)。

### 3\. 程序框图禁用结构（Diagram Disable Structure）

    调试首先要找到问题发生的部位。有时候，我们可以使用探针一路跟踪数据在程序执行过程中的变化。如果数据在某个节点的输出与预期的不一致，这个节点很可能就是问题所在。还有些情况，不是靠这种简单方法就可以找出问题的。比如程序中出现的数组越界的错误，在错误发生后，程序可能还会正常运行一段不确定的时间，然后崩溃，或报错。这种程序报错，或者崩溃的地方有可能在每次调试时都不同，或者找到了最终出错的代码，发现他是个最基本的 LabVIEW 节点，不能再根据去调试了，而这个节点出错的可能性基本为零，错误肯定是其他地方引起的。  
    调试这种问题，一般就是把一部分代码禁止掉，看看程序运行是否还有问题。如果没有问题了，说明有毛病的代码被禁止运行，则在把禁止代码的范围再缩小；如果问题又出现了，说明是刚刚被放出来的代码有毛病，则对这部分代码再禁掉一部份，继续调试。知道找出引起问题的一个或几个节点，改正它们。在这个仅用部分调试代码的过程中，使用程序框图禁用结构是最为方便的了，它就好象是 C 语言中用来做注释的关键符号“/\*   \*/”或者“//”。使用它可以方便的把一部分代码框住，禁用，如图1。

[](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AxBll9jpgb_Qqk_covBAFpb1cInC8TeVFeKnihhpvlnwhtkaBPPYMMTi0mDBG54tzuzqL9ioeyblLJtp_bC9m2bfF7VvLQoTPX2g3AxocH0erQn2V1J2NW)![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6Fnek8mJX9hlXvjPJAWCfKu0B6n8XHEYDpUErOrMydRizY3fe29UmIKcq8MnsyR2QDQqYSrg8O_FULtqM8q7LW8qwJYkLTfGXbjA)   
图1：程序框图禁用结构

    使用程序框图禁用结构需要注意的一点是，这个结构可以有多个 Disable 的页面，同时会有一个 Enable 的页面。调试人员可能还要在 Enable 的页面作一些改动，比如为输出数据添加一些虚拟值，以使后续程序可以程序可以正确运行下去。例如图2，为了让后续的程序继续正确运行，需要把 reverence 和 error 数据线连接上。

[](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4BNL7FgrmkVKxRKfS-2QnEe9erwuBKjBHYOVmVhYFSvZekE6upWYpGUbKjfpDwABgEDBWqJcXejibUsbuQhQIGvTouJNinU7p2rPUP41zPZAJqPVR8Ml0lp)![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnXbNqGwQJTKASkuusM_42OexGyNrvywXqig3ynfQV0qdyKC8eZIah8aXSu5rErXpMZ-k74pB1VXuBP-JXptvGxWrYinrzXSDeg)   
图2：修改 Enable 页面

### 4\. 条件禁用结构（Conditional Disable Diagram）

    LabVIEW 中还有一个类似于 C 语言中 #if，#ifdef 的结构，就是条件禁用结构。使用条件禁用结构可以让某些代码在特定的条件下不运行。与条件结构（Case Structrue）相区别，条件结构在运行时决定执行哪一个页面中的代码；而条件禁用结构是在编译时就已决定好执行哪一个页面的代码了，不被执行的页面的代码在运行时都不会被装入内存。  
    利用条件禁用结构的这一特性，可以把分别需要在调试时和发布后的代码放在不同的条件禁用结构页面内。这样，既可以在不同条件下运行不同的代码，有不会使程序留有冗余的代码。图3 的是一个条件禁用结构应用的典型例子，用户希望在开发调试时，如果错误数据线上出现错误，则探出错误信息的对话框；而在发布之后，又错误发生，也不可以弹出对话框。

[![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4DTbVudQ8MR1T7hyHxygMagsh_LotTYkh8KnkS61KGoh8dsOND-JXjRGEm7ZztIKQ5ErpQVlE0Sn_uPZibv9dbvILnYpPjP2o0k5BMojPUFqHpSgobbYNJp)](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AheHnKVoaCyKcQPN5rbt5go-q5Zv8YjhoxPonme1KCYJiBLi4K1M6-MXhZLij0c-tJkZXsgEX0eR-ftSzEQTk9yV2XetvDtQc_ipPza9cCgsWR56j0EVr3)  
图3：使用条件禁用结构控制调试时和发布后程序的不同行为

    点击条件禁用结构右键弹出菜单中的 Edit Condition For This Subdiagram... 条目可以弹出条件配置窗口，在这个窗口改变使本页运行的条件。LabVIEW 有一些预定义的符号（Symbol）可供条件禁用结构使用，比如 TARGET\_TYPE 表示目标代码在什么系统下运行。如果条件是“TARGET\_TYPE == Mac”表示目标代码运行在苹果机上。  
    如果你有工程文件“\*.lvproj”，那么还可以在工程文件的属性->条件禁用符号栏下配置自己需要的符号。如图3中的例子，就是我自己在工程的属性对话框中添加了一个“DEBUG”符号，这样我就可以通过更改 DEBUG 符号的值来控制是否弹出程序的错误对话框。

### 5\. 使用消息对话框和文件

    有一些错误是在关闭了调试信息后才出现的，或者出错的代码部分不允许使用 LabVIEW 的调试环境。这时就要使用类似 C 语言中 printf() 的功能了。具体实现方法就是把可以的数据在程序中用 messagebox 显示出来，这样就可以跟踪察看程序是在哪一部分出错的。还可以把所有相关的数据都保存在一个状态记录文件中，察看这个记录文件，就可以找出可以的错误。  
    状态记录文件可以与第4节提到的条件禁用结构联合起来使用，设置一个调试开关，再调试运行方式下记录下所有状态信息；在正式发布后不再记录仪提高程序运行效率。

**相关文章：**  
    [我和 LabVIEW](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
