---
title: "LabVIEW 的调试环境"
date: "2006-09-11"
tags: 
  - "我和labview"
---

## 1\. LabVIEW 的全局选项

在 LabVIEW 8.2 中打开 Tools -> Options 菜单项，选择其中的 Debugging，会出现如下四个选项：

![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4C7ot-Fg4nGse9PIqdDi9Zy9shSghBbgn5LfDJ6PvpS_c8oIy7hKAP00o3YT-sqFfoPwjGAfTzl-vOfKldqW5JJ64jY6oLoxqQOOatoMyijxA) 图1：LabVIEW 与调试相关的选项

a) Show data flow during execution highlighting 表示在高亮显示执行的过程中显示数据的流动。 b) Auto probe during execution highlighting 表示在高亮显示执行的过程中，数据从每个接线端流出时，显示数据的数值。 c) Show warnings in Error List dialog by default 表示在默认情况下，在错误列表的对话框中显示警告信息。 d) Prompt to investigate internal errors on startup 表示在 LabVIEW 启动时检查是否存在内部错误。

如果你仅从字面上还不能理解上述几个选项的含义，不要紧，后面的章节里会详细介绍它们的含义。

### 2\. VI 的属性

某些 VI 的属性设置可能会导致你无法调试这个 VI。比如，VI 被设置为有密码保护，而你又不知道密码是什么；又比如，VI 被设置为不允许调试等。禁止 VI 调试可以大大提高 VI 的运行速度，降低 VI 的内存占用，所以，在 VI 发布给用户之前，最好把它设为不可调试。

![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AOYLA-ndRDCghXWtlPMM3GnCoDJu1xyjPy2QjyVPstD-Qiai4qo5-e213Vg0dtrxqHvFhEQKrmvDIvEmTeejV4nuryPKdflfwp7dUUTTMAud-Yn6cHnIGt) 图2：VI 的属性设置

### 3\. 调试工具

VI 程序框图上的工具栏中，某些按键是用于调试的。

![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FndozBvEpLTe7Q0TzFkr3X7ukz6DtNRJJT6kdIukxV5miS7SFwJ2V8W1XIK6eciw_gc0YWsi2gukfZGXeTq6mjzum-iaDilUWxA)[](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AKdHeZHH4tzw4EFvPmGkI7FFH74UqMvCsuzLGwFMb7B-pb6NRFDZEmWcN-geNtXh1ya-xOAbvawp1KIATMdDQtxxQWDuqGYRdWi6Dom2pN3E5ClB_4BrGP) 图3：正在运行的一个 VI 的程序框图

图3 是一个正在运行的 VI 的程序框图。我们看到的工具栏上的按钮的图形，基本就可以猜出它的功能了。 ![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4BjVRZlOik5q3hQBcTqnNJbvZ7X3ivjylgl7-2q0erqz27HxYvxDhIV1wcFmZ1lMbSRn-EVTnFungsu4W4rIfr1WtZaa6qxUWxlDu17VtKJpA) 用于停止整个程序的执行。 ![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AgMgQbGdkV3l-4WjWWOYxjYmwJSn4-sA9wjvbUTbDNsR3GebMZQfGbOvKk-vaPP_U190EnB6n24UuGsHW5H7xDHJtvl2hpDEpq1Whdy8CbPQ) 用于暂停或者继续程序的执行。 ![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4DjdaJkKkh2HjTwevorfyPKfMj4MH7vd8nTgVLHdN-S2UbrAc_yuT_Boj1DbZTG-S-IZ1ignw6X6m-TDpd9QJnvIgLZBvaPu35cLiG1HDSHVW-Aj_djA2nr) 用于启动高亮显示执行。在高亮显示执行时，LabVIEW 会放慢代码的执行速度，并且在程序执行到每一个节点时，高亮显示这个正在被执行的结点。高亮显示执行的速度非常慢，所以启用它要非常小心。如果启动高亮显示的同时，你的某个 VI 前面板是模式的（modal），那么你想中途关掉它是不可能的了，你只能非常痛苦地等待程序的结束，或杀掉整个 LabVIEW 进程。 ![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4A3yFF6BqTjyh0B4rWlYgsOmPLzMBO4ePUiFSRq0s4npD0vDWXOuu1iy9rQnhxOLIixtsl3gunGYR6Y0mNCpngZoK6YlBfHuVSWSsqRxhe94g) 用于保留 VI 程序框图上数据线中的数据。 ![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4DOodQ7sMnJxkCHEWkSIaEM18F0XSTTPJ1Jy3qAAhyuFunVxVR3KYc4fuIOPY66JjlhFRRlGEhzDiaFWS5ubKbC3BXzsHpLUTFiYw6D0XDtEQ) 用于单步执行，它们三个分别表示进入、跳过或跳出某个节点、结构以及子 VI。 ![](http://tkfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnblHHsQ5D-NvApM-K_Les6ZpHn90K7xSe84cMdF4VFjeuCoXiXW99iiEM3eqIFLtfG3r2rcspbnmdUcs-oZPTaw)[](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4AheHnKVoaCyKcQPN5rbt5gzd6Wesl7N45arTl3S5IludGBkOfqjMgVVFpt-lV9AOR5d4oglaPVtDgNMTMX8CiPUS-p0ARhIXAn0CLeqIxPlQUBmof1-GmH) 下拉框表示 VI 的调用关系。打开下拉框，可以看到当前 VI 从低层到高层的逐级被调用关系。选择下拉菜单中的某一项，即可跳到那个 VI 被调用的地方。 ![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4Agk16IeiMhXM9z-BHzJ4Wm7tk_z9-aw1lm0y6k1dUQV34JBCwS5kphpP34UWK7w05PdusaW6SYotOO6rFkeWeLbaGxnxVg_LFHdjydx6C7dA) 是设置断点的地方。 ![](http://tk1.storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4CBRQZ-1BoWO9KfP_J7iq4b6UvO-78xr_9b886fv65J1e6aUInRMQDFpMpzzQxrMWtVyKJ-tplRc5tMf81nUlnav7K2bjrGZ_45dyMZyKo0PA) 是设置探针的地方。图3 上的悬浮窗口显示的就是探针所在处的数据。

在需要设置断点和探针的地方按鼠标右键，在弹出菜单里可以选择 Set Breakpoint 或者 Probe，或者通过使用工具选板（Tool Palette）上的断点和探针工具进行设置。

 

**相关文章：** [断点和探针](http://ruanqizhen.wordpress.com/2006/09/13/%E6%96%AD%E7%82%B9%E5%92%8C%E6%8E%A2%E9%92%88/) [博客版《我和 LabVIEW》](http://ruanqizhen.wordpress.com/2005/11/07/%e6%88%91%e5%92%8c-labview/)
