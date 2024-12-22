---
title: "一个 XControl 的实例"
date: "2006-11-23"
tags: 
  - "我和labview"
---

XControl 与 .ctl 用户定义控件相比，其最大的提高就在于它不但可以定义控件的外观，还可以定义控件的行为。 在 XControl 出现之前，同样可以在程序中编写代码，控制程序的行为。在《[用 XControl 实现面向组件的编程](http://ruanqizhen.wordpress.com/2006/09/05/%E7%94%A8-xcontrol-%E5%AE%9E%E7%8E%B0%E9%9D%A2%E5%90%91%E7%BB%84%E4%BB%B6%E7%9A%84%E7%BC%96%E7%A8%8B/)》一文中提到了，这种方法在程序模块划分上有缺陷。如果用户想发布一个带有特定行为的控件也是不可能的，因为控制控件行为的代码，是同其它代码混杂在一起的。

利用 XControl 可以解决上面提到的问题，这里以一个例子说明一下如何利用 XControl 实现一个有特定行为的控件。 Windows 风格的工具条上的按钮有一个特点，就是当鼠标移动到按钮上方，按钮就会变亮或浮起。LabVIEW 中默认的按钮没有这样的特性，但是实现这一点是很容易的。 以鼠标移上，按钮变亮为例：在程序中，当按钮的 Mouse Enter 事件发生时，把按钮的颜色设置为浅颜色；当按钮的 Mouse Leave 事件发生时，把按钮的颜色设置为深色即可。现在把界面上的按钮和控制颜色的代码都封装在一个 XControl 中。这样，其他人在使用这个 XControl时，就无需修改他的代码，而直接获得这种颜色变化的特性了。

### 一、简单行为的 XControl

首先创建一个空的 XControl。

[](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4BRKl6JqSxL1JfIRVgcHruAhXAo9jemXI2y0G7l5BJd1xO6NCzpkzU2MyLG5MOA0VgkQe0pNu_RzWdyLb6xVlJnWw50fPc7kd6RK88k-klIXSI1N9hDN0h8)![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnbAsbh2OJQ9J3u0RAg5dNfsI0WkBoIjGgzUYJfEfQD66k4vON4WqsDzNtSpEAlLslUQjnize4yoykIB2mkEHOWXJB318AOt9nA) ![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnbAsbh2OJQ9JjV1oznwycubqCMgbtBDdc-bKmJuOL6zUOW7ixmYtFT9az3QOH4EH75tP9NKywXLzfSJw6DrG6RvVYKPulAw51w)[](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AheHnKVoaCyKcQPN5rbt5go-q5Zv8YjhoxPonme1KCYNztpVExM4z-T6oRrBZD1CJEnIXMI9fqSHPCuzW64UF6lr8VaAcpjgOFx6JKMefznctQ4tauPmOo) 图1、2：创建一个新的 XControl

新的 XControl 中有四个 VI。 Data.ctl 定义 XControl 的数据类型。比如我们要做一个按钮，数据类型应该是布尔型。如果要作一个工具条，数据类型就应该是布尔型数组了。 State.ctl 定义 XControl 内部要用到的一些数据，类似于类的私有变量。我们这个简单的例子用不到任何变量，所以可以不去动它。 Init.vi 类似于类的构造函数。在我们这个简单的例子中也不需要去改变它。 Facade.vi 是最主要的 VI，XControl 的外观和行为都是在这个 VI 中定义的。Facade.vi 的界面就是 XControl 控件的外观。控制控件行为的代码也是放在这个 VI 的程序框图上。

我们要做的是个按钮，所以就在 Facade.vi 的前面板上放一个按钮。如果希望用户在使用这个 XControl 时可以调整它的大小，在我们这个简单例子中，只要设置 Facade.vi 窗口尺寸属性中的“在窗口尺寸变化时，按比例调整控件大小”这个选项就可以了。对于复杂的 XControl 控件，要另写代码，在窗口尺寸变化后重新计算每个控件的大小和位置。

[](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4BRACcqhYDQvOcKpiZcjsDitxZjRZrP6tm0HPFBgPulj7pG2oVOoNm7n31VtGznMkypdcwTB0HjsGp3AKYZdh6T-UJA3wsxgQ1qFCE6NCHNwiq8rge4D78j)![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnXbNqGwQJTKAD711OpJMCiFyZbNLuVvuiiU7DjtZrFNTGPczqYmGFilATXQyo81CTxav6C0qsCaheHQwLwfPVUIEo7MESLOLAg) 图3：窗口尺寸属性设置

控制按钮颜色的代码也需要放在 Facade.vi 中：把前文提到的按钮的 Mouse Enter 和 Mouse Leave 放在这里即可。具体实现方法，可以参考文章结尾给出的[范例程序](http://decibel.ni.com/content/docs/DOC-1270)。

### 二、有持续运动的 XControl

Facade.vi 不能够持续运行，只有在有事件发生时，LabVIEW 才会调用这个 VI。处理完这个事件，Facade.vi 就会停止运行。不要试图让 Facade.vi 持续运行，否则会导致整个 LabVIEW 被挂起。 有时候，需要控件能够循环地或者持续一段时间地作一个动作。比如说，需要做一个不停闪烁的小灯。控制灯光闪烁的代码就不能够放在 Facade.vi 中。实现这种功能的一个方法是： 把定时控制小灯颜色的代码放在一个[可重入 VI](http://ruanqizhen.wordpress.com/2006/07/19/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-vi-%E7%9A%84%E9%87%8D%E5%85%A5%E5%B1%9E%E6%80%A7%EF%BC%88reentrant%EF%BC%89/) 中，通过小灯控件的引用参考来定时更改它的颜色属性。在 XControl 的 Init.vi 中把这个定时 VI 动态加载并以异步方式运行；在 XControl 的 Uninit.vi 中再把这个定时 VI 卸载即可。Uninit.vi 不是一个必须的 XControl 功能定义 VI（Ability VI），新建的 XControl 没有这个 VI。可以在工程浏览窗口，鼠标右击这个 XControl 来为它添加新的功能定义 VI。 [范例在这里](http://decibel.ni.com/content/docs/DOC-1098)，它只能在 LabVIEW 8.5 下打开。

XControl 是可以在 VI 的面板上放多个实例的，每个实例小灯的闪烁频率可能不同。我在这个例子里，每个 XControl 实例都有自己的一个专用定时 VI，因为这些 VI 是可重入的。定时的方法我采用的是加延时。 我做了一下测试，发现现在的 XControl 有个问题，就是在程序面板上放多个 XControl 实例之后，定时就变得非常不准确了，小灯闪烁速度明显减慢。这也许是 XControl 的 bug，也许是 LabVIEW 延时函数的问题。解决这个问题的方法就是使用一个定时 VI 控制所有的实例，当然这样的实现方法会比较麻烦一些。

**下载文章中的示例程序：** [http://decibel.ni.com/content/docs/DOC-1270](http://decibel.ni.com/content/docs/DOC-1270) [http://decibel.ni.com/content/docs/DOC-1098](http://decibel.ni.com/content/docs/DOC-1098)

**相关文章：** [博客版《我和 LabVIEW》](http://ruanqizhen.wordpress.com/labview/)
