---
title: "调用动态链接库 6 - LabVIEW 中对 C 语言指针的处理"
date: "2008-05-02"
---

[https://lv.qizhen.xyz/#docs/external\_call\_dll](https://lv.qizhen.xyz/#docs/external_call_dll)

C 语言函数常有指针类型的参数，有时候，在 LabVIEW 中只能得到一个指向某个数据的指针。比如，在第4节里的一个例子：

```c
 #pragma pack (1) typedef struct { char a; char\* str; int b} MyStct; MyStct\* testStruct; long TestStructure(MyStct\* tempStct);
```
在 LabVIEW CLN 节点中，就只能返回以整数类型表示的 str 的指针。 在大多数情况下，并不需要在 LabVIEW 中得到指针指向内存的具体数据，对这些数据的操作是在DLL的函数中完成的。我们只需在LabVIEW中得到这个指针的地址，再把它传递到下一个 CLN 节点就可以了。

但在某些情况下，我们仍然需要在 LabVIEW 中得到指针指向的内容，这只能借助 C 语言来完成。在上面的例子，我们需要另外写一个 C 函数，把函数 TestStructure 返回的 tempStct 结构中的元素拆开成简单数据类型，作为新的函数的参数（新函数中的一个参数就是 char\* str，LabVIEW可以识别它）。在LabVIEW 中调用这个新的函数，可以得到这些简单数据类型的数据。 有些函数需要在外部开辟的一块内存中写入数据，LabVIEW 中没有分配内存的操作，也需要再写一个 C 的函数分配好内存，给被调用的函数使用。 这种做法的缺点是针对每个需要得到内容的指针都要做个包装函数，相当麻烦。

一个减少C代码的方法是：编写一个C函数，负责把指针指向的内存中的数据以数组的形式读出，再在 LabVIEW 中把它们从新组织成合理的数据类型。这种方法其实更复杂，好在 LabVIEW 8.5 中自带的一些 VI 已经做了这个工作。如果你需要，不需要再额外编写代码，直接用 LabVIEW 提供的 VI 就可以了。 `[LabVIEW]\vi.lib\Utility\importsl\GetValueByPointer\GetValueByPointer.xnode` 就是用来得到指针内容的一个VI。告诉它指针地址、数据类型，它就会返回正确的 LabVIEW 数据。参见下图中的示例：

[![](http://byfiles.storage.msn.com/y1pIcO_924THofsjGDlHISzzhcAWm3X9bWNdjoaeYiPhhUM4bVmC9IEi8PEnEnthZCcygVCc9omlc4?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THofcis14CPPi0ntjIb_-lJilFbhjYpCorBXlkmhCosFDJ0Scr2WVfyOIk5oR2eFjccM?PARTNER=WRITER)

    DLLMemory.dll:ReturnPointerToConstant 返回的是一个指针，指向我在C语言中声明的一个整数常量。把这个指针传给 GetValueByPointer.xnode 并且告诉它数据类型是I32，GetValueByPointer.xnode 就会得到这个指针指向的内容。 `\[LabVIEW\]\\vi.lib\\Utility\\importsl\\` 中还有几个 VI 可以在调用DLL时起到帮助作用。比如，对于函数需要使用外部开辟的内存的，就可以使用 DSNewPtr.vi 开辟一块内存，然后把地址传递给这个函数。 需要注意的是，这几个 VI 不是 NI 承诺给用户使用的，所以没有什么文档，需要用户自己研究它们的用法。

[《我和 LabVIEW》目录](https://lv.qizhen.xyz/)
