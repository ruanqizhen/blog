---
title: "在文件夹下直接创建新的 VI"
date: "2007-05-18"
tags: 
  - "我和labview"
---

    在 Windows Explore 中，鼠标右键点击某一文件夹的空白处，弹出的菜单中有“新建”一项。通过修改 Windows 的注册表，可以给这个新建列表添加一项，从而直接在文件夹下创建一个新的 VI。如图1所示。

![](http://byfiles.storage.msn.com/y1pPUK7j7lmY1WD2SxPznseE25mOUSHFAqQzbrF63Pse--FzHNBm8v8fIVLoIFnNDLJ)  
图1：在“新建”菜单中添加一项-创建VI

    下载 [](http://community.ni.com/examples/5728-windows-explor-4e2d76f463a5751f621065b0vi/create-new-vi.zip)[Create New VI.zip](http://decibel.ni.com/content/docs/DOC-1078) 文件，然后解压缩。运行里面的 Create Empty VI.reg，把它里面的内容导入到注册表。然后就会发现多出图1所示的新建 VI 的项目了。

    让 Windows 多一个新建项目，只要在注册表里添加上相关内容就行了。Create Empty VI.reg 文件中的 Data 数据其实就是新建出来的文件的内容。在这个例子中，他是一个空白的 LabVIEW 8.0 的 VI。我们可以改变 reg 文件中的数据，使得产生出来的 VI 有所不同。  
    比如，你希望自己的新 VI 总是使用蓝色背景的，有一个特殊的图标等等，只要改变 reg 文件中的数据就可以了。ZIP 包中还有一个 Create New Reg Data.vi，这个 VI 可以读入一个文件，把它转换成注册表中实用的 Data 数据。使用者可以自己先造一个自己喜欢的 VI 作为模板，然后利用Create New Reg Data.vi 为它创建出一个注册表数据，导入注册表。这样每次在文件夹下用鼠标右键创建出的 VI 就是模板 VI 的样子了。

**相关文章：  
**    [我和 LabVIEW](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
