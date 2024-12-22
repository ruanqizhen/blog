---
title: "ArrayList 与 List&lt;T&gt; 不一致的Range行为"
date: "2010-11-26"
tags: 
  - "计算机技术"
---

今天发现C#中泛型和非泛型集合的某些方法，行为不一致。

比如下面这段程序，运行之后，test中有4个元素，而test1中只剩下两个元素。

```c#
System.Collections.Generic.List<string> test = new System.Collections.Generic.List<string>(); test.Add("1"); test.Add("2"); test.Add("3"); test.Add("4"); test.GetRange(1, 2).Clear();

System.Collections.ArrayList test1 = new System.Collections.ArrayList(); test1.Add("1"); test1.Add("2"); test1.Add("3"); test1.Add("4"); test1.GetRange(1, 2).Clear();
```