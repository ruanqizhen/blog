---
title: "利用LabVIEW工程库实现面向对象编程"
date: "2005-07-09"
tags: 
  - "我和labview"
---

# 利用LabVIEW工程库实现面向对象编程

阮奇桢

### 注意：

我写这篇文章的时候，LabVIEW 8.2 还没有出来。现在 LabVIEW 8.2 本身就以支持面向对象的编程方法，所以这里介绍的方法有点过时。我有时间会再写一篇关于新 LVOOP 的文章。

### 摘　要：

本文将简要介绍图形化编程语言LabVIEW 中面向对象的编程思想。并且提出了一种实现面向对象编程具体方法，即利用LabVIEW 8.0的新特性：工程库，来帮助实现对象的程序设计思想。

### 关键词：

LabVIEW，面向对象，类，工程库

# Implementing Object Oriented Programming in LabVIEW with Project Library

### Abstract:

This paper introduces the Object Oriented Programming in LabVIEW, which is also called as GOOP.  And it also introduces a new way of implementing the GOOP application: with the help of Project Library, a new feature in LabVIEW 8.0

### Key Words:

LabVIEW, GOOP, Class, Project Library

 

## 一. 背景

LabVIEW是一个强大的编程语言，但是随着开发程序规模变大，LabVIEW程序员可能会觉得对程序越来越难于管理和维护。其根本原因就是LabVIEW是面向过程的编程语言，它采用基于数据流的运行方法。而这种程序设计方式在模块划分方面有着天然的缺陷。使用LabVIEW编写程序时关注的是按流程完成功能，而不是程序功能模块的划分。因此LabVIEW程序划分出来的不同的块之间可能会公用很多子VI，或全局变量，它们的存在使得程序各个模块无法完全独立，更糟糕的事模块之间的关系可能不为编程人员所察觉。当程序规模大到一定程度，尤其是需要多名开发人员共同参与的时候，编写出来程序会越来越显得杂乱无章，使得程序的调试、维护、和升级都变得非常困难。 解决这一问题的途径就是引入更加抽象化的面向对象的编程方法\[2\]。通过构造类的方法，把不同模块之间的数据彻底分离开来，甚至把数据和操作分离开来。这样就保证了不同模块可以完全独立的开发、测试。对某一模块的修改将不会影响到任何其他模块。这样，就可以将一个大的工程分解为可以完全独立开发的多个模块，彻底解决前文所提到的开发困难。 早在1999年，NI就曾向用户演示过在LabVIEW中使用面向对象的编程思想的示例。一些第三方的公司还为LabVIEW面向对象编程提供了一些开放工具。但是由于这些工具使用复杂，功能简单，LabVIEW面向对象的编程思想当时并没有引起用户广泛的注意和重视。 刚刚推出的LabVIEW 8.0版的一些新特性明显体现出面向对象的编程思想。尽管它仍然没能实现对面向对象的编程的整体支持，但是可以预见，LabVIEW将在后续的版本中完整的实现对面向对象的编程的支持。

## 二. LabVIEW工程库（LabVIEW Project Library）

LabVIEW 8.0的一个重要新特性就是“工程库”，这也是LabVIEW向现行对象开发语言过渡的一个重要体现。工程库是一组功能相关联的VI或其它文件的集合。工程库与传统的LabVIEW的LLB文件有着本质的区别。LLB文件只是将一组VI打包存储的一种形式，而工程库与如何存储VI无关，它更关注是把功能相关的VI按一定结构组合封装，以便于代码的管理和发布。 工程库的一些特性可以帮我们方便地实现面向对象的编程： 1． 工程库的名字也是库中VI的名字空间(name space)。 名字空间是LabVIEW 8.0的一个新特性。在8.0前的LabVIEW中无法打开两个文件名相同但内容不同的VI，这就好比在C语言中，一个工程不能拥有两个名字相同的函数。新版本的LabVIEW不再有此限制，但是被同时打开两个同名VI必须存在于不同的名字空间，也就是在不同的工程库中的同名VI才能被同时打开。这与C++、C#等语言中的名字空间的概念类似。 2． 库中的VI有操作安全设置， 每一个VI成员可以被设置为公有（Public，可以被库外的VI调用）；或者私有（Private，只能被库的成员VI调用）。 3． 使用VI Scripting技术，可以在运行时方便的得到库的组织结构信息。 VI Scripting技术也是LabVIEW的新特性。利用它可以直接在LabVIEW中解析或更改LabVIEW VI。

## 三. LabVIEW面向对象编程的具体实现方法

我们可以把一组相关的数据和VI放在一个工程库内，借以实现类的封装功能，但是这种方法不能实现类的继承和多态。

![](http://tk.files.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFceVEczJUif5qoHchV2iLq3-O9FPXsL0-LwwZzQYMyXdd47X8-DhO0TtdX4Wc1Jzox1wAiH4Pgx5WlYRvgSNm-4osryRXNy-WR-6TMM8y6CpAl7i4fckefc)

图1：LabVIEW工程库的结构

### 1． 工程库的结构

例如，要建立一个表示“猪”的类，我们先要为它新建一个名为Pig的LabVIEW工程库。然后按一定的分类方法建立文件夹结构，比如将表示数据的VI放在Attribute文件夹下；把表示动作的VI放在Method文件夹下。也可以划分两个文件夹分别存放公有VI和私有VI。各种分类组织方法并无本质区别，可凭个人爱好选择。 从数据和操作安全的角度考虑，需要在工程库的属性面板中设置成员VI的公有或私有属性。为了维护和使用方便，还应当为库设置适当的版本号、图标等属性。

### 2． 类的设计

LabVIEW工程库一般是不能直接就拿来当作一个类来使用的。类是一个抽象概念，在使用时，需要类进行实例化，类的实例才是真正参与工作的。类的每个实例要保存自己的一份数据，而类中的方法则只需存有一份。因此我们需要为类编写一些用来管理数据的VI，例如图1中的new.vi。它就相当于这个类中构造函数。 我们可以使用两种方法来为每个实例保存一份数据。 简单的方法是在new.vi初始化一个结构（cluster），把所有这个类可能用到的数据都包括在这个结构里。例如，在本例中，可以做一个结构，有一个字符串和一个数字量构成，分别表示我们将用到的名字，和重量。其他类中的成员VI都必须使用这个结构作为传入参数，这样就保证了每份实例的数据互不影响。 另一种方法需要借助C语言的帮助，比较复杂，但是可以避免把一个大的数据结构作为参数传来传去。我们可以使用C编写一套专门处理类数据的API函数，生成DLL文件供LabVIEW调用。具体操作时，用C语言为类中所有的数据开辟一块内存空间，然后返回内存地址给LabVIEW。我们可以在new.vi中把返回的内存指针强制转换为自定义的Data Log File Refnum数据类型，这样我们还可以为每个类定义一个专用的reference类型。其他类中的成员VI都使用这个reference作为主要参数。需要使用某一数据时，可以调用C语言编写的API从内存里读出数据。使用这种方法一定要有一个类似析构函数功能的VI，释放开始时开辟的内存。这种方式类似于LabVIEW中的文件操作VI。

![](http://tk.files.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFceVEczJUif5EfxUxypq5CdBpX7pt4RGN_dTGMhG1Zrwh44fSF3pb2TF2A4Y6q-6I8p4h1khfJVNRZvK3ChTNT3B0gQyQ68DO-4A60oR4WQNllFImTuK-hU)

图2：借助C语言的帮助实现开辟多份实例

### 3． 类的使用

类的使用相对来说要简单得多，与面向对象的文本语言的编写方法相类似。基本步骤也是首先调用构造VI创建类的实例，然后对类的实例进行操作，操作结束需要调用析构VI释放实例占用的资源。如图3所示的例子，用我们在前文中设计的“猪”的类编写的一段程序。程序中我们创建了“两头猪”，然后经过不同的喂养方法，再比较一下他们的体重。 相信读者仅凭代码中的图标就已经可以读懂程序的功能。由此也可见面向对象编程对程序提高可读性的帮助。而使用传统方法编写类似LabVIEW程序，由于没有很好的数据封装，在程序框图中数据连线多且杂乱，极易引起错误。 更值得一提的是，LabVIEW与C++不同，使用面向对象的编程方法不会引起程序效率的损失。

![](http://tk.files.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFceVEczJUif5Mwr4tgGoowODK9A2fgNMY2ey5QtZgmu6pr4hXR4HbpDIHNxZLU3OW9CZP9KHfAVvp7HGIPtOC9u4G6u2F51952ETDbP7a21xPq6v-8AbE70)

图3：面向对象编程方法的示例

### 4． 其它方法实现面向对象编程

除了文中提到的借助LabVIEW工程库实现面性对象编程的编程方法之外，我们还可以借助于LabVIEW 8.0的其它一些新特性，比如XControl等帮助实现面向对象的编程方法。他们的具体实现方法留待其它文章讨论。

## 四. 面向对象的方法对LabVIEW程序设计的影响

目前，LabVIEW程序开发的一般流程是先设计和实现顶层VI，一般来说顶层VI也就是程序的主界面。然后自上而下的设计和编写LabVIEW程序。面向对象的编程方法由于大大提高了程序模块之间连接和搭建的效率，它使得程序员把更多的精力集中在模块的设计开发上。而不同的模块之间相对独立，可以并行的开发、测试。这就使得LabVIEW开发大型程序的效率大大提高。可以预见，随着面向对象的编程方法在LabVIEW中的推广，LabVIEW程序的规模将有一个本质性的飞跃提高。

### 下载文章中的示例程序：

[http://decibel.ni.com/content/docs/DOC-1035](http://decibel.ni.com/content/docs/DOC-1035)[](http://ruanqizhen.googlepages.com/Pig.lvlib.7z)

### 相关文章：

[博客版《我和 LabVIEW 》](http://ruanqizhen.wordpress.com/2005/11/07/%e6%88%91%e5%92%8c-labview/)
