---
title: "开发 XControl"
date: "2008-07-15"
---

最新内容查看： https://lv.qizhen.xyz


## 设计

XControl 是 LabVIEW 8 开始出现的一个制作 LabVIEW 控件的工具。与之前的用户自定义控件相比，用户自定义控件只能定义控件的界面，而 XControl 还允许通过编写代码来定义控件的行为。因此 XControl 功能更加强大。 XControl 的主要优点是可以把界面元素与相关的代码封装在一起，从而方便发布和重用这些界面组件。 XControl 也有比用户自定义控件不足的地方，它开发起来更加困难；设计不合理的XControl会导致程序更加严重的问题。

需要开发一个新的控件之前，首先要考虑一下以何种方式实现这个控件。 如果这个控件极为特殊，只会用在某个特定的程序中，那么也许没有必要将其作为单独的控件； 如果这个控件需要被多次使用，那么就应该考虑把它做成可重用的独立控件。这个控件也许不包含任何特殊行为，比如一个用于表示坐标位置的控件由两个数值控件组成，程序只是使用它的值就可以了；或者一个新型按钮，进外观与旧按钮不同，其它行为都与传统的按钮一模一样。这样的控件适合使用用户自定义控件来制作。 如果新的控件需要重用，行为与已有其它控件又有较大差别，那么就要考虑XControl了。比如：制作一个新按钮，但它比传统按钮多一个状态；或者它的界面带有动画效果；制作数值类控件但是用中国本土度量单位；基于图片控件，专用于绘制某种特殊曲线等。

我们前面提到的[黑白棋的控件](http://ruanqizhen.wordpress.com/2008/07/10/%E7%95%8C%E9%9D%A2%E8%AE%BE%E8%AE%A1%E6%8A%80%E5%B7%A7-1-%E5%88%A9%E7%94%A8-labview-%E8%87%AA%E5%B8%A6%E6%8E%A7%E4%BB%B6/)，既有特殊界面，又有特殊行为，又可以应用于不同软件中，非常适合做成XControl。我们先来具体设计一下这个XControl所需的界面和行为。 它的界面部分前面已经设计好了，直接拿来用就可以了。不过在前文提到的几个设计方案中，我个人觉得 Pict Ring 数组控件的那个解决方案，最能简化编程代码，所以我们采用这个界面方案。 XControl 在应在程序框图上的端点的输入输出数据应该是应用程序最经常需要与XControl交互的数据。本例中，应用程序最常使用的数据就是棋盘的布局信息。因此，这个XControl的数据应当是一个8×8的整型数组，表示棋盘上棋子的布局。 黑白棋控件的属性应当包括：当前该下什么颜色的子、可落子的位置、盘面上每种颜色的子数、上次落子的位置。 它的方法有：落下一子（这个方法需要包含以下具体的操作：在新位置放置一个棋子；翻转被吃掉的棋子；更新数据和所有属性的值）。 它还要在当用户在交互界面上摆下一子之后，发个事件通知应用程序。

在这里下载这个XControl的代码：[http://decibel.ni.com/content/docs/DOC-1801](http://decibel.ni.com/content/docs/DOC-1801 "http://decibel.ni.com/content/docs/DOC-1801")

## 创建


    在项目浏览器上，点击鼠标右键，选择“新建->XControl”，就可以创建一个新的XControl。

![](http://byfiles.storage.msn.com/y1pyjVe9BuNpJVAbpAFXWjp3lF9grbWSOnAB2IuQUg95B0chtGOGhQfUjlJCLfQcWxf?PARTNER=WRITER)

    XControl 在结构上是一种特殊的库，他包含一些特定的更能VI，和一些可选的属性、方法VI及其它相关文件。在新建的 XControl 上已经包含了4个必须的功能VI（控件）：数据、状态、外观、初始化。XControl 还有两个可选的功能VI：反初始化和转换状态以保存。  
    简要介绍这几个功能VI的功能是：  
    数据：用来定义XControl的数据类型。  
    状态：定义所有XControl内部使用到的数据。  
    外观：这是XControl中最主要的功能VI，用以实现XControl的界面和界面上的行为。  
    初始化：设置XControl的初始状态。  
    反初始化：负责清理工作。  
    转换状态以保存：用于把XControl内部的某些数据保存在使用它的VI中。

    下面对XControl做一些基础的设置，比如修改它的图标、版本号等，然后保存。  
    XControl功能VI的文件名并不一定与其功能名相同。比如，为了方便更多人使用，我使用了英文名称来保存我的XControl：

![](http://byfiles.storage.msn.com/y1pEkezIhPI_SRwtAsD5UWio8u4vVBi8c-vIT75EcxbR4b_mXJ7svyRqQbf5B_eflQ4?PARTNER=WRITER) 


## 实现功能控件

    XControl 有两个功能控件，本别定义XControl的数据类型，和XControl使用到的内部数据的数据类型。

    首先考虑数据功能控件，它用于定义XControl的接线端的数据类型。我们使用一个二维的U16数组表示棋盘布局，所以在数据功能控件中要使用一个二维数组。

![](http://byfiles.storage.msn.com/y1p93K4W2p5lm0JfWdoTQpnev9GMqqwc4WTQ9NW8_dw6Z41wPAbhn9r7hKRFad6cIvj?PARTNER=WRITER)

![](http://byfiles.storage.msn.com/y1pbtGUyMosB9F6nPTR1V2BtD6ITur8Bj_OTj2Z0O8nKQfVGnavSAe5TAnJt4b9LKU6?PARTNER=WRITER)

     其次就要来考虑状态功能控件，这个控件类型的数据在XControl的功能VI中又被称为显示状态。但它实际上的用途并不局限于帮助显示，实际上，XControl运行所需的全部变量，都应当被包含在这个功能控件中。

    左面这幅图就是我所列出的运行一个黑白棋XControl所需的一些变量。

    在我们编写的黑白棋程控件中，将会用到一下内部数据：

    method，当用户运行一个XControl的方法时，设置这一变量。这一变量对应每个方法有不同的值。这样，在XControl的外观功能VI中，就可以知道用户调用的是什么方法了。

    current color，用于表明当前应该落什么颜色的棋子。

    available black position，黑色棋子可以防止的位置。

    available white position，白色棋子可以防止的位置。

    Interactive Action，是一个用户自定义事件。当用户在棋盘上落下一子时，XControl就产生这个事件，通知使用了它的VI。

    row 和 column 用于记录上次落子的位置。

    先不需了解这里边每一个数据具体的含义和用法。在后面使用到它们的时候还会详细介绍。实际在编写XControl的时候，也不需要一次把状态功能控件就设计好。可以一边实现XControl的功能，一边对其进行补充。

## 外观功能 VI

    外观功能 VI 用于定义 XControl 的界面，这里可以直接使用我们之前已经设计好的界面。把[界面设计技巧 4 - 改进界面实现方法](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!3358.entry)中设计好的棋盘棋子界面拷贝过来就可以了。这个外观功能VI窗口的大小，就是将来XControl控件的大小。所以这个VI的大小要刚好包裹住棋盘。

![](http://byfiles.storage.msn.com/y1pESqUNTaCdTXg7vyspcqRucWCpE0EhsaEmYNVdYXE4xio0WpPKczIAoln6WFb8v2i?PARTNER=WRITER)

    外观功能VI的程序框图定义了当有事件发生时，XControl的反应。这是一个典型的事件处理结构。但是大家要注意到它的超时事件处理（下图），程序在这里设置了退出循环。实际上，这个程序框图并不是持续运行的，只有当XControl有事件发生时，LabVIEW才调用这一程序框图，在处理完这个事件后，立即退出这一程序框图。所以千万不要试图在这里添加持续执行的代码，比如控制XControl上的动画等等。

![](http://byfiles.storage.msn.com/y1p-iKsEpWNJ2KujQnTnrI3MhjSMb9auSpAQ4FWgfTzBZjYYZgbRGJUKn9eZBvN86tjAumIAuEw7Og?PARTNER=WRITER)

    从上图中还可以看到，外观功能VI有三个输入，和三个输出：  
    Data In / Data Out，是XControl的数据，它的数据类型由数据功能控件定义。外观功能VI的程序框图开始运行时，Data In 输入的是XControl当前的值。程序框图运行过程中可以对这一值进行修改。修改后的值由Data Out 输出，返回给LabVIEW。  
    Display State In / Display State Out，是XControl运行是用到的内部数据，在这里我们就把它成为状态。它的数据类型由状态功能控件定义。它也可以在程序运行中被改变，的输入输出方式与Data类似。  
    Container State，是一个簇，用于表明XControl实例在VI面板上的状态。它有三个元素： Indicator? 表明XControl实例是否是一个显示控件，它的值为假时，表明XControl实例是一个控制控件。Run Mode? 表示XControl实例所在的VI是否处于运行状态。Refnum是指向XControl实例的引用。  
    Action 用于通知LabVIEW程序在这次执行中对XControl所做的修改。它有三个元素：Data Changed?，State Changed?，Action Name。如果我们在程序中改变了Data，那么就一定要把Data Changed?设置为真，通知LabVIEW，这样改变的数据才会生效。同样，如果改变了State，则一定要把State Changed?设置为真。Action Name是一个字符串，可以给他输入一个表明这次程序运行的简短文字。这段文字会在LabVIEW的菜单项“编辑->撤销”中出现。

   外观功能VI中的事件处理结构主要处理两类事件，一类是针对XControl的特殊事件，另一类是用户在界面上操作产生的事件。

    针对XControl的特殊事件有4个：数据更改、显示状态更改、方向更改、执行状态更改。

    当把一个数值输入给XControl的实例时，就会触发数据更新事件。对于数据更新事件的处理一般是根据新的数据更新界面上的控件，和XControl的状态（Display State）。下图是黑白棋控件对数据更新事件的处理：根据新的期盼布局，刷新棋盘在界面上的显示；重新计算黑白子可以落下的位置。由于我们在处理这一事件的过程中，更新了XControl的状态，所以一定要把State Changed?设置为真。

![](http://byfiles.storage.msn.com/y1ptAqImwS9EZ-k_uswqYOJa4JUslyazuuXz4huvUwo2UjS5gdk01u4ogzj4GF7GbYZHt0XFG9praE?PARTNER=WRITER)

     如果通过调用XControl的属性和方法，改变了XControl的状态的值，就会触发显示状态更改事件。对于数据更新事件的处理一般是根据新的状态值更新界面上的控件，XControl的数据和状态。下图是当用户调用黑白棋控件的“走子”这个方法，放下一颗新棋子后，外观功能VI对其的处理：放下新棋子，更新棋盘，计算新布局下黑白棋子可以放置的位置。因为这个操作及更新了黑白棋XControl数据，也更新了它的状态，所以Data Changed?和State Changed?都要被设置为真。

![](http://byfiles.storage.msn.com/y1pdn-p9uIvT1M52jn8g2Y-CvqdXC-oRBSTrhylpIUh-lcgkjb9wfT4X1ldSgiOSTcyUzceZrtBfHk?PARTNER=WRITER)

    当XControl实例控件由控制控件变为显示控件，或反过来变化的时候，就会触发方向更改时间。当XControl实例控件所在的VI由运行态变为编辑状态，或反向变化时，就会触发执行状态更改事件。对这两个事件的处理是类似的：在某些状态下，需要禁止用户在界面上的操作。在我们的黑白棋控件中，对这两个事件的处理是相同的。当控件为显示控件，并在运行状态时，禁止用户对界面点击。

![](http://byfiles.storage.msn.com/y1pnk5cvWgsraadywvGceVtNi6JVCXb5v12GmGEWKb1_j48DUmPmezRBxbhP3iEpyFHOs7IzEnkOqk?PARTNER=WRITER)

    我们的黑白棋XControl只处理一个用户界面事件：当用户在棋盘上合法的位置点击鼠标时，走一步棋。当用户在即面上点击，首先判断这里可否落子，如果可以，则落下一子，更新XControl的数据和和状态，并产生一个事件。

![](http://byfiles.storage.msn.com/y1pNezNmQ8I_cXd8fpHXKCaGrQoOaeGP22kfUGEuLBwRLYYd_yfn7WqAbsQfDGKfepWlwPAOxPj4pY?PARTNER=WRITER)


## 其他功能 VI

转换状态以保存功能VI用于保存XControl的状态数据。默认情况下，XControl外观功能VI中的状态（Display State）全部都会被保存在使用它的VI中。如果状态数据比较大，无疑会增加VI的大小。但是，这些状态也许并不需要保存。有些控件的状态，比如控件颜色，尺寸等信息，需要在VI关闭后仍然记得，在下次打开时，还可以保持上次的修改。但是有些状态中的数据，只是临时使用的，不需要保存。比如，我们的黑白棋控件状态中的任何数据，当前颜色，可落子的位置等等都是每次重新计算出来的，不需要保存下来共下次打开VI使用。所以，在转换状态以保存功能VI中，可以丢弃所有数据，保存一个空数据就可以了。

![](http://byfiles.storage.msn.com/y1pfzei2s1ddlMil8P9haJf9-W1YSZ8a1cLPYiFMll257yCKT2iu5_Qj96BkWyCAn9B?PARTNER=WRITER)

初始化VI，有两个作用，一是把保存在使用XControl的VI中的状态读取出来，付给XControl的状态。而是打开或初始化XControl需要使用到的资源。对于我们的黑白棋控件，由于没有保存任何状态数据在VI中，所以不需要读任何数据出来。而我们的黑白棋控件使用到了一个用户事件，所以需要在初始化功能VI中创建这个事件。

![](http://byfiles.storage.msn.com/y1ppbiz_iH5WAlaqppSTy3ophDfpsbYGayIJQmAL5uswHlkvJRrH4e4afrDy6d2zKZSBdZBCGV2XTM?PARTNER=WRITER)

反初始化功能VI负责关闭XControl中打开的资源，我们在初始化功能VI中创建了一个事件，所以在这里要销毁它。

![](http://byfiles.storage.msn.com/y1pQUY67PsGi0GKtO0S_DZuNZRzQ4IGjVZGuAnI9YikZsVZfbjKbRww9zLhvcZEGGsMCPgDbUaLNwM?PARTNER=WRITER)



## 属性
    在程序中，可以通过控件的属性节点来读取或设置一个控件的某些属性，比如它的位置，颜色等等。你可以为你的XControl实例控件添加自定义的属性，以供程序运行时使用。

    在项目浏览窗口的XControl上点击鼠标右键，选“新建->属性”，即可为XControl添加属性。每个属性对应两个VI，分别用于读写属性。去掉其中一个VI，属性就变成只读或只写的了。属性读写VI中的代码非常简单，基本上就是读出XControl状态中的某个数据，或者把某个数据写到XControl状态中去。

    我们的黑白棋控件中有一个只读属性是得到当前该下什么颜色的棋子。他的实现如下：

![](http://byfiles.storage.msn.com/y1prG5TKY81fDEGDnq9RcnO2jA4uk95XLwgqgquvGG80X-DX15Bmie8msA95BDGFVX-?PARTNER=WRITER)


## 方法

  方法与属性类似，它在控件的调用节点中出现。与属性不同，属性通常就是指某一个数值，而方法可以有多个参数，同时读写多个数值。

  方法的创建和实现方法都和属性类似。它对应的VI所作的工作也是读写XControl的状态。

    黑白棋中有一个方法：“走一步棋”。它的实现如下：

![](http://byfiles.storage.msn.com/y1pxWuyMR_jXzt6N25dyjriRw0XNMpMODGGesWYUxV1rR38HvVONcDjm7XISpJwGMJLaz1eXOxealc?PARTNER=WRITER)

    首先，判断落子的位置是否合理。如果是，则修改状态中相应的数据，落子位置。走一步棋之后，控件的数据和外观都需要做相应修改的。这部分修改没办法在方法VI中完成，只能在外观功能VI中实现。当方法VI修改了XControl的状态后，外观功能VI的“显示状态更改”事件会立刻被触发，所以相应代码可以放在外观功能VI的显示状态更改事件处理分支中。

## 事件

    非常遗憾的的是，XControl实例控件的事件不能够自定义。我们只能够通过用户自定义事件来实现这一功能。实现的方法是，先造一个用户自定义事件，在XControl的状态中把它保存下来，为它写一个XControl属性，这样用户就可以在程序中得到这个自定义的事件。用户在程序中把这个事件注册到需要接收事件的事件处理结构上，以后就可以接收来自XControl控件的事件了。

    事件的生成和抛出在前面两节中介绍过了（[开发 XControl 5 - 其他功能 VI](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!3436.entry)，和[开发 XControl 4 - 外观功能VI](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!3426.entry)）。下面看一下如何在用户界面中使用这个事件：

    通过XControl的属性得到在XControl中创建的用户自定义事件，在用户应用程序中注册这个事件，然后就可以接受XControl抛出的该事件了。

![](http://byfiles.storage.msn.com/y1pR5gHSl0Odrxj0m3tfDRmWewU166S_fiIkoMV5Zg2W8J1lq-ki_XTwoWiKqgpDQKi?PARTNER=WRITER)



## 使用 XControl
    关于XControl还有好几个方面的知识点没有介绍到，包括：版本控制、错误处理、得到调用VI的信息、调试、调整界面大小、发布快捷菜单、动画的实现、一些注意事项等。不过，这些细节问题在这个黑白棋控件中没有体现出来。所以以后有机会再讨论。

    作为这一组XControl话题的结束篇，介绍一下演示使用黑白棋控件的范例。

    这是演示程序的界面，只有黑白棋XControl控件和必要的几个控件。

![](http://byfiles.storage.msn.com/y1pQQi2uJqD-tRhKV63aFq6WfRIn8HXiIPHo6BggI8tweRtwyoSrbZ3iKaDsoqSwLqe?PARTNER=WRITER)

    其程序框图如下，这是一个典型的事件处理结构。

    首先程序注册必要的事件：一个XControl的事件，在用户走子后通知应用程序；一个用户自定义事件，这里仅用于初始化。

![](http://byfiles.storage.msn.com/y1pmpYBiuponp7SlTqBjpRexeCzft0JmftNmPnj4yx_fwgDjKYwmqz74qyTWWYT51_0?PARTNER=WRITER)

    程序初始化，与用户点“New”按钮做的事情相同，都是调用黑白棋控件的New Game方法，开始一盘新的游戏。

    之后就等待用户（黑方）在棋盘上走一子。之后，程序判断应该黑方走还是白方走。如果轮到白方走，程序就在所有可以落子的地方随机选出一个位置，走一白子。（程序没有实现人工智能部分）

    黑白都不可走时，程序计算输赢。

在这里下载黑白棋控件和示例程序： https://lv.qizhen.xyz
