---
title: "在 LabVIEW 中实现 VI 的递归调用"
date: "2006-10-03"
tags: 
  - "我和labview"
---

    LabVIEW 中使用递归调用不是很方便。不过递归并不是编程必须程序结构，任何需要使用递归调用的地方，都可以用循环结构来代替。但是在某些情况下，使用递归调用的确可以大大简化程序代码，对缩短编程时间、提高程序可读性都非常有帮助，所以学习一下递归的实现方法还是有好处的。

### 一、为什么 VI 不能够被静态的递归调用

    LabVIEW 不能通过静态调用的方法（把子 VI 直接放到另一 VI 的程序框图上）来实现递归。  
    对于一个[非可重入的 subVI](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1519.entry)，在每一个时间，这个 subVI 这能被运行一次。LabVIEW 需要借此来保证多线程时的数据安全。对于被递归调用的代码，是需要在它执行到中间的时候，就再次被调用的。所以默认设置下的 VI 不能被静态递归调用。  
    对于被设置为[可重入的 VI](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1519.entry)，是可以被同时调用多次的，但也不能被静态的递归调用。  
    除非是通过 VI Server 动态的调用 VI，否则，LabVIEW 是在一个程序被调入内存，开始运行之前就为它的所有 VI 分配好内存空间的，包括数据区。如果一个 VI 不是可重入的，LabVIEW 会在这个 VI 运行时局部变量所在的数据区开辟在这个 VI 所在的空间内；对于可重入的 VI，LabVIEW 把它的数据区开辟在调用者 VI 上，这样就可以保证这个可重入 VI 在不同的地方被同时调用时使用不同的数据区，以防止多线程运行时数据混乱。  
    因此，可重入 VI 虽然可以被同时多次调用，但是被调用的次数是运行前就确定的。而递归运算时的调用次数是运行时决定的。这样，如果是静态调用， LabVIEW 根本没有办法为提前为参与递归的 VI 开辟好数据区。

### 二、用动态调用方法实现递归

    图1 是一个采用递归算法计算阶乘的例子，可以点击后面的连接直接下载示例 VI：[](http://ruanqizhen.googlepages.com/Factorial.vi "http://ruanqizhen.googlepages.com/Factorial.vi")[](http://community.ni.com/examples/8ba17b9796364e587684vi-factorial/)[http://decibel.ni.com/content/docs/DOC-1274](http://decibel.ni.com/content/docs/DOC-1274)。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFcnch0jFtTHA0p9hGkuGERQilAB8Zx5-khcJii4uagI11uup_0EUWoQv9M6aUj2M8xN9106vHAteZcxYoLUM3wEev9TetU0hsvJqrQTiJHR9aLsYjGiSZL0)  
图1：利用递归结构计算阶乘

    正如前文说过的，所有的递归都可以使用循环来代替，计算阶乘也可以使用循环结构，但是这里介绍的是使用递归结构的方法。因为 n!=n\*(n-1)!，所以我们只要编写一个 VI 实现功能 F(n)=n\*F(n-1) 就可以了。  
    程序中，递归调用 VI 自身的结构由三个 VI 动态调用节点实现：Open VI Reference, Call By Reference Node, Close Reference。这三个节点分别负责动态打开一个 VI（本例中就是这个 VI 自身），运行这个VI，再关闭它。  
    使用 Call By Reference Node 需要在打开 VI 句柄的时候就要知道 VI 连线板（Connector Pane）的布局，因此，我们在用 Open VI Reference 打开 VI 的时候要提供 VI 连线板的布局信息，在例子中就是 Open VI Reference 节点上方的那个常量。

### 三、使用递归时的几点注意事项

    递归调用的退出或结束条件，本例中当输入数据小于1时，就需要结束递归调用返回最底层的值了。如果递归调用的退出条件设置不当，可能会引起程序死循环甚至崩溃。  
    LabVIEW 中也可以实现 A 调用 B，B 又调用 A 这种用多个 VI 相互调用的递归结构。  
    参与递归调用的 VI 必须被设置为可重入。  
    动态调用的需要把 VI 在运行时调入内存，这个过程是比较耗时的。因此递归结构的运行效率远不如可实现相同功能的循环结构，内存占用也会更大一些。决定使用递归结构之前要考虑到这些因素。

**下载示例：**    [](http://ruanqizhen.googlepages.com/Factorial.vi)[](http://community.ni.com/examples/8ba17b9796364e587684vi-factorial/)[利用递归结构计算阶乘](http://decibel.ni.com/content/docs/DOC-1274)

**相关文章：**    [我和 LabVIEW](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)  
    [LabVIEW 程序的内存优化](http://ruanqizhen.spaces.msn.com/blog/cns!5852D4F797C53FB6!1493.entry)  
    [如何使用 VI 的重入属性（Reentrant）](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1519.entry)  
    [LabVIEW 的运行效率 2 - 程序慢在哪里](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1745.entry)

