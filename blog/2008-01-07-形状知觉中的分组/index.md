---
title: "形状知觉中的分组"
date: "2008-01-07"
tags: 
  - "读（观）后感"
---

    昨天看《心理学》恰好看到知觉这一章中的视觉形状知觉中的“分组”一节。这一节介绍的知识对我们程序界面设计颇有启发作用。它还为我以前总结的一些界面设计的经验提供了理论依据。

    形状知觉的第一步是分离背景，把我们关心的图形从背景中分离出来。之后就是把提取出来的那些图形分类组合，加工成有意义的图像。大脑在为背景中分离出来的那些图形分组的时候，会采用以下一些规则：

![](http://byfiles.storage.msn.com/y1pIcO_924THoddN1fN17NT2QJ1NNZhLJvW8EqU7AuSDY5k9lfSq9KdBtBzxpjkLUE_OuWg4-N6i7w?PARTNER=WRITER)

    **接近性**：大脑把距离近的物体知觉为一组。因此我们看到上面这幅图的时候，自然的感觉是三组双竖线，而不是六根竖线。应用于界面设计，比如我们的界面上有六个按钮，三个负责文件操作：打开、保存、关闭；另外三个负责文件编辑：插入、删除、修改。为了方便用户找到所需的按钮，我们需要让用户感觉到这六个按钮分属两组，他只要在相应的组里查找所需按钮即可。最简单的方法：打开、保存、关闭三按钮之间间隔6个像素，而间隔12个像素之外摆放插入按钮，插入、删除、修改之间间隔也是6个像素。这样，用户自然会把他们知觉为两组。

![](http://byfiles.storage.msn.com/y1pIcO_924THofm4fBWjcn6Nz1hgBLiqi0RqbvYcsc6kjYWIlMB5lXVcFNsAGcWSjdJUltd1I8UEIY?PARTNER=WRITER)

    **相似性**：大脑把相似的图形知觉为一组。因此，人脑会把上图分为三列，而不是三排。应用于界面设计，比如我们需要让用户把一篇文章中所有的名词归为一组，我们就可以赋予所有这些名词某一种颜色或字体，用户自然一眼就会把它们都找出来。  
    以上这两点，在[《界面元素的关联》](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!2641.entry)一文里都已提及。

![](http://byfiles.storage.msn.com/y1pIcO_924THodWdmfQecFnsBoGbfTs_lwKSR3vNH5tJPnmLQoTtiwkLF968CqJuYKRz65q5422pVo?PARTNER=WRITER)   ![](http://byfiles.storage.msn.com/y1pIcO_924THoez1n9-zrh2i01wxbHNy_mAt71adjGiEXeZdRO-CW9kwfGY5s9sWf4ln75B8TT21Cw?PARTNER=WRITER)

    **连续性**：大脑对图形分组，偏好平滑连续。所以左上图看上去是一根直线和一根曲线，而不是五个半圆。  
    **连通性**：当图形相同，并被连接起来的时候，大脑会把他们分为一组。如右上图。

![](http://byfiles.storage.msn.com/y1pIcO_924THodPSaXYxEsBA1zQhE_xnLHyTYWTMKJsyg9d6x7XXL8D-GONZxBrunGDcvMxHOLQXKA?PARTNER=WRITER)

    **封闭性**：看上面那幅图，你会明显感觉到有一个正立的白色三角形，虽然它并不存在。这是因为人脑会试图补全缺失的图形。针对上图，我们会设想图中的圆形和倒三角都是完整的，它们的缺口是被一个正立的三角遮蔽而形成的。应用于界面设计，为了避免错觉，我们可以把一组相关的不同类型的控件用一个封闭的图形，如边框等圈起来。


