---
title: "如何调试 LabVIEW 调用的DLL"
date: "2007-04-03"
tags: 
  - "我和labview"
---

https://labview.qizhen.xyz/

**问题（[Frank](mailto:frank.xie@cn.flextronics.com)）：** 我用 Labwindow 编写了一个读文件的动态库, 即向动态库传递文件路径及文件名和某特定字符串,然后通个三个参数返回读到的值, 在labVIEW里调用该动态库,结果返回值老是显示打开文件失败, 不知错误出现在那里,另外在LabVIEW里如何调试确定传到动态库的参数是符合函数参数格式的呢?该函数在Labwindow里调试没有问题.请大侠指点迷津,不胜感激!

**回答：**     我好久没有用过 CVI 了，计算机上也没有装，不过用 CVI 来调试，应该和用 VC 来调试原理是相同的，步骤也想类似。我就以 VC 为例说明一下。首先在 Debug 模式下 build 出一个 DLL 来。 （VC 7.1 即便是 release 模式下也可以设置断点，单步运行，但别的编译器不一定行。）然后用这个新的 Debug DLL 覆盖原有的DLL。

关闭 LabVIEW，点击 VC 菜单 Debug->Start (F5)。因为工程生成的是不可以直接执行的 DLL 文件，这是 VC 会弹出一个对话框，问你用什么运行。选择浏览，然后找到 LabVIEW.exe。（这个可执行文件也可以在工程属性中 Debugging->Command 一栏设置。）之后，VC 就会把 LabVIEW 调用起来。

在 VC 中设置好断点。在 LabVIEW 中运行想要调试的 VI。程序会停在你设置断点的地方。
