---
title: "Lucene contrib（贡献软件）下常用模块的功能"
date: "2011-07-07"
tags: 
  - "码农札记"
---

Lucene 是一个开源的搜索引擎，它的基本功能是对文本建立索引，帮助快速找到包含关键字的文档。Lucene被广泛的应用到了各种软件中，目前当需要在软件中添加搜索功能时，工程师都首先会想到借助Lucene。虽然Lucene只具备基本的文本索引和搜索功能，但广大工程师在实际应用中对它进行了扩展，添加了大量高级功能，并且将他们的改进贡献了出来。一些最为常用的功能也被收录到了Lucene的发布包中，被放置在contrib文件夹下。

网上对这些附加的模块的介绍比较少，我最近自己研究了一下它们的功能。用于我工作中使用的是Lucene.net，所以我只查看了.net版Lucene所带的功能，可能比java版得要少。

- Analyzers\\Lucene.Net.Analyzers\\AR  
    阿拉伯语 Analyzer
- Analyzers\\Lucene.Net.Analyzers\\BR  
    巴西语 Analyzer
- Contrib.Net  
    提供了一个按字母分词的分析器，可以用于子字符串搜索
- DistributedSearch  
    这个项目居然连个工程文件也没提供，所以我也没实验它。从名字来看，大概可以做分布式搜索的。
- FastVectorHighlighter.Net  
    这是一个用于在目标文档中高亮关键词的库。它的功能较Highlighter.Net更为复杂。但是在我所实验的 Lucene.net 2.9.2版本中，它存在严重bug，根本无法使用。
- Highlighter.Net  
    具备简单的高亮关键词的功能。可以把索引中保存的文本拿出来，然后把搜索词从中挑出来。
- Queries.Net  
    这个工具包由多个功能组成：

- MoreLikeThis  
    输入一段文字，然后它可以根据输入的文本生成一个查询语句，在索引库中查找与输入文本类似的文档。它可以用来制作推荐系统：用户找到了一个文档之后，我根据这个文档的内容给用户推荐一些类似的文档。
- FuzzyLikeThis  
    一个用于模糊查找的查询解析器，与lucene自带的FuzzyQuery功能类似，但是使用起来更加简便。
- BoostingQuery  
    允许在查询的时候，设置“上下文词”和提升分数。若搜到的目标文档中包含有“上下文词”，则对目标文档的得分做相应提升（也可以使降低）。
- TermsFilter  
    可以设定一组词作为过滤器，把包含了任意一个词的文档滤出来。

- Similarity.Net  
    包含了MoreLikeThis这一功能。与Queries.Net中那个MoreLikeThis一摸一样。  
    
- Snowball.Net  
    用于词根搜索。西方语言，一个词义会有名词动词等不同词性，在做词根搜索，忽略一个词语的词性和时态，把包含这个词任何一种变换形式的文档都搜出来。
- Spatial.Net  
    为搜索加入距离限制。可以用于地理信息搜索，比如搜索当前位置一公里范围内的加油站。
- SpellChecker.Net  
    如果用户查询的词找不到答案，很可能是拼写错了。这个模块可以给出正确拼写建议。
- WordNet.Net  
    实现同义词搜索。WordNet也是一个开源软件，它是一个字典，也包含了查同义词的功能。
