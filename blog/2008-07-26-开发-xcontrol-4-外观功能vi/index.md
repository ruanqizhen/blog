---
title: "开发 XControl 4 - 外观功能VI"
date: "2008-07-26"
---

    外观功能 VI 用于定义 XControl 的界面，这里可以直接使用我们之前已经设计好的界面。把[界面设计技巧 4 - 改进界面实现方法](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!3358.entry)中设计好的棋盘棋子界面拷贝过来就可以了。这个外观功能VI窗口的大小，就是将来XControl控件的大小。所以这个VI的大小要刚好包裹住棋盘。

[![](http://byfiles.storage.msn.com/y1pESqUNTaCdTXg7vyspcqRucWCpE0EhsaEmYNVdYXE4xio0WpPKczIAoln6WFb8v2i?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pqRMTlCB4oa97pTsDdJ0UkSNhiarUOWOgb4v_Kn2kzp3k_Om9oHLhsb3vTSg1QHc2?PARTNER=WRITER)

    外观功能VI的程序框图定义了当有事件发生时，XControl的反应。这是一个典型的事件处理结构。但是大家要注意到它的超时事件处理（下图），程序在这里设置了退出循环。实际上，这个程序框图并不是持续运行的，只有当XControl有事件发生时，LabVIEW才调用这一程序框图，在处理完这个事件后，立即退出这一程序框图。所以千万不要试图在这里添加持续执行的代码，比如控制XControl上的动画等等。

[![](http://byfiles.storage.msn.com/y1p-iKsEpWNJ2KujQnTnrI3MhjSMb9auSpAQ4FWgfTzBZjYYZgbRGJUKn9eZBvN86tjAumIAuEw7Og?PARTNER=WRITER)](http://q0by9q.bay.livefilestore.com/y1pLSoWpOF_yuTe5fRQWTQHbCbmen-AcnBISfYRHxqbU-bvCznVm9jcWl0PlXZpMeOoc51VodyePrU?PARTNER=WRITER)

    从上图中还可以看到，外观功能VI有三个输入，和三个输出：  
    Data In / Data Out，是XControl的数据，它的数据类型由数据功能控件定义。外观功能VI的程序框图开始运行时，Data In 输入的是XControl当前的值。程序框图运行过程中可以对这一值进行修改。修改后的值由Data Out 输出，返回给LabVIEW。  
    Display State In / Display State Out，是XControl运行是用到的内部数据，在这里我们就把它成为状态。它的数据类型由状态功能控件定义。它也可以在程序运行中被改变，的输入输出方式与Data类似。  
    Container State，是一个簇，用于表明XControl实例在VI面板上的状态。它有三个元素： Indicator? 表明XControl实例是否是一个显示控件，它的值为假时，表明XControl实例是一个控制控件。Run Mode? 表示XControl实例所在的VI是否处于运行状态。Refnum是指向XControl实例的引用。  
    Action 用于通知LabVIEW程序在这次执行中对XControl所做的修改。它有三个元素：Data Changed?，State Changed?，Action Name。如果我们在程序中改变了Data，那么就一定要把Data Changed?设置为真，通知LabVIEW，这样改变的数据才会生效。同样，如果改变了State，则一定要把State Changed?设置为真。Action Name是一个字符串，可以给他输入一个表明这次程序运行的简短文字。这段文字会在LabVIEW的菜单项“编辑->撤销”中出现。

   外观功能VI中的事件处理结构主要处理两类事件，一类是针对XControl的特殊事件，另一类是用户在界面上操作产生的事件。

    针对XControl的特殊事件有4个：数据更改、显示状态更改、方向更改、执行状态更改。

    当把一个数值输入给XControl的实例时，就会触发数据更新事件。对于数据更新事件的处理一般是根据新的数据更新界面上的控件，和XControl的状态（Display State）。下图是黑白棋控件对数据更新事件的处理：根据新的期盼布局，刷新棋盘在界面上的显示；重新计算黑白子可以落下的位置。由于我们在处理这一事件的过程中，更新了XControl的状态，所以一定要把State Changed?设置为真。

[![](http://byfiles.storage.msn.com/y1ptAqImwS9EZ-k_uswqYOJa4JUslyazuuXz4huvUwo2UjS5gdk01u4ogzj4GF7GbYZHt0XFG9praE?PARTNER=WRITER)](http://q0by9q.bay.livefilestore.com/y1pTiexlTBF86ZH25o6UpO-Xe3EMIPly6sxgU6dQp5_eN9QRuunPyn6Yn8BrEXCgai6BpANgOKbOrE1n9T8IioRhQ?PARTNER=WRITER)

     如果通过调用XControl的属性和方法，改变了XControl的状态的值，就会触发显示状态更改事件。对于数据更新事件的处理一般是根据新的状态值更新界面上的控件，XControl的数据和状态。下图是当用户调用黑白棋控件的“走子”这个方法，放下一颗新棋子后，外观功能VI对其的处理：放下新棋子，更新棋盘，计算新布局下黑白棋子可以放置的位置。因为这个操作及更新了黑白棋XControl数据，也更新了它的状态，所以Data Changed?和State Changed?都要被设置为真。

[![](http://byfiles.storage.msn.com/y1pdn-p9uIvT1M52jn8g2Y-CvqdXC-oRBSTrhylpIUh-lcgkjb9wfT4X1ldSgiOSTcyUzceZrtBfHk?PARTNER=WRITER)](http://q0by9q.bay.livefilestore.com/y1p2eYKHM_AJ7hRT4kvDoTrLlKrGZ0SqDpjNE0XmKJoUkQzovnKj5-ME7JX4eXeike_VWrwbyRRmFpRY7BPmBReYg?PARTNER=WRITER)

    当XControl实例控件由控制控件变为显示控件，或反过来变化的时候，就会触发方向更改时间。当XControl实例控件所在的VI由运行态变为编辑状态，或反向变化时，就会触发执行状态更改事件。对这两个事件的处理是类似的：在某些状态下，需要禁止用户在界面上的操作。在我们的黑白棋控件中，对这两个事件的处理是相同的。当控件为显示控件，并在运行状态时，禁止用户对界面点击。

[![](http://byfiles.storage.msn.com/y1pnk5cvWgsraadywvGceVtNi6JVCXb5v12GmGEWKb1_j48DUmPmezRBxbhP3iEpyFHOs7IzEnkOqk?PARTNER=WRITER)](http://q0by9q.bay.livefilestore.com/y1phWc0RT288tUoeOILis2driodVSU2gsDov_PDxmjr-NV60Pe6PXk4rH2i92ig8moKAwSv6sCmPvHTk9WsKry63g?PARTNER=WRITER)

    我们的黑白棋XControl只处理一个用户界面事件：当用户在棋盘上合法的位置点击鼠标时，走一步棋。当用户在即面上点击，首先判断这里可否落子，如果可以，则落下一子，更新XControl的数据和和状态，并产生一个事件。

[![](http://byfiles.storage.msn.com/y1pNezNmQ8I_cXd8fpHXKCaGrQoOaeGP22kfUGEuLBwRLYYd_yfn7WqAbsQfDGKfepWlwPAOxPj4pY?PARTNER=WRITER)](http://q0by9q.bay.livefilestore.com/y1p8xYsokUsRKsSrcpcCNWSGgdnX1DPHOHV1o27neYNhJFQ3sMHV6n8m_UHWsdOHgdJgO-MTZjSi-H1tg59EBM9hA?PARTNER=WRITER)

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
