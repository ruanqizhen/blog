---
title: "Caption 和 Label 的书写规范"
date: "2006-07-27"
tags: 
  - "我和labview"
---

    LabVIEW控件的 Caption 和 Label 的特性和用途很相似，都是给了控件一个有意义的名字。因此，在很多场合没有必要刻意区分他们。  
     Caption 和 Label 的最主要区别在于，Caption 可以在程序运行的时候改变；而 Label 则不可以，一旦程序运行，就固定不变了。鉴于这一点，Caption 和 Label 的用途也略有区别。Label 应该是给程序自己用的，比如在程序中需要根据控件的名字找到它，那就得跟据  Label 来找，而不能用Caption来找；Caption 是为了给用户看的，有时控件的名字在运行到不同状态下需要发生改变，此时显示在界面上的就应该是 Caption。

    推荐大家按照下面的规范使用  Caption 和 Label。

    先给 VI 分一下类：

    1. 底层 VI：用户不会直接使用到的 VI，作为 subVI 随程序一起发布。

    2. 用户界面 VI：VI 前面板是给用户看的程序界面的一部分。

    3. 程序接口 VI：VI 是提供给用户，在他们编程时，当作 API 被调用。

    对于  Caption 和 Label 一个共同的书写规范是：使用有意义的文字，在使用英语短语命名时，单词之间用空格分隔，不应该有重名。

    不同点列于下表：
```
<table cellspacing="0" cellpadding="3" border="1"><tbody><tr><td style="width:91px;text-align:left;"></td><td style="font-weight:bold;width:269px;text-align:center;">Label</td><td style="font-weight:bold;width:282px;text-align:center;">Caption</td></tr><tr><td style="font-weight:bold;width:91px;text-align:center;">底层 VI</td><td style="width:269px;">显示出来</td><td style="width:282px;">使用 LabVIEW 的默认状态，即 Caption 为空。</td></tr><tr><td style="font-weight:bold;width:91px;text-align:center;">用户界面 VI</td><td style="width:269px;">隐藏<br>多语言版本中，只使用英语</td><td style="width:282px;">显示<br>多语言版本中，使用本地化语言</td></tr><tr><td style="font-weight:bold;width:91px;text-align:center;">程序接口 VI</td><td style="width:269px;">隐藏<br>多语言版本中，只使用英语<br>不用标注控件的默认值</td><td style="width:282px;">显示<br>多语言版本中，使用本地化语言<br>在后面加一括号，括号内标注控件的默认值和数据单位</td></tr></tbody></table>


```