---
title: "几种简单的测试程序流程模型"
date: "2007-06-28"
tags: 
  - "我和labview"
---

    大多数测试程序主要步骤就是以下几步：采集数据、处理数据、显示数据、保存数据。这几个步骤可以顺序执行。在一次实验中，通常要多次循环这一过程，因此，这种测试程序的模型如图1所示。图1中最后一个子 VI 是用来判断实验是否结束，是否进行下一次循环用的。在这个模型中，各个程序模块是单线程顺序执行的，它的好处是程序逻辑简单，容易设计和理解。

![](http://byfiles.storage.msn.com/y1pPUK7j7lmY1W3UDG2MHhI1aKjqCQz5cxXaM7xJxuYMT7tyK5bsNQpw3iRjLbYT4ik)  
图1：顺序测试程序的模型

    但是对于单线程的程序，计算机必须执行完一个任务，才能再进行下一步工作。比如，尽管数据存储是一个相对比较慢的过程，但计算机必须还是要等到它执行完，才能去做下一步的采集数据工作。  
    对于速度要求较高的测试程序，最好把这两样工作同时进行，以节约时间。这样，我们可以在两个循环内分别做数据采集，和其它的工作。因为数据采集的速度一般来说高于处理和存储的速度。当新数据被采集来，上次的数据可能还没处理完呢。所以可以先把每次采集到的来不及处理的数据放在缓存里。这种模型如图2所示。它实质上也就是 LabVIEW 在新建VI的模板中的“Producer/Consumer Design Pattern”。  
    这个模型的实际应用程序会更加复杂，相比第一个模型不是那么好理解和维护。

![](http://byfiles.storage.msn.com/y1pPUK7j7lmY1XoCpvowTq7tWfAoB6LNm2xPoChNMA-S2uxLg4lnX7A2i9IrerWn9zK)

图2：数据采集和后续工作并行执行的模型

    不过还有一个折衷的方案，既保证各个任务同时运行，又不至于太复杂。如图3所示，在这个模型下，所有的任务同时运行：采集新的数据、处理上一次采到的数据，显示保存上一次处理好的数据。在这个模型下，要注意第一次循环运行时处理的数据，和循环头两次运行显示存储的数据是无效的，实际循环终止条件式也要考虑到，采集的数据再两次循环后才被保存下来。

![](http://byfiles.storage.msn.com/y1pPUK7j7lmY1WwHPxIAGpjeEi8sdI8lCUxW3z6_cPwomlIx_bV_Fyjz9evuOH129zT)  
图3：并行执行每一任务的模型

[《我和 LabVIEW》](http://ruanqizhen.spaces.live.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
