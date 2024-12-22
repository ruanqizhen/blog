---
title: "如何使用 VI 的重入属性（Reentrant）"
date: "2006-07-19"
tags: 
  - "我和labview"
---

    在 VI Properties -> Execution 中可以选择 VI 的Reentrant Execution属性（中文译为：可重入执行）。 我们在《[LabVIEW 程序的内存优化](http://ruanqizhen.spaces.msn.com/blog/cns!5852D4F797C53FB6!1493.entry)》一文中讨论过，尽量不要把 VI 设置为重入属性，因为这样就多占用了内存，降低了运行效率。此外，如果不加注意的话，还可能引发多线程不安全的问题。 尽管可重入 VI 在 LabVIEW 中不是必须的，但是在某些情况下使用可重入 VI 可以简化我们的程序。那么在什么情况下可以使用 Reentrant VI 呢？

    首先看一下图 1 所示的程序，程序中调用的两个子 VI 是同一个 VI，并且不是可重入的 VI。LabVIEW 是自动多线程的语言，那么图中的两个子VI会不会同时执行呢。一定不会的。如果程序中调用的是两个不同的子 VI，LabVIEW 有可能会同时在不同的线程执行它们，但对于两次调用相同的子 VI，LabVIEW 一定要等一个执行完，再执行另一个。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFYi9Lj2Xxx3Y2HWLvLhJC4ydp8cTXF43mZtd5tntKTCtk0JDEyesVMrkwtmCs4vgoSq9yzofc6WjAyJumKzGw3yhF9cGKFFO3777yPncBH5mYu2T22KgmL4)  
**图1：并行的两个相同子 VI**

    其原因是，LabVIEW 会为每个 VI 都开辟一块内存用于数据存储。作为子 VI，每次被调用，它的局部变量的数据都是被存在同一地址的。与 C 语言相对照，在默认情况下，VI 是不可重入的，VI 中所有的局部变量都是静态变量。如果 LabVIEW 在不同的线程下执行同一 VI，那么两个线程就会同时对这一块数据地址进行读写，就会导致这一块地址内数据的混乱。为避免此类不安全情况的出现，LabVIEW 必须等待一个子 VI 执行结束，再执行另一个子 VI。  
    如果需要图1 中的两个子 VI 同时运行，比如子 VI 所做的工作是读取文件这样一类耗时多、但CPU占用不大的操作，则并行执行可以大大提高效率。这时，就需要把子 VI 设置为可重入了。LabVIEW 在不同的地方调用一个可重入 VI 时，会给它另外分配一个独立的数据地址空间。这样就做到了线程安全。在两个线程执行的子 VI 使用两份在不同的地址存储的数据，也就不会造成混乱。但是千万要注意， 这个“在不同的地方”调用：不可重入的 VI 的局部变量与 C 语言中非静态变量的含义是不同的。在后面提到的计数器的例子可以验证这一点。

     我觉得我说得挺清楚了，出道题目给大家测试一下：

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFYi9Lj2Xxx3YE-i5ACyes_wfwUnfeyJIzqzXCQ-vDcRHxOC5nQiNnrGYdhEOL8RTJGyzhHFkRXdO0Itg7akNljJEJ9g3-BSrH4BWWbyhfDT6i-wbv8Bs_0A)  
**图2：延时子 VI**

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFYi9Lj2Xxx3YSH0i4-GFaCNJc4iW0_x3PjgIOfgOzM3iqPPvngmktMoxGkPRw1PyUqwbtvXOnBylYxvw1Sd2DHvH1NTFCnCgZWTRvsOwPK6w9Np3zEpaJWE)  
**图3：计算延时的主 VI**

    图2 是一个子 VI 的代码，功能是延时 1000 毫秒。图3 是主 VI 的代码，并行调用同一子 VI 两次，并计算程序的执行时间。运行主 VI，total time 的值是多少？  
    答案在文章最后。

    这是可重入 VI 的一种用途，即希望在不同的线程里同时执行同一个子 VI。  
    另外还有一种情况下，也可以用到可重入 VI：即需要使用到子 VI 中局部变量保存的数据，而在不同的调用处，这些数据是独立不同的。这句话可能解释得不那么清楚，看下面例子就会比较容易理解些。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFYi9Lj2Xxx3YoHJS5_JFy9XozNdvgdPlSc0m9uiJwGFykfKk4B0dZTi2MbxDIK1BSeC72y9q28KfH-YtoPVktb__yLQ1O0qvkC5BESodyyb9-9gcCl8DdZI)  
**图4：计数子 VI**

 ![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFYi9Lj2Xxx3Y-6TnMRMsOGjfBzZVD8BdK4koHeAu3r4RW9q4_m_gUV7pz8z-ByclGGTT8CBqS0-rPmnMwKvTE76Sj0wkZRQlpyP6xfaz8ypg)  
**图5：测试计数的主 VI**

    图 4 是一个可重入子 VI 的代码，功能是计算这个VI被运行的次数，每运行一次，输出的 count 值就增加1。图5 是调用它的主VI，用于演示这个计数器。执行主VI一次，output 1 和 output 2 的值分别是 10 和 20，表示这个子 VI 在两处分别被调用了 10 次和 20 次。  
    如果把图 4 中的 VI 改为不可重入，则 output 1 和 output 2 的输出值是不确定的。大家可以自己试一试，再想一下原因。

    当使用递归结构时，参与了递归调用的 VI 是需要被同时调用多次的。因此这些 VI 中的变量必须是局部的，也就是说参与了递归调用的 VI 必须都被设置为可重入。参考：[在 LabVIEW 中实现 VI 的递归调用](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1832.entry)

    测试题目答案：如果图2的子 VI 没有设置为可重入，则 total time = 2000；如果设置为可重入则 total time = 1000。

**下载示例：**

     [计算两次调用可重用 VI 的延时](http://ruanqizhen.googlepages.com/demoreentrantdelay.7z)  
     [利用可重用 VI 计数](http://ruanqizhen.googlepages.com/DemoforReentrantVI.7z)

**相关文章：**

    [我和 LabVIEW](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)  
    [LabVIEW 程序的内存优化](http://ruanqizhen.spaces.msn.com/blog/cns!5852D4F797C53FB6!1493.entry)  
    [LabVIEW 程序中的线程 1](http://ruanqizhen.spaces.msn.com/blog/cns!5852D4F797C53FB6!1494.entry) 
