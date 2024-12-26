---
title: "界面设计技巧 3 - 用户自定义控件"
date: "2008-07-12"
tags: 
  - "我和labview"
---

    现在棋盘已经很漂亮了，相对来说，棋子似乎残留了比较多的LabVIEW控件的痕迹，与我们要编写的游戏程序风格不符。我们可以利用[用户自定义控件](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1825.entry)来造出更漂亮的棋子。

    制作自定义控件，可以从一个全新的ctl文件开始，也可以在某个已有的控件基础上进行修改。比如这里我们想把棋子周围一圈光效移走，右键点击一颗棋子，选择 Advanced->Customized，弹出控件编辑界面。按工具栏上扳手一样的按钮，切换到自定义模式，即可修改控件上的元素。这个控件有三个元素：标签、灯泡的主体部分、和边框。选中最外面那个白色的框，即边框，删除即可。编辑完成保存，新的棋子就不再有边框了。

![](http://byfiles.storage.msn.com/y1proan66XzAtM_OrPt3FcSxWl7Ii81nf6kp9OxJLozOGW09S_A1Vl8nSdY0QxxpECL?PARTNER=WRITER) ![](http://byfiles.storage.msn.com/y1pnDk2oL4kbyNcSDJkugnPU0a3Mdza74cNBoNWQSfSfQC_qsycw1uhw5LnOZMo7y7T?PARTNER=WRITER)

    自定义控件也可以贴图，布尔型控件，比如按钮一般有4个状态，可以贴上4张不同的图片，做成复杂形状的按钮。下图就是通过贴图做成的一个有阴影效果的棋子按钮。

![](http://byfiles.storage.msn.com/y1pGMLkCn6UP7x0FDmeqZ-rKkQEU_HLWqHeSja4hRb7rscuHbypkBP2s7z_gX4kGVzO?PARTNER=WRITER)

    最好所有的控件都使用严格类型定义，这样以后再需要改变界面的时候，只要在类型定义ctl文件中改动，所有的棋子就都会改变。

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
