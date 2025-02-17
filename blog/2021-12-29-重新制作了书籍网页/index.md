---
title: "重新制作了书籍网页"
date: "2021-12-29"
tags: 
  - "码农札记"
  - "我和labview"
---

最近学习了 React，并借助 Docusaurus 重新制作了书籍网页：[https://lv.qizhen.xyz/](https://lv.qizhen.xyz/)

实际上，Docusaurus 已经帮我做了绝大部分工作，React 技能几乎没派上用场，毕竟书籍的格式还是比较简单固定的，不需要非常炫酷的界面。

之前我使用 Docsify 制作网页，对其简洁的界面和实用的功能一直很满意。然而，Docsify 的最大问题在于它采用客户端渲染，导致搜索引擎无法有效爬取页面内容。在墙外，Google 几乎垄断了搜索市场，但它对客户端渲染页面的支持并不理想。国内的搜索市场竞争虽然激烈，但各大引擎在这方面表现得比 Google 更差。因此，为了提高网页的可见性和 SEO 效果，我决定寻找更适合服务端渲染的工具，最终选择了 Docusaurus。

Docusaurus 确实比 Docsify 更复杂，入门门槛也稍高。Docsify 专注于文档页面，而 Docusaurus 除了文档，还支持个人主页和博客等多种内容形式。因此，Docusaurus 的配置和插件系统更为复杂，但灵活性也更高。Docusaurus 支持服务端渲染，生成静态 HTML 页面，这使得 Google 可以顺利爬取我的网页内容。尽管国内搜索引擎目前依然无效，但问题可能出在我的域名未通过工信部认证，而非 Docusaurus 本身的限制。与 Docsify 的“所见即所得”不同，Docusaurus 需要经过 build 步骤才能生成最终页面，这对初学者来说可能有些不习惯。此外，作为较新的工具，Docusaurus 的中文资料相对较少，但社区活跃，更新速度快。

尽管学习曲线略陡，但 Docusaurus 的整体体验非常令人满意。特别是在 SEO、功能扩展和界面设计上，Docusaurus 显示出强大的潜力和灵活性。
