---
title: "循环结构的反馈节点"
date: "2008-08-20"
tags: 
  - "我和labview"
---

如果单纯是为了让下一次迭代使用上次迭代的数据，可以使用反馈节点，如下图所示。

[![](http://byfiles.storage.msn.com/y1piQDnExfTy-K5oTBAcE04ZRxXZSBQ5xkU7mcZlj-yLp2JTqf7VrXzRMN9Vz2Q3luwcE3QAddIvhM?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1p30JJrw0qn2PwroIwzQDxLJezHlrRGhTUToW5cFgM7goFYrY5kqrRFgO5-lF0ncFo?PARTNER=WRITER)

图1：反馈节点

需要使用反馈节点的时候，可以通过移位寄存器的右键菜单，把一个移位寄存器改造成反馈节点。在给循环结构内的节点的连线端连线时，如果数据流出现一个环，LabVIEW会自动创建出一个反馈节点插在这个环中。例如图2中的“+1”函数，输入从它的输入端流入，被其加工过后再从它的输出端流出。现在试图连线，把流出的数据再引回到“+1”函数的输入端，这样就形成了数据流的环，LabVIEW会自动在这个环上查如一个反馈节点。

[![](http://byfiles.storage.msn.com/y1p1dr91Jq1cPgv3_7sJYhcV_2cph8GaMb3eRX6pE-iE_4d4fIfbTKnM8GBmy1GgKDK?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pbmxOxw0pCg8CzaDu6TMMaylbZdidBw3wzpzPXQ0mA1IocvcN2CezrXu6KiGxbAT-?PARTNER=WRITER)

图2：连接输入输出接线端

[![](http://byfiles.storage.msn.com/y1pf7GOFEeopxn4avhJDPQMG0n9JzUlQJPeqG1kN6Tlx4Xfb9CVU2C53R_4_ow52CXnB8xxTMVhvQ4?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1p5mQKQMQpXFdBlqGzmF_tPu9j5Uurz0YFmhGlYHomdpwZ_ErpMaU6MFrkzJlnBs9YdGm0m9cYVG4?PARTNER=WRITER)

图3：通过直接连线创建出的反馈节点

反馈节点与移位寄存器在本质上是相同的，它只是改变了数据线的连线方式。把原本在循环结构两侧的连线端移到循环中间来了。

经常绘制电路原理图或者控制信号流图的用户可能会比较喜欢反馈节点。因为它这比较符合绘制这些图时的习惯。直接把数据线画成一个环就可以表示反馈了。

此外，反馈节点在某些情况可以缩短程序框图上的数据线，简化程序框图。但是它会导致某些连线上的数据逆向流动，从左向右流动。如果逆向数据线过长，则不如使用移位寄存器。 [《我和 LabVIEW》目录](mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
