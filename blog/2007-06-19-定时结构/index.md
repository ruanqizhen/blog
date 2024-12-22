---
title: "定时结构"
date: "2007-06-19"
tags: 
  - "我和labview"
---

    定时结构是从 LabVIEW 7.1 开始出现的。一眼就能看出来，它在外观与其它结构的风格完全不同。倒是和 LabVIEW 7 力推的 Express VI，风格一致。打开定时结构的函数面板（图1），最上面两个分别是定时循环，和定时顺序结构。下面的是与控制时间结构相关的的一些VI。

![](http://byfiles.storage.msn.com/y1pPUK7j7lmY1UVbeASSsUT0uB_xCs1RoTSGFezlcv_4XE_UZ7mFkBfV1iB3c0oHK_f)  
图1：时间结构的函数面板

    定时结构，顾名思义，与时间控制有关。LabVIEW 中原本有一些用于延时或定时的函数，比如 Wait, Delay Time 等，他们都位于 Time&Dialog 面板中。利用这些函数，基本可以实现与使用时间结构相同的功能。定时结构的最大改进在于，它可以选择使用哪个时间源（硬件）来定时。尤其是当你的 LabVIEW 程序运行在 RT、FPGA 等设备上时，这一点就特别有用了。使用定时结构指定使用硬件设备上，而不是PC机上的时钟来定时，可以使使运行时序更精准。  
    即便同样都是在普通PC上使用，定时间结构的定时效果也要比 Wait 等函数精确的多。我曾经参与过的一个测试程序，开始使用 Wait 函数定时，运行一小时后，时间误差有几分钟。改用定时结构后，误差缩短到了几秒钟。

 [我和 LabVIEW](http://ruanqizhen.spaces.live.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
