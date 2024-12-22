---
title: "LabVIEW 的运行效率 1 - 找到程序运行速度的瓶颈"
date: "2006-09-07"
tags: 
  - "我和labview"
---

## 一、找到程序运行速度的瓶颈

想要提高程序的运行效率，首先要找到程序运行的瓶颈在哪里。LabVIEW 程序的运行也符合 80/20 定理：20%的程序代码占用了80%的运行时间。如果能找到这20%的代码，加以优化，就可以达到事半功倍的效果。 对于已经编写好的程序，可以通过内存和信息工具来查看程序中每个 VI 运行了多长时间。对程序的效率进行优化，要从最耗时的 VI 着手。 内存和信息工具可以从 LabVIEW 的菜单项 Tools->Profile->Performance and Memory 中启动。图1 是这个工具的界面。

[](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AxBll9jpgb_Qqk_covBAFpXBmfYtnj2uPYQPfM5KdFgJ0jnii1eADiKutDNKCqalA_FuSiXnm7SynMiOUgR0oFnBlkoUAB1_QcPeffFFt6reXQDlBwUH9W)![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnblHHsQ5D-NvQIFSkpznNd7Hci1HaQRUzTyJJ4ZYqhv5U1yNGzUcZszor_Ck0Ir-2BpBMcbvwFfplnaCZmoMlZRrGiS0utxZkA) 图1：内存和信息（Profile Performance and Memory）工具

在内存和信息工具中会列出一个程序中的全部子 VI。在运行这个程序之前，先按下工具界面上的 Start 按钮，工具就开始为所有的子 VI 进行统计了。你的程序运行结束后，点击工具上的 Snapshot，就会显示出每个子 VI 在刚才的运行中占用了多少 CPU 时间。按照 VI Time 降序排序，排在最前面的几个 VI 就是程序的瓶颈，是需要重点优化的对象。 一个子 VI 占用了大量 CPU 时间，有可能是因为它内部的运算较为复杂，那就需要打开它，对它的算法进行优化。但更有可能的是因为这个 VI 被程序执行的次数太多。这时，你就要考虑程序结构了，是否可以减少这个 VI 的运行次数，比如把它从某些不必要的循环中挪出去，或者拆分这个 VI 的代码，把没有必要循环执行的部分分离出去，挪到循环体外面。

并不是所有的运行效率问题都可以在内存和信息工具中体现出来的。 VI Time 列出的只是子 VI 的 CPU 占用时间，如果你的程序里存在大量的不必要延时，或者程序常常被某些低速工作（如读写外部仪器，通过网络传输数据等）所阻塞。这样的程序效率肯定也是很低的，但是这一类的低效率因素在内存和信息工具上是体现不出来的。 有些非常耗用 CPU 的操作也无法体现在内存和信息工具上。比如我在[《LabVIEW 的线程》第四章](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!2047.entry)中会提到的使用 OpenGL 的例子，由于程序线程设计不当，CPU 被大量消耗在线程切换上。从系统资源管理器看，CPU 被 LabVIEW 占满，在内存和信息工具却看不到任何一个 VI 占用了如此多的 CPU 时间。

在多核 CPU 的计算机上，由于程序可以在多个 CPU 内核上同时执行，某些子 VI 虽然占用的大量的 CPU 时间，如果程序线程设置合理，是可以让这些 VI 不影响到程序的整体效率的。

**相关文章：** [LabVIEW 的运行效率 2 - 程序慢在哪里](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1745.entry) [](http://ruanqizhen.wordpress.com/labview/)[博客版《我和 LabVIEW》](http://ruanqizhen.wordpress.com/2005/11/07/%E6%88%91%E5%92%8C-labview/)
