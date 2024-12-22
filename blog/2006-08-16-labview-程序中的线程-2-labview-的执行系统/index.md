---
title: "LabVIEW 程序中的线程 2 - LabVIEW 的执行系统"
date: "2006-08-16"
tags: 
  - "我和labview"
---

## 二、LabVIEW 的执行系统

### 1\. 什么是执行系统

    早期 LabVIEW 的 VI 都是单线程运行的，LabVIEW 5.0 后才引入了多线程运行。其实，对于并排摆放的LabVIEW 函数模块而言，即使LabVIEW 不为它们分配不同的线程，通常也是“并行执行”的。LabVIEW 会把它们拆成片断，轮流执行：这有一点像是 LabVIEW 为自己设计了一套多线程调度系统，在系统的单个线程内并行执行多个任务。  
    LabVIEW 中这样一套把 VI 代码调度、运行起来的机制叫做执行系统。现在的 LabIVEW 有六个执行系统，分别是：用户界面执行系统、标准执行系统、仪器I/O执行系统、数据采集执行系统、以及其他1、其他2系统。一个应用程序中使用到的众多子 VI 可以是分别放在不同的执行系统里运行的。用户可以VI 属性面板上选择 Execution 页面，可以在这个页面指定或更改某个 VI 的首选执行系统。

### 2\. 执行系统与线程的关系

    LabVIEW 在支持多线程以后，不同的执行系统中的代码肯定是运行在不同线程下的。用户界面执行系统只有一个线程，并且是这个程序的主线程。 这一点与其他执行系统都不一样，其他的执行系统都可以开辟多个线程来执行代码。用户除了可以设置 VI 的执行系统，还可以设置它的优先级。优先级分 5 个档次（暂先不考虑 subroutine）。在 LabVIEW 7.0 之前， LabVIEW 在默认情况下为同一个执行系统下每个档次的优先级开启一条独立的线程；而在LabVIEW 7.0 之后,LabVIEW 在默认会默认的为每个执行系统下每个档次的优先级开启 4 条线程。当然你使用 \\vi.lib\\Utility\\sysinfo.llb\\threadconfig.vi 可以更改这一设置。但是对于普通用户来说最好不要改动它。  
    在用 C 语言编写多线程程序时，你还要注意不能开辟太多的线程，因为线程开辟、销毁、切换等也是有消耗的。线程太多可能效率反而更差。但是使用 LabVIEW 就方便多了。在使用默认设置的情况下，LabVIEW 最多为你的程序开辟 5 条线程：一条用户界面线程，四条标准执行系统标准优先级下的线程。五条线程不会引起明显的效率损失。

### 3\. 用户界面执行系统

    程序中所有与界面相关的代码都是放在用户界面执行系统下执行的。就算你为一个 VI 设置了其他的执行系统，这个 VI 的前面板被打开后，他上面的数据更新的操作也会被放在用户界面执行系统下运行。还有一些工作，比如利用 Open VI Reference 节点动态的把一个 VI 加载到内存的工作，也是在用户界面执行系统下运行的。  
    前面提到了，用户界面执行系统一个最特殊的执行系统，因为它只有一个线程（我们就给这个线程起名叫用户界面线程好了）。LabVIEW 一启动，这个线程就被创建出来了，而其他执行系统下的线程只有在被使用到时才会被 LabVIEW 创建。

    在图1 中的例子中，如果是运行在其他的线程下，都会把我的双核 CPU 占满。原因参考本文第一章（[LabVIEW 是自动多线程语言](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1494.entry)）的图2。但是如果我们把 VI 的执行系统改为用户界面执行系统，那么这两个循环就会运行在同一线程下，我的双核 CPU 其中一个核将被占用 100%，另一个则基本空闲。

    图2 是 VI 在运行过程中的一幅截图，虽然程序在单线成下运行，两个循环仍然是并行运行的，两个显示控件的数据会交替增加。

![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4DDws1qdb68DHUxXjV6GMOGdoDXYj5Ap0ngF8q_21oF73SAJ3rJPJ4RuoaHfO8j8UMtJDNAmWAbv13KeNo8dsfi62n4Ub_qZfpuvrkW_1Nd0Q)     ![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AL6nEDpQgqUUxSF54S16Tshasxk8zZRSZrpkmTY9Ud8ekq6qU4KDERcdxhGrEP4p4TU1UUEa-KrnEqLc7e_vGxnDMPdiouHz0OE6ibEMEfBKscqZNTG4Bu)  
**图1、2：在界面线程-单线程下运行的并行任务**

    因为 LabVIEW 是自动多线程的，如果一些模块不能保证多线程安全，就需要把他们设定为在用户界面线程运行。这样就等于强制他们在同一个线程下执行，以保证安全。具体例子在下一节讨论。

### 4\. 其他几个执行系统

    在 执行系统一栏还有其他几个条目可选。  
    “same as caller”是默认选项，它表示这个 VI 沿用调用它的上层 VI 设置的执行系统。如果顶层 VI 也选择“same as caller”，那么就等于它选择了标准执行系统。  
    “standard”标准执行系统是最常用的配置方式。  
    “Instrument I/O”仪器I/O执行系统一般用于发送命令到外部仪器，或从仪器中读取数据。这是程序中较为重要的操作，需要及时运行。所以仪器I/O执行系统中的线程的优先级比其他执行系统中的线程要高一些。  
    “data acquisition”数据采集执行系统一般用于快速数据采集。数据采集执行系统中的线程的数据堆栈区比较大。  
    “other 1”，“other 2”其他1、其他2执行系统没什么特别之处。如果你一定要让某些 VI 运行在独立的线程内，则可以使用这两个选项。  
    绝大多数情况下，用户使用界面执行系统、标准执行系统就已经足够了。

### 相关文章：

    [LabVIEW 程序中的线程 1 - LabVIEW 是自动多线程语言](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1494.entry)

    [我和 LabVIEW](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
