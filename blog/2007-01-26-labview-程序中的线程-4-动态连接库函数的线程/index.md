---
title: "LabVIEW 程序中的线程 4 - 动态连接库函数的线程"
date: "2007-01-26"
tags: 
  - "我和labview"
---

## 四、动态连接库函数的线程

### 1\. CLN 中的线程设置

LabVIEW 可以通过 CLN（Call Library Function Node）节点来掉用动态连接库中的函数，在 Windows 下就是指 .DLL 文件中的函数。用户可以通过 CLN 节点的配置面板来指定被调用函数运行所在的线程。相对于 VI 的线程配置，CLN 的线程选项非常简单，只有两项：界面线程（Run in UI thread）和可重入方式（reentrant）。（新版本 LabVIEW 把这里的 reentrant 改为 Run in any thread 了）

  ![](http://byfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnWvX7_ZW2tTYr5n0bk9ua68vKNhAv0ldyg3wgB_syyXtwYPgFn7uOZecOJtG7Dpj2M47ugpFoCdGkCp4Io2atbblFhqMjXUBFQ) 图1：在 CLN 的配置面板上选择函数运行的线程

   在 LabVIEW 的程序框图上直接就可以看出一个 CLN 节点是选用的什么线程。如果是在界面线程，则节点颜色是较深的橘红色的；如果是可重入方式的，自节点是比较淡的黄色。

  ![](http://byfiles.storage.msn.com/x1pN1mp8dKYgTFV_lNTUY6FnWvX7_ZW2tTY61q51oLovBE_6zS38rJvfznwEQ4kEgKzdnEo_xXCfpyBybcKV2bJ8FRQkszukMmgqDoZjhdvJw7bTmLsqMQ7gA) 图2：不同颜色表示 CLN 不同的线程设置

### 2\. 如何选择合适的线程

对于在 CLN 中选取何种线程，有一个简单的判断方法。如果你要使用的动态连接库是多线程安全的，就选择可重入方式；否则，动态连接库不是多线程安全的，就选择界面线程方式。 判断一个动态连接库是不是线程安全的，也比较麻烦。如果这个动态连接库文档中没用明确说明它是多线程安全的，那么就要当他是非线性安全的；如果能看到动态连接库的源代码，代码中存在全局变量、静态变量或者代码中看不到有 lock 一类的操作，这个动态连接库也就肯定不是多线程安全的。

选择了可重入方式，LabVIEW 会在最方便的线程内运行动态连接库函数，一般会与调用它的 VI 运行在同一个线程内。因为 LabVIEW 是自动多线程的语言，它也很可能会把动态连接库函数分配一个单独的线程运行。如果程序中存在没有直接或间接先后关系的两个 CLN 节点，LabVIEW 很可能会同时在不同的线程内运行它们所调用的函数，也许是同一函数。对于非多线程安全的动态连接库，这是很危险的操作。很容易引起数据混乱，甚至是程序崩溃。

选择界面线程方式：因为 LabVIEW 只有一个界面线程，所以如果所有的 CLN 设置都是界面线程，那么就可以保证这些 CLN 调用的函数肯定全部都运行在同一线程下，肯定不会被同时调用。对于非多线程安全的动态连接库，这就保证了它的安全。

### 3\. 与 VI 的线程选项相配合

如果你的程序中大量频繁的调用了动态连接库函数，那么效率就是一个非常值得注意的问题了。

我曾经编写过一个在 LabVIEW 中[使用 OpenGL 的演示程序](http://www.vihome.net/bbs/forum.php?mod=viewthread&tid=8818)（为了演示我们开发的“Import Shared Library 功能”），对 OpenGL 的调用全部是通过 CLN 方式完成的。由于 OpenGL 的全部操作必需在同一线程内完成，我把所有的 CLN 都设置为在界面线程运行的方式。对 VI 的线程选项没有修改，还是默认的选项。结果程序运行极慢，每秒钟只能刷新一帧图像，CPU 占用 100%。但是作为动画每秒至少25帧才能看着比较流畅。 我开始试图用 LabVIEW 的 profile 工具来查找效率低下的 VI，结果居然查找不到。在 Profile Performance and Memory 工具上显示的 CPU 占用时间只有一点点。这个工具竟然显示不出程序中最耗时的操作在哪里，自然我也对如何优化这个程序无从下手了。后来这个演示程序被搁置了一段时间。

直到有一天我从同事给我的提供的一些信息中得到了启发，才突然想通，这些 CPU 全部被消耗在线程切换中了。我们调用 OpenGL 方法是为每个 OpenGL API 函数包装一个 API VI，这些 API VI 非常简单，程序框图就只有一个 CLN 节点，调用相应的 OpenGL 函数。由于每个 VI 都是在默认的执行线程中运行，而 CLN 调用的函数却是在界面线程下运行的。所以每次执行一次这样的 API VI，LabVIEW 都要做两次线程切换，从执行线程切换到界面线程，执行完函数，在切换回执行线程。 线程切换是比较耗时的。我的演示程序刷新一帧要调用大约两千次 OpenGL API VI，总耗时接近一秒。

解决这个问题，要么把所有 API VI 中的 CLN 都改为可重入方式，但编写程序时要保证所有被调用的函数都运行在同一线程内，这比较困难。比较容易实现的是，把程序中对 OpenGL 操作相关的 VI 也全部都设置为在界面线程下运行。我选择的就是后一种方法。改进后的程序，每秒钟画30帧图像也不会占满 CPU。

由此，我也想通了另一个问题。就是我曾经发现[调用 Windows API 函数](http://decibel.ni.com/content/docs/DOC-1072)遇到的错误信息丢失的问题。在调用某一 Windows API 函数返回值为0时，表示有错误发生了。这时你可以调用 GetLastErr 和 FormatMessage 得到错误代码和信息。但是我经常遇到的问题是：前一个函数明明返回值为0，但是随后调用的 GetLastErr 函数却无法查到错误代码。 我想这一定是看上去两个函数是先后被 LabVIEW 调用的，但实际上 LabVIEW 在它们之间还要做两次线程切换才行。错误代码就是在线程切换的过程中被丢失了。解决这个问题的办法也是：把调用这三个函数的 CLN 和调用它们的 VI 全部设置为在界面线程下运行就可以了。

**相关文章：**     [LabVIEW 程序中的线程 1 - LabVIEW 是自动多线程语言](http://ruanqizhen.wordpress.com/2006/07/24/labview-%E7%A8%8B%E5%BA%8F%E4%B8%AD%E7%9A%84%E7%BA%BF%E7%A8%8B-1-labview-%E6%98%AF%E8%87%AA%E5%8A%A8%E5%A4%9A%E7%BA%BF%E7%A8%8B%E8%AF%AD%E8%A8%80/) [LabVIEW 程序中的线程 2 - LabVIEW 的执行系统](http://ruanqizhen.wordpress.com/2006/08/16/labview-%E7%A8%8B%E5%BA%8F%E4%B8%AD%E7%9A%84%E7%BA%BF%E7%A8%8B-2-labview-%E7%9A%84%E6%89%A7%E8%A1%8C%E7%B3%BB%E7%BB%9F/) [LabVIEW 程序中的线程 3 - 线程的优先级](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1554.entry) [博客版《我和 LabVIEW》](http://ruanqizhen.wordpress.com/2005/11/07/%e6%88%91%e5%92%8c-labview/)

**范例下载：** [OpenGL Demo](http://www.vihome.net/bbs/forum.php?mod=viewthread&tid=8818) [Get Windows API Error](http://decibel.ni.com/content/docs/DOC-1072)
