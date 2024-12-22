---
title: "用户界面设计 5 - 限制"
date: "2008-07-07"
---

    保障软件的可靠性是软件开发者的责任。如果用户误操作，或者提供了错误的数据给程序，稳定的程序可以组织程序继续运行并报告错误。但这毕竟是亡羊补牢的做法，更完美的解决方案应倒是从根源上就杜绝误操作和错误的输入数据。  
    所以，在做界面设计时，还应考虑如何限制用户的输入数据和操作。禁止误操作出现，把输入数据都限制在合理的范围内。

一、限制输入数据

    LabVIEW 的某些控件本身就带有对输入数据进行限制的功能。比如数值型控件，在它的属性对话框中的 Data Entry 页，可以设置这个控件接受的数据的范围。我有一个控件用来表示选取某个通道，可供使用的合法数据为通道0至通道3，我们就可以在这一页把控件的最大最小值分别设为3和0。如下图：

[![](http://byfiles.storage.msn.com/y1pmybLalV3KW-yD8mCVvdNz4-9GmSmYYwQp79Z-6m-k9Jk6d2JrTU4vKawwDwsQISo?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1p6qLF6efA8tMeBO-d0GsWWjDywQYhp7qKEdQUJkmaRarCQFOcr75_Fa1f-8oWWKPB?PARTNER=WRITER)   
图1：数据范围限制

    这样设置后，用户也许还会输入一个不合理的数值，比如99，但LabVIEW 会立即忽略这个不合理数值。  
    有时，还有更好的限制方法：让用户根本没办法选择不合理的数据。比如本例，我们在设计时，可以考虑使用 Enum 或 Ring 型控件来表示通道号，这样用户只能在正确的值中选择一个。如下图：

[![](http://byfiles.storage.msn.com/y1pmbHL-6U0ET7JAA1PBQ6YVi_xV7CAdjnzAEqe_0u94QzAttowkJ-45m2H0UaMHG4-?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pDRESXeopa0YhSdQJiJrJNPaf6hqhtuWMZ-zN5F0uHf6Ur7mOc0kL9S1J9ZKDkuTS?PARTNER=WRITER)  
图2：枚举型数据

    除了 Enum 或 Ring 型控件，单选按钮也可以起到同样的效果。单选按钮可以直接就在界面上显示出所有可供选择的值，并且可以附带对每个选项的详细解释。不经常被用到的对话框可以采用这种控件。比如下图，是VI属性中设置密码的页面。

[![](http://byfiles.storage.msn.com/y1por4lok8Z4Zhg7lym8WIhLaF_InstIknO8mgfxeMxTLMq92q82I3X93c8VVH3e6wU?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1p1wiB1dtKKFrAVn1JpghWk7xgz7I0lmb5eLvC6JF-SJLggeO-zzHVBUbQaMt1MtPf?PARTNER=WRITER)   
图3：使用选择按钮的界面

二、防止误操作

    一个简单的规则：让所有但是不应被改动的控件都失效。大家看图3中的修改密码按钮是灰色的。因为这是用户选择的是无密码，所以当时不应出现修改密码的操作出现。与其让用户判断是否可以按这个按钮，不如直接禁止它的使用，以防用户错误的按下它发生不可预期的错误。当用户有密码设置后，再允许这个按键被使用。

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
