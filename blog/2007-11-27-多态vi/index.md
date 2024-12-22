---
title: "多态VI"
date: "2007-11-27"
tags: 
  - "我和labview"
---

### 一、多态VI的概念

![](http://byfiles.storage.live.com/y1pIcO_924THoehcsKVfb060EDlu_HDJuHlCuFJVTS-MxoAfSP07FIFdhops7BFgV_kgiMrvIrxseA)  
图1：一些多态 VI  

    LabVIEW 提供的一些 subVI，它们可以用于处理多种不同类型的数据。比如读写INI文件的VI，它们既可以读写数值型的数据，也可以读写字符串、布尔等数据类型。类似的还用声音输出的VI、数据采集的VI等等。  
    这种可以处理多种不同数据类型的 VI 被称为“多态VI”。这个多态和 C++ 中的多态可不是一个意思，它更类似于 C++ 中的函数重载。  
    多态 VI 根据输入或输出的数据类型，再选择调用一个的针对这种数据类型实现功能的 VI。这些准对某种数据类型实现功能的 VI 被称作“实例VI”。一般一个多态VI调用多个实例VI。

    在这种场合下，比较适合使用多态VI：你帮助用户实现了一个算法，这个算法会应用到几种不同的数据类型上。为了用户使用方便，最好是不是给用户看到一组不同的VI，这样他在使用前，还要根据数据类型的不同先去寻找适合的VI；最好是指停工一个统一的接口VI，这个VI可以接受不同的数据类型，这个接口VI自动的根据输入数据类型的不同，去调用相应的算法VI。

### 二、如何实现多态VI

    比如说，我们现在需要提供给用户一个加法功能，它支持两种数据类型：整数和字符串。如果输入是两个正整数，输出就是它们的和；如果输入是两个字符串，输出就是把两个字符串连接在一起。  
    对于这个需求，我们需要实现一个多态VI："add.vi"，这个VI支持两种数据类型：数值和字符串。这个名为"add.vi"的VI根据输入数据的类型，再去调用两个实例VI：“add numeric.vi”和“add string.vi”来实现具体的加法功能。它们的调用关系如图1所示。

![](http://byfiles.storage.live.com/y1pIcO_924THoeDqr9gc36P5rRG_oiIMBQNGO0H5_aYxtFffb5ZJojgtrj09apsaA7P07eti8KwF2A)  
图2：一个实现加法功能的多态VI的调用关系  

    我们在实现这样的多态VI之前，一般先实现它的实例VI，就是那些针对每个数据类型完成算法功能的VI。在这里是“add numeric.vi”和“add string.vi”。  
    完成了实例VI，就可以开始创建多态VI了。在 LabVIEW 的菜单中选择 File->New，出现 LabVIEW 新建项目的选择对话框，再选择 VI->Polymorphic VI 就会出现一个新的多态VI。  
    多态VI和普通的VI看上去不一样，没有前后面板。因为它的功能都是在实例VI中实现的，因此多态VI只要选择一下它的实例VI就可以了。

![](http://byfiles.storage.live.com/y1pIcO_924THoezz30vV6WLbWIO-h5kv7HN8KHWRrs8PtURldKpaH5WUp1GHXbxtVv7K5oReWvFzO4)  
图3：多态VI  

    在多态VI的界面上，右上方是这个多态VI的图标。我们可以在这里画一个图标，让用户在使用多态VI时，程序框图上一直显示此图标。但是，有时候使用实例VI的图标，可以让程序显得更清晰，那么我们可以在多态VI左下方配置此选项。  
    多态VI的主体部分是一张列表，通过“Add”按钮，可以把它的实例VI添加进来。在用户的程序框图上，多态VI的数据类型可以自动确定，也可以由用户通过右键菜单或选择栏（图1中多态VI下面那个紫色方框）来选择。实例VI列表中的“Menu Name”和“Selector Name”分别是在选择是代表每种数据类型的在菜单和选择栏中的文字，可以通过“Edit Name”按钮来编辑它们。  
    多态VI右下方两个选择框，“Show Selector by Default”表示当多态VI被拖到程序框图上的时候，就把选择框显示出来。否则，用户也可以通过右键菜单选择显示它。  
    “Allow Polymorphic VI to Adapt to Data Type”表示有多态VI根据输入数据类型的不同，自动选择调用一个相应的实例VI。如果这项没被选中，编程者必须每次手动选择他想要的实例VI。

### 三、多态VI的注意事项

    在设计多态VI时，有一些事项需要注意。  
    多态VI只能处理有限种数据类型，它只能处理实例VI中处理了的那些数据类型。数据的类型是无限的，比如：包含两个整数的簇（Cluster）是一种数据类型，包含三个整数的簇就变成另一种数据类型了，包含三个字符串的簇又是一种新类型。如果你想做一个多态VI可以像LabVIEW原有的加法函数一样处理无限种数据类型，是做不到的。  
    多态VI的每个实例VI可以是完全不同的，前面板，程序框图，使用的子VI等等都可以完全不同。但是，为了便于用户理解，一个多态VI应该就是处理某一种算法的，它的每个实例VI负责一种数据类型。并且，为了便于用户在不同的数据类型之间切换，每个实例VI的接线方块（Connector Pane）的接线方式都应当保持一致。  
    多态VI不能嵌套使用，一个多态VI不能作为其他多态VI的实例VI。

### 四、小技巧

    你可以把多态 VI 的右键菜单，选择某个实例 VI 那一项做成有层次的多级菜单。只要 Menu Name 中输入菜单的层次结构，使用冒号:作为层级分隔符就可以了。比如下面这个例子：

![](http://byfiles.storage.live.com/y1pIcO_924THocT8bkCe_TPWPzqSAAoXEjR_tZruA_io96h29E3y1Rvdg2cMELNw-GknE3hd9ASGVQ) ![](http://byfiles.storage.live.com/y1pIcO_924THoeGTbJtGMXQBG-gRoKNHBhQzX51OgOAsSdSsGUfm72CfOC80Y-429hlzR9qVasTpAE)  
图4：有层次结构的快捷菜单  

[《我和 LabVIEW》目录](mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)  
  
```
<table cellspacing="0" border="0"><tbody><tr><td></td></tr><tr><td valign="top"><a href="http://blufiles.storage.live.com/y1p3wbJffTiya05bjyz4D4gmDLU9ZUxEvv005wfpMc5cnmXLhEYDEsZQG5AgyVQapkF6A_v65__TNw" target="_blank" rel="WLPP;url=http://blufiles.storage.live.com/y1p3wbJffTiya05bjyz4D4gmDLU9ZUxEvv005wfpMc5cnmXLhEYDEsZQG5AgyVQapkF6A_v65__TNw;cnsid=cns!5852D4F797C53FB6!2657"><img src="http://blufiles.storage.live.com/y1p3wbJffTiya05bjyz4D4gmDDKX0sFp63lSkmh0_eqFhN151TH-k_Xl99wb9RXZovzUMcMGsh1OKk" border="0"></a></td><td width="15"></td><td valign="top"><a href="http://blufiles.storage.live.com/y1pE1UWw5DCyOmjBUMQuW8JrWTathCRlUkFpp7Fg1Y_-pepESbYBjtEeXTllkDedxynQq5r_rkzazw" target="_blank" rel="WLPP;url=http://blufiles.storage.live.com/y1pE1UWw5DCyOmjBUMQuW8JrWTathCRlUkFpp7Fg1Y_-pepESbYBjtEeXTllkDedxynQq5r_rkzazw;cnsid=cns!5852D4F797C53FB6!2658"><img src="http://blufiles.storage.live.com/y1pE1UWw5DCyOmjBUMQuW8JrTn602Wcm38OSckamb7PtjjG02Vvw9dQBwhiCjQqSHaaeOg9KdyaoaU" border="0"></a></td></tr><tr><td></td></tr><tr><td valign="top"><a href="http://blufiles.storage.live.com/y1prK41m-n4RCoDvhTJTBgRwsPPWMXhC_nPjdCg_n6osvCvvTuzuejKLet7gLTIAfMa0Db88nDM24w" target="_blank" rel="WLPP;url=http://blufiles.storage.live.com/y1prK41m-n4RCoDvhTJTBgRwsPPWMXhC_nPjdCg_n6osvCvvTuzuejKLet7gLTIAfMa0Db88nDM24w;cnsid=cns!5852D4F797C53FB6!2659"><img src="http://blufiles.storage.live.com/y1prK41m-n4RCoDvhTJTBgRws-doJPALyKhjGElr6-9WZtmmYa5F0u98pUaSBvlqppSOqsUIROuRFI" border="0"></a></td><td width="15"></td><td valign="top"><a href="http://blufiles.storage.live.com/y1piIrOinFf8nTz5Ba8mIKbjXePQDFsIDDAlynPHXRuV1fIx8AIrMiZ_9hOuKbFbXQdgOyFBOlgA78" target="_blank" rel="WLPP;url=http://blufiles.storage.live.com/y1piIrOinFf8nTz5Ba8mIKbjXePQDFsIDDAlynPHXRuV1fIx8AIrMiZ_9hOuKbFbXQdgOyFBOlgA78;cnsid=cns!5852D4F797C53FB6!2707"><img src="http://blufiles.storage.live.com/y1piIrOinFf8nTz5Ba8mIKbjQc11r73gSoFVs-zOynstuykFn7k5C6Y_7dvB9qOcdDMyDUynjnaI7I" border="0"></a></td></tr><tr><td></td></tr><tr><td valign="top"><a href="http://blufiles.storage.live.com/y1p52Ik6RYN5FBvybZi0iSucNyDNFyDj763Pjrp77LureVU-UQGsPz5dgAl1xoZ9xOwXTLqCPCfn9M" target="_blank" rel="WLPP;url=http://blufiles.storage.live.com/y1p52Ik6RYN5FBvybZi0iSucNyDNFyDj763Pjrp77LureVU-UQGsPz5dgAl1xoZ9xOwXTLqCPCfn9M;cnsid=cns!5852D4F797C53FB6!2708"><img src="http://blufiles.storage.live.com/y1p52Ik6RYN5FBvybZi0iSucEz9sR9NlMIGaCeIjz-tMoP1EQ2EYwRMnjcKaquJuGsWWuEtURfUA9Q" border="0"></a></td></tr></tbody></table>
```