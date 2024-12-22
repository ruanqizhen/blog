---
title: "断点和探针"
date: "2006-09-13"
tags: 
  - "我和labview"
---

## 1\. 断点

    断点和探针是调试 LabVIEW 代码时最常用的两个工具。LabVIEW 中的断点在使用和功能上都比较简单、直观：使用工具选板上的断点工具[![](http://byfiles.storage.live.com/y1pIcO_924THocYYm3PRS_488eE5pVJBR-bef5YO4vRht2NvLiuWBK4kbeJRV7XyjLhmQo0qYAynaQ)](http://byfiles.storage.live.com/y1pIcO_924THocYYm3PRS_488eE5pVJBR-bef5YO4vRht2NvLiuWBK4kbeJRV7XyjLhmQo0qYAynaQ)，在想要设置或者取消断点的代码处点击鼠标即可；或直接在程序框图的节点、数据线上右击鼠标，就可以看到设置或取消断点的菜单项。  
    断点几乎可以设置在程序的任何部分。当程序运行至断点处，就会暂停，等待调试人员的下一步操作。很多其他语言的调试环境都有条件断点，LabVIEW 的端点没有类似的设置，LabVIEW 是使用条件探针来实现条件断点功能的。  
    断点是会保存在 VI 中的。关闭带有断点的 VI，程序执行至断点处还是会停下来，并且这个 VI 会被自动打开。  
    如果某个 VI 不允许你设置断点，很可能这个 VI 被设为不允许调试了。此时，只要在 VI 属性中重新设置一下即可。（[LabVIEW 的调试环境.2](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1778.entry)）

### 2\. 探针

    探针的功能类似于其他语言调试环境中的查看窗口，用于显示变量当前状态下的数据。LabVIEW 与其他语言不同之处在于，LabVIEW 是数据流驱动型的图形化编程语言。LabVIEW 中的数据传递主要不是使用变量，而是通过节点之间的连线完成的。所以 LabVIEW 的探针也不是针对变量的，而是加在某根数据线上的。  
    LabVIEW 的探针也是图形化显示的。比如为一根数字类型的数据线加探针，探针一般就是一个数字型显示控件，见图1。Error Cluster 类型的数据线的探针，则看上去就像是个 Error Cluster，见图2。

[![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4Dn0yKvHrWHpMPqTFLrJnOzCqwys4GrPB232U2M2G7gKKkgYgdg2oDCfc4DfEeMMplK8FAuEMgux_MrdIur9yu-CJWwPMPEOvW-wWAkytS87i4iM8IkDpKK)](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AnOuFw_oFE1CM7JISQs05z8n6QjDBJw0Xp2-rbX8wz8dNewPc8iNhtgs2puOud6DkyCN2F5CLSDGRM0FP4lFM_HVArl-UD1Ax9BguO_kvvo5b9jYhFriHa) [![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4ADg7SPM9_OosxhraiqaXYQKHTz7aTchiV6YF9RwoEUxlbDLsmo-OnqnpMa2Yoktv-60KEzg2u6atUkkBb3BFPtiW_uEJc7wjRIKmZsx3b8VcYTIk7rQETW)](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4DuhVlRhFYdUoP3FyxfkVpLFKJXAzNIOIozYkNnq2oz0WQwTwZZX7M9rSUx7yeWFPDyUQ7cwXyqySDcbrtIlQplKZ-DNl_vS1x4cGUG8ueSne8wtZTKlU-1)  
图1、图2：数值型和错误信息型数据线的探针

### 3\. 选取其他类型控件作为探针

    如果你觉得 LabVIEW 默认的探针不美观或不适用，则可以在数据线上点击鼠标右键，选择 Custom Probe -> Controls -> ... 选取一个其他控件作为探针，如图3。但是要注意，你选取的控件的数据类型要与数据线的数据类型一致才可以。

[![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnVRO4tnlze6B4hY4MPutfjJk2duk0Tcx1YMF-Lw_pfqT2f2yJW8f001JrGABucNqyD-6_x6IK6CjzceTTv97JR_yQTy_EbTQjA)](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnVRO4tnlze6B4hY4MPutfjJk2duk0Tcx1YMF-Lw_pfqT2f2yJW8f001JrGABucNqyD-6_x6IK6CjzceTTv97JR_yQTy_EbTQjA)  
图3：使用仪表盘控件作为数值型数据线的探针

### 4\. 条件探针

    在你设置断点后，程序在每次执行到断点的时候都会停下来。但有的时候，调试者希望程序只在被监测的数据满足某一条件时，才暂停运行。比如，被监测的数据在正常情况下应大于零，调试者希望一旦数据小于零则暂停。在 LabVIEW 中，可以使用条件探针来实现这样的功能。

[](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4BRKl6JqSxL1JfIRVgcHruAhXAo9jemXI2y0G7l5BJd15kE5pfmRc3zdUXwtQl01hLW7gLnU7PiHECKbIfvy27upoj3A47wcpYnJRvb78pWcHESeRM9RYhg)![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FndozBvEpLTe7sQYfy5q-KSJYzDr4b42-qNWu9o5-1pvjBQczS9krMVT2-oSlQ_acluIquQxyiu4ZxObX9BuukvAC2VXzKIqmgA)   
图4：数值型条件探针

    以图4 为例，如果你希望程序中的循环在运行 8 次以后才停下来，就可以使用条件探针。在记录循环次数的 i 的输出数据线上点击鼠标右键，选择 Custom Probe 下以 Conditional 开头的探针，打开探针上的 Condition 页，就可以设置条件了。此时，若被探测的数据满足你所设置的条件，程序就会暂停。

### 5\. 用户自定义探针

    如果你觉得 LabVIEW 自带的探针功能还不够强大，或者你自己创建了一种数据类型，而LabVIEW 没有适合它的探针，这时你可以自己创造一个满意的探针出来。  
    用户自定义的探针其实也是一个 VI。LabVIEW 自带了一些已经做好的探针，这些探针都被放置在 `<lvdir>\\vi.lib\\\_probes` 文件夹下。你可以打开这里面的 VI 看一看已有的自定义探针是如何做的。比如我们在图4 中所使用的 I32 型条件探针的 VI 是 ConditionalSigned32.vi。      
    需要新建一个自定义探针时，先在数据线上点击鼠标右键，选择 `Custom Probe -> New`。这时 LabVIEW 会弹出一个向导界面。按照向导的提示，输入所需信息，LabVIEW 会为你生成一个用作探针的 VI 框架，对这个 VI 稍作修改，即可成为一个新的探针。  
   这个探针 VI 有一个输入和一个输出。输入的是被探测的数据，输出是一个布尔类型，表示程序是否需要暂停。这个 VI 的界面也就是探针的外观。探针所实现的功能完全依赖于如何对其编程。

**相关文章：  
**    [LabVIEW 的调试环境](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1778.entry)  
   [《我和 LabVIEW》的其它文章](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)

