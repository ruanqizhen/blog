---
title: "界面设计技巧 2 - 装饰和背景图片"
date: "2008-07-12"
tags: 
  - "我和labview"
---

    现在棋子都已经摆放到位了，下面考虑如何把棋盘加上去。由于棋盘是静态不动的，所以设计起来要比棋子简单。LabVIEW 自带了这种形状的装饰组件，比如线条、方块之类的，利用这些装饰图案，很容易搭出一个棋盘来。如下图，就是由几根被画成黑色的线条搭出来的部分棋盘。

[![](http://byfiles.storage.msn.com/y1pNIC4p0_aO_pQIY1j3sRkDX22RS-PtoyO9sWp4TZyun1zjsbP47ilcmfqQxec8o6T?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1ppkUx29OTMBm329BRM0aWyZP-of5ae_1MF4bpOyza8WbsdDkLWj60IbGTtmfEHKhB?PARTNER=WRITER)   [![](http://byfiles.storage.msn.com/y1pos8gBw0I3VWChbnMRCJ3TvnTOYmhOFXM85fOj0jc1lkriz-EQORds7jZB-NEoKa7?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pZLY2K6QN3YXP1-0Y0ioCURHNReskXEZzau540JDbjreQtm26l5PLNNfa1nffVRGT?PARTNER=WRITER)

    在编写程序界面时，装饰最常被用来将一组相关联的控件包围起来，或把不相关的控件个离开。

    不过呢，用LabVIEW自带的简单图形拼出来的棋盘始终是不够漂亮。我们可以先用专业的画图工具，比如画图板（也不怎么专业吗）画一个漂亮的棋盘，保存成图片文件。然后把图片贴到VI的前面板，当作背景图片。这样，就可以得到一个漂亮的多的棋盘了。  
    贴图这个操作，可以用Ctrl+C，Ctrl+V，也可以直接在文件浏览器中，用鼠标把图片文件拖拽到VI前面板。  
    拖拽到VI上的图片，是处在界面最上层的，覆盖住了棋子。利用Reorder工具中的“Move to Back”，把它挪到最下层。在调整好棋子和棋盘的位置，整个一个棋子棋盘界面就做好了。如下图：

 [![](http://byfiles.storage.msn.com/y1p1fkATlNw6rNhBv236qNaFrUOxITfiEf33XHiY78w0Fv7UbYA7HVnkL-8s45n3x53?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pjwUon7G0AnTB-ijaL33PNL6cCI7V0CjXwFzEwMkQ4xKr9Q0GRYBT8vjjlJ5QFX9b?PARTNER=WRITER)

    棋盘棋子都摆好之后，它们的相对位置应该固定下来。如果需要它在界面上挪动，应该是所有的棋子和棋盘一起动。先用鼠标把棋盘和全部棋子选中，再在Reorder工具中，选择group就可以把它们设定为一组。之后他们之间的相对位置就固定下来了。

    咱们刚刚贴上来的图片是个矩形的，可是有时候，需要背景图片是不规则形状的。这种情况下需要使用支持透明色的图片格式，比如gif格式，把不规则图片空白部分设为透明即可。还有一种常用的文件格式png格式，支持像素点透明度的设置，利用不同的透明度设置还可以给背景图片做出阴影等效果。例如下图VI界面中两个带粉色的带阴影效果的解说框，使用的就是png文件格式的图片。

[![](http://byfiles.storage.msn.com/y1p_dQ_aoS-xPocszmwlqkMGvc0c6789suG5tqLpOv8QL_clQtxdmPXPuv-s7mev1wz?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pbbeESswAuTJ1Y9NpviBxzCGGpBwB4SWhr1E1bC6D3TNv3TJdWTDBk3fcf8WL-9oM?PARTNER=WRITER)

    这样子贴上来的背景图片大小尺寸是固定的。有时候我们希望整个前面板被某一背景图片铺满。这个设置是在窗格的属性中设定的。鼠标右键点击前面板窗口的滚动条，选择“属性”，在“背景”设置中选择一个背景，或添加一幅自己的图片，就可以为VI前面板设置上背景图片了。下图是使用的“Clouds”背景的效果：

[![](http://byfiles.storage.msn.com/y1pX7Ua2jBlWgkQAdH-uMJ2-r-ZNRRWO4fI01irg1Bg57VQoqdzLuCEeIdRi0_q8nBB?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pEHhWeGZc2AbA_i9LIgasPAJs_gySDI0nx9_Ury1oB4PzRNdiaKB9hEDEPuVh0MXT?PARTNER=WRITER)

 [《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
