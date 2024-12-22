---
title: "缓存重用结构"
date: "2007-08-04"
tags: 
  - "我和labview"
---

## 一、缓存重用  

    在[《LabVIEW 程序的内存优化》](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1493.entry)一文中有一个利用移位寄存器来降低 VI 内存的例子。  
    下面这个 VI 大约会占用了2.7M的内存空间  

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFUoFuDKMDbb-RmGXGApk75cE1A9d7GD81GDJolUGthur9KQ6TdAF7eh-JrBZbGHgEUGTZdkgfBgPwTgnVtQE0y0EJvJYbJ1zHGek3uWtHlM9Aa0AhTlhZa0)  
图1： 对数组进行数值运算的顺序执行程序

    给它加上一个移位寄存器，如下图所示，内存占用就降低到只有不到400k了。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFUoFuDKMDbb-hbKQ3eSVCyimPcYUt2Y3PKfHyH9E5r9ihSJ9dr_qIWq88DjTuCb1w8l_XzA41nJHGqpU9FfESfpyKUtnGcwCKrkbOsqgzaWmQEBPDTLcqZg)  
图4： 利用移位寄存器实现缓存重用

    这其实是利用了移位寄存器两端接线端指向的是同一块内存这一特性，主动的告诉 LabVIEW 这段代码上的每个加法节点的输入输出数据可以使用同一块内存。避免的 LabVIEW 分配不必要的数据缓存。  
    但是代码还是不够完美，本来不需要循环，却非得摆上一个只执行一次的循环结构。感觉上总是有些别扭。  
    这个问题终于在 LabVIEW 8.5 中被解决了。LabVIEW 8.5 中多出了一个结构——缓存重用结构，专门用于告诉 LabVIEW 在某段代码上为输入输出数据做缓存重用。上面这个程序用新的缓存重用结构来写就是这样的：

![](http://byfiles.storage.live.com/y1p9T-DUOhUWBbxCDqU5xR_3vZImyBX5MCDwI8dhaE6FA0kW32SNccMkAUXGvuOfA1RknsVBZo5450)  
图3：利用缓存重用结构实现缓存重用

## 二、使用缓存重用结构

    缓存重用结构与其它结构不在同一个函数选板上。这是缓存重用结构不是一个功能性、或改变程序流程的结构。它的使用不会改变代码的功能，仅仅会改变代码的效率。  
    要使用缓存重用结构，需要打开函数选板的 Programming->Application Control->Memory Control。第一个选项就是他了。

![](http://byfiles.storage.live.com/y1p9T-DUOhUWBbQdmKAxe7_T8R_Ds90JeVon6_Z-ITp5n_lhUo15pMA74VUWxAwlSHRGeDaLc8KDLI)  
图4：缓存重用结构在函数选板上的位置

    缓存重用结构为了方便使用，并不是简单的作为循环加移位寄存器的替换，它还有一些可选的边框节点，帮助编程者处理不同的数据类型。  
    刚刚被拖到程序框图上的是一个光滑的黄色方框，要使用它的缓存重用功能还要为打算从用的内存，根据它的数据类型选择相应的边框节点。在黄色的边框上点击鼠标右键，弹出菜单的最后几项就是可供选择的边框节点类型。如图5所示。  
    每种边框节点都是成对出现的，一个在输入端，另一个在输出端。  

![](http://byfiles.storage.live.com/y1p9T-DUOhUWBZmx5VNM43UhEprFSz2Paazp1a2y8_V2WZ43IgjPj89TexlBb1Ght0Tw5DR_x0fNCs)  
图5：添加边框节点

## 三、边框节点

1\. 数组元素索引和替换节点

    这对节点用于改变数组中某个元素的值。输入的数组数据连到缓存重用结构左面的数据索引节点上，结构内得到的数据，就是需要处理的元素的数值。

