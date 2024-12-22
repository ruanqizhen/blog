---
title: "LabVIEW 中的类"
date: "2008-06-05"
tags: 
  - "我和labview"
---

### 一、创建一个空的类

    在 LabVIEW 工程窗口里，鼠标右键菜单的新建栏中有一项，是创建类。类的结构和 LabVIEW 工程库是比较相近的：类的名字也作为名字空间；也可以为类中的 VI 设置访问权限等。类在硬盘上被保存在一个 .lvclass 文件中。这个文件其实是一个XML格式的文本文件，它的格式与 .lvlib 类似。  
    类是一个抽象的定义，符合这个类的实体，叫做类的实例。这有点类似数据类型和数据之间的关系。

    我们先来创建一个名叫 Animal 的类吧，用它来描述一些动物的属性和行为。现实中，通过特定的属性和方法（行为）来定义某一类事物；与之对应的 LabVIEW 中的概念是类的数据和VI。  
    动物类是一个类，符合这个概念的任何一个实体比如某一只小猫，一条小狗就是这个类的实例。程序中处理的都是这些实例。

[![](http://byfiles.storage.msn.com/y1pIcO_924THoc3dgamzy9QuoF-fk2u9P-L1lHFD05WpYqrq3GbOUQ4heyAEDdlmRmJYPGwfeAqYFI?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THofLsI5MGSxKk3BNSqanvv00fskBVgUl_aV541xiXfQPGXp7GbtnYF7Yt7SwG6rZ_1o?PARTNER=WRITER)  
图1：创建类的菜单

### 二、类的属性

    在工程窗口中可以看到，每个类包含数个 VI 和一个与类同名的 .ctl 项。尽管它的面板与设置方法与用户自定义控件类似，但它实际上并不是一个独立的[用户自定义控件](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1825.entry)。此外，类的.ctl项必须是一个 Cluster。Cluster 中的元素就是这个类所使用的数据，相当于 C 语言的类中的变量。通过改变 Cluster 中的元素的默认值，你可以在这里设置类的属性的初始值。

    与 C 语言不同之处是，LabVIEW 类中数据只能是私有的。  
    公有数据是最容易被滥用的。为了自己使用方便，非常专业的编程人员常常倾向于把类中的数据都设置为公有，可以方便随时随地访问它。但这样一来就完全破坏了类的封装性，不加控制地访问类中的数据增加了模块间的耦合度，使得可读性和可维护性都大大降低。  
    通过类的方法访问类中数据就安全得多。比如我们可以在方法中添加对写入数据的合法性检查，在数据越界时报错等。  
    这样也有利于调试。比如我们需要跟踪某个类的数据的变化，如果数据是公有的，程序运行时就无办法预知它是在那里被改变的。若数据是私有的，我们就可以确定它只在类中设置它的 VI 中被改变。只要在这个VI上加个断点，就可以在调试时，令程序在数据被改变之前暂停运行。  
    LabVIEW 相当一部分用户是非计算机专业的人员。对于他们来说，概念越简单越好。类的数据强制为私有类型，可以避免他们接触更多的程序设计概念，而直接引导他们使用最佳的程序设计方法。

    这样的设计方法唯一不足之处是：即便是的确需要被类之外的 VI 直接访问的数据，也必须给他们创建一个公用的方法，通过这个方法间接访问这个数据。幸好，类的右键菜单中有一项专门为数据创建访问 VI 的选项（VI for Data Member Access...）。通过它，可以便捷地创建出数据访问 VI 以供使用。

    现在，回到我的 Animal 类：它有两个属性，分别是动物的年龄和颜色。于是我在 Cluster 中放了两个分别表示年龄和颜色的控件。

 [![](http://byfiles.storage.msn.com/y1pIcO_924THod5cyrhLIzRNwlF53K5FnqV9aI2RWE0uA9_P0om11yg-3-MakgDhVdIoqeTnrcScn8?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THocJOayg8VqzS_GEzYC6tCDt8xESNAVBMdZN6BghLY3HHLeJO2fcTnC2fXvo4bYh8Sg?PARTNER=WRITER)  
图2：添加类的数据（类的属性）

### 三、类的方法

    鼠标右键点击在类上，就可以为类创建 VI，也就是类的方法。

 [![](http://byfiles.storage.msn.com/y1pIcO_924THodjbEkzBuCaFzMb_kL-l5ywYHbXQYvELkG_F-YQu02dQeIa4Q7KJJ4ko91-x2HdsZc?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THocJrSLHkqkyRE4pSEBTNFb6C8bXHS4qdz2h1DJjqACd4sID2Ipr8NZM_uYGZqB1lio?PARTNER=WRITER)  
图3：创建新方法

    在上图新建这一栏下可以看到很多条目：  
    VI，就是指创建一个普通的 VI。  
    Virtual Folder，是文件夹。如果类中的方法很多，可以把它们归类到不同的文件夹中，便于管理。  
    VI from Dynamic Dispatch Template，所创建出来的VI类似于 C 语言中的虚函数。应用程序再调用这个 VI 的时候，可能实际执行的是某个子类中的同名方法。  
    VI from Static Dispatch Template，所创建的 VI 比普通 VI 多了类方法最常用的代码框架。程序员可以省去一些自己画错误处理选择框的时间。它与 VI from Dynamic Dispatch Template 唯一的区别在于：类输入输出接线端子（这个例子中是“Animal in/out”）不是动态调度的。（参见图4：动态调度的接线端子）  
    VI for Data Member Access...，因为类的数据全部是私有的，所以需要借助公有VI来访问他们。这个选项可以帮你快速建立读写类中数据的VI。  
    VI for Override...，这个选项是专门给子类用的。用来创建覆盖父类方法的VI。  
    Control，创建用户自定义控件，这一条与类的概念不相关，仅为了方便用户。

[![](http://byfiles.storage.msn.com/y1pIcO_924THocZJvyIRxoNR9eMbJUlvyLkPl-CxVTMAYt-mvgA8DHFAjzcH1VVUvWTtUPhVf6AbWg?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THofhl8a4fBdMp-8f7DKRcKvLY5c2mAVCeg3FsoZ9vezPcxG3uYEbfXW692wycKWjtI8?PARTNER=WRITER)  
图4：动态调度的接线端子

    在类的类的属性面板中可以设置类中每个 VI 是公有的还是私有的。这与工程库中 VI 的设置是类似的。

    可能你已经发现了，与其它语言不同，LabVIEW 中的类没有构造和析构函数。构造函数在一个类的实例（数据为这个类的一个变量）生成时被自动调用，析构函数在它被销毁时自动调用。  
    在 C 语言中，你可以明确地知道一个变量的生存周期。全局变量在程序启动时被创建，程序结束时被销毁；函数的局部变量在函数被调用时创建，退出函数时销毁，等等。这些都是程序在运行时的行为。但是在 LabVIEW 中，变量的生存周期不一定是在运行过程中。LabVIEW 的变量通常对应有一个前面板上的控件，控件包含的数据在编辑状态下就已存在了，程序运行结束也不会被销毁。这就使得构造函数和析构函数失去了原有的意义。比如，构造函数和析构函数一个最常见的用法是在构造函数内预留某一资源，以供类中的方法使用，在析构函数内释放这个资源。LabVIEW 若有类似功能，则VI被打开时，资源就被霸占住了，这在逻辑上是错误的。  
    没有构造函数和析构函数，我们可以把预留释放资源一类的工作放在普通的类的方法中实现。只是在使用这个类的实例的时候，需要程序员自己调用这些方法。

### 四、类的继承

    为了让演示程序更有意义，再分别为狗和鸡创建两个类。这两个类应为动物类的子类。进入类的属性对话框，在 Inheritance 一栏中选择animal.lvclass作为它的父类，这两个类便成了animal的子类。可以注意到，LabVIEW 中所有的类都有一个共同的父类“LabVIEW Objet”。

[![](http://byfiles.storage.msn.com/y1pIcO_924THoegTe0dLKA3ZPN1HZNd7h0mn5JesKKLAbznyKz2YAqvzBkq8iR2RkCQupuzz3_gzhw?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THocXMA6uCOda8rpnwVP0noHIr0kbP5DWmMgNOzyFKAQJOyjCQwYdkw--nKYeVGTkcVs?PARTNER=WRITER)   [![](http://by1.storage.msn.com/y1pH5Es9Ox64kbiofogMErJ3XR5KVIbqtic0ugDHPA_1507ALD59LtSWEYqCvzksnA5b0zQYiN5JCCDmzxH2LoZD1rrLmNrpuYu?PARTNER=WRITER)](http://q0by9q.bay.livefilestore.com/y1p83KYkHeC7aD_Orq2WXHb4-ZF6OlodHSOLiCgi_XZa1os1qZvjJgr6n0Zk6FwoxAmRPScgJzo1XLf2NJkR0xiqg?PARTNER=WRITER)  
图5：设置类的继承关系

    在这个设置面板上可以看到，LabVIEW 所有的类都有一个共同的祖先类 LabVIEW Object。LabVIEW Object 是个空类，既没有方法也没有属性。那么它存在的意义是什么呢？  
    这要先介绍一下泛型编程的概念。理论上，设计程序模块时，越抽象越好。这样同一段代码可以被应用到更多的具体问题中去。本着这个原则，程序中算法和数据类型应该是独立的。比如，一段排序算法的代码被完成后，应当可以被应用在各种数据类型上，既可以用来给一组整数排序，也可以给一组字符串排序。这就是泛型编程。  
    LabVIEW 暂时支持泛型编程，一个算法 VI 写好，它作为传递参数的控件的数据类型也就定死了。不能够直接使用在其它数据类型上。但是类的实例作为一个数据在 LabVIEW 不同节点间传递时，它的数据类型可以在它本身的数据类型，以及它的任意一个祖先类之间进行切换。比如在处理一只狗小狗的时候，可以把它当作是狗，也可把它当作是动物，还可以把它当作是 LabVIEW Object。  
    我们再实现一个算法的时候，使用 LabVIEW Object 作为它的参数的数据类型。这样这个算法就可以被应用到人和一种“类”的数据上。Java，就是采用了类似的机制来实现泛型编程的。但是 LabVIEW 并没有因此获得泛型编程的能力。与 Java 不同，LabVIEW 不能直接把一个普通数据类型（比如整数，字符串等）转换成某种“类”。所以，LabVIEW 编写的算法还是不能支持任何数据类型。

### 五、其它辅助性设置

    设置好继承关系，再为子类创建几个属性和方法，我们的演示类就搭建完成了。为了让应用程序美观易读，我们可以修改这几个类的数据线外观。否则，所有的类的数据线千篇一律，很容易就混淆了。数据线的外观也是在类的属性对话框中配置的。

[![](http://byfiles.storage.msn.com/y1pH5Es9Ox64kbyAPL-Mbm0pPXSlCUsw3-P7qIjxZPXOFAhIdBV9KI-k_9hSbqv2uAGdHdk86SoAMebS1ZmbrpcYG6Lk3Q4cqcJ?PARTNER=WRITER)](http://q0by9q.bay.livefilestore.com/y1pxGfiphRHa8hAkGcR-Pv8bcSUeo8Xv_2JEXPVFZf4Z2HVgRJWQLKGg0YDd7P-fLfuTHmWl1gHgikiUwU1L780-P9gzsSAHXnH?PARTNER=WRITER)  
图6：配置类数据线的外观

### 六、演示程序

    我们再简要介绍一下类的多态：在动物类中先用虚函数方法（VI from Dynamic Dispatch Template）创建一个“叫唤”方法：Make Sound.vi。因为狗和鸡的叫声不一样。因此，在两个子类中，我们用 VI for Override... 重新实现这个方法，使其覆盖父类中的“叫唤”。应用程序中有几个不同动物的实例，程序的任务就是让它们每个实例叫一声。借助类的多态特性，应用程序不需要判断实例数据所属的子类，再根据不同子类编写不同代码的。它可以把所有实例用他们共同的父类的类型来传递，代码中也只是用父类的方法。而程序执行到父类的方法时，会自动执行已经覆盖了它的相应的子类的方法。从而让不同的动物发出不同的叫声。

[![](http://byfiles.storage.msn.com/y1pIcO_924THoePk7fcyT7Sdbuyq1Cf7gqhwUn8f8OQlc8ho-F2vpHwDZESSCOL5mYpWpIwVaxoYm8?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THoeOFZgafwUK1rtoSx8bHGUTTWNl1FcOZAkAhUyXkM_TLXZGAoyh16qGa6JYqjWULic?PARTNER=WRITER)  
图7：动态调用的示例

[下载示例程序](http://decibel.ni.com/content/docs/DOC-1722)  
[《我和LabVIEW》目录](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1073.entry)
