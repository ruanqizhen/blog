---
title: "界面设计技巧 4 - 改进界面实现方法"
date: "2008-07-13"
tags: 
  - "我和labview"
---

    到目前为止，棋盘棋子的界面已经基本成型。下面我们实现一小部分代码，来看看这个界面设计方案是否可行，是否可以改进。  
    以棋盘的初始化为例，在游戏开始时，只有两黑两白四颗子，摆在期盼最中间。实现这个操作的代码和执行结果如下图所示：

[![](http://byfiles.storage.msn.com/y1pJfA214C_s3EIcwofVvEAo0ddiVUcF1Q8jqbi4L-UhW4ldPdhqq-3huR6AhogBqkEZiyKZfNR7wE?PARTNER=WRITER)](http://q0by9q.bay.livefilestore.com/y1poM3IxbZoTBYqK51py-_OkW7CF0gat6QniVgKL5pCyrvILODiMC5ZJ6HZuHwbdaYyNzFuVosYC6w?PARTNER=WRITER)   [![](http://byfiles.storage.msn.com/y1ppNkWhdyhSFU2IzR6a5xhW_CqiXQi9PbqwHgQFn2vJimXRyMDiw6oQVxYKAUvvqkHpO7Oou7Wjd4?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1p904tWVEY_j4IgvbWA2xrYXlb8t8NSQzHOAomEtNENuVpfW8A8IQXjZJ74dDrrCwAeZB8LN6S3Io?PARTNER=WRITER)

    代码中的子VI（Get All Chess.vi）中的代码，就是我们在第一节图8中看到的那段代码。它负责得到所有棋子的引用，并排列成二维数组。

    这段初始化的代码并不算复杂，但是我们还是可以从中看出一些问题：棋子的布局需要用两个数组才可表达清楚，这给编程增加了负担。造成这一状况的根本原因在于：每个位置上的棋子实际上有三个状态：黑、白、无；而我们选用的灯泡控件，只有两个值：真、假。用这两个值不足以完全表达棋子的状态，所以，要两个布尔类型才能确定一个棋子的状态。  
    另外，棋盘只是一张背景图片，这样，判断鼠标在棋盘哪个位置上进行的点击，也比较繁琐。一旦棋盘挪动，代码也需要做相应改动。  
    改进的方法，就是使用一个有更多值的控件来表示棋子。在我们的程序中，要求每个棋子位置有多个不同图片，这正好可以使用 Pict Ring  控件。Pict Ring 控件包含三个值：空白图片、黑色棋子图片、白色棋子图片。这样即便是没有棋子的位置，Pict Ring 控件还在，可以感知用户的鼠标点击事件。

    上面的代码还有一处不足，每个棋子都是一个独立的控件，造成界面控件太多，不好管理。对于更复杂的程序，比如围棋游戏，如果使用这种方式，界面上就有将近400个控件，这是不可接受的。  
    改进的方法是使用数组控件，把所有的棋子组成一个数组。

    具体的实现步骤如下：  
    首先创建一个经典风格的 Pict Ring 控件，添加三幅图片：空白、黑棋子和白棋子。棋子采用的都是png文件格式的图片，以实现透明和阴影效果。

[![](http://byfiles.storage.msn.com/y1pKNO09aNm5dcpbdXKrEqddVfkhSdSe_9lInoG8OYr_9o4UXAj5PCaP4z73aXkUILelSJx41HHjmg?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pRyLL9fgf2p7vvTC6Dvv6EcVRH-1OkU2HpnB08tczv5Zm_3znV6d9tNNMjARvyzmZuYUOzznJSYA?PARTNER=WRITER)

在程序中，我们不希望看见 Pict Ring 控件的边框和背景。我们可以用透明画笔，把边框和背景画为透明。

[![](http://byfiles.storage.msn.com/y1p1Gw9NJi8kozXPDDyOL7wXlcUaFe0TtfZwgRuCPhSZiwo1g11G3uivKsxchrBFDzmxCt2jLaiCSs?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pjmdbLVe5vBiODHKIGPskxl7Szrygv5auXSJlK6FGJu94HR9_kAlqAZGhHt1FYuqgDzpENlCpVsc?PARTNER=WRITER)

    造一个二维数组用来放置棋子元素。由于界面上不希望看到这个数组的边框和背景，所以同样用透明画笔把它们画为透明。数组的标签、索引显示可以通过数组的右键菜单->显示一项进行隐藏。  
    把棋子元素放置于数组中，并把数组拉成8×8大小，放置在棋盘上放。一个棋盘棋子控件就做好了。而这种做法又大大简化了编码的复杂度，比如同样是初始化设置，只要一个赋值语句就可完成：

[![](http://byfiles.storage.msn.com/y1p1sWoBFvgPgQn7CgolhatdnFmZSL6ZTXTsfU_FxJN5zC4rDF1_CRW-OEWCQ2YFKxUUhk3guVbpv4?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pJjykgy-SMk3CprwK1FfGrSpNcSUZxmjDUitKOk_LEFv_tuK-achKN5YospCpO2wS-pkK6a-Vdrc?PARTNER=WRITER) [![](http://byfiles.storage.msn.com/y1phwbp8FnLMArj2_mK_LXkR8xgBQWqfGj4BwkKMQUMOqtSb_BJnAmHhYnQfz6f8gRIHO2RdxcUj14?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pS6ciadclCcw7_w_VSpFGvybiii7U3lTQpWjUOVkHQG892jn6bMswibCKDR0JSYwjuTBO2m--xag?PARTNER=WRITER)

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
