---
title: "压缩感知"
date: "2010-07-27"
tags: 
  - "我和labview"
---

最近研究了一下压缩感知理论。压缩感知大概是近几年里，测试测量领域唯一称得上革命性的理论了。它在理论上证明了信号采集可以突破奈奎斯特-香农采样定理（Nyquist–Shannon sampling theorem）的限制：即，以低于原始信号频率2倍的采样率采集并还原原始信号。

压缩感知的理论是这样的：

一个信号可以拆分成多个不相关的小信号的叠加（小信号称作向量），在不同拆分方法之间转换叫做域变换。如果某一个域上，只有一部分向量的值比较大，其它向量的值接近于0，则这个信号时可压缩的（近似0值的向量可以被去除，却不影响信号整体性质）。

所有的信号都是可压缩的，只要找到合适的转换域。

如果对信号先压缩，再做AD转换，就可以用低速率的AD转换器来采集高带宽的信号了。因为信号压缩后数据量减少，相当于带宽降低了。

在这个理论框架下，实现的采集与传统方法相比，有两点主要不同：

一是，数据采集硬件不同。因为采样函数变了。目前常见的硬件设备，采集一维信号的数据采集卡，相当于使用等距脉冲函数对原始信号做调制；二维图像的采集函数是像素位置函数。而压缩感知理论框架下需要使用高斯随即矩阵或等效的函数作为采样函数，这导致采集硬件必须完全重新设计。

二是，原始信号重建方法不同。传统数据采集可以直接从采集到的样本还原原始信号（受奈奎斯特定理的限制）。但在压缩感知理论下，采集到的样本数，少于可以直接重建原始信号所需的数量，不能直接重建。只能首先重建原始信号在某一稀疏域上的信号（通过最优化算法求得该域的最稀疏解）。再通过域转换，重建原始信号。

压缩感知最大的优势在于可以使用低速率的数据采集设备，来采集时域上高频的信号。这听起来很诱人，不过由于这需要重新设计所有的采集硬件，这一理论到实用也许还有相当长一段距离。
