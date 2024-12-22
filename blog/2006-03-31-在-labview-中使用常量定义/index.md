---
title: "在 LabVIEW 中使用常量定义"
date: "2006-03-31"
tags: 
  - "我和labview"
---

    如下图所示，在C语言里，使用#define来定义一个常数是非常基本的用法。直接使用数字，时间一长，就不只到这个数字是哪来的了。而且，这种方法也便于修改在程序中多处使用的常量的值。在C++一般是用const来达到同样的目的。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFQyw8YsQz_CNdv2WP6yXEX9zoDBJbzcmRhsmTst48pOz-95pzruFSnuy5jQkM9zhk8bvHP-S4YFxoJmeM5SS6vnwf-oEXli00YWsOJH5rVHoaoo-4csU-5E)

**图1：C 语言中的常量定义**

    我以前在LabVIEW中编程，还从没注意过这个问题。一般哪里要用一个常数，直接就放一个constant在那里。如图2。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFQyw8YsQz_CNFaaHRniJVLtzYZGsVprpOX6pR1rIlu7d-3GT16EE6rbVODOXDsxJcUEb2jvr94t-soSBPjlfkc7CdT0vz5-zUTlTW5qahPu5zOPDdMep3yk)

**图2：在 LabVIEW 中使用常量的最普遍方法**

    以前编写的LabVIEW程序都比较小，一般是一个人开发的，所以这样写，也没有太大的麻烦。现在编写的程序规模越来越大，最近做的一个项目，VI数量已经上千了，有4个人参与编程。程序规模大了，不规范就很难维护。所以开始考虑这个问题。

    但是LabVIEW里面没有类似的功能，不知道为什么以前没人提意见？

    下面提出几种不算太完美，但有所进步的解决方案。

    一种简单的替代方法是使用type define control，自定义一个Ring control。关于 Type Def 的详细信息，可以参考《[用户自定义控件中 Control, Type Def. 和 Strict Type Def. 的区别](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1825.entry)》。把要使用的常数作为Ring的值，给他个有意义的文字标签。在需要时用常数的地方，把这个带type define 的ring常数放上去，而不是直接放数值常量。这样就解决了上面提到的一个问题：可以有自带的文字说明。如图3所示。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFbYmmfzv-dncCZy1gXbcmbNW9QSKSJ1Sq8zEygAtOD0JlSo0opDMsjwezeTVB6-WywMP57xUBSdSkiG2KlrPHT6szaIInd_3tNDRYONPa06xaVIdeKjVozY)

**图3：利用 Type Def Ring 的解决方案**

    但是这样做还是有很多缺陷。首先是统一修改数值的问题。在自定义Ring中修改某一项的值，相关的常量不会跟着一起更新；还有一个缺陷是 Ring control 不支持多个标签是用同一数值；另外 Ring control 也没办法像 C 语言中一样使用表达式定义值。

    一个改进版的解决方案是使用 Enum Type Def 把所有常量名字列出来，再写一个 VI 用于得到常量的真实值，如图4所示。这样解决了不同标签可以返回相同值的问题，也可以自动更新常量值，但是使用表达式还是不方便。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFbYmmfzv-dncIld2ChfSA2uYsHQeltwjqFLtm-HrrkBH8NGwB9zHSLwpwON94dsYz9y09qll5pqVzYzRL0QR0OkxW0n5Sx9hvGbRB5S7RvrxclX6PQsujfY)

**图4：利用 Enum Type Def 和 subVI**

    我目前在程序中使用的方法是，把所有要用到的常量，全部做成全局变量。全局变量可以用 Global ，但我喜欢用 VI 全局变量。就是把变量记载 shift regisiter 中。然后，用一个初始化的 VI 负责在程序运行开始时初始化所有的全局变量。这样，以后如果需要更改某一常数值，就只需改这一个VI就可以了。

    不过，现在回想，还是用 Global 好一些。我以前测试过，Global 读写的速度比 VI 要慢很多，所以我不喜欢 Global 。但是，常量值在程序中用的并不频繁，所以速度不是个问题。但是数量很多，用 VI 表示就不太合适了，每个常数都要创建一个 VI 非常费事。另一个缺点是如果在后面板换用一个常量，还要再拖另一个 VI 上来，很麻烦。用 Global 会好一些，但还不是让我太满意。

    要想有一个完美的解决办法，只能再造一个新东西了。@#$%^&\* （此处属公司机密，删去256字）

[查看《我和 LabVIEW》的其它文章](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
