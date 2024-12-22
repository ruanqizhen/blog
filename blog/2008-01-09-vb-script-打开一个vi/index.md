---
title: "VB Script 打开一个VI"
date: "2008-01-09"
tags: 
  - "我和labview"
---

    LabVIEW 的一些服务功能是通过 ActiveX 接口提供出来的，我们在其他支持 ActiveX 的语言中可以方便的调用这些服务。比如一个最简单的例子，使用 VB Script 打开一个 VI 的前面板，这样做就行了：

> Set lvapp = CreateObject("LabVIEW.Application")  
> Set vi = lvapp.GetVIReference("C:\\temp\\test.vi")  
> vi.FPWinOpen = True

    由于 IE 支持 VB Script，这段代码还可以嵌在 HTML 文件中实现这样的功能：页面上有一处超级链指向一个VI，点击这个链接，就可以显示相应的 VI。其他浏览器可以使用 JavaScript。

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1073.entry)
