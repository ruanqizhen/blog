---
title: "弯曲的数据连线"
date: "2009-08-04"
tags: 
  - "我和labview"
---

本文内容出自LVAV论坛的一片帖子：[http://lavag.org/topic/10670-wired-wires/page\_\_p\_\_63544&#entry63544](http://lavag.org/topic/10670-wired-wires/page__p__63544&#entry63544)。  
  
借助VI Scripting，可以做出很多炫目的效果。比如说各种形状的数据连线。LabVIEW程序框图上的数据连线都是水平或垂直的，但它们可以转弯，在需要的地方转90度角。你可以手工的在一条数据线上添加几个拐点，让它从一个接线端出来，转几道弯再接到另一个接线端上去。如果你有耐心的话，可以在连个接线端之间设置几十个拐点，并且把这些拐点排列正一定的曲线形状，如果螺旋线、正选曲线的模样。如果拐点足够多，连线看上去就是一条曲线了。  
很少有人会有这样的耐心吧，但是有了VI Scripting，写一个简单程序，一按按钮，啪一下，它就帮你把所有拐点设置好，把连线变成各种漂亮弧线了。如下图所示：  
  
![](http://lavag.org/index.php?app=core&module=attach&section=attach&attach_rel_module=post&attach_id=454)  
  
[点击这里下载示例VI](http://lavag.org/index.php?app=core&module=attach&section=attach&attach_rel_module=post&attach_id=440)。
