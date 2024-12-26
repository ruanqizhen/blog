---
title: "传引用"
date: "2008-06-04"
tags: 
  - "我和labview"
---

    传值是符合数据流驱动程序的传参方式，LabVIEW 中应该尽量使用这种方式。但是传引用在某些情况下是不可避免的，比如程序要在不同的线程中对同一数据进行操作，就得用到传引用。  
    引用在 C++ 中和指针本质上是一个东西，只是使用规则有些不同罢了。它们都是一个4或8字节的整数，这个整数表示的是目标数据所在的地址。程序代码通过这个地址来访问数据。  
    在 LabVIEW 中，没有指针的概念，但是我们可以通过多种形式来完成传引用的功能。下面我们就来讨论一下这些传引用的形式。

一、LabVIEW 自带的传引用数据类型

    在 C++ 语言中，调用子函数时，可以指定某个参数是传值还是传引用。LabVIEW 采用的是完全不同的机制：在一般情况下，数据类型决定了这个数据是采用传值还是传引用。LabVIEW 中大部分数据类型是值传递的，一少部分数据类型专门用于传引用。例如，控件选板上的 Refnum 栏上的控件就都是传引用数据类型的控件。在程序框图上，用深色细绿线表示这类传引用的数据类型。

![](http://byfiles.storage.msn.com/y1pIcO_924THofG9CDuYTdgVgC_DAGLt9sx-WZeWKFvQXMS2i9FEkOzaiXOsEDIgs0SY6RsoOWNKvY?PARTNER=WRITER)  
图1：Refnum 选板

    使用 VI Scripting 编程时常会使用到 VI Refnum, Control Refnum 和其它对象的引用。与传值不同，在传递这些数据时，如果数据线分叉，并不意味把它们所表示的控件等复制了一份。新分出来的 Refnum 还是指向原来的那个控件。

    除了各种 Refnum，LabVIEW 中还有其它一些数据类型，尽管其数据线的颜色不同，其实也属于传引用的数据类型。它们包括了硬件设备的句柄（VISA Resource, IVI Logic等）, notifier, event, queue 等等。

二、全局变量

    在实际编程过程中，更常见的是我们希望把一个普通类型的数据按传引用方式传递。比如一个数组，一个自定义的簇等。  
    [全局变量](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!3159.entry)是一种最简便的传引用的方式。全局变量的数据被保存在某一固定的内存空间里，但在不同的 VI 或线程中，都可以通过表示这个全局变量的对象来访问数据。  
    在使用全局变量时，直接把表示全局变量的 VI 或节点放在程序中就可以访问它的数据了。这种方式尽管有其优点，但更多的却是缺点。我们在阅读 LabVIEW 程序的时候，数据线是非常重要的线索。它为我们指明了程序执行的顺序，数据传递和加工的过程。失去数据线这一重要线索，就不容易搞清楚这个数据是从哪里来的，何时被改动。因而大大降低了程序的可读性和可维护性。  
    不过不要紧，下面提到的方法将会解决这个问题。

三、队列

    LabVIEW 中有一套操作队列的函数。

![](http://byfiles.storage.msn.com/y1pIcO_924THofkVlCNZc7g0vlKsIlAsuxCopgWP5hYvm39bnbnCRCkxZL5yb_mCILy_Fh7znKk_LY?PARTNER=WRITER)  
图2：队列的函数选板

    LabVIEW 中的队列是双向队列，堆栈也可以使用它。它与其它语言中的队列一样，为数据数据提供了存入取出的操作。一般用于不同线程、不同设备等之间通讯时数据的缓存。  
    但 LabVIEW 中的队列它有其特殊性。其他语言中，队列主要作为一种数据结构，是一种便捷的在内存中保存需要顺序处理的数据的方式。在 LabVIEW 中，队列更主要的应用于在不同的线程间的数据交换。因此，队列不同于LabVIEW中大多数的数据类型，它是传引用的。这样才能在不同的线程内对同一个队列进行操作。

    我们可以借助队列，使任意一种类型的数据按照传引用的方式传递。其思路是：创建一个新的只有一个元素的队列，把数据作为这个队列的元素。平时在 VI 间传递参数时，传递的是这个队列。需要时，再把数据从队列中取出使用。下图是初始化一个这样的传引用数据的代码：

![](http://byfiles.storage.msn.com/y1pIcO_924THoeUC_tuY75pKQkNDqhTPEWySmqWgnUqSRjhzbFHlcwhUPhdodM5hY6JwO7vYT8u8Vk?PARTNER=WRITER)   
图3：创建一个传引用的数据

    传引用通常都是用于在不同线程里访问同一份数据，所以在访问数据时要防止出现竞争状态。一个数据处理的 VI（假设名为A），第一步操作就应当是用“Dequeue Element”把队列中唯一的元素取出。在 VI （A）所有工作都完成后，再让新的数据重新入队。这样一来，程序执行到VI（A）时，队列立即被清空。其它线程内若有 VI （假设名为B）准备同时处理同一数据，此时它已经无法从空队列中取出所需的数据。它只能暂时等待，直到 VI（A ）完成所有工作，再次把数据放回队列，VI（B） 才能继续执行。这样就避免了同一数据被同时访问而引发的竞争状态。  
    下图就是一段处理数据的示例代码：

 ![](http://byfiles.storage.msn.com/y1pIcO_924THocliBWWXb51r9TpHb4eafWHq_u0LM7NbRMh8AteMez1e44Z_ltcJuY3Wqr6MtBqPNk?PARTNER=WRITER)  
图4：清空队列、处理数据、重新入队

    （有人问起，代码中那个黄色可框是什么。它是[缓存重用结构](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!2442.entry)。）  
    使用传引用，就必须自己管理内存了：当数据不再使用时必须把创建的队列销毁，否则可能会引起内存泄漏。  
    这里可以[下载一个完整的借用队列传应用的演示程序](http://decibel.ni.com/content/docs/DOC-1705)。

四、借助 C 语言

    借助 C 语言比借助队列实现传引用要麻烦一些，所以这不是一个首选方案。但是，如果软件中已经有部分模块是使用 C 语言编写的，并且所传递的数据在 C 代码中和 LabVIEW 代码中都会使用到，也可以考虑把数据存放在 C 语言实现的模块中。  
    这种做法的思路是，数据存放在 C 语言开辟的内存空间里。C 语言把数据的内存地址传给 LabVIEW。平时在 VI 间传递参数时，传递的是这个地址的数值。需要时，再把数据从内存中读到 LabVIEW 里使用。

    在下图的[小猪的演示程序](http://decibel.ni.com/content/docs/DOC-1035)中使用到了这种传数据引用方法。下图是演示程序中创建数据引用的VI：Pig.lvlib:New.vi

![](http://q0by9q.bay.livefilestore.com/y1pxGfiphRHa8jW-G5HJAuCHkahXmFLvKDnNQcBliBZRnKRu0Rw_MDYvVB12U7qda1bDK_eSafHLhw3h6BS60B1EB78NpapfL5g?PARTNER=WRITER)

    先不去考虑这个例子中的数据具体是什么，值分析一下它如何构造数据的引用：在这个 VI 的正中间是一个显示为“NEW INDEX”的VI。它的功能是把一段数据放置在C语言中开辟的内存里，然后返回保存数据的内存地址。内存地址用I32整数类型标识。以后在每个子 VI 间传递的数据就是这个内存地址的值。  
    你可能已经注意到，程序把这个内存地址又强制转换成了一个 Refnum 数据类型。这不仅是为了看着舒服（LabVIEW 中的传引用大多使用这种数据类型），更是因为使用自定义的 Refnum 类型，比整数有更高的安全性。例如你的程序中有不同的几块数据都采用这种放法保存在C语言开辟的内存中，使用不同的 Refnum 类型可以分别地将它们区分开来，避免直接把地址值传递给需要使用另一块数据的 VI。（这个技巧留待以后详细解释:）

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
