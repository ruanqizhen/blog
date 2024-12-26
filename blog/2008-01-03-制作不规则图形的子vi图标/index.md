---
title: "制作不规则图形的子VI图标"
date: "2008-01-03"
tags: 
  - "我和labview"
---

    大多数子 VI 的图标都是一个正方块。但有时候，为了程序代码美观、易读，需要把子 VI 作成不规则图形显示在调用它的父 VI 代码上。LabVIEW 中很多自带的函数采用的就不是32×32的正方形，比如说加减乘除运算函数等。我们已可以把子 VI 作成非正方形方块，比如图1中的 My Function.vi，我把它的图标做成了三角形。

![](http://byfiles.storage.msn.com/y1pIcO_924THocqZTLbPF8qwYxwNJtC_WuHt80zGyCigSW7IJVvKcYdCY3IbZtv80CrGYSqiShhCfY?PARTNER=WRITER)  
图1：调用 My Function.vi 的代码

    把子 VI 的图标改为非规则图形，有一些事项需要注意。首先要考虑选取一个合适的接线方块模式。现在 LabVIEW 默认的模式是4224模式（按照每一列接线端的数量给模式命名的）。但这种模式通常不适合不规则的图标。比如说图1的 My Function.vi，它需要一个纵向排在中央的输出接线端，4224模式最右侧的4个接线端对称分布，没有一个在最中间。  
    在VI前面板的图标上点击鼠标右键，选择“Show Connector”，之后再鼠标右击，就可以挑选一个合适的模式了。对于 My Function .vi，可以使用52225这个模式。如下图所示：

![](http://byfiles.storage.msn.com/y1pIcO_924THodRm1SuODboI7wIjM9vEw0xzZgRc5AFu_oETGYGPowE8MR4gsGjRSdnqUoHEDP2f5g?PARTNER=WRITER)   ![](http://byfiles.storage.msn.com/y1pIcO_924THocm9X-16jfyWT5__4xjnZoddsdNdXh-Ti4FxzHsiduVI_sf1IAbn9CUvbTHqDrn2w0?PARTNER=WRITER)  
图2、3：选取接线方块的模式

    接下来，就是核心工作-编辑图标了。制作不规则形状的图标最重要的两点，一是不要给图标加上边框，二是三个颜色的图标要保持一致。下图是 LabVIEW 的图标编辑器，它的中央有三个小方块，分别显示黑白色、16色、256色下的VI图标。用鼠标点击一下某个小方块，左边的编辑区就开始对这个颜色的图标进行编辑。  
    如果你的显示器是颜色数量高于256色，那么，你在程序代码中看到的始终是256色那个图标；如果少于这个颜色数量，比如只有16色，那么在程序代码上看的的子VI显示的就是16色的那个图标。不过现在恐怕找不到16色的显示器了，所以16色这个图标一般情况下就是空白。黑白色的显示器虽然更罕见，但是这里的黑白图标还有另一个用处，就是确定图标中图形的轮廓。所以这里一定要有一个形状和256色图标项符合的黑白图标才能做出不规则图形图标来。一般在编辑黑白图标时，按一下“Copy from 256 Colors”的按钮，把256色的图标复制过来就可以了。  
    编辑不规则形状的图标最好选中“Show Terminals”，把接线方块模式在图标编辑区显示出来。这样可以方便的查看，现在的图形是否与接线方块般配。比如说，我要在接线方块右侧中央的接线端接一个输出数据，我的图形至少要覆盖到这个接线端才行。

![](http://byfiles.storage.msn.com/y1pIcO_924THof9t7Q3PT8ZJPld9goP9lJG-eqLDCjxnTpTpBRhDCAPskM2uBW1slGrLzb45kOoAwc?PARTNER=WRITER)  
图4：图标编辑器

 [《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2007-10-25_18.59/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
