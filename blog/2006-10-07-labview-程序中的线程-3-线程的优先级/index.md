---
title: "LabVIEW 程序中的线程 3 - 线程的优先级"
date: "2006-10-07"
tags: 
  - "我和labview"
---

[https://labview.qizhen.xyz/zheng-wen-mu-lu/optimization/optimization\_multi\_thread](https://labview.qizhen.xyz/zheng-wen-mu-lu/optimization/optimization_multi_thread)

## 三、线程的优先级

在 VI 的属性设置面板 VI Properties -> Execution 中还有一个下拉选项控件是用来设置线程优先级的（Priority）。这一选项可以改变这个 VI 运行线程的优先级。

优先级设置中共有六项，其中前五项是分别从低到高的五个优先级。优先级越高，越容易抢占到 CPU 资源。比如你把某个负责运算的 VI 的优先级设为最高级（time critical priority），程序在运行时，CPU 会更频繁地给这个 VI 所在线程分配时间片段，其代价是分配给其它线程的运算时间减少了。如果这个程序另有一个线程负责界面刷新，那么用户会发现在把执行线程的优先级提高后，界面刷新会变得迟钝，甚至根本就没有响应。

优先级设置的最后一项是 subroutine， 它与前五项别有很大的不同。严格的说 subroutine 不能作为一个优先级，设置 subroutine 会改变 VI 的一些属性： 设置为 subroutine 的 VI 的前面板的信息会被移除。所以这样的 VI 不能用作界面，也不能单独执行。 设置为 subroutine 的 VI 的调试信息也会被移除。这样的 VI 无法被调试。 当程序执行到被设置为 subroutine 的 VI 的时候，程序会暂时变为单线程执行方式。即程序在 subroutine VI 执行完之前，不会被别的线程打断。 以上的三点保证了 subroutine VI  在执行时可以得到最多的 CPU 资源，某些作为关键运算的 VI，又不是特别耗时的，就可以被设置为 subroutine 以提高运行速度。比如有这样一个 VI，他的输入是一个数值数组，输出是这组数据的平均值。这个运算在程序中需要被尽快完成，以免拖延数据的显示，这个 VI 就是一个蛮适合的 subroutine VI。

在设置 VI 优先级的时候有几点需要注意的。 提高一个 VI 的优先级一般不能显著缩短程序的运行时间。提高了优先级，它所需要的 CPU 时间还是那么多，但是 CPU 被它占用的频率会有所提高。 高优先级的 VI 不一定在低优先级 VI 之前执行。现在常用的多线程操作系统采用的都是抢占式方式，线程优先级别高，抢到 CPU 的可能性比低级别的线程大，但也不是绝对的。 使用 subroutine 时要格外注意，因为他会让你的程序变成单线程方式执行，这在很多情况下反而会降低你的程序的效率。比如一个 VI 并非只是用来运算，它还需要等待其它设备传来的数据，这样的 VI 就绝对不能被设置为 subroutine。现在多核 CPU 已经很流行了，在这样的计算机上，单线程运行的程序通常比多线程效率低，这也是需要考虑的。
