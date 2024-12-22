---
title: "美化程序 - 隐藏程序框图上的大个 Cluster"
date: "2006-07-28"
tags: 
  - "我和labview"
---

    在编写某些程序的时候可能会遇到如图1 所示的情形：即用到了一个极为复杂的数据类型常量。 这个常量由于体积巨大，使得在程序框图无论怎么摆放都让人看起来不太舒服。如何才能把这个程序改造得美观一些呢？

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFf05lBiIlYMMhEYBBDfd6soFTESd1Lv1jygdef1lP_tq7c1xpRz7NoeAhBJG0S9lcAqfGWb9m-sbhQww5hrB-amSkCL5hSOZ-hRHC-0uLivrvCrZAcAnSyc)

**图1：体积巨大的常量会有碍观瞻**

   要解决这个问题，只有设法把这个常量在主程序框图上隐藏起来。通常可以用以下两种方法。  
    第一种方法：把这个常数变换成控件，再把控件隐藏起来。这种方法比较简单，但是也有弊病。①容易引起误解：控件一般表示有值传入，其他人读程序读到这里就可能搞不清楚这个值是从哪里传来的了；②如果要修改常量 Cluster 中某一个元素的值，操作起来比较麻烦。

    第二种方法，也就是我向大家推荐的：把它隐藏到更深层的子 VI 中去。具体操作方法如下：

    如图2 先给这个复杂数据类型建立一个 Strict Type Def。我的建议是为所有程序中用到的 Cluster 都建立一个 Strict Type Def。这样可以为以后的程序维护省去很多麻烦。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFf05lBiIlYMMms1oJmhHDbLR1-bY6tX54r54DEQtNPpNfZ88p2xZTIkqnYB0EnCM6kyIm6SL0oF--rQ8OepX-J4o_pwOqpzyCDvV3vvohYGc9ELqsZk7Qm0)

**图2：Strict Type Def.**

    然后然后再建立一个新的 VI，把我们要隐藏的这个个头巨大的常量摆放在这个 VI 中，并且连接一个 Indicator ，以把它的值传出来。VI 的接线板采用 4-2-2-4 格式的，最下层第 3 个接线端用于传出 VI 中唯一的数据，如图3 所示。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFf05lBiIlYMM1c8n_Nv3oGQveb09lSEGg8k_8V8bR3lhmA92wonULmGcgJ7Jjy_JlS-TGa-sDpjqq4eTol6cbSNoHpLTM6jOtHl-UxBamTL1HOj0oLzGm-M)

**图3：用于隐藏个头巨大常量的 VI**

    这个 VI 的图标要做得小巧漂亮，如图4，图标不一定非要做成正方形。只要 B&W 和 256 Colors 中的图标形状一样，我们就可以画出不规则图标了。详细方法可以参考[《制作不规则图形的子VI图标》](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!2745.entry)。

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFf05lBiIlYMM2srHAqxFN-eSX8B0EroTVm_GJOZkyK5AzkdJiyx7CY0rrkEV7JxfrJf95Ww05m4Dq1VRvYKmzM-QQ5AEFs9fl5YujPTDQJPD5w0nW8330Zo)

**图4：常量数据 VI 的图标**

    把这个新造出来的常量数据 VI 拖到程序框图上，把它的输出链接到刚才链接常量的地方，再把位置摆放好。现在我们的程序是不是漂亮多了![](images/smile_teeth.gif)

![](http://tkfiles.storage.msn.com/x1pnp_rgmi5o50VQfbvYrXGFWt-YvwkoWTbRz90UMe2y16T9Sra_uTOb0UfKx0PWv5chMh6XOv4frmiUqqq4A3f2JaSOSS1JRz9UI7kK2aUPSV4f4PuAbLuVRNrrzYaLyd-Yz6vzrb5Qws)

**图5：改造后的程序框图**

 相关文章：

    [《我和 LabVIEW》的其他文章](http://ruanqizhen.spaces.msn.com/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)

     [用户自定义控件中 Control, Type Def. 和 Strict Type Def. 的区别](http://ruanqizhen.spaces.live.com/blog/cns!5852D4F797C53FB6!1825.entry)

  
