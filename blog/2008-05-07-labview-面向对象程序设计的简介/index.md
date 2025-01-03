---
title: "LabVIEW 面向对象程序设计的简介"
date: "2008-05-07"
---

    LabVIEW 的数据流驱动模式，与面向过程的编程思想有些类似。它们都是把程序看成是一组过程或功能的集合，LabVIEW 利用数据流控制这些功能执行的顺序。由于开发者可以随意的修改、调用这些功能模块，在程序开发的后段，模块之间的划分会变得模糊，依赖关系也变得无序。这种方式就不再适合大型程序的开发。  
    面向对象的编程思想是专为解决这个问题提出来的。面向对象的编程思想大大提高了编程时的灵活性和可维护性。现在的大型程序中几乎没有不基于面向对象编程思想的。LabVIEW 为了适应这一趋势，也从 8.2 版本开始引入了面向对象程序设计的思想。

    面向对象有三大特征：封装、继承和多态。

    封装是把高度相关的一组数据和方法组织在一起，形成一个相对独立的类。外部程序只能通过严格定义好的接口访问类所允许公开的数据和方法；而对于不需与外部发生联系的数据和方法，类会把他们隐藏和保护起来。这样就避免了编程过程中，函数模块常常被到处滥用以至于难以维护的弊病。（假如，我们的程序是模拟多只小狗的日常生活的。在设计程序时，就可以把他们抽象归为“狗”类。这个类包括了一些属性，如年龄、皮毛颜色、名字等等；还可以包含一些方法，即狗的行为，比如进食、移动、叫等。）

    初一看 LabVIEW 中的 Class 就会发现它很像 Cluster，或许它就是在 Cluster 基础上发展来的。C++ 中的 Class 也是在 Struct 的基础上发展来的，而且，在 C++ 中，除了函数默认的权限不同，Class 和 Struct 是等效的。在LabVIEW 中，二者还是截然分开的，Cluster 中只有数据，Class 中除了数据，还可以有方法。  
    C++ 类中的成员变量可以是私有，也可以是共有；为了安全起见，LabVIEW 中所有的数据都是私有的，必须通过公有的VI才能访问这些数据。  
    C++ 的类拥有构造函数和析构函数；LabVIEW 的类没有这两个方法。

    继承是为了鼓励代码重用。不同的类可能拥有共同属性和方法，这些共性可以被抽取出来成为父类，被所有子类继承。比如，我们的程序要模拟“狗”和“鸡”两种动物的生活。它们之间其实有很多相似之处的，作为一个优秀的程序设计方案，应该把这些共同点提取出来，构成一个父类“动物”。“动物”类具有“狗”类和“鸡”类的公共属性与方法，比如年龄、进食等。构造“狗”或“鸡”类时，首先把这些公共属性、方法继承下来，再添加一些自己独特的属性方法，比如狗“看家”、鸡“下蛋”等。  
    C++ 的类支持多继承；LabVIEW 的类只支持单继承，这与 Java/C# 相似。  
    LabVIEW 中所有的类都有一个共同的祖先类，而 C++ 中没有。这点也与 Java/C# 相似。

    多态最早也是个遗传学概念，源自同一祖先的不同生物会表现出多种不同形态。在面向对象中，多态是指同一个方法，在不同子类中有不同的表现方式。多态可以简化我们的编程，比如：几个子类都有同样一个继承自父类“动物”的方法“移动”，而不同的子类，狗和鸡移动的现实代码是不相同的：一个使用四两条腿，一个使用两条腿。在应用程序中只要调用父类“动物”的“移动”这个方法，一旦程序运行到这里，就会自动判断要处理的实例是属于狗还是属于鸡，然后去调用狗或鸡类中对“移动”方法的实现。  
    LabVIEW 的面向对象也实现了对多态的支持。

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1073.entry)
