---
title: "系统需要仪器有可互换性，但是没有相应的 IVI 类驱动程序，怎么办？"
date: "2007-03-29"
tags: 
  - "我和labview"
---

**问题(Martin)：**  
    现在想请教有关IVI的一个问题: 我在一个系统中要用到AC SOURCE并且需要使用IVI的可互换性,但是IVI并没有发布AC power 的class driver,这可能需要自己开发AC power class driver. 但我却看到NI或其他仪器公司的网站上提供基于IVI的specific driver(当然是AC source的),那labview在调用这些ac power的 specific driver时是否是通过class driver呢? 我认为不是的,那这样也应该不具有IVI的可互换性,请问是这样吗?

**回答：  
**    IVI 是还没有 AC Power 的 Class Drver，但是还是可以开发 AC Power 的 Specific Drver 的。只不过这样的 Specific Drver 就不具备可互换性了。如果一定能够需要可互换性，确实需要自己开发 Class Drver。以前好像有厂商提过要自己开发 Class Drver，但是我后来就没收到过更新的消息。自己开发 Class Drver 没有很多可以借助的工具，也没有开放的代码可供参考，恐怕困难会大一些。

返回《[技术文章和问题讨论](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!2128.entry)》

[编辑](http://ruanqizhen.spaces.live.com/?_c11_BlogPart_handle=cns!5852D4F797C53FB6!2121&_c11_BlogPart_blogpart=blogentry&_c=BlogPart&_c02_owner=1)
