---
title: "LabVIEW 中的数字型数据 1 - 控件和常量"
date: "2006-08-07"
tags: 
  - "我和labview"
---

[https://lv.qizhen.xyz/#docs/data\_number](https://lv.qizhen.xyz/#docs/data_number)

# 一、数值型控件和常量

## 1\. 控件

    在LabVIEW的控件栏中有一栏是数值控件。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFTPhQLaAMlPYqO9ryQNIeukHx5ESS7uqTmWyz0ERdlkpkwzh6jhHKl1vUDwVlrrLr9n-GwSJhsBBoNFZwgcqN0klSsHNfu_AqN7EzzQlcEcaikRVh38Vo2A)

    这一栏内的控件虽然在前面板上的外观各不相同，但是在框图中的端点都是数值类型的。我们在使用这些数值控件时可以选择适合的界面所需的旋钮、仪表盘等。还可以在数值型控件的属性对话框里设置它的数值类型、数值范围、格式和精度等，显示方法等等。

   我们以最普通的数值控件为例，解释一下如何配置它的显示方式。假如，我们的界面是 Windows 风格的，那么界面上所有的控件都应使用系统风格的控件，包括数值型控件。如果这个控件用于表示时间，我们就需要对这个控件的显示方法进行高级的配置。

    打开这个控件配置面板的格式与精度页，选择“Advanced editing mode”，就可以自己为控件设置显示方式了。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFTPhQLaAMlPYAqECRoBQXd3iISGexzlgNtxYbf9BPas-SUwyach6ePvHpP_MP1BsFHBYNJUFRib3cXI6Zd6khWtYvIdW97vJatj3yDRKUyRP4gI3HZTGbL4)

## 2\. 常量

    如果是常量，在设置数值类型时通常会发现“Adapt to Source”（按照输入调整）项是被选中的，作为控件时这一项不能被选中。此时如果在常量中输入一个正数，比如“34”，常量的类型会自动变为I32整型（蓝色），而输入“34.3”， 常量的类型会自动变为DBL实数型。如果一定要输入实数型34，可以输入34.0。![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFTPhQLaAMlPY6VnVGLzaXrZco_66EuEHZBDxgLGMjc8yKn6Hz9XsvEl18NT-24XVaoiAWA1K9ndLR5FuAYzvIgOFEe18ZFidqvJ2LeKFG6nT)  ![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFTPhQLaAMlPYdwi-b8r6VprfktEZ48RV-PW8YpqfNPzb_gNBvv-JogG06FTKdOh6zeEIBT81Cs0WqHRSygig4BVluHE3phiAx6O0Lroju5vQ)

## 3\. 不同表示法(Representation)的选择

    数值类型包括各种长度的整型、实数型和虚数型，其中I64和U64类型是LabVIEW 8.0新增加的。选用短整型数值比选用长整型数值类型节约内存。在大的数值数组中应尽量使用短类型数值以节约内存。对于单个数值，它可以节约的内存十分有限，但是使用长整型数值可以避免数值越界引起的错误，所以还是应该使用长整型数值。

    你可以自己做个试验：新建一个 VI，在 VI 上放置两个值为 300 的 I16 常量，然后相乘，看看他们的积是多少。这种错误如果隐藏在一个大工程内，调试起来也是颇为费劲的。

### 相关文章：

     [LabVIEW 中的数字型数据 2 - 运算](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1600.entry)

     [LabVIEW 中的数字型数据 3 - 数值的单位](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1611.entry) [用户自定义控件中 Control, Type Def. 和 Strict Type Def. 的区别](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1825.entry)

    [《我和 LabVIEW》的其他文章](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
