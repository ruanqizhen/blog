---
title: "LabVIEW新特性预览：利用贝塞尔曲线提高程序运行效率"
date: "2008-04-02"
tags: 
  - "我和labview"
---

    目前 LabVIEW 在程序框图上的连线或横或竖，没有斜向连的，更不会出现曲线。如果需要连接的两个端点不在同一高度上，则数据连线会出现数个90度的直角弯。这种连线方式虽然整洁，但却会严重影响 LabVIEW 的运行速度。  
    LabVIEW 运行时，数据在连线上流动。每当遇到转弯时，数据流速就必须减缓，否则高速运动产生的离心力会把数据从数据线上甩出去。这同汽车转直角弯时必须刹车是一个道理。

    一个叫做 MGI 的网站今天公布了下一版本 LabVIEW 的一个重要新特性：LabVIEW 将在程序框图上使用圆滑曲线代替所有的直角转弯。这样，数据再需要改变流向的时候，由于转弯半径大大增加，离心力相对较低，数据可以保持高速流过转弯的曲线。  
    新特性的原理图如下：

`![](images/Straight-Animation.gif)  ![](images/Spline-Animation.gif)  `
直角转弯方式迫使数据在转弯处降低流速；  
而新的曲线转弯方式允许数据保持高速流动。

    看完这篇报道，你是为 LabVIEW 的革新振奋不已，还是对其改进效果将信将疑呢？祝贺你，April Fool:) 这其实是原载于[http://www.mooregoodideas.com/](http://www.mooregoodideas.com/ "http://www.mooregoodideas.com/") 的一个愚人节笑话。

[《我和LabVIEW》](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1073.entry)
