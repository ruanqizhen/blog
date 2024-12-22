---
title: "事件结构"
date: "2006-12-04"
tags: 
  - "我和labview"
---

阮奇桢

    Event Structure 也是一种选择结构，程序根据发生的事件决定执行哪一个页面的程序。此时，LabVIEW 的界面编写与 Visual Basic 的界面程序有些类似。

### 一. 按照产出源来区分事件的种类

    按照事件的产生源来区分，LabVIEW有以下几种事件：

[![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4CUPEpY38Tn57aip6V5Fwz-WEpakzp6ekAKGVhg5rjFYhH72stkal4CjYJOK5mRJRo0w2rO5MMeUwrPJWbR-Bf_-Fj_GRR5deJHQLwztWU5h_cvhqVToeKm)](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AxBll9jpgb_Qqk_covBAFprZA4u3hZGrZKNEvjxT5bSDorXjJhjIX4luNMScc_nW8EKDaVlN1FfK4LJHz7YN9qMSI5LeFlnolLwgsLjc35lphwKZ8t3gf1)  
图1：配置事件

    1． 应用程序事件（`<Application>`），这类事件主要反映整个应用程序状态的变化，例如：程序是否关闭，是否超时等。  
    2． VI事件（`<This VI>`），这类事件反映当前VI状态的改变。例如：当前VI是否被关闭，是否选择了菜单中的某一项等等。  
    3． 动态事件（Dynamic），用于处理用户自己定义的或在程序中临时生成的事件。  
    4． 区域事件（Pane）和分割线事件（Splitter）是LabVIEW 8中新添加的特性。LabVIEW 8中，用户可以把一个VI的前面板分割成几份，这两类事件用来处理用户对某个区域或区域分割线的状态的改变。

[![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4CR364zchBRaD_O56J7B0GXsq4NAs94zXvXsLgLORFnygmC32Jb1cFfyUpegeHurPPjV8xUKnWRDqZy26BjwOfTdoLCF1J1SNL_gpBmn7l7VKubXRf2FTai)](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4BNL7FgrmkVKxRKfS-2QnEe7xoc_dEX7POYsm0mfaopS38okOZxlTa7OROUmPOOtva0d_cZvQ4kSsFI2ik1KPvaozQoDEohESpV7TmP6KzLyD9WMq3dz3yG)  
图2：面板上划分区域

    5． 控件事件（Control）是最常用的一种事件，用于处理某个控件状态的改变。例如，控件值的改变，或者鼠标键盘的操作。  
打开上述的“edit events”框，只要选定了某一个事件产生源，其相应的所有事件均排列在右侧events框中。  
有时候，多个事件产生源会对同一个用户操作分别产生相应事件。比如在某一控件上按下鼠标，区域事件和控件事件都会发出鼠标按下（Mouse Down）事件。LabVIEW 按以下规则顺序产生不同的事件：  
 键盘相关的事件（Key Down, Key Up, etc.）只在当前选中（Key Focused）的控件上产生;  
 鼠标相关的事件（Mouse Down, etc.）按照从外向里的顺序发出。例如，区域的鼠标按下事件先于控件的鼠标按下事件发出；结构的鼠标按下事件先于先于结构内控件的鼠标按下事件发出。  
 值改变事件按照从内向外的顺序发出。结构（Cluser）内控件的值改变事件先于结构的值改变事件发出。

### 二. 按照发出时间区分事件的种类

    按照事件的发出时间来区分，LabVIEW的事件可分为通知型事件（Notify Event）和过滤型事件（Filter Event）。

    通知型事件是在LabVIEW处理完用户操作之后发出的，比如用户利用键盘操作改变了一个字符串，LabVIEW 在改变了该控件的值之后，发出一个值改变（Value Changed）通知型事件，告诉事件结构，控件的值被改变了。如果事件结构内有处理该事件的框架，则程序转去执行该框架。  
    过滤型事件是在 LabVIEW 处理用户操作之前发出的，并等待相对应的事件框架执行完成之后，LabVIEW 再处理该用户操作。这类事件的名称之后都有一个问号。例如键盘按下？事件（Key Down? Event），当用户处理该事件时，控件的值还没有被改变，因此，用户可以在该事件对应的事件框架内决定是否让 LabVIEW先处理该事件，或改变键盘按下的值之后再让LabVIEW继续处理该事件。  
    可以明显地看出，过滤型事件比相应的通知型事件要先发出。  
    当同一VI的程序框图上有多于一个的事件结构时，通知型事件是同时被发往所有的事件结构的，而过滤型事件则是按顺序、依次发往每一个事件结构的。但是，在同一VI上放置多个事件结构是没有必要，而且极易引起错误的。所以应该避免在同一VI上使用多个事件结构。

    下面举例说明如何使用通知型事件。我们经常需要使用到这样的字符串控件：控件用于输入电话号码，因此只接收数字和横线，对其他按键不起反应。LabVIEW没有直接提供此种控件，但是它们可以利用通知型事件被方便地实现出来。

[![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4DcR0SvOgQgxy0kEXYYEtJ_utYxLwrcoNqFs1Xc77XRR-UZGDNzUcDNu3HF4dfaflAdnsZw03kfI5xc9Sknx90z7zdiNHMHBVyh-s1eug3HbRZhRcUnIUVg)](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4D1H8lF89SK-nEOm6J2zyzNxpNGPg263emmI6rzmdNGHx2cw1tf06CODDCmmX58xQ0BbIMglfn4UjYMaavU_oB0fyT1uGEp84xGNYagIK_oDoSXli4Eho-C)  
图3：利用 Key Down? 事件实现电话号码控件

    这个例子可以在这里下载：[](http://community.ni.com/examples/4f7f75288fc76ee4578b4e8b4ef65b9e73b076f463a553d765705b5776845b577b264e3263a74ef6/phone-number-control.vi)[Phone Number Control.vi](http://decibel.ni.com/content/docs/DOC-1076)

### 三. 动态事件

    在初始状态下，打开事件配置（Edit Events）对话框，动态事件下的一栏是空的。因为动态事件只有注册过之后才能使用。与事件相关的操作在函数选栏的 `Programming -> Dialog & User Interface -> Events` 下面。  
    用于注册事件的节点是事件注册节点（Register For Events）。需要注册某一事件时，先为它的产生者生成一个引用节点，然后将引用节点与事件注册节点的下方区域相连，再选取所需的事件。如下例：

[![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4A8q2LirLQ2tyHqHa5EFiGJmCCf55d476NAKYG-TT9kDT6lW2QxkA9cmaxOKUNMBFk_dX594JvlNHRhZqw4SggxquAyFyRpLgrLwIme2BtcV_N-k5r_V2ai)](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4BSFO_PeIr5S0bK1g0hJOMB_RWpdfWRMcQPwx49hk2ZQN0T_0Gdz4jaRvqVUIPE6aWXiNAqvOwO6FRo-gL3hbxEhj9KtnPFUS19SS9CS-YXZRw-J9GEuCsp)  
图4：注册动态事件

    对于当前VI上的控件或区域等类型的事件，一般来说可以在事件结构中静态地被选择，所以不需要再动态注册一遍。但有时，当前VI的程序框图已经过于复杂，我们希望在子 VI 里去处理某些控件的事件。这时就可以把控件的引用传入子 VI，在子 VI 中动态注册所需事件。在子 VI 的事件结构中处理相应的事件。

### 四. 用户自定义的事件

    用户自定义的事件是动态事件的一种。用户自定义的事件不基于任何一个LabVIEW对象，它是使用创建用户事件节点（Create User Event）生成出来的。并且，用户可以选择不同的事件数据类型。

### 五. ActiveX控件的事件

    ActiveX 控件的事件不能直接被LabVIEW的事件结构所截获。ActiveX 事件需要用注册事件回调 VI 节点（Register Event Callback）来为某一事件指定一个VI。当事件发生时，执行被注册的 VI。我们也可以利用注册事件回调 VI 节点为某一 LabVIEW 自身的事件注册一个回调 VI，但是出于运行效率，和程序可读性等方面的考虑，最好不要这样使用。

**相关文章：**  
    [我和 LabVIEW](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)

**范例下载：**  
    [](http://community.ni.com/examples/4f7f75288fc76ee4578b4e8b4ef65b9e73b076f463a553d765705b5776845b577b264e3263a74ef6/phone-number-control.vi)[Phone Number Control.vi](http://decibel.ni.com/content/docs/DOC-1076)
