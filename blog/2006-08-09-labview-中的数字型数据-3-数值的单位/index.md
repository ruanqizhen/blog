---
title: "LabVIEW 中的数字型数据 3 - 数值的单位"
date: "2006-08-09"
tags: 
  - "我和labview"
---

# 三、数值的单位

## 1\. 数值控件上的单位

    数值型控件和常量是可以带单位的。在数值型控件的快捷菜单上选择“Visible Items -> Unit Label”，就可输入数值的单位。如果你对某个单位的正确拼写没有把握，可以先任意输入一个字符，然后用鼠标右键点击单位标签，选择“Build Unit String…”。这时，LabVIEW会弹出一个对话框，LabVIEW所支持的单位都在这里分类排出。

![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4ACFYIUXr7Mis_5hKfSoAcU-2cYJyTJrziI76rcdtxyxVbYNle_4O64eM9d14E4OeK_j-h-HKR2rAxiqRHgcQiZ51_3rGV8a7Qo-b8KkPBKCMnR6TO08HIh) ![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AhtqmrWpGuF8SC4fEDvitMxjuaqZeh-BtATSLKmzfbZgL1ZaaaenqCWQZbRZcEkWM7eNhw453vlcgxbxlwNno6Wd0Qi9zgPKAzvEYditRZhCUsn2Lnihma) ![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4Cn-uYdpjbBxcN5PEzYxvHk3Lf-YxUvYO5J3EqlBISZAnezUEyyabh9JnWx-UfN016qR2WLkwmd7O9xD2y9Si9dk7gy-ybM1a4KPBcqLT_gnAKr_5obkqUd)

**图1~3：使用数字控件的单位**

    例如要计算2年有多少天，可以有如下的程序：

![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4BehLgNX_Zvxgwq6MmAkVYMBhX9-AGvYkEEPImNs2JH9bYR9oWUFdWEUnZl_vveKL6EheMtfX4elB2HIiflfXCy9_p5MV5ORUZW5SZACZuDWblGdODLmD8E)![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4ANORWMg3bxMr1GAljOf6qaBB-3EbCq3DUD0lSJOVVRGVdAsTHWBA4UcnvTeD46Br1906W7kLW4-rVvq2Sjo9TLCV_iTTHjBCFT50KipbdFLg)

**图4，5：同类型单位的空间可以由数据传递**  
 

## 2\. 单位使数据类型检查更严格

    把一个 I32 型的数据赋值给 string 型的控件肯定是一种错误行为，程序员总是希望编译器在编译时就把这种错误报告出来。虽然现在大多数编程语言都可以在编译时报告此类错误，但 LabVIEW 数值类型的单位可以让这种检查更严格：实数与字符串之间不可以互相赋值；同样是实数型的俩个数据，一个表示时间，一个表示长度，他们之间也不应当相互赋值。

    在编写 LabVIEW 程序的时候，应当尽量使用带单位的数值控件。因为，如果你给一个数据设置了单位，LabVIEW就会自动帮助你进行单位的一致性检查。比如图6 所示，当你试图把表示时间的数据和表示长度的数据相加时，LabVIEW会禁止你连线。 着帮助你防止了编程时出现的不一致性错误。

![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4BHsJqxNUGL7gN-r17lU9zvTox8BtfYLBIcPHY-JNa1_id39rgKiTlxAa9NJFtyZXXMene6RnEvte0kgzBZlx1vWUBWwXOwA_GQcp79j7ONQQ)

**图6：不同类型的数据不能进行计算**

    但是，这种严格的一致性检查也可能会带来麻烦。例如，我们编写了一个子VI，用于计算两个时间单位的和。下次当我们需要一个计算长度单位的和的子VI时，却不能够直接使用已有的计算时间单位的子VI，因为它们的单位是不同的。为了解决这个问题，LabVIEW 提供了单位统配符。  
    在编写需要用于不同单位的子VI时，可以使用单位通配符。单位的通配符用 $n 表示，其中 n 是 1 到 9 之间任意一个数字。例如我们以上提到的加法，可以在子 VI 中使用通配符 $1，如果还需要另外一个执行其他运算的子 VI 中，其单位可以用 $2 表示。

![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4CBLfrM6EOXs_eUooiTsEKPPtNfiTz0BCcyRcSAzdU-UdfqBWH4nwhMwH7oclF7QhQe9fOxjKhqmIicIt5tY_JxcOuKlZAira7m3hOSbw1FU9U7im2AaFep)

**图7：使用单位通配符**

##  3. 单位转换

    使用 Numeric->Conversion->Convert Unit 节点可以把一个纯数字量转换为带有单位的数字量，或者反过来转换。使用 Cast Unit Base 节点可以更灵活地把某一数值的单位直接转换成另一单位。需要注意的是，Convert Unit 节点的外观和表达式节点的外观一模一样，甚至快捷菜单都一样，这应该是LabVIEW的一个缺陷。但他们的功能完全不同，你不要试图在表达式节点中使用 build unit 菜单，它不执行单位的转换，也不指示有差错。  

### 相关文章：

     [LabVIEW 中的数字型数据 1 - 控件和常量](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1530.entry)

     [LabVIEW 中的数字型数据 2 - 运算](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1600.entry) 

    [《我和 LabVIEW》的其他文章](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)

[编辑](http://ruanqizhen.spaces.live.com/?_c11_BlogPart_handle=cns!5852D4F797C53FB6!1611&_c11_BlogPart_blogpart=blogentry&_c=BlogPart&_c02_owner=1)
