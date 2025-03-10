---
title: "整合 wiki, blog 和 forum"
date: "2006-08-22"
tags: 
  - "码农札记"
---

现在，Wiki、Blog 和论坛都已经成为我工作中不可缺少的工具了。它们各有优缺点：

在 Wiki 上，任何人都可以对文章进行修改。所有修改历史都会被记录下来，用户可以方便地查看每个文档的历史版本。因此，Wiki 非常适合用于发布组织规范、制度等文档。它的最大缺点是无法对单篇文章发表评论。如果强行在原文下方添加评论，会破坏原文的版本更新记录。这确实是个让人头疼的问题，因为很多时候我们希望在阅读文档的同时进行讨论。

Blog 解决了发表评论的问题，读者可以对文章发表评论并提供反馈。这使得作者可以更好地了解读者的想法，并及时进行调整。然而，它也丧失了 Wiki 的优点。通常，一个 Blog 站点只有一个人发布文章，作者可以修改自己发布的文章，但历史记录无法保存下来。这意味着我们很难追溯文章的修改过程，也无法方便地回溯到之前的版本。所以 Blog 更适合个人使用，用于发表看法和收集反馈。当然，也可以用于为某个项目收集反馈，但协作性就稍差一些。

论坛和 Blog 的区别主要在于分类方法。Blog 是按作者分类的，而论坛则是按照文章内容分类的。当你对某一个话题感兴趣，想查看其他人对它的看法时，论坛的形式更为适合。它提供了一个集中的讨论场所，让大家可以围绕共同的主题进行交流。现在，很多论坛和 Blog 已经结合在一起了。网站的数据只有一份，但可以根据作者分类查看文章，看上去像个 Blog；按照文章内容分类时，又像是论坛。这其实已经是一种简单的整合尝试了。

我想一定有人已经考虑过将这三者整合在一起的想法，但目前还没有见到成熟的产品。这样的网站应当具备以下功能：进入网站后，读者可以选择按照文章内容查看，还是按照组织或个人作者查看。其中组织是由若干个成员组成的，发表在组织入口下的文章，每个组织成员都可以进行修改，而读者不能修改非自己组织的文章。读者可以对网站的所有文章发表评论，但除评论发布者外，其他人不能对评论进行修改。网站的所有文章的修改记录都应被保存下来，读者可以查看文章的旧版本内容。这样，我们就既拥有了 Wiki 的版本控制和协作编辑能力，又拥有了 Blog 和论坛的评论和主题讨论功能，岂不美哉？

