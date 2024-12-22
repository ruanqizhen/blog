---
title: "调用动态链接库 1 - 动态链接库导入工具"
date: "2008-03-21"
tags: 
  - "我和labview"
---

    在 Windows 系统上，动态链接库就是DLL文件。调用DLL是 LabVIEW 与其它语言混合使用是最重要的一种方法。比如，在一个大的项目中，用户可以用 C++ 语言实现软件的运算部分，并把这些功能构建在DLL文件中；再使用 LabVIEW 编写程序的界面部分，并通过调用编写好的DLL来调用运算部分的功能。  
    现在轻易就可以找到完成各种功能的DLL，LabVIEW 通过调用它们，也几乎无所不能。

[![](http://byfiles.storage.msn.com/y1pIcO_924THoc4dqpHOMKB4vsn8I-P8IcqOCO1QOZ29xh0oxOIEnQwYXHj6p2D35-P-DJEtOgCmZI?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THoe0CkiTPjZdLHdbXvRSF4kAdMlE8rC8cO1DHQXPqBdcXF3pCLZI3K7aSjQxrazbW9Q?PARTNER=WRITER)

    在 LabVIEW 中，通过 Connectivity -> Libraries & Executables -> Call Library Function Node（CLN）节点来调用DLL中的函数。  
    在函数选板上，它旁边的一个节点是 Code Interface Node，这个 CIN 节点也是用来与C语言混合编程用的。这是在 CLN 节点出现以前，LabVIEW 调用C函数的方法。现在有了CLN，可以不再考虑它了。（我个人强烈建议：不要使用CIN！因为那样会遇到很多问题，但没人能帮你解决。）

    在 LabVIEW 中调用 DLL 中的函数，最大的难度就在于把函数参数的数据类型映射为相应的 LabVIEW 中的数据类型。在准备研究 CLN 中的参数如何配置之前，可以先考虑一下这个工具：Tools -> Import -> Shared Library。这个工具专门用作把 DLL 中的函数包装成 VI，升成的每个 VI 中最主要的部分就是一个 CLN 节点。它自动帮你把函数的参数都已经设置好了，有了这个工具你就不需要再费脑筋去考虑数据类型匹配的问题了。  
    这个工具的第一个版本是我开发的。它虽然不算完美，但大多数情况下也够用了。如果你有现成的DLL，打算在LabVIEW 中使用，首先应该考虑的就是用这个工具，把DLL中所有函数都包装成 VI。再使用起来，就方便多了。

    某些特别复杂的情况下，Import Shared Library 这个工具可能无法处理，或者包装出来的 VI 不令人满意。这时就需要编程人员手工做一些设置或修改了。因此，高级用户了解这些数据类型的匹配也还是有必要的。我会在后续文章里对此做一详细的解释。

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1073.entry)
