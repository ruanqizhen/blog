---
title: "内嵌子VI"
date: "2012-05-15"
tags: 
  - "我和labview"
---

[https://labview.qizhen.xyz/zheng-wen-mu-lu/optimization/optimization\_inline\_subvi](https://labview.qizhen.xyz/zheng-wen-mu-lu/optimization/optimization_inline_subvi)

从提高程序的可读性、可维护性、可重用性的角度来说，在设计LabVIEW程序时，应当经可能多的使用子VI。基本上，每个相对比较独立的功能都应当被做成子VI，而子VI最大也不应到超过30个节点。

但子VI过多，可能会对程序的运行效率带来一定影响。

首先，调用子VI是有一定的开销的，比如调用子VI时需要把参数压栈等，但是这些开销是非常小的，可以忽略不计。

造成嵌入式子VI提高整个程序的性能的主要原因是在于LabVIEW编译器的优化工作。LabVIEW编译器是可以比较智能的做一些优化工作的，在不改变程序逻辑的前提下，提高生成代码的执行效率。比如下面列出了其中几种常见的编译器优化方法：

- 去除死代码：把永远的不会被执行到的代码删除。
- 转移循环中的不变量：若循环每次迭代都做某些相同的运算，编译器会把这个运算挪到循环之外，制作一次就可以了。
- 相同代码合并：编译器自动发现程序中对同一数据进行的重复运算，把重复的运算去掉。
- 常量合并：编译器会发现程序中对常量进行的运算，在编译时就计算他们的结果，把结果直接保存在程序中，这样就不需要每次程序运行都对其进行计算了。

LabVIEW编译器的优化有一个局限性，就是这些优化措施只能在一个VI上进行，不能应用于全局。当把一个子VI B的代码合并到上层VI A中去，编译器可能就会发合并后的代码有很多可以优化的地方；若VI A和B的代码分别在不同的VI中，编译器分开查看每个VI中的代码，可能就找不出太多可以优化的地方。

LabVIEW中有一个解决方案，可以兼顾可读性与运行效率，就是在编辑程序时，多划分子VI，而编译程序时，又把子VI合并起来当作一个大VI来处理，这就是嵌入式子VI。

在VI属性对话框的“执行”页面上有个选项是“在调用VI中内嵌子VI”，英文叫“Inline SubVI into calling VIs”。若读者学过C语言和它的inline函数，就会非常容易理解LabVIEW中的这个设置。

[![image](images/image_thumb.png "image")](http://ruanqizhen.wordpress.com/wp-content/uploads/2012/05/image.png)

当这个选项被选中，这个VI就变成了嵌入式子VI。当嵌入式子VI被拖拽到其它VI上，从编辑代码的角度上看，它与其它VI没有什么区别；但是在程序编译的角度来看，它与普通VI是不同的，那就是嵌入式子VI在编译时，并不是独立存在的，它的代码被全部复制到了调用它的VI中。用一个实际的例子来讲，假如一个程序中有两个VI，A和B，A调用了B。假如B是一个普通的VI，这个程序便编辑成可执行代码后，代码中还是有两个VI，A和B；若B是嵌入式子VI，编译好的程序就只剩下一个VI了，被扩充了的A，被扩充的A中包含原A和B两个VI的代码。

需要注意的是：嵌入子VI这个选项并不是用的越多程序效率就越高。使用嵌入式子VI也会给效率带来负面影响，比如它在每处调用子VI的地方都会生成一份拷贝，使得程序体积膨胀，占用过多的内存等。因此，建议把调用不频繁，输入参数常常为常量的VI设为嵌入式子VI，而一般的子VI不需设置。

下面用一个具体的示例来看一下LabVIEW编译器是如何优化程序的：

首先，我编写了一个子VI，这个VI有三个输入；其中两个输入是数据，另一个输入表示对两个输入数据进行何种运算，是相加还是相减等；让后把运算结果输出。

[![image](images/image_thumb1.png "image")](http://ruanqizhen.wordpress.com/wp-content/uploads/2012/05/image1.png)

[![image](images/image_thumb2.png "image")](http://ruanqizhen.wordpress.com/wp-content/uploads/2012/05/image2.png)

这个“Inline sub VI.vi”被设置为嵌入式子VI。对于嵌入式子VI，它必须是可重入的（嵌入式子VI的代码在每个子VI被调用的地方都会有一个副本，就更不要说是数据空间了）。LabVIEW暂时不支持嵌入式子VI的调试和自动错误处理。所以，在VI属性对话框中设置嵌入式子VI时，要把其它的设置做相应改动，否则LabVIEW会在其它设置项上打个叹号，提示这里的设置有问题。

[![image](images/image_thumb3.png "image")](http://ruanqizhen.wordpress.com/wp-content/uploads/2012/05/image3.png)

接下来我在下面的程序中调用的这个子VI：

[![image](images/image_thumb4.png "image")](http://ruanqizhen.wordpress.com/wp-content/uploads/2012/05/image4.png)

下面咱们要看一下，LabVIEW的编译器是如何对这个程序进行优化的。为了更直观的展示这些优化，我会画一些示意程序框图。这些用于示意的程序框图并不是LabVIEW优化出来的，而是我手工制作的，LabVIEW的优化只针对编译好的可执行代码，它并不会修改VI的源代码（程序框图）。但是经过LabVIEW的优化，main.vi生成的可执行代码，与我制作的示意程序框图编译成的可执行代码是完全相同的。

因为“Inline sub VI.vi”是嵌入式子VI，对于编译器来说，它的代码是被拷贝到main.vi上来的，所以对于编译器来说，它看到的代码是这样的：

[![image](images/image_thumb5.png "image")](http://ruanqizhen.wordpress.com/wp-content/uploads/2012/05/image5.png)

在这段代码中，条件结构分支选择器的输入是一个常量“Add”，这就意味着程序每次都只会进入“Add”这一分支，而其它分支永远不会被执行到。编译器会把那些执行不到的分支移除，因此，优化后的程序代码等效如下：

[![image](images/image_thumb6.png "image")](http://ruanqizhen.wordpress.com/wp-content/uploads/2012/05/image6.png)

程序中循环内所作的运算，在每次迭代中都是相同的，因此它可以被挪到循环之外，只运行一次。优化后代码等效如下：

[![image](images/image_thumb7.png "image")](http://ruanqizhen.wordpress.com/wp-content/uploads/2012/05/image7.png)

程序中的平方运算的输入值是一个常量，因此这一运算会在编译时就完成这一计算，等效优化后代码如下：

[![image](images/image_thumb8.png "image")](http://ruanqizhen.wordpress.com/wp-content/uploads/2012/05/image8.png)

程序中，对data这个输入数据进行两次完全相同的运算，这是没有必要的，编译器也会将其合并，于是优化后的代码最终等效与如下的代码：

[![image](images/image_thumb9.png "image")](http://ruanqizhen.wordpress.com/wp-content/uploads/2012/05/image9.png)

可见，一个看似复杂的程序，经过LabVIEW编译器的优化，它的运行效率可以媲美一段极其简单的程序。但是这并不是说程序员可以不关心代码的效率了。编译器毕竟还是能力有限，它只能做简单的优化，程序效率的决定因素还是在于程序员本身的。
