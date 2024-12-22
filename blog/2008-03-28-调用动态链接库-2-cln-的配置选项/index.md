---
title: "调用动态链接库 2 - CLN 的配置选项"
date: "2008-03-28"
tags: 
  - "我和labview"
---

    双击一个 CLN（Call Library Function Node）节点，就会出现它的配置对话框。这个对话框有四页。

    第一页是被调用函数的信息。  
    Library name or path 是DLL文件名和路径。在系统路径下的DLL，直接输入文件名即可，否则需要全路径。在这里知名的DLL是被静态加载的程序中的。当调用了这个DLL的VI被装入内存时，DLL也同时被装入内存。  
    LabVIEW 也可动态加载DLL。只要把 Specify path on diagram 选上就可以了。选择了这个选项，在 Library name or path 中输入的内容就无效了。取而代之的是，CLN 节点多出一对输入输出，用于指明你需要使用的DLL的路径。这样，当VI被打开时，DLL不会被装入内存，只用程序运行到需要使用这个DLL中的函数时，才把其装入内存。  
    Function name 及需要调用的函数的名称。LabVIEW 会把DLL中所有的暴露出来的函数都列出，用户只要在下拉框中选取即可。  
    Thread 栏用于设定哪个线程里运行被调用的函数。它的具体含义可以参考《[LabVIEW 程序中的线程 4 - 动态连接库函数的线程](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!2047.entry)》。  
    Calling convention 用于指明被调用函数的调用约定。这里只支持两种约定：stdcall 和 C call。它们之间的区别在于，stdcall 由被调用者负责清理堆栈；C call 由调用者清理堆栈。这个设置错误时，可能会引起 LabVIEW 崩溃，所以一定要小心。反过来说，如果 LabVIEW 调用 DLL 函数时出现异常，首先就可以考虑这个设置是否正确。  
    （Windows API 一般使用的都是 stdcall；标准C的库函数大多使用 C call。如果函数声明中有类似 \_\_stdcall 这样的关键字，它就是 stdcall 的。）

[![](http://q0aida.bay.livefilestore.com/y1pxGfiphRHa8jzDrLSPIV6WsKvjNW3JP1J1JxNRPE9uF2mzZGG3jq9GOZmzWr56uLhnYGcvN_V7MD4c5XcHfAfWOUB4sPwyMQJ?PARTNER=WRITER)](http://q0aida.bay.livefilestore.com/y1p83KYkHeC7aAbysb_Qn1wDn_NONVlLAvEytl2CMvswf4e4DbC6gW8wGJqLAjEjpuuOaQExYdrBxqQ-tUdjPjn2Q?PARTNER=WRITER)

    第二页是函数参数的配置，这是最复杂的部分，留待下次详细分析。

    第三页用于为DLL设置一些回调函数，可以使用这些回调函数在特定的情形下完成初始化、清理资源等工作。  
    如果为 Reserve 选择了一个回调函数，那么当一个新的线程开始调用这个DLL时，这个回调函数首先被调用。可以利用这个函数为新线程使用到的数据做初始化工作。  
    如果一个线程使用了这个DLL，在线程结束时，它会去调用 Unreserve 中指定的回调函数。  
    Abort 中指定的函数用在 VI 非正常结束时被调用。比如按 Abort 按钮让一个VI停止，而不是让他运行完。  
    这里的几个回调函数必须要由DLL的开发者按照特定的格式实现。它的原型就是 Prototype for these procedures 中列出的那个。如果你使用的DLL不是专为 LabVIEW 设计的，一般不会包含这样的回调函数。

[![](http://q0aida.bay.livefilestore.com/y1pxGfiphRHa8gAw6mEKAPZbdtoOq2PgrOJV0RTis2tADqC2uFmX0oAkRBi6el2FmOuujNvLifo35DfsyQWXG38wW3QhWjXyatF?PARTNER=WRITER)](http://q0aida.bay.livefilestore.com/y1pxGfiphRHa8j2bO7iQdvUqusLrnkzhS5HP2A1CEFIgR5TaaDSYHrMchX2CkMcS7i8hgeZxPIR9XzahWm4yZ3iBhdaSp3oiJiX?PARTNER=WRITER)

    第四页是错误处理方式，这上面说明写得已经够详细了，我也在补充不了什么了。不过，像我在《[用户界面设计 4 - 帮助和反馈信息](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!2872.entry)》里提到的，把帮助文档直接写在界面上的地方，都是极不常用的设置。所以，我们基本上可以不关心这页的设置。

[《我和LabVIEW》目录](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1073.entry)
