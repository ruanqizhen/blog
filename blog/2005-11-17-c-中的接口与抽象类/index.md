---
title: "C# 中的接口与抽象类"
date: "2005-11-17"
tags: 
  - "码农札记"
---

 

**一．接口的定义**

**定义**：定义一个协定。实现接口的类或结构必须遵守其协定。

简单的说就是接口或者类之间交互时遵守的一个显示定义。最初接触“类与类之间通过接口交互”这个概念时，误以为接口就是类公开的方法，类之间通过类的方法进行交互。其实接口是独立于类的一个定义。接口定义类之间交互的标准。

那么类与类之间直接交互就好了，为什么还要使用接口呢？

这主要是因为：接口是类之间交互内容的一个抽象，把类之间需要交互的内容抽象出来定义成接口，可以更好的控制类之间的逻辑交互。可见接口内容的抽象好坏关系到整个程序的逻辑质量；另外可以在任何时候通过开发附加接口和实现来添加新的功能；

关于接口一个很重要的概念：接口只包含成员定义，不包含成员的实现，成员的实现需要在继承的类或者结构中实现。

接口的成员包括：方法,特性，索引器，事件。

**注意：**接口不包含字段。

实现接口的类必须严格按其定义来实现接口的每个方面

      接口本身一旦被发布就不能再更改，对已发布的接口进行更改会破坏现有的代码。

一个典型的接口示例：         
```
using System;

using System.Colletion;

public delegate voic Chang(object  sender,object event)//定义一个委托

public interface Ibroker  //定义一个股票经济人接口

{

  string GetRating (string stock);//一个获得金额的方法（此处没有实现）

  decimal pricePerTrade    //定义一个设置每股价格的特性

  {

get;                //没有实现的

set;

}

decimal this(string StockName)    //定义索引器

{

  get;

  set;

}

event Change pricechange;   //定义接口的事件

}
```
**二．接口与抽象类**

   抽象类和接口在定义上和功能上有很多相似的地方，具体在程序中使用抽象类还是接口需要比较抽象类和接口的具体差别。

抽象类：一种不能实例化而必须从中继承的类，抽象类可以提供实现，也可以不提供实现

        子类只能从一个抽象类继承

       抽象类应主要用于关系密切的对象

       如果要设计大的功能单元，则使用抽象类。

       如果预计要创建组件的多个版本，则创建抽象类

接口：是完全抽象的成员集合，不提供认识实现。

类或者结构可以继承几个接口。

接口最适合为不相关的类提供通用功能

如果要设计小而简练的功能块，则使用接口

接口一旦创建就不能更改。如果需要接口的新版本，必须创建一个全新的接口

**三．接口的的实现**

   接口的实现分为：隐式实现和显式实现。如果类或者结构要实现的是单个接口，可以使用隐式实现，如果类或者结构继承了多个接口那么接口中相同名称成员就要显示实现。显示实现是通过使用接口的完全限定名来实现接口成员的。

针对上面的例子 我们可以这样实现接口：
```
public class testInterface: Ibroker  //定义一个继承ibroker接口的类

{

  hashtable hash=new hashtable();

  decimal pricepertrade;

  public testInterface(decimal price)   // 构造函数

  {

    pricepertrade=price ;             //初始化字符串

}

public string  Getrating (string stock)     //隐式实现接口的方法

{

   return “buy”;

}

public decimal Ibroker.pricepertrade //  显式实现接口的特性

{

  get

{

  return pricepertrade;

}

set

{

  pricepertrade=value;

pricechange(“Finacebroker”,value);

}

public decimal this(string stockName)

{

  get

{

  return (decimal)Hash\[stockName\];

}

set

 {

   hash.add(stockname,value);

}

}

}

public event changer pricechange;//接口中的所有成员都要实现

}
```
**四．接口中的多态**

 多个类继承了相同的接口就实现了接口的多态性，接口的多态性的访问和类的多态性访问一样。下面的例子说明怎么实现接口的多态性访问：
```
public class InterfaceTester

{

  public stratic int Main (string\[\] args)

  {

string recommendation;

Arraylist Brokers=new Arraylist;//定义一个列表

Brokers.add(new  firstBroker(7.21m));//添加第一个继承接口的类

Brokers.add(new  secondBroker(12.3m));// 添加第二个继承接口的类

InterfacetTester new Iftst=new InterfacetTester

Foreach (Ibroker broker in Brokers)

{

   broker.pricechange+=new change(iftst.pricepertradechange);

   broker\[“adc”\]=12.33m;

   broker\[“rty”\]=11.23ml

   broker.pricepertrade=12.55m;

}

}

}
```