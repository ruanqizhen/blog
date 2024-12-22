---
title: "界面设计技巧 1 - 利用 LabVIEW 自带控件"
date: "2008-07-10"
tags: 
  - "我和labview"
---

我前面讲了一堆设计界面的规范和原则，下面介绍一些具体的技巧，可以让界面编写更快捷、美观。 我们需要一个具体示例来帮助介绍这些的技巧，我打算以编写一个黑白棋游戏的界面为例。选择黑白棋是因为这个游戏的界面在常见棋类中比较简单，适合做范例。另外，它也是我最开始学习LabVIEW时的练习程序之一，比较有感情:) 黑白棋的棋盘由8×8个正方格组成，旗子为黑白两色，放置在方格中。（黑白棋游戏详细规则：[http://www.othello.cn/rules.htm](http://www.othello.cn/rules.htm "http://www.othello.cn/rules.htm")） 编写这样一个界面可以使用到多种不同的思路和技巧，我会按照从简到繁的顺序，分几次来介绍几个不同的方法。

界面设计的时候，首先要调查一下看能不能使用已有的控件。借用已有控件可以大大节省我们自己的开发时间了。我们这个游戏界面上的按钮、文本框等自然可以使用LabVIEW自带的控件；黑白棋的棋盘棋子，也可以上网去找找看有没有别人已经做好的可供使用。 假如没有现成的棋盘棋子控件，那就要我们自己来做一个了。虽然作为整体，没有现成的东西可用，但把它细分成小的基础部分，还是有可能利用一些已有控件的。

比如说棋子：这个游戏的棋子为圆形，只有黑白两色，个数最多64个。这个特点很适合用 LabVIEW 中的圆形LED灯泡来表示。圆形LED灯泡控件如下图所示：

[![](http://byfiles.storage.msn.com/y1pf0N2Ae_2XvXnKi1LfjMF6m7z2jGPNcMwL3IANGf_RGekJHynFhM4W_vb0H7SLMOc?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pdj02yC1KFEyMVJEIZHBfcJgIFE9l8nJbacQs7CDd1TZWXqM9QE_wQcZjKYKQ9LuC?PARTNER=WRITER)

为了使它更像棋子，我们还要对他进行一下加工。首先，要把它的尺寸调大；用工具选板上的颜色画笔工具把它在“真”“假”状态下的颜色分别设置成黑色和白色；给他起一个有意义的名称-chess 0，但是在前面板上需要把这个标签隐藏起来，这个名声是为了以后编程的。改进后的棋子，如下图所示：

[![](http://byfiles.storage.msn.com/y1pK16paY_woaBd47QUr7xacJp9BXITe4v9t_ecHrNkJeYEfrLTIbDjGO73dTfnR-Jt?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pDRYqVnyPUAy6Kyf0d4aaxuK1oVdzbf3HhfUmGqwz5qtInAgBFC6cHLiHJOr3x3VF?PARTNER=WRITER)

我们总共需要64个这样的棋子，排成8行8列。其它的棋子不需要再一个一个添加，以第一个棋子为模板，拷贝复制，就生成了第二个；再把两个棋子都选中，复制生成四个；重复这一过程，生成8、16、32、64个棋子。如下图所示：

[![](http://byfiles.storage.msn.com/y1pLG6EM3DfP32UlNYSh1Zq-nD6s5Fx4frOSTg4bYJ0KewYJ9_ico9sxP1i8O4WNciY?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1peGTi3XVhyZNblqHDMqNmEoGNHWDcUuJ3ppfcLusioP_c1K0yhR_WRglndHAfXQx7?PARTNER=WRITER)

下面我们要把这些棋子排列整齐。如果有耐心，可以用鼠标一个一个的调整每个棋子的位置。LabVIEW 提供了几个小工具来帮我们整理界面控件的位置和大小，它们就是工具条上，字体调整按钮右侧的四个按钮。这四个个按钮分别用于对齐控件，调整控件间距调整控件大小和控件前后次序。这几个工具在编辑界面时会经常使用到。

[![](http://q0by9q.bay.livefilestore.com/y1pXDyGcTskK4FJb_Cs6rRYUxzHQXesd20DoCdZ12HJkNGbiGro-DOzLzIHC3G8j6BVCE7TGfc8luk?PARTNER=WRITER)](http://q0by9q.bay.livefilestore.com/y1pDwvBSKKJSXLH3mlva_ofVsqOXEXFACSeHFN94REoY67-zY9An2zNCLCkEvJqf5k0Cui-VLTjHa0?PARTNER=WRITER)

我们先把首先利用对齐工具把首行和首列棋子对齐、再利用间距调整按钮使它们间距均匀。再利用对齐工具让其它棋子都与首行首列对齐即可。调整好的界面如下：

[![](http://byfiles.storage.msn.com/y1pcYBX4p3uN1qjDP8dhxvNysIs01ICCPrSC6cPKs_-o7dQvVVuXd2cEltytGyIldo0?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pyxYY-8XqhATgsWBZ_rsvuvMKFYwLqiYq8vtYt36sDmQD8U5arooazcqlgTezwb6B?PARTNER=WRITER)

到此为止，棋子的界面部分就完全设计好了。但是我们还要考虑一下相关的代码。棋子在程序运行过程中时发生变化的。 64颗棋子并不都是显示在屏幕上的。游戏一开始，屏幕上只有四颗棋子，以后每走一步多一颗棋子。LabVIEW 每个控件都有一个属性“Visible”，控制控件是否在前面板上显示出来。棋盘的某个位置还没有放棋子时，可将该位置的棋子控件隐藏。

[![](http://byfiles.storage.msn.com/y1pDAJjxHx_G1-vwPAiGFBmcFIgwciehu46iEtD6eqhtl51sQRkuov2Pt5XCr_3dcgt?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1plqc8GYrl4MqCybx3EKOzopxVaL6_3a2TvFnohyuC7p18w1wxQcRhstneEukge3so?PARTNER=WRITER)

设计界面时，经常遇到有些控件只在某种特定情况下出现。这样的问题有两种最常见解决方案，一是我们刚刚提到的，可以在不需要看见某个控件时设置它的Visible属性，将其隐藏。这种方法代码编写比较简单，但是不利于界面编辑。尤其当界面某一位置需要在不同情况下出现多种不同控件的情况下。几个几个控件需要在那个位置上重叠摆放，不利于对控件进行编辑调整。 第二种方法是通过控件的Position属性，设置它在界面上的位置。需要显示控件时，把它设定到应该出现的位置；需要隐藏它的时候，把它挪到VI前面板可视范围之外的某个位置上，这样就看不到它了。使用这种方法，始终可以在VI前面板上找到这个控件进行编辑修改。但是编程的时候相对繁琐，需要在程序中设定控件的位置。 如果有一组控件需要同时出现或隐藏，那还可以考虑利用tab控件。把这组控件加在tab的某个页面上，然后通过调整tab的显示页面，控制控件出现与否。

打开程序的框图，64个控件端子排布在那里。对它们分别进行操作，程序代码将会非常杂乱难懂。为了让程序更清晰，最好把这64个控件按照在棋盘上的位置，组织成一个8×8的二维数组。之后，程序对哪个位置的棋子进行操作就一目了然了。

[![](http://byfiles.storage.msn.com/y1p6k7TttRZ27QKeBkoxMaLVUGZmVxaUc68uf6vvey7vQcaHv9KvLYexN35Sar4AWZc?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1p2w-XDsPmvkoB56QiArOZX70OD9oVXJlLknHf_eNVKzOXI-jCtF3tnP5D9ZL7RhOL?PARTNER=WRITER)

直接把它们组成数组的方法是：为每个控件建立一个引用，然后使用 build array 函数把它们组织起来。但是对64个控件进行一一操作还是够烦的，最好可以编程解决。由于这64个棋子的名字是有规律的，因此我们可编程，按照名字一一等到这些控件的引用。再将得到的引用转换成8×8的数组。如下图所示的代码

[![](http://byfiles.storage.msn.com/y1pjDh-NqBIG2WfFI9NRCDSZ6xUKkOgIT_wvRTjB-fn-HuPggsDgGG0vdxgbGK_Bm0n?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1phhemduc0Tv-tI04EZZVnAUyb4nENP20Cm0vUYS0-NIIApYspMufh7KXUaOJcNKDb?PARTNER=WRITER)

这里使用了一个关键的子VI，Get Control.vi。这是LabVIEW自带的一个VI（\[LabVIEW\]\\resource\\importtools\\Common\\VI Scripting\\VI\\Front Panel\\Method\\Get Control.vi），它用来按名称得到前面板上控件的引用。 这段代码输出的 chess array 是一个8×8数组，包含了所有64个控件。之后程序再对棋子进行操作，从这里得到相应位置的棋子的引用即可对其进行操作了。

实际工作中，有些应用程序有比较复杂的界面，为了简化它的代码，对界面控件的操作被放置在子VI中完成。直观的做法也是：程序开始时为主程序的控件建立引用，把这些引用捆绑成一个簇，传递到子VI中去。但是，一旦界面发生变化，所有使用到这个簇的VI都可能需要被修改，相当不便。所以，这样的程序也可以使用上段文字介绍的方案，只把主VI的引用传递给子VI，在使用到某个主VI控件的时候，按照名字得到它的引用再对其进行操作。

[博客版《我和 LabVIEW》](http://ruanqizhen.wordpress.com/2005/11/07/%e6%88%91%e5%92%8c-labview/)
