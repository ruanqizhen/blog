---
title: "循环结构"
date: "2006-12-11"
tags: 
  - "我和labview"
---

[https://lv.qizhen.xyz/#docs/structure\_for\_loop](https://lv.qizhen.xyz/#docs/structure_for_loop)

LabVIEW中的循环结构有 for 循环和 while 循环。其功能与文本语言的循环结构的功能类似类似，可以控制循环体内的代码执行多次。

### 一、for 循环

但是 LabVIEW 中的 for 循环的限制更多一些。 1． For 循环的迭代器只能从 0 开始，并且每次只能增加 1。 2． For 循环不能中途中断退出。C 语言里有 break 语句，但在 LabVIEW 中不要试图中间停止 for 循环。

外部数据进入循环体是通过隧道进入的，有几种方式：

![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnXbNqGwQJTKACAFGBGRc6pS_tvhfbM2T-2EWIF5pAlHvCz9oCJ_SLiXEvyvNggnB4o8Swhx0C-29OFPUL-54D9M) 图1：For 循环结构上的隧道

    图 1 所示的 For 循环结构演示了三种隧道结构，就是在 For 循环结构左右边框上用于数据输入输出的节点。这三种隧道从上至下分别是：索引隧道、移位寄存器（shift register）、一般隧道。

一般隧道，就是把数据传入传出循环结构。数据的类型和值在传入传出循环结构前后不发生变化。 索引隧道是 LabVIEW 的一种独特功能。一个循环外的数组通过索引隧道连接到循环结构上，隧道在循环内一侧会自动取出数组的元素，依顺序每次循环取出一个元素。用索引隧道传出数据，可以自动把循环内的数据组织成数组。

通过移位寄存器传入传出数据，也是数据的类型和值都不会发生变化。移位寄存器的特殊之处在于在循环结构两端的接线端是强制使用同一内存的。因此，上一次迭代执行产生的某一值，传给移位寄存器右侧的接线端，如果下一次迭代运行需要用到这个数据，从移位寄存器左侧的接线端引出就可以了。 C 语言程序员初学 LabVIEW，在使用循环结构时，常常为创建一个中间变量烦恼。为循环中的变量创建一个 Local Variable 不是好的方法。我们应当时刻记得 LabVIEW 与一般文本语言不同，LabVIEW 的数据不是保存在显示的变量里，而是在连线上流动的。LabVIEW 是通过移位寄存器把数据从一次循环传递到下一次的。

![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnV4rFB0smryWk5WuqkVRMgP05h2LkxW9zGt8-PSq7Jnheznp7rpwV2fsNcOwTktrAW7pSKjMyf7lriBnQ2ZOTXo) 图2：反馈节点

    如果单纯是为了让下一次迭代使用上次迭代的数据，也可以使用反馈节点，如图2所示。

移位寄存器左侧的接线端可以不只有一个，用鼠标可以把左侧的接线端拉出多个来，如图3所示。下面的接线端可以记录上两次、三次……的数据。

![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnV4rFB0smryWL_EPwZeM7Azkf0pqmprPQTUscvig97K9FDtlePxKiLUle9N5qx3ZaLk-fZXHilWvUYh7_L9w9aY) 图3：多接线端移位寄存器

    使用数组的隧道有一些需要注意的事项，参考：[LabVIEW 代码中常见的错误](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1857.entry)。

    从 LabVIEW 8.5 开始，for 循环增加了结束判断条件。for 循环也可以像 while 循环那样随时结束运行。

### 二、While 循环

LabVIEW 的 While 循环相当于文本语言中的 do... while... 循环。有些语言还有 while... do... 循环，LabVIEW 没有这样的循环。LabVIEW 的 while 循环至少要运行一次。 for 循环中可以用的数据传递方式，几种隧道也都可以在 while 循环中使用。所以在很多情况下，while 循环可以替代 for 循环。

While 循环比 for 循环(LV 8.5 之前)灵活的地方是可以进入循环后在决定何时循环结束。比如，希望当某一变量大于一个值时停止循环，这种情况下不能预知循环次数，所以一定要使用 while 循环。 while 循环也有不利的方面： 首先，for 循环更利于阅读。读者一眼就可以看出程序会内运行多少次。 其次，while 循环也可以使用带索引的隧道来构造数组，但是它的效率低于 for 循环。

![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnSd34QSHiewBrlCbuiqkCwK6ZKa4ASm_KxJIlLfiqpLbCG9nfFwHAMd5q9jkgNNE6NJWsbAptSj0DqPZDJ3kSRDuklWT3DKj8A) 图4：使用循环构造数组

    如图4，用两种循环所产生的数组大小是相同的。但是如果使用的是 for 循环，LabVIEW 在循环运行之前，就已经知道数组的大小是100，因此 LabVIEW 可以一次为 Array1 分配一个大小为 100 的内存空间。但是对于 while 循环，由于循环次数不能在循环运行前确定，LabVIEW 无法一次就为 Array2 分配合适的内存空间。LabVIEW 会在 while 循环的过程中不断调整 Array2 内存空间的大小，因此效率较低。 所以，在可以确定次数的情形下，最好使用 for 循环。

### 三、移位寄存器

移位寄存器除了在迭代间传递局部数据，还有其他一些功能。

首先，移位寄存器可以用于程序的内存优化。 由于移位寄存器的左右接线段使用的是同一块缓存，可以利用这一特性，显示的告诉 LabVIEW 重用某些数据的内存，并且不对数据做额外的拷贝。详细说明可以参考：[LabVIEW 程序的内存优化](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1493.entry)。

移位寄存器还经常被当作全局变量来使用，比如 LabVIEW 程序中常见的[功能全局变量](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!3159.entry)。

[《我和LabVIEW》目录](https://lv.qizhen.xyz/)
