---
title: "循环运行某个时间后退出"
date: "2008-09-09"
tags: 
  - "我和labview"
---

有时候需要一个循环不是在迭代多少次之后停下，而是在运行多少时间之后停下。一般，直接的解决方案就是利用“时间计数器”函数，进入循环前，记下当前时间，然后每次循环迭代都查看一下当前时间，若超过所需时间，则退出循环。这个功能也可以使用“已用时间”Express VI来完成。

把“已用时间”Express VI拖到程序框图上，会出现它的配置对话框。我们需要这个Express VI计时5秒，每次计时完成自动重置。

![](http://byfiles.storage.msn.com/y1pqiNCI1irHPnvfscwS9AwgNGpPQLrHfIGbPmt5jPWYY995tDTaSTlcX6D5aSEWf4F?PARTNER=WRITER)

在循环里，需要用到的是“已用时间”的“结束”输出，一旦运行时间超过5秒，这个值就会被设为真。这时循环停止。

但是下图程序有个问题，就是“耗时40毫秒”这个完成功能的VI和“已用时间”VI之间没有连线，它们是同时运行的，而“已用时间”运行时间几乎可以忽略，一调用它，它就立刻返回“结束”值。这时，即便“结束”值为“真”，循环也要再等大约40毫秒，待功能完成功能不部分运行结束，循环才停止。

![](http://byfiles.storage.msn.com/y1pS59UvI3sq-KojKazJjlKq_K-y8625wFpgy8ZG1s_sxWZloBfkWdS6lkWleoqii24baYZNucRi1E?PARTNER=WRITER)

强制程序先工作，再计时间是否可以解决这个问题呢，如下图中的程序。这样也不行，因为“已用时间”是在重置后，第一次调用它的时候开始计时的。下图这个程序，循环第一次迭代，并没有马上就开始计时，而是要等到功能VI完成后，已经耗用的一段时间，才开始计时。这个即时已经不精确了。

![](http://byfiles.storage.msn.com/y1pPCvVMXVGJqt5HEl_p_eyoougq70y5MmMH34SUxdRIooVLloA9NIAI0fQOCzTrwJoGqqPw26IIts?PARTNER=WRITER)

所以要完全解决这个问题，只能麻烦一点。程序中多加一个条件语句。在循环一开始，就立刻计时；而在后续的迭代中，每次功能完成再检查当前时间。或者，把“已用时间”放在前面，每次判断是否结束。如果是，则不执行“耗时40毫秒”这个VI。

![](http://byfiles.storage.msn.com/y1pQXOzdzPB_AoYU0MGlO3efQOQQE594gYZsCG0H40Ndz1U0BaBnqui17Rp5ErGQI_SvkhdV2mLKdU?PARTNER=WRITER) [《我和 LabVIEW》目录](mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
