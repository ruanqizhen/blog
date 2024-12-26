---
title: "选择结构"
date: "2006-11-28"
tags: 
  - "我和labview"
---

[https://lv.qizhen.xyz/structure\_cond\_seq](https://lv.qizhen.xyz/structure_cond_seq)

选择结构相当于文本语言中的条件语句。LabVIEW 8 中新增加的 Diagram Disable Structure，Conditional Disabled Structure 类似 C 语言中的条件宏定义语句。

### 一. 程序框图禁用结构（Diagram Disable Structure）

在调试程序时常常会用到程序框图禁用结构。程序框图禁用结构中只有 Enabled 的一页会在运行时执行，而 Disabled 页是被禁用、即不会执行的；并且在运行时，Disable 页面里的 SubVI 不会被调入内存。所以，被禁用的页面如果有语法错误也不会影响整个程序的运行。这是一般选择结构（Case Structure）无法做到的。

![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4ClA6vH7ppbowJBWngB7BmqzWj535SWprVHLCtMdUoQDANrFdSKVk3DUpfBjM4qQbDvuXir9i94UWRCd08Pxmc2dRBTEn103sRvSpm42XBZdFGdOFwHaoOi) ![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4Cozq8d_c1XYYlYssHsKpKn8lnMjPAQlZjpVGZnBjUOy0koZgpoyrXeJU4hGyXxG85x9TguoWfs1J9NzFIF_gQBg3tyPLzt8VLGPRw1qlBJDm1iGI9ZjLg7) 图1、2：使用程序框图禁用结构

    例如图 1、2 中的示例，如果我们在运行程序的时候暂时不希望将 test 写入到文件里，但又觉得有可能以后会用到。此时，就可以使用程序框图禁用结构把不需要得程序禁用掉。需要注意的是程序框图禁用结构可以有多个被禁用的框架，但必须有且只能有一个被使用的框架。在被使用的框架中，一定要实现正确的逻辑，比如上图的例子中，在被使用的框架中一定要有连线把前后的文件句柄和错误处理联接好。

### 二. 条件禁用结构（Conditional Disabled Structure）

条件禁用结构则根据用户设定的符号（symbol）的值来决定执行哪一页面上的程序。其他方面与程序框图禁用结构相同。 程序中所使用的符号，可以在项目或是运行目标机器（例如“My Computer”）的属性里设置。

![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4B_HUeexik0ogal6gFzgjndKAjTSo3DgMxrpm0ThXRBzRbN-8bB824xBRJc6csDQg9TU5XpXM36jp-8dKUMtE1GxWxBhXsUEyFgroMNZL4-C7t2m1Te53Q_) 图3：条件禁用结构

    值得注意的是：程序框图禁用结构与条件禁用结构都是静态的，如果需要在运行时决定执行哪一部分的程序可以使用选择结构。

程序框图禁用结构和条件禁用结构的一种实用案例可以参考：《[其它常用调试工具和方法](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1816.entry)》

### 三. 选择结构（Case Structure）

在一般情况下，选择结构类似于 C 语言的 switch 语句。当输入为 bool 数据类型或 error 数据类型时，选择结构类似于 C 语言中的 if 语句。

![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4CZX6i5gI3gaXGJQkwq0_x2E__YZLeObjxHKXGl0itEyL1Yk5-F4El0r8h7PCsUSEbmCi_DKx-cyunoXsjjDIsJjWZL712wfLgZV2qH12mdlnt2qfEFGXXl) 图4：枚举类型的 Case Selector

    有输出时，则每一个框架中都必须连一个数据，当然也可以选择“Use Default If Unwired”。选择“Use Default If Unwired”会有一定的风险，因为你可能会忘记了连线，这时候 LabVIEW 并不会提醒你，程序就可能得到不可预料的结果。 如图5所示，鼠标右击数据输出隧道，可以选择是否使用“Use Default If Unwired”

![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4DphuuI1xn2KrSOFpmEBtJJOb61ZTEhGMvUlxza_xUmbvgczniODspp7K0ZIjZgMl12ZC0uP0o26Da-XkZlYS40PU9a67DzIH-6lJgmk2b8_posghjlDQtI) 图5：选择 Use Default If Unwired
