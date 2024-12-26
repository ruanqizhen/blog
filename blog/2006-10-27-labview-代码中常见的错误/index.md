---
title: "LabVIEW 代码中常见的错误"
date: "2006-10-27"
tags: 
  - "我和labview"
---

    发现了程序的问题再回头去调试，在查找程序错误时就不可避免地要花大量时间。要调高开发效率，最好是在编写代码时就避免一些常见的低级错误，这样可以节约大量的调试时间。 有些编程错误差不多是每个 LabVIEW 程序员都曾遇到过的。在编写相关代码的时候，对这些问题多留心一下，就可以大大减少调试时间。

### 1\. 数值溢出

 ![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AIavAyXK0mbocOT8x1TkGt-8SNvhP9Ts5Gnz4SiYs_nmr07YUU-p2q182rQmptl366UbNCBfbslXA_b86-IC_7p-i1FDNHHkm0DD_TvZKJ7KFCmYpmzLHP) 图1：数值溢出错误

    图1 中的 VI 只做了一个简单乘法 300\*300 ，不加思索就应该知道答案是 90000，但程序中乘法节点给出的结果却是 24464。乘法节点是不会错的，错误是由于程序中使用的数据类型是 I16。I16 能表示的最大数目只有32767，所以在乘法计算中出现了溢出。 避免此类错误的方法是，在程序中使用短数据类型时，一定要确认程序中的数据绝不会超出该类型可以表示的范围。

### 2\. For 循环的隧道

循环相关的介绍可以参考《[循环结构](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!2018.entry)》。

数据传入传出循环结构可以通过移位寄存器（Shift Register）和隧道（Tunnel）两种方式。隧道又有两种类型：带索引的和不带索引的。 移位寄存器一般用在需要局部变量的情况下，循环运行一次的输出数据要作为下次运行的输入数据使用；循环外的数组数据通过带索引的隧道在循环体内就可以直接得到数组元素；除此之外，简单地在循环内外传递数据，使用一般的隧道就可以了。 值得一提的是，如果一个数据传入循环体，又传出来，那么就应该使用移位寄存器或带索引的隧道来传递这个数据，尽量不要使用不带索引的隧道。因为 For 循环在运行时，循环次数有可能为0。在循环次数为0时，大多数情况，用户还是希望传出循环的数据就是传入值，但使用不带索引隧道时，输入值有时会被丢失的。如果使用移位寄存器，即使循环次数为0，也不会丢失传入的数据。因为移位寄存器在循环上的两个接线柱指向的实际是同一块内存（参考：[LabVIEW 程序的内存优化](http://ruanqizhen.wordpress.com/2006/07/18/labview-%E7%A8%8B%E5%BA%8F%E7%9A%84%E5%86%85%E5%AD%98%E4%BC%98%E5%8C%96-1/)），而输入输出两个隧道指向的是不同的内存，数据不一定相同。

 ![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6Fnek8mJX9hlXv32Lo70a5B_zxgltrcBhNTNxH1Xl4xzU4Jl9pbkoTtHg_k802S5yP__5sT0GLYejNw1h-E-bFQU0) 图2：For 循环上的隧道

    图2中的程序， vi reference 传入，再传出循环均使用了隧道。如果循环次数为0（Controls数组为空），vi reference 再传出循环时，信息就丢失了。这不但有可能造成后续程序的错误，而且由于 vi reference 的信息丢失，再无法关闭打开的 vi，造成了程序泄漏。 Error 数据线（黄绿色的粗线）在传入传出数组时，一定要使用移位寄存器。原因还不仅是为了防止在循环次数为0时，错误信息丢失。通常一个节点的 Error Out 有错误输出，意味着后续的程序都不应该执行。在错误的情况下继续执行程序代码，风险非常大，可能会引起程序，甚至系统崩溃。只有使用移位寄存器，某次循环产生的错误才会被传递到后续的循环中，从而及时阻止后续循环中的代码被运行。

### 3\. 循环次数

与其它语言相比，LabVIEW 的 For 循环有一大特点，在某些情况下它并不要求一定要输入循环次数，而可以根据输入数组的大小自动决定循环次数。通过带索引的隧道，可以把数组分解成元素传递到循环体内，此时不需另行设置循环次数N，循环的次数就是数组的长度。每次循环，带索引的隧道便给出一个元素。 循环体上可以有两个或更多的输入数组使用带索引的隧道，此种情况下容易引起错误。这时，循环的次数等于几个数组中长度最短的那个数组的长度。如果另外又设置了循环次数N，那么循环次数就是N与输入数组长度这两者的最小值。调试时，如果发现一个本该运行多次的循环没有运行，那么很可能就是因为它的一个输入数组是空的。

While 循环同样也可以使用带索引的隧道，但是我不建议大家这么用——如果需要用到带索引的隧道，还是使用 For 循环更为适宜。因为 while 循环的循环次数不由数组个数决定，而是由停止条件决定的。如使用了带索引的隧道，你还需要考虑当数组大于、小于循环次数时，程序应该如何处理，所以还是在循环体内作索引比较方便。如果希望循环次数与数组大小保持一致，那自然是用 For 循环的程序更加清晰易懂了。

### 4\. 移位寄存器的初始化

![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnXbNqGwQJTKAHFi0J3Irk0MC_OY0eOBG2jhi9MNHZx3-pzuXRX_DpawmNIMhHcVZeksXfS8l1uyJetUBtCnX1eU) 图3：没有初始化的移位寄存器

    看图3中这个程序，因为它在 while 循环上使用了带索引的隧道，所以可读性不那么好。array out 的运行结果是什么，还要考虑一阵子才能给出答案。实际上这个程序，即使输入不变，每运行一次，array out 的结果都是不一样的，它的长度一直在增加。这个问题就出在没有给程序中的移位寄存器一个初始值。

没有初始化的移位寄存器，总是保存上次运行结束时的数据。这个特点在某些情况下可以被程序员利用，比如用它当作全局变量，随时把数据存入或取出（一个例子是《[如何使用 VI 的重入属性](http://ruanqizhen.wordpress.com/2006/07/19/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-vi-%E7%9A%84%E9%87%8D%E5%85%A5%E5%B1%9E%E6%80%A7%EF%BC%88reentrant%EF%BC%89/)》中的图4）。但多数情况下移位寄存器还是被用作为循环内部的局部变量的，这时就一定要对它初始化，以防止潜在的错误。

### 5\. Cluster

![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4CAkuN5DtlyPD6-D1ynMefVJKdZbVq4CpdYecsryiqXL7FZ4WKpFgE814Ymv8Rn5ui-uoiGtnBNl2MFEhkqCkn_zJ1K8Kelf8iTpqT6ancidAzApy92Nyc_) 图4：Cluster 传递数据出错

    图4的程序中有个奇怪的错误，明明应该是 weight 加 1 怎么运行完后的结果变成了high 加 1 了呢？直接揭开谜底吧，原因是 Cluster 中的元素有个顺序，这个顺序可以和界面上看到的顺序不一致。分别鼠标右击程序中的两个 Cluster，选择“Reorder Controls in Cluster”，就可以看到每个元素在 cluster 中的编号。info out 中的 high 实际上编号是 2，第三个元素。

为了避免 cluster 中用可能出现的错误，以及让 cluster 应用起来更方便，使用 cluster 最好遵循以下原则： 1. 凡是用到 cluster 的地方，就为它造一个类型定义（《[在程序中使用类型定义](http://ruanqizhen.wordpress.com/2006/11/15/%e5%9c%a8%e7%a8%8b%e5%ba%8f%e4%b8%ad%e4%bd%bf%e7%94%a8%e7%b1%bb%e5%9e%8b%e5%ae%9a%e4%b9%89%ef%bc%88type-def%ef%bc%89/)》），在程序所有要用到这个 cluster 的地方，都使用类型定义的实例。这样一是可以保证所有的 cluster 都完全一致，避免图4 这种错误；二是一旦需要变动 cluster 中的元素，只需在类型定义中更新就可以了，不必挨个 VI 修改。 2. 凡是在需要解开（unbundle）或打包（bundle）的地方统统使用 unbundle by name 和 bundle by name 来实现。使用带名字的 bundle，unbundle 可以直观的显示出 bundle 种元素的名字，这样不会因为顺序的不同而导致错误的连线。

### 6\. 并行运行

[LabVIEW 是自动多线程的编程语言](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1494.entry)，这一点在方便用户的同时，也会带来一些麻烦。比如最常见的情况，多线程会引起数据或资源的竞争错误（race condition）。

 ![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnXbNqGwQJTKAUlmOnKE83SHlbvU90KEkvI3cwcdt5viJOCFNjWuSmdVm4_vzIjw8cIhA3hOnghFy7oRpI8oaIvU) 图5：两个并行运行的子 VI

    图5是一个简单的两个子 VI 并行运行的例子，在这个例子中就隐藏着一个潜在的问题。并行执行的两部分程序，先后次序是不定的。有可能关闭程序中的引用数据（绿色的线上的数据）的节点在子 VI B 结束前运行。而子 VI B 是要用到这个参考数据的，这是子 VI B 就会因为它所需要的数据失效而产生错误。

**下载示例：** [演示 LabVIEW 调试和常见错误](http://ruanqizhen.googlepages.com/DemoDebug.7z)

**相关文章：** [LabVIEW 的调试环境](http://ruanqizhen.wordpress.com/2006/09/11/labview-%e7%9a%84%e8%b0%83%e8%af%95%e7%8e%af%e5%a2%83/) [断点和探针](http://ruanqizhen.wordpress.com/2006/09/13/%e6%96%ad%e7%82%b9%e5%92%8c%e6%8e%a2%e9%92%88/) [其它常用调试工具和方法](http://ruanqizhen.wordpress.com/2006/09/29/%e5%85%b6%e5%ae%83%e5%b8%b8%e7%94%a8%e8%b0%83%e8%af%95%e5%b7%a5%e5%85%b7%e5%92%8c%e6%96%b9%e6%b3%95/) [我和 LabVIEW](http://ruanqizhen.wordpress.com/2005/11/07/%E6%88%91%E5%92%8C-labview/)
