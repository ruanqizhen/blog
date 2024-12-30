---
title: "LabVIEW 中的数字型数据"
date: "2006-08-07"
tags: 
  - "我和labview"
---

https://lv.qizhen.xyz 

## 一、数值型控件和常量

### 1\. 控件

    在LabVIEW的控件栏中有一栏是数值控件。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFTPhQLaAMlPYqO9ryQNIeukHx5ESS7uqTmWyz0ERdlkpkwzh6jhHKl1vUDwVlrrLr9n-GwSJhsBBoNFZwgcqN0klSsHNfu_AqN7EzzQlcEcaikRVh38Vo2A)

    这一栏内的控件虽然在前面板上的外观各不相同，但是在框图中的端点都是数值类型的。我们在使用这些数值控件时可以选择适合的界面所需的旋钮、仪表盘等。还可以在数值型控件的属性对话框里设置它的数值类型、数值范围、格式和精度等，显示方法等等。

   我们以最普通的数值控件为例，解释一下如何配置它的显示方式。假如，我们的界面是 Windows 风格的，那么界面上所有的控件都应使用系统风格的控件，包括数值型控件。如果这个控件用于表示时间，我们就需要对这个控件的显示方法进行高级的配置。

    打开这个控件配置面板的格式与精度页，选择“Advanced editing mode”，就可以自己为控件设置显示方式了。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFTPhQLaAMlPYAqECRoBQXd3iISGexzlgNtxYbf9BPas-SUwyach6ePvHpP_MP1BsFHBYNJUFRib3cXI6Zd6khWtYvIdW97vJatj3yDRKUyRP4gI3HZTGbL4)

### 2\. 常量

    如果是常量，在设置数值类型时通常会发现“Adapt to Source”（按照输入调整）项是被选中的，作为控件时这一项不能被选中。此时如果在常量中输入一个正数，比如“34”，常量的类型会自动变为I32整型（蓝色），而输入“34.3”， 常量的类型会自动变为DBL实数型。如果一定要输入实数型34，可以输入34.0。![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFTPhQLaAMlPY6VnVGLzaXrZco_66EuEHZBDxgLGMjc8yKn6Hz9XsvEl18NT-24XVaoiAWA1K9ndLR5FuAYzvIgOFEe18ZFidqvJ2LeKFG6nT)  ![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFTPhQLaAMlPYdwi-b8r6VprfktEZ48RV-PW8YpqfNPzb_gNBvv-JogG06FTKdOh6zeEIBT81Cs0WqHRSygig4BVluHE3phiAx6O0Lroju5vQ)

### 3\. 不同表示法(Representation)的选择

    数值类型包括各种长度的整型、实数型和虚数型，其中I64和U64类型是LabVIEW 8.0新增加的。选用短整型数值比选用长整型数值类型节约内存。在大的数值数组中应尽量使用短类型数值以节约内存。对于单个数值，它可以节约的内存十分有限，但是使用长整型数值可以避免数值越界引起的错误，所以还是应该使用长整型数值。

    你可以自己做个试验：新建一个 VI，在 VI 上放置两个值为 300 的 I16 常量，然后相乘，看看他们的积是多少。这种错误如果隐藏在一个大工程内，调试起来也是颇为费劲的。

## 二、运算

###  1.  常用函数

    与数值数据相关的运算处理节点大都在函数栏的 Programming -> Numeric 项里，如图1 所示。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFbwyTdEg5fGHRSeQowhj0Bdcbim-txh3dxpLB6tj_vmX0nxbZcjWW0xRdnJwRYNoihaZPrQRzQij0DhCmiPQZocoJyfYAOjdk3GlIK0d-rhNWVmefosQ4uk)  
**图1：Numeric Function Palette**

    从这些函数节点的图标一眼就可以看出它们的用处了。例如，加、减、四舍五入、求倒数等。更全面的数学运算函数在 Mathematic 函数栏。Mathematic 函数栏内的很多运算不仅是针对单个数值的，还可用于数组运算。  
    这里每一个公式的用途都可以在 LabVIWE 帮助文档上找到，我就不重复了。我们在这里着重讨论一下，在众多类似的运算方法中，如何选择一个适合你的程序的方案。  
    对于简单一次性加减乘除，自然使用基本的函数节点就够用了。但是，如果是复杂的数值运算，则需要大量函数节点。节点之间的连线可能会有转角甚至相互交叉，显得比较杂乱，不利于程序阅读和维护。这时我们可以使用其它运算节点。

### 2. 表达式节点

        对于只有一个输入和一个输出的运算，我们可以使用表达式节点（Expression Node）。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFbwyTdEg5fGHEWhhTFGFt96_nGBHdJ5mCe0J5sb7zMyPRmysrbOscdzkRYm-O4s1boqvucb6wcEsBf3ToiVo0SJA3LrodfBTE5m1n3xOo_09FqH1BqxuMVU)  
**图2：Expression Node 的应用实例**

    图2 所示的例子中，完成把华氏温度转换为摄氏温度的计算。F1 到 C1 的转换是通过基本运算节点完成的。尽管运算并不复杂，但是阅读程序的人仍然无法立即就意识到这个运算与书中给出的公式相对比是否正确，还需要仔细地一步一步判断。这是图形化语言在表达纯数学计算时不利的一面，文字表达方式此时会更为直观易懂。表达式节点是使用文字来描述运算的。F2 到 C2 的转换就是使用表达式节点来完成的，用户可以直观地读出该节点所使用的公式。  
    与使用基本运算节相比较，表达式节点另一个优点是节省了框图上的空间。

    在表达式节点中只允许有一个字符串，代表输入参数，例如本例中，参数用 f 表示。LabVIEW 在线帮助里列出有表达式节点所支持的运算符、函数和表达式规则。 

### 3. Formula Express VI

    如果运算有多个输入，可以使用 Formula Express VI。该 VI 在函数栏 Mathematic -> Scripts & Formulas 下。图3 是这个 Express VI 的配置面板，它看起来就像是一台高档计算器，基本不需要学习就可以使用了。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFbwyTdEg5fGHnNtETbIM97GpZ-2GU8yKV_Q9qPeGDIpV6c6uPBBLQBZO8iMyrZ__nwfRHlPrgO8NjBd6AeFUSkdS5YuibYK0cEtn16nPpL_1B-adJPLRMM4)  
**图3：Formula Express VI 的配置面板**

    Formula Express VI 的缺点是：他的表达式是隐藏起来的。用户需要查看，还得先调出配置面板才行。

### 4. 公式节点

    对于更加复杂的计算，尤其是当输入变量超过一个的时候，应该使用公式节点（Formula Node）。公式节点中的表达式语法与 C 语言类似。可以把它看作是更为复杂的支持多输入输出的表达式节点。它的优点也与表达式节点相同：  
    在实现算法时，人们往往更习惯于文本表达方式，所以使用公式节点的可读性和可维护性更强。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFbwyTdEg5fGHdLwismYZxICVyp4DRQ_o_rHhVX5FLlgJt_KYdQXvGRJ_PKb6YM4J-1-3sCJ-qBNxHd70SIU9878Ch9P-25q1zOc6XO40zo-iFcpEpEGTSgw)  
**图4：Formula Node**

###  5. MathScript，MATLAB Script 和 Xmath Script 节点

    这三个脚本节点比较类似，都应用于处理更为复杂的数学运算，比如大型矩阵运算等。脚本语法使用 MATLAB 的语法或与 MATLAB 极为类似的语法。

    如果是编写新程序，可以优先考虑 MathScript，因为后两种节点还需调用外部程序来解释节点中的脚本。  
    使用 MATLAB Script 节点 需要机器上安装有 MATLAB。MATLAB 由M athWorks 公司开发，是数学计算工具方面最常用的软件。使用 Xmath Script 节点，需要安装 NI MATRIXx。MATRIXx 是 NI 公司进行数学运算，仿真等的产品。功能与 MATLAB 类似。  


## 三、数值的单位

### 1\. 数值控件上的单位

    数值型控件和常量是可以带单位的。在数值型控件的快捷菜单上选择“Visible Items -> Unit Label”，就可输入数值的单位。如果你对某个单位的正确拼写没有把握，可以先任意输入一个字符，然后用鼠标右键点击单位标签，选择“Build Unit String…”。这时，LabVIEW会弹出一个对话框，LabVIEW所支持的单位都在这里分类排出。

![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4ACFYIUXr7Mis_5hKfSoAcU-2cYJyTJrziI76rcdtxyxVbYNle_4O64eM9d14E4OeK_j-h-HKR2rAxiqRHgcQiZ51_3rGV8a7Qo-b8KkPBKCMnR6TO08HIh) ![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AhtqmrWpGuF8SC4fEDvitMxjuaqZeh-BtATSLKmzfbZgL1ZaaaenqCWQZbRZcEkWM7eNhw453vlcgxbxlwNno6Wd0Qi9zgPKAzvEYditRZhCUsn2Lnihma) ![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4Cn-uYdpjbBxcN5PEzYxvHk3Lf-YxUvYO5J3EqlBISZAnezUEyyabh9JnWx-UfN016qR2WLkwmd7O9xD2y9Si9dk7gy-ybM1a4KPBcqLT_gnAKr_5obkqUd)

**图1~3：使用数字控件的单位**

    例如要计算2年有多少天，可以有如下的程序：

![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4BehLgNX_Zvxgwq6MmAkVYMBhX9-AGvYkEEPImNs2JH9bYR9oWUFdWEUnZl_vveKL6EheMtfX4elB2HIiflfXCy9_p5MV5ORUZW5SZACZuDWblGdODLmD8E)![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4ANORWMg3bxMr1GAljOf6qaBB-3EbCq3DUD0lSJOVVRGVdAsTHWBA4UcnvTeD46Br1906W7kLW4-rVvq2Sjo9TLCV_iTTHjBCFT50KipbdFLg)

**图4，5：同类型单位的空间可以由数据传递**  
 

### 2\. 单位使数据类型检查更严格

    把一个 I32 型的数据赋值给 string 型的控件肯定是一种错误行为，程序员总是希望编译器在编译时就把这种错误报告出来。虽然现在大多数编程语言都可以在编译时报告此类错误，但 LabVIEW 数值类型的单位可以让这种检查更严格：实数与字符串之间不可以互相赋值；同样是实数型的俩个数据，一个表示时间，一个表示长度，他们之间也不应当相互赋值。

    在编写 LabVIEW 程序的时候，应当尽量使用带单位的数值控件。因为，如果你给一个数据设置了单位，LabVIEW就会自动帮助你进行单位的一致性检查。比如图6 所示，当你试图把表示时间的数据和表示长度的数据相加时，LabVIEW会禁止你连线。 着帮助你防止了编程时出现的不一致性错误。

![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4BHsJqxNUGL7gN-r17lU9zvTox8BtfYLBIcPHY-JNa1_id39rgKiTlxAa9NJFtyZXXMene6RnEvte0kgzBZlx1vWUBWwXOwA_GQcp79j7ONQQ)

**图6：不同类型的数据不能进行计算**

    但是，这种严格的一致性检查也可能会带来麻烦。例如，我们编写了一个子VI，用于计算两个时间单位的和。下次当我们需要一个计算长度单位的和的子VI时，却不能够直接使用已有的计算时间单位的子VI，因为它们的单位是不同的。为了解决这个问题，LabVIEW 提供了单位统配符。  
    在编写需要用于不同单位的子VI时，可以使用单位通配符。单位的通配符用 $n 表示，其中 n 是 1 到 9 之间任意一个数字。例如我们以上提到的加法，可以在子 VI 中使用通配符 $1，如果还需要另外一个执行其他运算的子 VI 中，其单位可以用 $2 表示。

![](http://tkfiles.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4CBLfrM6EOXs_eUooiTsEKPPtNfiTz0BCcyRcSAzdU-UdfqBWH4nwhMwH7oclF7QhQe9fOxjKhqmIicIt5tY_JxcOuKlZAira7m3hOSbw1FU9U7im2AaFep)

**图7：使用单位通配符**

###  3. 单位转换

    使用 Numeric->Conversion->Convert Unit 节点可以把一个纯数字量转换为带有单位的数字量，或者反过来转换。使用 Cast Unit Base 节点可以更灵活地把某一数值的单位直接转换成另一单位。需要注意的是，Convert Unit 节点的外观和表达式节点的外观一模一样，甚至快捷菜单都一样，这应该是LabVIEW的一个缺陷。但他们的功能完全不同，你不要试图在表达式节点中使用 build unit 菜单，它不执行单位的转换，也不指示有差错。  