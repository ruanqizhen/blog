---
title: "信号调理模块的功能"
date: "2005-09-24"
tags: 
  - "我和labview"
---

阮奇桢

 **一. 虚拟仪器系统和信号调理模块**

       虚拟仪器（Virtual Instrument）是目前测试技术界和仪器制造界十分关注的热门话题。虚拟仪器系统是一种基于计算机的自动化仪器系统，是现代计算机技术和仪器技术完美结合的产物。它利用加在计算机上的一组软件与仪器模块相联接，以计算机为核心，充分利用计算机强大的图形界面和数据处理能力提供对测量数据的分析和显示。

    图1是一个典型的虚拟仪器测试系统，它由混合总线测量仪器及数据采集模块、专用转接及信号调理模块、被测对象三大部分组成。信号调理模块是连接前端传感器和后端数据采集设备的中间环节。 ![](http://storage.msn.com/x1pxOYwqu4SjF5G0W4dmEwaKLtSa4ws0-_l23pai0BiY4Dg5X4MyVaFHgPKrE3NPqOvsMxZ2QKkd_Rrkq9miTqfsfcq0gVvWOMS5mtuS85Ke8UfF6YZL01bhTKOzQcEbaXYtiRTvzwM5kaq2cWUwzjEnnbf3jHXiZU_) 

图1：虚拟仪器测试系统组成

**二. 信号调理模块的功能**

    对于绝大多数数据采集和控制系统来说，信号调理是非常重要的。典型的系统一般都需要信号调理硬件，用于将原始信号以及传感器的输出接口到数据采集板或模块上。通过信号调理的各种功能，如信号的放大、隔离、滤波、多路转换以及直接变送器调理等，使得数据采集系统的可靠性及性能得到极大地改善。

    具体来说，信号调理模块主要具有以下几点功能：  
    1. 传感器驱动：包括为无源传感器提供所需的电压源或电流源，为有源传感器提供其运转所需的特殊电路结构。下表列出了几种不同类型传感器对信号调理模块的要求：  
```
<table style="border-right:medium none;border-top:medium none;border-left:medium none;border-bottom:medium none;border-collapse:collapse;" cellspacing="0" cellpadding="0" border="1"><tbody><tr><td style="border-right:silver 1pt solid;border-top:silver 1pt solid;border-left:silver 1pt solid;width:108pt;border-bottom:silver 1pt solid;" valign="top" width="144"><p>传感器</p></td><td style="border-right:silver 1pt solid;border-top:silver 1pt solid;border-left:medium none;width:189pt;border-bottom:silver 1pt solid;" valign="top" width="252"><p>信号调理模块</p></td></tr><tr><td style="border-right:1pt solid;border-top:medium none;border-left:1pt solid;width:108pt;border-bottom:1pt solid;" valign="top" width="144"><p>热电偶</p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:189pt;border-bottom:1pt solid;" valign="top" width="252"><p>模拟低压输入</p></td></tr><tr><td style="border-right:1pt solid;border-top:medium none;border-left:1pt solid;width:108pt;border-bottom:1pt solid;" valign="top" width="144"><p></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:189pt;border-bottom:1pt solid;" valign="top" width="252"><p>模拟高压输入，输出</p></td></tr><tr><td style="border-right:1pt solid;border-top:medium none;border-left:1pt solid;width:108pt;border-bottom:1pt solid;" valign="top" width="144"><p>热敏电阻</p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:189pt;border-bottom:1pt solid;" valign="top" width="252"><p>模拟输入</p></td></tr><tr><td style="border-right:1pt solid;border-top:medium none;border-left:1pt solid;width:108pt;border-bottom:1pt solid;" valign="top" width="144"><p>加速计</p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:189pt;border-bottom:1pt solid;" valign="top" width="252"><p>频率至电压转换</p></td></tr><tr><td style="border-right:1pt solid;border-top:medium none;border-left:1pt solid;width:108pt;border-bottom:1pt solid;" valign="top" width="144"><p>LVDT, RVDT</p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:189pt;border-bottom:1pt solid;" valign="top" width="252"><p>电阻，多路复用器，矩阵变换电路</p></td></tr><tr><td style="border-right:1pt solid;border-top:medium none;border-left:1pt solid;width:108pt;border-bottom:1pt solid;" valign="top" width="144"><p>应变片</p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:189pt;border-bottom:1pt solid;" valign="top" width="252"><p>电阻，模拟电压输出，模拟电流输出</p></td></tr></tbody></table>

    2. 信号放大：为了提高模拟信号转换成数字信号时的精度，我们希望输入的模拟信号的最大值刚好等于A/D转换设备输入范围。大多数传感器的输出范围在mV级，而A/D转换设备输入范围为Volt级。因此我们需要使用信号调理模块对传感器的信号放大。下表列出了信号调理模块对信号放大倍数与信噪比的关系

<table style="border-right:medium none;border-top:medium none;border-left:medium none;border-bottom:medium none;border-collapse:collapse;" cellspacing="0" cellpadding="0" border="1"><tbody><tr style="height:13.1pt;"><td style="border-right:silver 1pt solid;border-top:silver 1pt solid;border-left:silver 1pt solid;width:90pt;border-bottom:silver 1pt solid;height:13.1pt;" width="120"><p>&nbsp;</p></td><td style="border-right:silver 1pt solid;border-top:silver 1pt solid;border-left:medium none;width:45pt;border-bottom:silver 1pt solid;height:13.1pt;" width="60"><p>模拟信号幅值</p></td><td style="border-right:silver 1pt solid;border-top:silver 1pt solid;border-left:medium none;width:63pt;border-bottom:silver 1pt solid;height:13.1pt;" width="84"><p>信号调理模块放大倍数</p></td><td style="border-right:silver 1pt solid;border-top:silver 1pt solid;border-left:medium none;width:36pt;border-bottom:silver 1pt solid;height:13.1pt;" width="48"><p>噪声幅值</p></td><td style="border-right:silver 1pt solid;border-top:silver 1pt solid;border-left:medium none;width:63pt;border-bottom:silver 1pt solid;height:13.1pt;" width="84"><p>数据采集模块放大倍数</p></td><td style="border-right:silver 1pt solid;border-top:silver 1pt solid;border-left:medium none;width:54pt;border-bottom:silver 1pt solid;height:13.1pt;" width="72"><p>数字信号幅值</p></td><td style="border-right:silver 1pt solid;border-top:silver 1pt solid;border-left:medium none;width:36pt;border-bottom:silver 1pt solid;height:13.1pt;" width="48"><p>信噪比</p></td></tr><tr style="height:10.05pt;"><td style="border-right:1pt solid;border-top:medium none;border-left:1pt solid;width:90pt;border-bottom:1pt solid;height:10.05pt;" width="120"><p>只有数据采集模块放大</p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:45pt;border-bottom:1pt solid;height:10.05pt;" width="60"><p><span lang="EN-US">.01V</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:63pt;border-bottom:1pt solid;height:10.05pt;" width="84"><p>无</p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:36pt;border-bottom:1pt solid;height:10.05pt;" width="48"><p><span lang="EN-US">.001V</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:63pt;border-bottom:1pt solid;height:10.05pt;" width="84"><p><span lang="EN-US">X100</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:54pt;border-bottom:1pt solid;height:10.05pt;" width="72"><p><span lang="EN-US">1.1V</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:36pt;border-bottom:1pt solid;height:10.05pt;" width="48"><p><b><span lang="EN-US">10</span></b></p></td></tr><tr style="height:10.05pt;"><td style="border-right:1pt solid;border-top:medium none;border-left:1pt solid;width:90pt;border-bottom:1pt solid;height:10.05pt;" width="120"><p>数据采集模块和信号调理模块均放大</p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:45pt;border-bottom:1pt solid;height:10.05pt;" width="60"><p><span lang="EN-US">.01V</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:63pt;border-bottom:1pt solid;height:10.05pt;" width="84"><p><span lang="EN-US">X10</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:36pt;border-bottom:1pt solid;height:10.05pt;" width="48"><p><span lang="EN-US">.001V</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:63pt;border-bottom:1pt solid;height:10.05pt;" width="84"><p><span lang="EN-US">X10</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:54pt;border-bottom:1pt solid;height:10.05pt;" width="72"><p><span lang="EN-US">1.01V</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:36pt;border-bottom:1pt solid;height:10.05pt;" width="48"><p><b><span lang="EN-US">100</span></b></p></td></tr><tr style="height:10.05pt;"><td style="border-right:1pt solid;border-top:medium none;border-left:1pt solid;width:90pt;border-bottom:1pt solid;height:10.05pt;" width="120"><p>只有信号调理模块放大</p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:45pt;border-bottom:1pt solid;height:10.05pt;" width="60"><p><span lang="EN-US">.01V</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:63pt;border-bottom:1pt solid;height:10.05pt;" width="84"><p><span lang="EN-US">X100</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:36pt;border-bottom:1pt solid;height:10.05pt;" width="48"><p><span lang="EN-US">.001V</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:63pt;border-bottom:1pt solid;height:10.05pt;" width="84"><p>无</p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:54pt;border-bottom:1pt solid;height:10.05pt;" width="72"><p><span lang="EN-US">1.001V</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:36pt;border-bottom:1pt solid;height:10.05pt;" width="48"><p><b><span lang="EN-US">1000</span></b></p></td></tr></tbody></table>

    3. 隔离 在测量高电压信号时，隔离电路可以保护你的后端设备被意外的高电压输入损坏。常用的有光隔离和磁隔离。隔离放大电路的缺点是有可能引入噪声。

    4. 信号滤波：模拟信号在数字化前必须进行低通滤波，以消除噪声和防止混叠现象。同时也可以使用信号调理模块滤除50-60Hz的工频噪声。  
    5. 扩展通道数：有些信号调理模块具有多路转换器或矩阵变换电路的功能，可以把通道信号通道扩展至上千路。  
    6. 其他功能：信号调理模块还可以实现信号衰减、采样同步、频率-电压的转换等功能。

**三. 常用信号调理模块  
**    1. 目前最常使用的信号调理模块是NI公司的SCXI系列信号调理模块。 


图2：信号调理系统

    SCXI(Signal Conditioning eXtensions for Instrumentation) 系统是一个多用途、高性能的信号调理平台。适用于通道超过一定数量，封装条件恶劣、并且对信号调理的要求很高的应用系统。SCXI可以用作插卡式数据采集板、VXI模块或PXI模块的调理前端，还可以将它做为完整的远程数据采集系统。通过SCXI系统强大的多路能力，SCXI系统可以将多达3072路信号接入到一块数据采集板上。对于多通道、缓变的数据采集系统，如温度监测系统，SCXI是一种高可靠性的选择。

  
    下表是SCXI信号调理模块可以实现的功能：

<table style="border-right:medium none;border-top:medium none;border-left:medium none;border-bottom:medium none;border-collapse:collapse;" cellspacing="0" cellpadding="0" border="1"><tbody><tr style="height:15pt;"><td style="border-right:silver 1pt solid;border-top:silver 1pt solid;border-left:silver 1pt solid;width:324pt;border-bottom:silver 1pt solid;height:15pt;" valign="top" width="432" colspan="2"><p><span lang="EN-US">SCXI</span>系统信号调理功能</p></td></tr><tr style="height:6.75pt;"><td style="border-right:1pt solid;border-top:medium none;border-left:1pt solid;width:90pt;border-bottom:1pt solid;height:6.75pt;" valign="top" width="120"><p>模拟输入</p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:234pt;border-bottom:1pt solid;height:6.75pt;" valign="top" width="312"><p style="text-align:left;" align="left">热电偶<span> <span lang="EN-US">Thermocouple<br></span></span>热电阻<span lang="EN-US"> RTD</span>，<span lang="EN-US">thermistor<br></span>应变器<span lang="EN-US"> Strain gauge<br></span>毫伏源<span lang="EN-US"> Millivolt source<br></span>电压源<span lang="EN-US"> Voltage Source (</span>可达<span lang="EN-US"> 250 Vrms)<br></span>电流源<span> <span lang="EN-US">Current Source (4-20mA)<br></span></span>频率输入<span lang="EN-US"> Frequency Input<br></span>动态信号<span lang="EN-US"> Dynamic Signal</span></p></td></tr><tr style="height:8.25pt;"><td style="border-right:1pt solid;border-top:medium none;border-left:1pt solid;width:90pt;border-bottom:1pt solid;height:8.25pt;" valign="top" width="120"><p>模拟输出</p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:234pt;border-bottom:1pt solid;height:8.25pt;" valign="top" width="312"><p style="text-align:left;" align="left">电压、电流</p></td></tr><tr style="height:15.75pt;"><td style="border-right:1pt solid;border-top:medium none;border-left:1pt solid;width:90pt;border-bottom:1pt solid;height:15.75pt;" valign="top" width="120"><p>数字<span lang="EN-US">I/O</span></p></td><td style="border-right:1pt solid;border-top:medium none;border-left:medium none;width:234pt;border-bottom:1pt solid;height:15.75pt;" valign="top" width="312"><p style="text-align:left;" align="left">光隔离<span lang="EN-US">I/O (Optically isolated I/O)</span></p></td></tr></tbody></table>

    SCXI多通道信号调理系统可以适用于以ISA、PCMCIA、PCI、PXI、VXI等为采集总线的计算机系统。您可以将SCXI做为数据采集前端，或通过并行接口与采集设备组成外挂式数据采集系统。一个SCXI系统最多可以接入十二个调理机箱，每个调理机箱中可以插入最多四个(SCXI-1000)或十二个(SCXI-1001)调理模块。各种传感器信号通过接线端子或前端接入到调理模块，经调理模块调理后的信号，则通过SCXI系统总线送入相应的数据采集设备。

    2. 另外一类较为常用的信号调理系统是SCC系统。  
SCC是适用于低通道应用的便携式信号调理平台。不象SCXI一个模块同时处理一组信号，平台为每一个信号提供单独的模块。SCC平台还提供了切换开关、LED，以及BNC和LEMO等常用的连接端子。无论是SCXI，还是SCC平台都有用于测量、激励、隔离和过滤的模块。下图是SCC系统的展示图。


图3：SCC信号调理

**四. 一个信号调理系统实例**

下面以一个应用实例来说明如何在测试系统中选用信号调理模块和搭建信号调理系统：

    1. 系统要求：对8路温度信号进行采集，利用温度测量软件转换分析后，在显示器上显示出来，并将测量结果存储到硬盘上，以备事后分析处理。  
    2. 选用信号调理模块：采用SCXI-1102B。SCXI-1102B具有32个差分输入通道，可调理各种热电偶信号、毫伏、伏、4~20mA、0~20mA的输入信号，每个通道可独立设置（1或100倍）放大倍数200Hz低通滤波，333kSa/s扫描率。  
    3. 选用数据采集模块：选用PXI-6070E。PXI-6070E为一个12位多功能数据采集卡，它具有16路单端或8路差分输入通道，最高采样率为1.25MSa/s。  
    4. 计算机选用：选用PXI-1010 PXI机箱以及控制器，外接显示器。PXI-1010 PXI机箱为一混合式PXI机箱，可同时插入PXI零槽控制器、7个PXI仪器模块和4个SCXI信号调理模块。  
    5. 功能实现：8路温度信号经信号调理模块SCXI-1102调理后通过SCXI背板模拟总线送至数据采集模块PXI-6070E进行A/D转换，数据再由系统数据总线送至分析软件。实现分析、显示和存储功能。


```