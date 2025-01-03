---
title: ".NET Framework 的容器"
date: "2005-11-07"
tags: 
  - "我的文章"
---

　　自从我发现了STL，再编写C++程序，就离不开它了。STL提供的容器和算法极大的方便了C++编程。  
　　最近在对比研究C#中的泛型、标准容器和算法，看看它是如何实现类似STL的功能的。先总结一下C#中的标

准容器。我使用的是 Visual C# 2005。  
   
　　C# 中主要有两类容器：一个是 System.Array 类（参阅：[http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpref/html/frlrfsystemarrayclasstopic.asp](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/cpref/html/frlrfsystemarrayclasstopic.asp)），类似 STL 中的 Vector；另一类是集合。集合还可以细分

成功能不同的几个容器。  
　　C# 1.0 的集合类的容器全部在 System.Collections 名字空间下。（参阅：[http://msdn2.microsoft.com/en-us/library/k166wx47(en-us,VS.80).aspx](http://msdn2.microsoft.com/en-us/library/k166wx47\(en-us,VS.80\).aspx)）其中实现好的容器有：ArrayList

，BitArray，Hashtable，Queue，SortedList，Stack 。名字空间中的其它类，比如 Comparer 等，是用来帮助实现容器和接口的，就不把他们算作容器了。  
　　C# 2.0 由于增添了对泛型编程的支持，它又新增了一个名字空间 System.Collections.Generic，存放所有支持泛型的各种集合类的容器。（参阅：[http://msdn2.microsoft.com/en-us/library/system.collections.generic](http://msdn2.microsoft.com/en-us/library/system.collections.generic)）支持泛型的集合类容器有：Dictionary，LinkedList，List，Queue

，SortedDictionary，SortedList，Stack。  
　　与之对比对比，STL中实现的容器有：Vector，Deque，List，Set/Multiset，Map/Multimap，Stack，Queue，Bitset。

　　下面主要介绍一下，C# 支持范型的容器。  
　　Array 顾名思义，提供了数组容器和操作，如查找、排序等。类似于STL中的 Vector。其声明如下：  
　　public abstract class Array : ICloneable, IList, ICollection, IEnumerable  
　　Array 与STL中的 Vector 和 C# 中的其它容器不同之处，它不需要特别的把变量用 Array 类来声明，直接在元素类型后加中括号就可以把变量指定为是 Array 容器。例如声明一个元素数据类型为int的数组容器用一下语句：int\[\] myIntArray = new int\[5\] { 1, 2, 3, 4, 5 };  语句中的 myIntArray 即成为一个数组容器。

　　Dictionary 与 STL中的 Map/Multimap 相类似。Ditctionary 是两个类型参数（健和值）的集合。

　　List, SortedList，与 STL中的 List 类似，提供链表容器和操作。

　　Queue与 STL中的 Queue 相类似。是元素先进先出的集合。  
　　Stack与 STL中的 Stack 相类似。是元素先进后出的集合。

