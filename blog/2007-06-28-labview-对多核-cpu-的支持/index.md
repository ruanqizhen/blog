---
title: "LabVIEW 对多核 CPU 的支持"
date: "2007-06-28"
tags: 
  - "我和labview"
---

    以前，在计算机领域有个摩尔定律，是说每一年半，CPU 的主频都会提高一倍。但是近几年这个定律在CPU主频上已经失效了，我 4 年前用的计算机 CPU 主频是 2G，我前几天换了一台新电脑，CPU 主频还是 2G。  
    现在主要两个 CPU 生产商都意识到单纯通过提高处理器主频来提升性能的办法行不通了。他们的新策略是通过增加 CPU 的内核来提升系统整体性能。

    现在双核 CPU 是商用电脑的主流配置，也有高端电脑采用了四核 CPU。Intel 更是宣称他们用不了5年就会做出有 80 个核的 CPU 来。  
    多个 CPU 同时工作，效率固然是高。但是，为了充分发挥多核的优势，为了发挥多核的威力，还要你的软件针对多核进行一定的优化才行。首先，你的程序至少是多线程运行的。

    使用常用的文本语言，比如 C++ 编写一个多线程的程序并不是一项简单的工作。除了要非常熟悉 C++ 的基本编程方法，程序员还需要了解 Windows 多线程的运行机制，熟悉 Windows API 的调用方法，或者 MFC 的架构等等。在 C++ 上调试多线程程序，更是被许多程序员视为噩梦。  
    但如果使用 LabVIEW 编写多线程程序，情况就大为不同了。[LabVIEW 是自动多线程的编程语言](blog/cns!5852D4F797C53FB6!1494.entry)，LabVIEW 程序员可以不需要了解任何与多线程相关概念与知识。只要他在 VI 的程序框图上，并排放上两段没有先后关系的代码，LabVIEW 就会自动把这两段代码放在不同的线程中，并行运行。而在多核 CPU 的计算机上，操作系统会自动为这两个线程分配两个 CPU 内核。这样就有效地利用了多核 CPU 可以并行运算的优势。LabVIEW 的程序员不知不觉中就完成了一段支持多核系统的程序。

    有操作系统来分配 CPU 也许效率还不是最高的。  
    比如我现在有这样一个程序（图1），有数据采集、显示和分析三个模块。三个模块是并行执行的。我的电脑是双核的，于是操作系统分配 CPU0 先做数据采集，CPU1 先做数据显示，等数据采集做完了，CPU0 又会去做数据处理（图2）。数据处理是个相对任务较为繁重的线程，而电脑一个CPU做数据处理时，另一个 CPU 却空闲在那里。这种负载不均衡就造成了程序对于整体系统的CPU利用率不高。

![](http://byfiles.storage.live.com/y1p9T-DUOhUWBZemzOoFmSjwm9TpL2C4psoTB8GTFn-lMVBC6TRw8MQGScoCI7OKXbtJp3-IX6XKJw)  ![](http://byfiles.storage.live.com/y1p9T-DUOhUWBYNAD5xjnPAVFSbuU8U5VS8pRLYXyTBpdI6s5tCFzcEDaQSkZMOB38DBh1vJOh5CEg)  
图1, 2：操作系统为多线程程序自动分配CPU

    对于效率要求极为苛刻的程序，还需要更高效的解决方案。LabVIEW 8.5 提供了一种解决方案，就是利用它的定时结构来有程序员人为指定 CPU 的分配方案。  
    定时结构包括定时循环结构（Time Loop）和定时顺序结构（Time Sequence），他们的主要用于在程序中精确的定时执行某段代码，但是在 LabVIEW 8.5 中它们又多了一个新的功能，就是指定结构内的代码运行在哪一个 CPU 上。在图3中，定时顺序结构左边四边带小爪的黑方块所代表的接线柱就是用来指定哪一个CPU或CPU内核的。

![](http://byfiles.storage.msn.com/y1pPUK7j7lmY1Vgo7KSeKwIh3gSYokLkGqtUqjKqgsb8ZAAxqP9oPeIPdHRgA_pZYxX)  
图3：一个时间数序结构

![](http://byfiles.storage.msn.com/y1pPUK7j7lmY1WzXydQp2o1j2v5WNtJZKagDqsDaJNl1S9BI8MEyBODQf4KLpl3CGfv)  
图2：时间顺序结构的输入配置面板

    这个CPU设置可以在配置面板（图2）中静态的指定好，也可以像图1这样，在程序运行时指定。执行图1所示的程序，在0和1之间切换结构内代码运行的CPU，就可以在系统监视器中看到指定的CPU被占用的情况了。

    还是以刚才那段程序为例，这一次我手工为每个任务指定他们运行的 CPU。

![](http://byfiles.storage.live.com/y1p9T-DUOhUWBbAQN4hPUHjH3l8GO6snfKIdrS8Ls-VRYbfLTHlChQbvSOTKfy7Z8AAeQMOwY1KdkI)  
图4：手工指定每个任务运行的 CPU

    这样一来，两个耗时较少的任务占用同一个 CPU，耗时较多的任务单独占用一个 CPU。不同 CPU 被分配到的任务比较均衡，程序整体运行速度大大加快，如图5所示：

![](http://byfiles.storage.live.com/y1p9T-DUOhUWBb0Ntn4GV2J3bIWAsO9n0gDfgKRITDbGOXaNURwkaLeg7F3fQsO_UJMI6ovzYOoGco)  
图5：两个CPU负载均衡

阮奇桢  

[《我和 LabVIEW》](http://ruanqizhen.spaces.live.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
