---
title: "LabVIEW 中的数字型数据 2 - 运算"
date: "2006-08-08"
tags: 
  - "我和labview"
---

# 二、运算

##  1.  常用函数

    与数值数据相关的运算处理节点大都在函数栏的 Programming -> Numeric 项里，如图1 所示。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFbwyTdEg5fGHRSeQowhj0Bdcbim-txh3dxpLB6tj_vmX0nxbZcjWW0xRdnJwRYNoihaZPrQRzQij0DhCmiPQZocoJyfYAOjdk3GlIK0d-rhNWVmefosQ4uk)  
**图1：Numeric Function Palette**

    从这些函数节点的图标一眼就可以看出它们的用处了。例如，加、减、四舍五入、求倒数等。更全面的数学运算函数在 Mathematic 函数栏。Mathematic 函数栏内的很多运算不仅是针对单个数值的，还可用于数组运算。  
    这里每一个公式的用途都可以在 LabVIWE 帮助文档上找到，我就不重复了。我们在这里着重讨论一下，在众多类似的运算方法中，如何选择一个适合你的程序的方案。  
    对于简单一次性加减乘除，自然使用基本的函数节点就够用了。但是，如果是复杂的数值运算，则需要大量函数节点。节点之间的连线可能会有转角甚至相互交叉，显得比较杂乱，不利于程序阅读和维护。这时我们可以使用其它运算节点。

## 2. 表达式节点

        对于只有一个输入和一个输出的运算，我们可以使用表达式节点（Expression Node）。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFbwyTdEg5fGHEWhhTFGFt96_nGBHdJ5mCe0J5sb7zMyPRmysrbOscdzkRYm-O4s1boqvucb6wcEsBf3ToiVo0SJA3LrodfBTE5m1n3xOo_09FqH1BqxuMVU)  
**图2：Expression Node 的应用实例**

    图2 所示的例子中，完成把华氏温度转换为摄氏温度的计算。F1 到 C1 的转换是通过基本运算节点完成的。尽管运算并不复杂，但是阅读程序的人仍然无法立即就意识到这个运算与书中给出的公式相对比是否正确，还需要仔细地一步一步判断。这是图形化语言在表达纯数学计算时不利的一面，文字表达方式此时会更为直观易懂。表达式节点是使用文字来描述运算的。F2 到 C2 的转换就是使用表达式节点来完成的，用户可以直观地读出该节点所使用的公式。  
    与使用基本运算节相比较，表达式节点另一个优点是节省了框图上的空间。

    在表达式节点中只允许有一个字符串，代表输入参数，例如本例中，参数用 f 表示。LabVIEW 在线帮助里列出有表达式节点所支持的运算符、函数和表达式规则。 

## 3. Formula Express VI

    如果运算有多个输入，可以使用 Formula Express VI。该 VI 在函数栏 Mathematic -> Scripts & Formulas 下。图3 是这个 Express VI 的配置面板，它看起来就像是一台高档计算器，基本不需要学习就可以使用了。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFbwyTdEg5fGHnNtETbIM97GpZ-2GU8yKV_Q9qPeGDIpV6c6uPBBLQBZO8iMyrZ__nwfRHlPrgO8NjBd6AeFUSkdS5YuibYK0cEtn16nPpL_1B-adJPLRMM4)  
**图3：Formula Express VI 的配置面板**

    Formula Express VI 的缺点是：他的表达式是隐藏起来的。用户需要查看，还得先调出配置面板才行。

## 4. 公式节点

    对于更加复杂的计算，尤其是当输入变量超过一个的时候，应该使用公式节点（Formula Node）。公式节点中的表达式语法与 C 语言类似。可以把它看作是更为复杂的支持多输入输出的表达式节点。它的优点也与表达式节点相同：  
    在实现算法时，人们往往更习惯于文本表达方式，所以使用公式节点的可读性和可维护性更强。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFbwyTdEg5fGHdLwismYZxICVyp4DRQ_o_rHhVX5FLlgJt_KYdQXvGRJ_PKb6YM4J-1-3sCJ-qBNxHd70SIU9878Ch9P-25q1zOc6XO40zo-iFcpEpEGTSgw)  
**图4：Formula Node**

##  5. MathScript，MATLAB Script 和 Xmath Script 节点

    这三个脚本节点比较类似，都应用于处理更为复杂的数学运算，比如大型矩阵运算等。脚本语法使用 MATLAB 的语法或与 MATLAB 极为类似的语法。

    如果是编写新程序，可以优先考虑 MathScript，因为后两种节点还需调用外部程序来解释节点中的脚本。  
    使用 MATLAB Script 节点 需要机器上安装有 MATLAB。MATLAB 由M athWorks 公司开发，是数学计算工具方面最常用的软件。使用 Xmath Script 节点，需要安装 NI MATRIXx。MATRIXx 是 NI 公司进行数学运算，仿真等的产品。功能与 MATLAB 类似。  

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
