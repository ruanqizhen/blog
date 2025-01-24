---
title: "C# 中的接口与抽象类"
date: "2005-11-17"
tags: 
  - "码农札记"
---


## 一、接口的定义

**定义**：接口是一个协定，定义类或结构间交互的标准。实现接口的类或结构必须遵守该协定。

简单来说，接口是一种明确的约定，用于规定类与类之间的交互方式。初次接触“类通过接口交互”时，可能会误以为接口只是类公开的方法。但实际上，接口是独立于具体类的定义，它为类之间的交互提供了一种抽象标准。

**为什么使用接口？**  
直接让类与类交互似乎也可以完成任务，但接口的引入具有以下优势：
- **抽象性**：接口抽象了类之间的交互内容，便于逻辑分离，增强程序的可维护性。
- **扩展性**：通过为接口开发新实现，可以轻松扩展系统功能。
- **约束性**：接口定义了实现者必须遵守的规则，有助于减少耦合。

**接口的特点**：
- 接口只包含成员的定义，不包含实现。具体的实现由实现接口的类或结构提供。
- 接口的成员包括：方法、属性、索引器、事件。
- **注意**：接口不包含字段。

**接口不可更改**：一旦接口发布，不能对其进行修改，否则会破坏现有代码。

**示例代码**：以下是一个接口的定义示例：
```csharp
using System;

public delegate void Change(object sender, object eventArgs); // 定义一个委托

public interface IBroker // 定义股票经纪人接口
{
    string GetRating(string stock); // 获取评级的方法（未实现）
    
    decimal PricePerTrade { get; set; } // 定义每股价格的属性

    decimal this[string stockName] { get; set; } // 定义索引器

    event Change PriceChange; // 定义一个事件
}
```


## 二、接口与抽象类

在功能上，**接口**和**抽象类**都有抽象定义的作用，但它们的使用场景和特点不同。以下是二者的对比：

| **特性**              | **接口**                                   | **抽象类**                                |
|-----------------------|-------------------------------------------|-------------------------------------------|
| **实现**              | 只包含成员的定义，不包含实现               | 可包含部分实现或完全抽象定义               |
| **继承限制**          | 类或结构可以继承多个接口                   | 子类只能继承一个抽象类                     |
| **适用场景**          | 为不相关的类提供通用功能                  | 定义密切相关的类之间的共同行为             |
| **功能粒度**          | 小而精练，设计小功能单元                  | 设计大功能单元                            |
| **扩展性**            | 一旦发布不能更改，需通过新接口扩展         | 可通过继承实现多版本扩展                   |

使用建议：
- 如果需要为多个类提供小而通用的功能块，选择 **接口**。
- 如果要定义一组紧密相关的对象行为，或需要为组件设计多个版本，选择 **抽象类**。


## 三、接口的实现

接口的实现分为**隐式实现**和**显式实现**：
- **隐式实现**：类实现单个接口时可直接定义接口成员。例如：
  ```csharp
  public class TestBroker : IBroker
  {
      public string GetRating(string stock) => "Buy";
      public decimal PricePerTrade { get; set; }
      public decimal this[string stockName] { get; set; }
      public event Change PriceChange;
  }
  ```
- **显式实现**：当类实现多个接口，且接口成员名称冲突时，使用显式实现。显式实现需通过接口的完全限定名。例如：
  ```csharp
  public decimal IBroker.PricePerTrade
  {
      get { return pricePerTrade; }
      set { pricePerTrade = value; }
  }
  ```

完整实现示例：
```csharp
public class TestBroker : IBroker
{
    private readonly Hashtable hash = new Hashtable();
    private decimal pricePerTrade;

    public TestBroker(decimal initialPrice) // 构造函数
    {
        pricePerTrade = initialPrice;
    }

    // 隐式实现接口的方法
    public string GetRating(string stock)
    {
        return "Buy";
    }

    // 显式实现接口的属性
    decimal IBroker.PricePerTrade
    {
        get => pricePerTrade;
        set
        {
            pricePerTrade = value;
            PriceChange?.Invoke(this, value);
        }
    }

    // 实现索引器
    public decimal this[string stockName]
    {
        get => (decimal)hash[stockName];
        set => hash[stockName] = value;
    }

    // 实现接口的事件
    public event Change PriceChange;
}
```

## 四、接口的多态

当多个类实现相同的接口时，可以通过接口引用实现多态。以下示例展示了如何实现接口的多态访问：
```csharp
public class InterfaceTester
{
    public static void Main(string[] args)
    {
        ArrayList brokers = new ArrayList
        {
            new FirstBroker(7.21m),  // 添加第一个实现接口的类
            new SecondBroker(12.3m) // 添加第二个实现接口的类
        };

        foreach (IBroker broker in brokers)
        {
            broker.PriceChange += (sender, eventArgs) =>
            {
                Console.WriteLine($"Price changed to {eventArgs}");
            };

            broker["ABC"] = 15.55m; // 使用索引器
            broker.PricePerTrade = 20.00m; // 设置属性
        }
    }
}
```


## 总结

- **接口**用于定义类或结构间的协定，适合提供小而通用的功能块。
- **抽象类**提供基础功能实现，适合设计关系密切的类之间的共同行为。
- 接口的多态性可以通过接口引用实现，进一步增强代码的灵活性和可扩展性。

