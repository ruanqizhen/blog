---
title: "回答一个关于 IVI 仪器驱动程序的问题"
date: "2007-01-08"
tags: 
  - "我的文章"
---

    今天在我的 blog 上看到了一个关于 IVI 的问题，在这里回答一下。

> **问题**：  
>     “阮先生,你好,我看过你写的关于IVI的文章,写得很详细,有个问题想请教一下,我现在是用LabVIEW的,CVI没有用过,我应该也可以用LabVIEW来开发自己的IVI仪器驱动吧?目前我已经安装了IVI Compliance Package (ICP) 2.5,但是如果要使用自己开发的IVI驱动能出现在MAX上面,是否还需要一些Toolset?比如IVI Installer Creator and the IVI Specific Driver Test Suite之类的?还是我可以用其他什么方法做到.好像那些Toolset不是免费的,我有没有方法可以尽量不用购买什么工具包就可以使用自己的IVI仪器驱动呢?谢谢!  
>     阮先生你好,我是问你IVI问题的那个人,我想到一个方法不知道能不能行得通,如果说我只是使用IVI驱动里某一类驱动程序(比如信号源)很简单的通用属性(比如只是使用到信号源的二个通用属性:频率和功率,全部信号源都支持这二个属性的设置),那我可不可以在NI的网站上下载某一型号信号源的IVI驱动(我手上有另外一种不同型号的信号源,但没有发现我手头上这个信号源的IVI驱动程序),然后安装这个IVI驱动,把其他特有的属性去掉,只留下共用的属性,然后用这个下载的IVI驱动来驱动我手头上这个信号源(假设二种信号源在设置频率和功率时所使用到的命令都是完全相同的,尽管它们的型号是不一样的)?不知道有没有把问题说清楚,还请多多指教.另外,不知道在这里问问题合不合适.谢谢”

**回答：**  
    目前不能用 LabVIEW 编写 IVI 仪器驱动程序，只能用 C 语言编写 IVI。LabVIEW IVI 驱动程序是在已有的 C IVI 驱动程序基础上包装一下得来的，不能在没有 C IVI 的时候直接去开发 LabVIEW IVI。  
    现存的直接使用 LabVIEW 编写仪器驱动程序大多是符合 VXIpnp 标准的仪器驱动程序。如果你用不到互换性，VXIpnp 仪器驱动程序就可以满足要求了。目前，IVI 的可互换性的应用也不是很多，也许你可以考虑直接编写 LabVIEW VXIpnp 仪器驱动程序。

    如果要开发 IVI 驱动程序，最好要有最新版的 CVI 和 IVI Compliance Package (ICP)。其它工具包都可以不用。

    IVI Spacific Driver 是针对某一型号的仪器专用的 IVI 驱动程序。它是不能被用到其它型号的一起上的，就算是只用到通用属性也不行。原因有两个，一个是每个仪器的命令可能是不同的，另一个是驱动程序在初始化的时候就会检查仪器是不是自己所支持的。如果两个型号的仪器所用的命令完全相同，你也好要改一下 Init 函数的源代码才能把驱动用到另一台仪器上。

**相关文章：**    [可互换虚拟仪器驱动程序的开发](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1060.entry)  
    [一个 IVI 驱动程序的开发过程](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1472.entry)

[编辑](http://ruanqizhen.spaces.live.com/?_c11_BlogPart_blogpart=blogentry&_c=BlogPart&_c02_owner=1&handle=cns!5852D4F797C53FB6!2034)
