---
title: "顺序结构"
date: "2006-11-26"
tags: 
  - "我和labview"
---

### 一. 程序执行顺序

LabVIEW 是数据流驱动的编程语言。程序在执行时按照数据在连线上的流动方向执行。同时，LabVIEW 是自动多线程的编程语言。如果在程序中有两个并行放置、它们之间没有任何连线的模块，则LabVIEW会把它们放置到不同的线程中，并行执行。

[](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4CZBT9lSnNoifUs7uTWvOlb-Wk-XmbFc0fGm0FbcElGB_Ep1K_6eGAni7RSAyzB5GUwbp5orkdwZciVhYFs2duh2krFLDeMbX5ddG4G7hbBZvGdrdRxC-7Q)![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnbAsbh2OJQ9JzLx6cacTFbxOyEnyJqi135JMZoSLSmLASswgMebBJDG81XdaFpxmJ45iNli3ggtMZczikWvzmb0) ![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AJOTv47_AGS-XgZHu8iDOPLxaqbK2Gzr7fEHwbyayf7xKyVYHi3wm4RROG9SRNt25OIM4A3b1JNGGkZx5Qg1GQlRRfKc_n33bxErHyDXyZTQ) 图1、2：顺序执行 和 并行执行 的例子

顺序执行（图1）：数据会从控制控件流向显示型控件，因此数据流经的顺序为“error in”控件，“SubVI A”，“SubVI B”，“error out”控件，这也是这个VI的执行顺序。 并行执行（图2）：“SubVI A”，“SubVI B”没有数据线相互连接，它们会自动被并行执行。所以这个VI的执行顺序是“SubVI A”，“SubVI B”同时执行，当它们都执行完成以后，再执行“Merge Errors.vi”。

### 二. 顺序结构

如果需要让几个没有互相连线的VI，按照一定的顺序执行，可以使用顺序结构来完成（Sequence Structure）。

[](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4Cro29mtkY1rF7NJzVeR0CgEeUHOosUGTOIqJxeVCV_aOnf0aLgxRf9et5dxklkPybFrkmrvyVwyM46DcWamvVRHYK9r_WxzIGS_zxKi8PHOkQfjNWBSRIx)![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnbAsbh2OJQ9JdgYkau1u9Yjrs_MgcKV7tMmeWmcl-vT0qZcWwQCWRJ_tIrjblF2l6faVtQPQwu9rVe72XjtFmtGUu2z_8CT9Gg) 图3：Menu Palette

当程序运行到顺序结构时，会按照一个框架接着一个框架的顺序依次执行。每个框架中的代码全部执行结束，才会再开始执行下一个框架。把代码放置在不同的框架中就可以保证它们的执行顺序。 LabVIEW 有两种顺序结构，分别是层叠式顺序结构（Stacked Sequence Structure）、平铺式顺序结构（Flat Sequence Structure）。这两种顺序结构功能完全相同。平铺式顺序结构把所有的框架按照从左到右的顺序展开在 VI 的框图上；而层叠式顺序结构的每个框架是重叠的，只有一个框架可以直接在 VI 的框图上显示出来。在层叠式顺序的不同的框架之间如需要传递数据，需要使用顺序结构局部变量（Sequence Local）方可。

![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4A8q2LirLQ2tyHqHa5EFiGJx4gTYPGOKM_3zQuem0mMc3YTT6iZSyu7pRjW8_EcUTlTuLTtujeVWA9hTZBtvibPw8NcwLQFuOJQraXPfXqkeYxIdJX1dhbV) 图4：层叠式顺序结构

### 三. 顺序结构的使用

好的编程风格应尽可能少使用层叠式顺序结构。层叠式顺序结构的优点是及部分代码重迭在一起，可以减少代码占用的屏幕空间。但它的缺点也是显而易见的：因为每次只能看到程序的部分代码，尤其是当使用sequence local传递数据时，要搞清楚数据是从哪里传来的或传到哪里去就比较麻烦。

![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4DtzEZyljb_5L_J-vPDTF-tp6CFVPVzLLdGBr3s7g-h2FlF21XJao4EnxDuJKJLQSV21U0uWCgPNW1LbAaJ0rcKfLy1JMvpzq9OGXdNAPqxUyd0aceSwG2a) 图5：转换顺序结构

使用平铺式顺序结构可以大大提高程序的可读性，但一个编写得好的 VI 是可以不使用任何顺序结构的。由于 LabVIEW 是数据流驱动的编程语言，那么完全可以使用VI间连线来保证程序的运行顺序。对于原本没有可连线的 LabVIEW 自带函数，比如延时函数，也可以为其包装一个 VI，并使用 error in, error out，这样就可以为使用它的VI提供连线，以保证运行顺序。

[](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4DngyFwZGEDIiRtPW0GTH_vb75YRKiLSgIvULiuI1vDLeWtb2YqxZcD4LvTyADk3l5HgFAeyCbGwS3TL96bsFi0QQpH4_17pkGvY-b3U5VnuQX4Q40YvE7p)![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnbAsbh2OJQ9JtOEt1SzcxYdiY4z3iFkWSkg28DdapUjp7OB0_tVf0c9QuzyBQEmjZTYt96963QkOKg0jyXThPJwwU1l2HC5ryQ) 图6：改进的延时 VI

 

**相关文章：** [博客版《我和 LabVIEW》](http://ruanqizhen.wordpress.com/2005/11/07/%E6%88%91%E5%92%8C-labview/)
