---
title: "界面编程技巧 5 - 使用绘图控件"
date: "2008-07-14"
tags: 
  - "我和labview"
---

    有时候需要画一个比较复杂图形或曲线，而 LabVIEW 没有提供相应的控件。可以借用 LabVIEW 已有的基本功能的控件，配上一些代码，实现一个具有特定功能的控件。  
    常被用来做这种基本控件有 XY Graph、3D Picture Control、Picture 控件等。  
    例如需要做一个绘制极坐标函数曲线的控件，就可以在 XY Graph 的基础上改造。一共一个转换用的VI，把点的极坐标转换成直角坐标系下的值，在 XY Graph 上绘制出来就可以了。需要某个支持某种特定三维绘图方式的控件，可以通过改造 3D Picture Control 得到。  
    Picture 控件是个更为基础的控件，很多具有特殊效果的界面元素都可以利用 Picture 控件制作。比如，需要制作带图标的菜单，或类似LabVIEW函数选板的菜单等。LabVIEW没有为它们提供现成的控件，就可以在Picture控件上自己把这些效果都画出来。我们前面介绍的棋盘棋子界面也可以使用Picture控件来制作。

    下面介绍一下实现这个界面的具体过程。  
    第一步，创建一个空白的Picture控件，针对Picture控件的常用操作都在Picture Functions 函数选板中。

[![](http://byfiles.storage.msn.com/y1pPji0PSq_6A109-e6Bzo6Yj527lmkk1vbZOTOyyCCmZNpB8hJ_EbPj5kFDr5P6KjU?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pH0VcgIb1sWGLu59K1DUk_nNSTIcx57nufIMMnPymPqIYzdLqG-U_KNCpbMoKXerh?PARTNER=WRITER)  [![](http://byfiles.storage.msn.com/y1pG8ysR5SUJEVsmPw-dUOI3AEYEw7LRhD0nFP_-DkltnShhIEftfYtmpl8-88lHKba?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pOkWbdEW_TzSp-ZjtqVKskxJ434YIb_HoVOjnYamt-GZTW7oo9u8YqYZzVv8XFNOS?PARTNER=WRITER)

    与前面介绍的方法不同，使用Picture控件制作棋盘棋子的过程，不是在VI编辑状态下进行的，而是需要在程序运行时绘制。所以下面的界面设计工作都要通过编程来完成了。先介绍一下Picture控件的Erase First属性，它有3个值：0表示从不擦除，也就是说每次传一个数据给这个控件，比如一个圆环图案，Picture上显示的并非只有这个圆环，而是把圆环叠加在原本的内容之上。如果我想画一个有三个矩形组成的图案，可以分三次画，每一次传递一个矩形图案给Picture控件；2表示每次都擦除，每次传递一个图案给Picture控件，它都会将原来的图案擦掉，仅保留这一次的图形。擦除图案后Picture控件会显示默认的白色。所以，使用这种方式，用户在切换图案时会看到Picture闪烁一下。若非必要，尽量不要使用这种方式；1表示程序第一次运行时把Picture上的内容清除，等于自动帮你做了初始化工作，我们这里也使用这种方式。  
    就是说，棋盘布局发生变化时，进更新发生了变动的位置。不要重绘整幅图。

[![](http://byfiles.storage.msn.com/y1pD_AYVhfoLZATIsVfRxf8_Qc_L0PBgmUcXAxIIZdiwxQ0QTGeOVUSjengcuzQcu0h?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1px7cp1hUTP_3K2H8P1aMHO73vvxQWXXHoj_KUi_dsAv1Bbnj48co7ZVCDZ9UkBV7m?PARTNER=WRITER)

    棋盘再棋子下层，所以要先画棋盘。画棋盘可以使用LabVIEW提供的划线函数，一条线一条线画出来。因为我们之前已经制作了棋盘的图片，所以可以直接把这张图片显示出来。代码如下：

[![](http://byfiles.storage.msn.com/y1pYnRB_L-J_bMxRR-3g89zc91LStn6-oiLzQSGPd8_cy7PjhsxK4Or2MwAuDJ-_fef?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pTWFXGphojoBpF5XwE4R5_ViwztiULGxRUQJe0wBv8X9y_zDXpEP2QPWjkK6dzvpZ?PARTNER=WRITER) [![](http://byfiles.storage.msn.com/y1pGdlNY2UJDlE01NrB_bCzHztHuwXsg8dmqIBDk5u57Q_8GUimuB1VfnHt341YGDur?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pV8fsNTXm9U9GKJnTbgVgQLB9OMl_8sMzm-ccPwAanNvKBbUJrfjGkCc83SPyFgtQ?PARTNER=WRITER)

    下面再画上棋盘初始时的四个棋子。画棋子的方法与棋盘相同，可以使用画圆函数，已可以使用已经制作好的图片：

[![](http://byfiles.storage.msn.com/y1pxBi3i7gtx8QGbrl9s6dXbD09othUwkZGY9QBA9pm4UqnOG6tpU0PlmeyRjEgjOoD?PARTNER=WRITER)](http://q0by9q.bay.livefilestore.com/y1p4sMIf-gp3tiMWtBuZB5ucCxyn4K1VOB_ESjuvuCYgnfDEBHKm8NNjz3p0evsF4Ixzc5tjCVfS4k?PARTNER=WRITER) [![](http://byfiles.storage.msn.com/y1pu0LqRPTHVPm8Gm9n--fQQqhVT6qXIV0f2iHUX1vH6hwbCD4LRI4wK2scEbfQ_nee?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pllo8DK1Nt54r8JYA8u5bNshpUfAN0TD3N2BuE5qCjmTcMt15NNwRwV8NDn1GMUj3?PARTNER=WRITER)

    到目前为止，界面设计的几种方法就已经介绍好了。如果能够把这个黑白棋的相关界面和操作（比如放置棋子，反转棋子等）提取出来，合成一个组件，公布出来，其他有类似需求的人就可以直接利用这个组件，不再需要自己重新设计了。  
    然而，在 LabVIEW 8 之前是无法实现这一功能呢，因为控制棋子行为的代码分散在程序的各处，而棋盘棋子也是主VI的一部分，很难将它们提取出来组成独立模块。LabVIEW 8 中出现的 XControl 可以把控件的界面及行为封装在一起，成为一个既有界面，又有运行代码一个组件。

    下面我就会重启一个先话题，讨论如何把这个黑白棋做成一个可以独立发布的组件。

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
