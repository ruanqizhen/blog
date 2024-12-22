---
title: "VI Server （VI 服务器）"
date: "2008-01-02"
tags: 
  - "我和labview"
---

    VI Server 是指通过程序调用 LabVIEW 提供的一些服务功能的技术。使用 VI Server 可以完成如下的功能：运行远程的VI程序；通过互联网运行程序、传输数据；程序运行时调整VI、控件的某些属性，主要用来调整界面；编程来创建或修改VI；搭建插件框架式程序，等等。

    VI Server 的服务端就是 LabVIEW，客户端可以通过三种方法调用服务端提供的服务：  
    ActiveX，LabVIEW 提供了 ActiveX 接口。在其他编程语言中，比如 VB，VC++ 中，可以通过 ActiveX 调用 LabVIEW 提供的服务。  
    TCP/IP，用于远程机器，通过web服务来调用 LabVIEW 提供的功能。  
    LabVIEW 编程，这是最常用的方式，也被称为 VI Scripting。通过 Property Node，和 Invoke Node 暴露出来的属性方法，在 LabVIEW 程序中就可以调用这些服务。VI Scripting 最常见于界面需要在运行时改变的程序，和动态运行某个 VI 的情况下。

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1073.entry)
