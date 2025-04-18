---
title: "信号调理模块的功能"
date: "2005-09-24"
tags: 
  - "我和labview"
---

## 一. 虚拟仪器系统和信号调理模块

虚拟仪器（Virtual Instrument）是当前测试技术与仪器制造领域广泛关注的热点话题。虚拟仪器系统是一种基于计算机的自动化仪器系统，是现代计算机技术与传统仪器技术完美结合的产物。通过将计算机强大的图形界面和数据处理能力与仪器模块相结合，虚拟仪器能够实现测量数据的采集、分析和显示。

**图 1** 展示了一个典型的虚拟仪器测试系统，它通常由以下三个主要部分组成：
1. 混合总线测量仪器及数据采集模块。
2. 专用转接及信号调理模块。
3. 被测对象。  

信号调理模块作为连接前端传感器和后端数据采集设备的中间环节，其作用不可忽视。


## 二. 信号调理模块的功能

信号调理在大多数数据采集和控制系统中起着至关重要的作用。典型系统通常配备信号调理硬件，用于将原始信号或传感器输出接口到数据采集板或模块。信号调理通过放大、隔离、滤波、多路转换以及直接调理变送器等功能，大幅提升了数据采集系统的可靠性和性能。

### 2.1 功能概述

信号调理模块的主要功能包括：  

1. **传感器驱动**  

包括为无源传感器提供所需的电压源或电流源，为有源传感器提供其运转所需的特殊电路结构。下表列出了几种不同类型传感器对信号调理模块的要求：  

| **传感器类型** | **信号调理模块功能**           |
|----------------|------------------------------|
| 热电偶         | 模拟低压输入                  |
| 热敏电阻       | 模拟输入                     |
| 加速度计       | 频率至电压转换                |
| LVDT, RVDT    | 电阻、多路复用器、矩阵变换电路 |
| 应变片         | 电阻、模拟电压输出、模拟电流输出 |

2. **信号放大**  

为了提高模拟信号转换成数字信号时的精度，我们希望输入的模拟信号的最大值刚好等于A/D转换设备输入范围。大多数传感器的输出范围在mV级，而A/D转换设备输入范围为Volt级。因此我们需要使用信号调理模块对传感器的信号放大。下表列出了信号调理模块对信号放大倍数与信噪比的关系  

| **方案**               | **信号幅值** | **调理模块放大倍数** | **噪声幅值** | **采集模块放大倍数** | **输出信号幅值** | **信噪比** |
|-----------------------|-------------|--------------------|-------------|--------------------|----------------|----------|
| 仅数据采集模块放大    | 0.01 V      | 无                 | 0.001 V     | ×100              | 1.1 V          | 10       |
| 数据采集与调理模块放大 | 0.01 V      | ×10               | 0.001 V     | ×10               | 1.01 V         | 100      |
| 仅信号调理模块放大    | 0.01 V      | ×100              | 0.001 V     | 无                | 1.001 V        | 1000     |

3. **信号隔离**  

在测量高电压信号时，隔离电路可以保护你的后端设备被意外的高电压输入损坏。常用的有光隔离和磁隔离。隔离放大电路的缺点是有可能引入噪声。

4. **信号滤波**  

模拟信号在数字化前必须进行低通滤波，以消除噪声和防止混叠现象。同时也可以使用信号调理模块滤除50-60Hz的工频噪声。

5. **扩展通道数**  

有些信号调理模块具有多路转换器或矩阵变换电路的功能，可以把通道信号通道扩展至上千路。


6. **其他功能**  

信号调理模块还可以实现信号衰减、采样同步、频率-电压的转换等功能。


## 三. 常用信号调理模块

目前常用的信号调理模块包括 NI（National Instruments）公司的 SCXI 系列模块。

### 3.1 SCXI 系统简介

SCXI(Signal Conditioning eXtensions for Instrumentation) 系统是一个多用途、高性能的信号调理平台。适用于通道超过一定数量，封装条件恶劣、并且对信号调理的要求很高的应用系统。SCXI可以用作插卡式数据采集板、VXI模块或PXI模块的调理前端，还可以将它做为完整的远程数据采集系统。通过SCXI系统强大的多路能力，SCXI系统可以将多达3072路信号接入到一块数据采集板上。对于多通道、缓变的数据采集系统，如温度监测系统，SCXI是一种高可靠性的选择。

以下为 SCXI 系统的主要功能：

| **功能类别** | **支持信号**                                                                 |
|--------------|-------------------------------------------------------------------------------|
| 模拟输入     | 热电偶、热电阻（RTD）、应变片、毫伏源、电压源（最高 250 Vrms）、电流源等      |
| 模拟输出     | 电压输出、电流输出                                                           |
| 数字 I/O     | 光隔离输入/输出                                                              |

SCXI 系统支持多达 12 个调理机箱，每个机箱可容纳 4 至 12 个模块，满足大规模、多样化数据采集需求。

    SCXI多通道信号调理系统可以适用于以ISA、PCMCIA、PCI、PXI、VXI等为采集总线的计算机系统。您可以将SCXI做为数据采集前端，或通过并行接口与采集设备组成外挂式数据采集系统。一个SCXI系统最多可以接入十二个调理机箱，每个调理机箱中可以插入最多四个(SCXI-1000)或十二个(SCXI-1001)调理模块。各种传感器信号通过接线端子或前端接入到调理模块，经调理模块调理后的信号，则通过SCXI系统总线送入相应的数据采集设备。

### 3.2 另外一类较为常用的信号调理系统是SCC系统

SCC是适用于低通道应用的便携式信号调理平台。不象SCXI一个模块同时处理一组信号，平台为每一个信号提供单独的模块。SCC平台还提供了切换开关、LED，以及BNC和LEMO等常用的连接端子。无论是SCXI，还是SCC平台都有用于测量、激励、隔离和过滤的模块。下图是SCC系统的展示图。


## 四. 信号调理系统实例  

以下通过一个应用实例，介绍如何在测试系统中选择信号调理模块并搭建信号调理系统：  

1. **系统需求**  
   对8路温度信号进行采集，并通过温度测量软件进行转换和分析。测量结果需在显示器上显示，并存储至硬盘供后续分析处理。  

2. **信号调理模块选型**  
   选用 **SCXI-1102B** 模块。该模块具备32个差分输入通道，能够调理多种输入信号，包括热电偶信号、毫伏信号、伏信号以及4~20mA和0~20mA电流信号。每个通道可独立设置放大倍数（1倍或100倍），支持200Hz低通滤波，并具有高达333kSa/s的扫描速率。  

3. **数据采集模块选型**  
   选用 **PXI-6070E** 数据采集模块。这是一款12位多功能数据采集卡，具有16路单端输入或8路差分输入通道，最高采样速率为1.25MSa/s。  

4. **计算机配置**  
   配备 **PXI-1010** PXI机箱及其控制器，并外接显示器。PXI-1010是混合式PXI机箱，可同时插入PXI零槽控制器、7个PXI仪器模块和4个SCXI信号调理模块。  

5. **功能实现**  
   8路温度信号首先通过信号调理模块 **SCXI-1102B** 进行处理，随后经SCXI背板模拟总线传输至数据采集模块 **PXI-6070E** 进行A/D转换。转换后的数据通过系统数据总线传递至分析软件，实现信号分析、显示和存储功能。  

通过上述配置，该系统能够高效完成温度信号采集、处理及后续分析任务。