---
title: "查看一段代码的运行时间"
date: "2007-12-29"
tags: 
  - "我和labview"
---

    有时候调试或者测试一段程序的时候，需要查看这段程序到底运行了多少时间。这里的时间还不同于程序所[消耗的CPU时间](http://ruanqizhen.spaces.live.com/mmm2007-07-26_17.23/blog/cns!5852D4F797C53FB6!1738.entry)，而就是指程序运行一遍直观的耗时。一般，编写一段简单程序就可以完成这个工作了，如下图所示。使用一个顺序结构，在被测程序开始前，记录下当前时间，程序运行结束在查看一下当前时间，差值就是程序运行的时间。

[![](http://byfiles.storage.msn.com/y1pIcO_924THoeos_P2svSOwqz2xmadR5aJuzbXcZfzFJsT0v1XnS-aBgsnHQrIMDsUDIe_3ZoMHrY?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THod2jlBjHZhjpooiMHzfNUlE1s1kM3p8xhMkH8Tj1TlRnDzpQWsO6XRuA6Ht1rRLc_o?PARTNER=WRITER)

    不过还可以再懒惰一点，仅使用一个时间顺序结构也能完成同样的工作，如下图所示，Frame Duration 与上图的 x-y 含义相同。

[![](http://byfiles.storage.msn.com/y1pIcO_924THofyYgtykcNG6y2gfzx8suciSy8PWhXA2Axy-MtzONVESfzQaCSikYpGaW37YydBC2c?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pIcO_924THofatqU4EBbhnrRJocke8mt1pYWVJX-SQgKoXPhFQMBygQ0dGaIutXlntAaJ_v_2XZY?PARTNER=WRITER)

    着两种方法的最小精度都是1毫秒，更快的速度就测不了了。

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2007-10-25_18.59/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
