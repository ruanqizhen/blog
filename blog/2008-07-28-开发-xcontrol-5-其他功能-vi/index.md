---
title: "开发 XControl 5 - 其他功能 VI"
date: "2008-07-28"
tags: 
  - "我和labview"
---

转换状态以保存功能VI用于保存XControl的状态数据。默认情况下，XControl外观功能VI中的状态（Display State）全部都会被保存在使用它的VI中。如果状态数据比较大，无疑会增加VI的大小。但是，这些状态也许并不需要保存。有些控件的状态，比如控件颜色，尺寸等信息，需要在VI关闭后仍然记得，在下次打开时，还可以保持上次的修改。但是有些状态中的数据，只是临时使用的，不需要保存。比如，我们的黑白棋控件状态中的任何数据，当前颜色，可落子的位置等等都是每次重新计算出来的，不需要保存下来共下次打开VI使用。所以，在转换状态以保存功能VI中，可以丢弃所有数据，保存一个空数据就可以了。

![](http://byfiles.storage.msn.com/y1pfzei2s1ddlMil8P9haJf9-W1YSZ8a1cLPYiFMll257yCKT2iu5_Qj96BkWyCAn9B?PARTNER=WRITER)

初始化VI，有两个作用，一是把保存在使用XControl的VI中的状态读取出来，付给XControl的状态。而是打开或初始化XControl需要使用到的资源。对于我们的黑白棋控件，由于没有保存任何状态数据在VI中，所以不需要读任何数据出来。而我们的黑白棋控件使用到了一个用户事件，所以需要在初始化功能VI中创建这个事件。

![](http://byfiles.storage.msn.com/y1ppbiz_iH5WAlaqppSTy3ophDfpsbYGayIJQmAL5uswHlkvJRrH4e4afrDy6d2zKZSBdZBCGV2XTM?PARTNER=WRITER)

反初始化功能VI负责关闭XControl中打开的资源，我们在初始化功能VI中创建了一个事件，所以在这里要销毁它。

![](http://byfiles.storage.msn.com/y1pQUY67PsGi0GKtO0S_DZuNZRzQ4IGjVZGuAnI9YikZsVZfbjKbRww9zLhvcZEGGsMCPgDbUaLNwM?PARTNER=WRITER)

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
