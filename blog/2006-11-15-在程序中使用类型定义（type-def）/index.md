---
title: "在程序中使用类型定义（type def）"
date: "2006-11-15"
tags: 
  - "我和labview"
---

    在 C 和 C++ 中，程序员可以使用 typedef 来定义自己的数据类型。typedef 的首要好处是使得程序具有更好的可读性，可以为某种数据类型起一个针对你的程序有意义的名字；另一个好处就是，如果这个数据类型需要作改动，只要在 typedef 语句处改动就可以了，程序中使用了这个数据类型的代码部分不需要作任何改动。

    在 LabVIEW 中可以使用类型定义，或者严格类型定义来实现类似的功能（参考：[用户自定义控件中 Control, Type Def. 和 Strict Type Def. 的区别](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1825.entry)）。

    在 LabVIEW 中如果使用到某种自定义的 Cluster，并且还要把它的数据在子 VI 间传递，那么一定要为它做一个类型定义。经常出现的一种情况是，在你编写了一部分代码之后，发现需要添加或删除这个 Cluster 中的某个元素。如果没有类型定义，那么你就需要手工的打开每一个使用了这个控件的 VI，一个一个修改它们。如果使用了类型定义，只需要修改一下对应的 .ctl 文件，所有的类型定义实例自动会跟着更新，这样方便多了。  
    类似的情况还有：要为 Ring 和 Enum 控件做严格类型定义。Ring 和 Enum 中的项目在程序开发过程中使经常被改动的。

**相关文章：**    [我和 LabVIEW](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)  
    [LabVIEW 代码中常见的错误](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1857.entry)
