---
title: "用 LabVIEW 编写 Wizard 类型的应用程序 2 (LabVIEW 6.1 ~ 7.1)"
date: "2006-08-12"
tags: 
  - "我和labview"
---

## 四、Tab 控件+事件处理结构

     LabVIEW 6.1 的出现才第一次大大简化了 Wizard 界面风格程序的编写。LabVIEW 6.1增加了两个非常重要的新特性，一个是Tab控件，一个是事件处理结构。  
    有了Tab控件，就可以把 Wizard 中每一页需要的控件分别放在 Wizard 不同的页面上，切换 Tab 的活动页面也就显示了该页面上相应的控件。  
    事件处理结构的应用更为广泛。有了它，编程者就不需要再添加额外的代码来监视每个控件的状态改变以及鼠标、键盘等的操作了。  
   
    这种利用Tab控件和事件处理结构编写的 Wizard 风格界面程序的方法现在仍然被广泛使用着，下面这个链接就是一个采用这种方法编写的软件：  

    [http://sine.ni.com/nilex/DisplayLinkAction.do?id=101NILEX](http://sine.ni.com/nilex/DisplayLinkAction.do?id=101NILEX)。

    它的功能是把一个 C 语言开发的仪器驱动程序转换为 LabVIEW 下的驱动程序。程序虽然是我编写的，但版权属于NI公司，所以不能把程序源代码公开给大家。

    这种方法也有它的弊端。因为整个 Wizard 界面会用到的所有控件都集中在同一个 VI 上，这个主VI就可能特别庞大：界面可能有数十个控件，程序框图上的事件处理更为复杂，有近百个事件也不作为奇。如果需要对程序作修改，要找到相应的事件框就已经很困难了，要确定这个改动是否会影响程序的其他部分就更为困难了。  
    图1是我编写的一个Tab控件风格的向导型程序，它的主VI中的事件结构中，有近百个事件需要处理。对这样的程序，想找到一个相应的时间都很麻烦，处理好事件之间的关系就更困难了。  

    Tab 控件+事件处理结构的架构虽然大大简化了 Wizard 界面风格程序的编写，但是这样的程序很难对他的代码进行更细致的模块划分，并把模块的私用数据隐藏起来。为了使大型 Wizard 程序有更好的可读性，可维护性，还需找到一种更好的架构。

 ![](http://byfiles.storage.live.com/y1pIcO_924THocaqWAuvlifSgMTolcmyd-jouBopDKYw9O1LbUa2Qu3hWJuvAlzX2VUdBk9aa9WA0Y)  
图1：使用Tab控件的向导型程序，事件结构中众多事件

### 相关文章：

     [用 LabVIEW 编写 Wizard 类型的应用程序 1 (LabVIEW 6.1 之前)](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1272.entry)

    [《我和 LabVIEW》的其他文章](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
