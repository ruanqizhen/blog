---
title: "Silverlight程序中显示帧数的方法"
date: "2011-06-15"
tags: 
  - "码农札记"
---

接到一个需求：要在 Silverlight 程序的界面上放置一些控制选项，可以开关 Silverlight 的 `EnableFrameRateCounter`、`EnableRedrawRegions` 等和显示效率相关的一些设置项。我开始在网上查了一下，发现这几个与显示性能相关的设置主要用于承载 Silverlight 控件的 HTML 页面中，作为初始化参数进行设置。

这些属性（`EnableFrameRateCounter`、`EnableRedrawRegions`、`EnableGPUAcceleration`）在 Silverlight 程序启动后仍然可以通过 JavaScript 代码在浏览器端进行修改，但并非所有修改都能立即生效。正如你所说，`EnableGPUAcceleration` 属性必须在 HTML 文件中设置为 `true`，`EnableCacheVisualization` 和 `EnableFrameRateCounter` 才能正常工作。这是因为这两个属性依赖于硬件加速，如果硬件加速没有启用，它们也就失去了意义。微软提供这几个属性的主要目的是为了帮助开发者调试和优化使用显卡加速的动画和图形效果。

当 `EnableFrameRateCounter` 被设置为 `true` 时，Silverlight 界面左上角会显示一些与 GPU 相关的数据，其中包括动画的刷新帧数 (FPS)。这个内置的帧数计数器对于快速查看性能很有用。然而，Silverlight 并没有直接提供 API 可以在程序代码中读取这个帧数数值。

为了在程序中获取帧数，通常需要使用 `CompositionTarget.Rendering` 事件。Silverlight 在每一帧渲染完成后都会触发这个事件。通过对该事件进行计数，并计算单位时间内事件发生的次数，就可以近似地得到每秒帧数。

但正如你发现的，通过 `CompositionTarget.Rendering` 事件计算出来的帧数，与 `EnableFrameRateCounter` 显示的帧数通常是不同的。这是因为两者统计帧数的机制有所差异：

*   `EnableFrameRateCounter` 显示的是 Silverlight 实际 *渲染* 的帧数，它反映了 GPU 的实际工作情况。如果 Silverlight 认为界面没有变化，不需要重绘，就不会触发渲染，显示的帧数就会较低，甚至为 0。例如，如果界面上只有一个静态图像，没有动画或用户交互，帧数就会很低。
*   `CompositionTarget.Rendering` 事件的触发次数与用户设置的 `MaxFrameRate` 和系统的繁忙程度密切相关。即使界面没有变化，只要时间到达了 `MaxFrameRate` 设定的间隔，`CompositionTarget.Rendering` 事件仍然会被触发。因此，通过该事件计算出的帧数，更接近于 Silverlight 尝试 *渲染* 的最大帧数，而不是实际 *完成* 的渲染帧数。

此外，还有一些细节需要补充：

*   `MaxFrameRate` 属性用于限制 Silverlight 应用程序的最大帧速率。默认情况下，Silverlight 的最大帧速率是 60fps。可以通过设置 `MaxFrameRate` 来降低帧速率，以节省 CPU 和 GPU 资源。
*   使用 `CompositionTarget.Rendering` 计算帧数时，需要注意性能问题。频繁的事件处理可能会对程序性能产生一定的影响。因此，通常需要使用一个定时器来周期性地计算和更新帧数，而不是在每次事件触发时都进行计算。
*   除了 `EnableFrameRateCounter` 和 `CompositionTarget.Rendering`，还可以使用一些性能分析工具来更全面地了解 Silverlight 应用程序的性能，例如 Visual Studio 的性能分析器。

总而言之，`EnableFrameRateCounter` 提供了一个方便的快速查看帧数的方法，而 `CompositionTarget.Rendering` 则提供了一种在程序中计算帧数的途径。但需要理解它们之间的差异，并根据实际需求选择合适的方法。
