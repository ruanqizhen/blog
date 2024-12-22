---
title: "全局变量"
date: "2008-05-27"
tags: 
  - "我和labview"
---

    全局变量是一种数据在不同节点，不同VI，不同线程间传递的方式。数据被保存在某一固定的内存空间里，不随数据线流动。在需要读写数据的地方，不需要外部链接的数据线，直接通过某些节点或VI就可以得到目标数据，并对其操作。  
    在LabVIEW 中应当尽量避免使用全局变量。全局变量看似方便，但带来的问题也很多。最主要的是它破坏了数据流顺序的逻辑关系，导致程序可读性和可维护性下降。  
    偶尔也有不得不使用全局变量或使用它利大于弊的情况。比如：实现子 VI 间参数传引用的机制；在不破坏程序可读性的前提下，避免一些过于杂乱的数据连线；对高层用户隐藏某些底层模块内部使用的数据。

### 一、全局变量（Global Variable）

此处所说的全局变量是特指图标像地球的那个 Global Variable VI。使用这种全局变量，目标数据被存放在一个只有前面板的特殊VI中，任何需要使用这个数据的地方，把它所在的 Global VI 拖过来即可。如同前面所述，全局变量虽然使用方便，但是缺点也十分明显。  
    首先，它不利于代码的可读性，破坏了数据流顺序的逻辑关系。使用全局变量难以知道数据是否在其它地方被改动过。换言之，代码上的全局变量，不能直观的反映出它的数据来源。  
    其次，它的安全性低。全局变量可以在任何地方被直接读写。即便知道数据在某些地方不应该被改动，也无法对其进行控制。  
    再次，它的效率低下。VI每次读全局变量，LabVIEW 都要为读到的数据复制一个新的副本，这毫无疑问影响到VI的效率。  
    此外，全局变量的不合理使用还可能导致竞争状态。比如下图中的VI，假设全局变量 Data 的值原本为 0，运行完下面这个加2减1后的代码后，Data 中的值是几呢？可能是1，也有可能是2，还可能是-1，这完全取决于程序的执行顺序。而在这种情况下，这个顺序是不确定的。

[![](http://byfiles.storage.msn.com/y1pIcO_924THod-_E7SsLpOAEqOB7D-x4ma6tuYX3CwfLUXtIJB78ytNwdR-vQPl7UTx0-FeGvthNg?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THodknaiVV45G0oqFwIvUYJHQqT8EpCsassOa93Q9vpZcLSSXh8e-dHJKSWewB4B_bno?PARTNER=WRITER)  
图1：处于竞争状态的全局变量

### 二、单进程共享变量（Single-Process Shared Variable）

    共享变量有三种：单进程，网络发布，以及时间触发的共享变量。后两种主要应用于不同硬件设备、不同计算机、不同进程程序间的数据交换。在此，我们仅仅介绍与全局变量相关的第一种：单进程共享变量。共享变量的种类可以在它的属性页中进行修改。  
    单进程共享变量，顾名思义就是作用域为单个程序进程的共享变量。它与全局变量的性质是完全相同的。唯一的不同点是单进程共享变量带错误输入/输出端，我们可以利用错误处理连线来控制单进程共享变量的执行顺序。比如下图中的VI，假设共享变量 Data 的值原本为 0，运行完下面这个加2减1后的代码后，Data 的值必然为1。

[![](http://byfiles.storage.msn.com/y1pIcO_924THofjT56fTaSQNGSP2Q_8Db8AlCQ00sY5DoVxnct0_jxMoNQObDYX0EmP_7aGZiA8K0w?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THodu1JdZSVKk9WJoO38PLxAj_4JZWTWinFcgPS_4NnAAseIH_RhTBts3yLj1dchHslQ?PARTNER=WRITER)  
图2：共享变量的使用

    这并不意味着单进程共享变量可以防止出现竞争状态。设想上图的VI只是程序中的一个子VI，在其运行的同时，Data 仍然可以在其它子VI中被访问，因此，仍然有可能处于竞争状态。  
    共享变量是 LabVIEW 8 之后的一个新东西，比必须被保存在某个 Library 内部，不能独立存在。

### 三、功能全局变量（Functional Global）

    功能全局变量与前两种全局变量完全不同，它在 LabVIEW 中就是一个普通的 VI。它把需要在全局使用的数据保存在一个没有初始化的移位寄存器中，并实现相关的访问这些数据的方法。  
    功能全局变量的代码结构都是类似的：主体是一个只执行一次的循环结构；内套一个选择结构；一个输入用于选择某种操作；若干用于输入和输出数据的控件。  
    其实，使用循环结构仅是为了利用它的移位寄存器。移位寄存器没有连初始化数据，因此每次执行这个VI时，它里面保存的是上一次 VI 执行结束时的数据。这样，就可以在程序的全程保存、处理或使用这一数据了。功能全局变量 VI 不可以被设置为[可重入](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1519.entry)，否则在不同地方，得到的移位寄存器中的数据就不是同一份了。  
    从 LabVIEW 8.5 开始，VI 的程序框图增加了反馈节点了。可以使用它来替代仅执行一次的循环，以简化程序。下面两图就是完全等效的功能全局变量。

[![](http://byfiles.storage.msn.com/y1pIcO_924THocNHqUsZ1YFY0q-3sMTyVqr9BNp4goNwlEzZBEvkX32li4Z6FygMOz0UTcv6ru4qx4?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THodBc5tDUNbNYAXExgzSsb2IUvOlfzfoP7H4IMMjL5hV3D7tLvXdT__aqX0gXZeSetY?PARTNER=WRITER)  
图3：实现加减法功能的功能全局变量

[![](http://byfiles.storage.msn.com/y1pIcO_924THofX7ru4C5UV4FMKota_y4pa7Yw0gDQc9gPBLzvd99eTCi6j2C4VEpPwOGWVjm3Q69c?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THoe0GObX0qq6RqhEEmz6wFJilGWvnifja9ufjMGhEpbzXGExPCo1BWcrK28TsTpAPdA?PARTNER=WRITER)  
图4：等效的加减法功能全局变量

    与前两种全局变量相比，功能全局变量有两项主要的优点。所以我建议，如果不得不使用全局变量，那就使用功能全局变量。  
    首先，功能全局变量可以防止竞争状态出现。因为功能全局变量的VI是不[可重入](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1519.entry)的，所以把它作为子 VI 时，绝对不可能出现两个相同功能变量子 VI 同时执行的情况。因为对全局数据的所有操作都是在这个 VI 内部完成的，也就意味着，所有对数据的操作都绝对不会被其它操作干扰。图5中的VI，执行结束必然导致全局数据增加1，即便还有其它线程的子VI在同时运行也不会影响这个结果。但需要注意的是，解决了竞争状态不等于全局变量的使用顺序可以乱写，随机的顺序很可能导致错误。设计功能全局变量时可以加入出错处理的连线，以方便使用时确定全局变量的调用顺序。

![](http://byfiles.storage.msn.com/y1pIcO_924THocV1BHfWm3QFk1Xx9QeR3rbS9Qkxhy6LSjUzUlLN8-PGbstPvK0-E7GGCSMbTdICL4?PARTNER=WRITER)  
图5：功能全局变量的使用

    另一优点是，功能全局变量可以封装内部数据、控制对数据的访问权限。例如图3 所示的那个功能全局变量，故意没有设置数据的方法。因此，使用这个全局变量的高层程序是无法直接修改全局变量的值的，只能使用给定的方法：复位或加减。甚至也可以不对高层程序提供直接查看全局数据的方法，只允许通过某些方法得到数据处理后的结果。这样全局数据就被很好的隔离开来，避免了被不当改动的风险。

    由于功能全局变量的这两个优点，它一度受到程序员的极力推崇。我读过一本名为《A Software Engineering Approach to LabVIEW》的书，它的核心思想就是建议读者把程序模块全部写成功能全局变量的形式。  
    功能全局变量虽然有上述优点，但用它来作为较大功能模块的框架，还是存在很多不足的。首先，这种实现方法，模块最主要的功能和代码都在同一个VI中实现。这个VI会变得十分复杂，难以维护。其次，模块如果接口的数据较多，这个VI的连线就会极为复杂。再有，如果模块要增加或改动点什么功能，这个大VI参数可能会发生变动，引起版本不兼容的问题。  
    LabVIEW 从8.2 版本起，已经支持面向对象的编程，类的概念发挥了功能全局变量的优点，克服了其缺点。因此，再设计功能模块应该首先考虑 使用LvClass。另外，利用LVOOP 可以设计出更便于维护的功能全局变量，不过这更加复杂，我们以后在介绍LVOOP的时候一并介绍吧。

[下载功能全局变量的示例](http://decibel.ni.com/content/docs/DOC-1703)

[《我和LabVIEW》目录](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1073.entry)
