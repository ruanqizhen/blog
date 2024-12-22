---
title: "用 LabVIEW 编写 Wizard 类型的应用程序 1 (LabVIEW 6.1 之前)"
date: "2006-04-08"
tags: 
  - "我和labview"
---

    Wizard 向导类型的程序，指的是可以类似安装程序那样，一步一步地指导用户完成功能的应用程序。这类程序极为常见。它一边要求用户提供必要的信息，一边给用户发出指导性的意见和反馈。这样，即便是新用户也可以轻松完成任务。但是，向导类型的程序虽然方便了用户，却是增加了开发人员工作的复杂度。  
   在过去的七年里，我编写过各种各样的 LabVIEW 应用程序，其中大部分程序的界面都是向导类型风格的。这种风格的软件确实是用途广泛。  
在这里，我把曾经用到的编写 Wizard 的各种方法作一简介。随着 LabVIEW 程序的不断改进，以前用过的有些方法今天看来或是十分笨拙、或是已经失去了意义，以后再也不会使用。我记叙下来只是作为对自己过去这一段工作的怀念吧。  

## 一、页面为独立 VI

    我在编写第一个程序时，首先想到的就是一个最直观的编程方案：为 Wizard 的每一个步骤编写一个独立的 VI。关闭当前的 VI，打开一个新的 VI，程序就自然而然从一个页面跳到另一个新页面了。完成后，就发现这并不是一个好主意。因为每个页面都是独立的，数据的交换和状态的控制都不方便。比如说，原来的面板在屏幕左边，按一下Next键，面板突然蹦到屏幕的右边了。

##  二、借助 Windows API

    于是，就考虑是否可以采用框架式的结构。当时 LabVIEW 还没有 sub panel 控件，做框架只能借助 Windows API 的帮助，把一个 VI 的面板当作子窗口，插到框架VI的界面中去。当时公司的一些产品就是采用了这种方法。但是，我并不喜欢。它的主要缺点是只能够支持Windows，无法跨平台使用。再者，我是一位地地道道的 LabVIEW fans，怎么能利用 Windows API 呢？我应该寻找一个纯G语言的解决方案。

## 三、变动控件位置

    下面，就来介绍一个早期的纯 LabVIEW 的解决方案：通过挪动界面上控件的位置来达到界面切换的效果。具体说，就是当用户按下 Next 键，程序就把当前界面上的控件往旁边挪动一段距离，移动到用户界面的可视范围以外，用户就看不到它们了；与此同步，把那些原来在可视范围以外的、而下一页应当显示的控件，挪到可视范围内。这样，用户的感觉就是切换了一个页面。  
    这里有一个用这种方法编写的示例。程序的功能是把一个文件分割成几块，或者把已经分割成几块的文件再合并起来。下载地址：  

    [http://ruanqizhen.googlepages.com/splitter.7z](http://ruanqizhen.googlepages.com/splitter.7z)

    从范例中可以看出，这种方法十分麻烦，每一步操作都要考虑如何挪动每一个控件。如果程序太大，就难以维护了。也许现在不会再这么编写程序了，然而在当年 LabVIEW 还不支持 Tab 控件与事件处理结构（event structure）时，这个方法还相当流行的呢。

  
 

### 相关文章：

    \[1\] [可互换虚拟仪器驱动程序的开发](http://ruanqizhen.spaces.msn.com/blog/cns!5852D4F797C53FB6!1060.entry)，阮奇桢. 2006. 
    \[2\][《我和 LabVIEW》的其他文章](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)

    \[3\] [用 LabVIEW 编写 Wizard 类型的应用程序 2 (LabVIEW 6.1 ~ 7.1)](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1627.entry)

[编辑](http://ruanqizhen.spaces.live.com/PersonalSpace.aspx?_c11_BlogPart_blogpart=blogentry&_c=BlogPart&_c02_owner=1&handle=cns!5852D4F797C53FB6!1272)
