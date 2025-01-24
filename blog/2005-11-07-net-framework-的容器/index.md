---
title: ".NET Framework 的容器"
date: "2005-11-07"
tags: 
  - "码农札记"
---

自从我发现了 STL（Standard Template Library），它就成了我编写 C++ 程序时的标配。STL 提供的容器和算法极大地简化了开发工作，提高了代码复用性和可维护性。  
最近，我开始研究 C# 中的泛型和标准容器，试图了解它们在实现 STL 类似功能时的表现。本篇文章总结了 C# 的标准容器，以及它们的特点和用法。研究的环境是 Visual C# 2005。


## C# 的容器分类

在 C# 中，容器大致可以分为两类：**数组（Array）**和**集合（Collection）**。

1. **Array 类**  
   `System.Array` 类是 C# 中提供的一种基本容器，可以看作是 STL 中 `vector` 的类似实现。它提供了数组操作的基础功能，如查找和排序。  
   **特点**：
   - 不需要通过专门的类声明变量。直接使用元素类型加中括号即可声明数组，例如：  
     ```csharp
     int[] myIntArray = new int[5] { 1, 2, 3, 4, 5 };
     ```
   - 声明方式直观，但灵活性稍逊于泛型集合。

2. **集合（Collections）**  
   集合类在 C# 中主要分布在以下两个命名空间中：  
   - **System.Collections**（C# 1.0）  
     该命名空间包含了一些非泛型集合类，如：  
     - `ArrayList`
     - `BitArray`
     - `Hashtable`
     - `Queue`
     - `SortedList`
     - `Stack`  
     这些容器为早期的 C# 提供了数据存储和操作的基本工具，但由于它们不支持类型安全，使用时需要格外注意类型转换问题。

   - **System.Collections.Generic**（C# 2.0 引入）  
     C# 2.0 引入泛型编程后，该命名空间新增了泛型集合类，极大地提升了代码的类型安全性和性能。主要容器包括：  
     - `Dictionary`：键值对集合，类似于 STL 中的 `map` 和 `multimap`。  
     - `LinkedList`：双向链表实现，用于插入和删除频繁的场景。  
     - `List`：类似于 STL 中的 `vector`，是一个动态数组。  
     - `Queue`：先进先出（FIFO）集合，与 STL 中的 `queue` 功能类似。  
     - `SortedDictionary` 和 `SortedList`：提供有序存储功能。  
     - `Stack`：后进先出（LIFO）集合，与 STL 中的 `stack` 类似。



## 与 STL 的对比

C# 和 C++ STL 提供的容器种类有一定相似性，但也存在一些显著差异：  

| **C# 容器**                   | **STL 容器**              | **功能描述**                       |
|-------------------------------|--------------------------|-----------------------------------|
| `Array`                       | `vector`                | 动态数组，支持随机访问。           |
| `Dictionary`                  | `map`/`multimap`        | 键值对集合，支持快速查找。         |
| `List` / `SortedList`         | `list`                  | 单链表/有序列表。                 |
| `Queue`                       | `queue`                 | 先进先出的队列结构。               |
| `Stack`                       | `stack`                 | 后进先出的栈结构。                 |
| `BitArray`                    | `bitset`                | 位操作集合。                      |

虽然两者在功能上有很多重叠，但 C# 的集合通过泛型和命名空间分类，实现了更好的类型安全性和模块化。


## 主要容器简介

1. **Array**
   `Array` 提供基础数组功能。声明简单，功能全面，例如：  
   ```csharp
   int[] numbers = new int[] { 1, 2, 3, 4, 5 };
   Array.Sort(numbers);
   Array.Reverse(numbers);
   ```
   它类似于 STL 的 `vector`，但无法动态扩展长度。

2. **Dictionary**
   `Dictionary` 是一种键值对集合，常用于快速查找和映射。例如：  
   ```csharp
   Dictionary<string, int> nameToAge = new Dictionary<string, int>();
   nameToAge.Add("Alice", 30);
   nameToAge.Add("Bob", 25);
   ```

3. **List**
   `List` 是一个动态数组，支持快速随机访问和灵活的扩展。例如：  
   ```csharp
   List<int> numbers = new List<int> { 1, 2, 3 };
   numbers.Add(4);
   numbers.RemoveAt(2);
   ```

4. **Queue**
   先进先出的集合结构：  
   ```csharp
   Queue<string> tasks = new Queue<string>();
   tasks.Enqueue("Task 1");
   tasks.Enqueue("Task 2");
   string nextTask = tasks.Dequeue();
   ```

5. **Stack**
   后进先出的集合结构：  
   ```csharp
   Stack<string> history = new Stack<string>();
   history.Push("Page 1");
   history.Push("Page 2");
   string lastVisited = history.Pop();
   ```


## 总结

C# 提供的容器丰富多样，尤其是泛型容器在性能和类型安全性上远胜于 C# 1.0 中的非泛型集合。虽然它们与 STL 的容器设计思路有所不同，但在功能实现上，C# 集合为开发者提供了相当强大的工具。无论是选择 `Array` 还是泛型集合，开发者都能根据需求灵活使用。  
