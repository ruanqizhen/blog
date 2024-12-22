---
title: "怎样根据错误代码得到错误信息"
date: "2008-07-04"
tags: 
  - "我和labview"
---

    大多数 VI 都会带有错误处理机制，所以 VI 的前面板上会有 error in/error out 控件。如果发现有返回错误代码，之间在空间边缘处点击鼠标右键，选择 Explain Error 就可以看到详细的错误信息。  
    在 Explain Error 对话框上改变错误代码，即可查看到任意一个错误代码的相关信息。也可以通过菜单 Help->Explain Error 打开这个对话框。

[![](http://byfiles.storage.msn.com/y1py-Uy_HztO1hRLpfEZCO2KkduP5bMNcArxUyzwwUDbCrgeQSpc85QHB69pGukXGL0?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1puz373G0sokfvjg6eXNjwXNFv8RwVZt2VsmvGAO9KRqejx065ah4QvKs5cgTdf01I?PARTNER=WRITER) [![](http://byfiles.storage.msn.com/y1puH18sgwegJRhklqgeRGbt3u0bTeCFyzorRIrwdklQkGuErgDipERg1VlAkdTzv9o?PARTNER=WRITER)](http://byfiles.storage.msn.com/y1pu92eP3TvpFZqwm8KZY6BZUEnW6ZJ1puN146x2ybcHqa0DIalxXOTYp_teS7uqN2g?PARTNER=WRITER)  
图1：使用 Explain Error 对话框

    如果是在程序当中需要动态的得到一个错误代码的信息，可以使用 \[LabVIEW\]\\vi.lib\\Utility\\error.llb\\Error Code Database.vi。这个 VI 可以根据输入的错误代码返回错误信息。

[《我和 LabVIEW》目录](http://ruanqizhen.spaces.live.com/mmm2008-05-17_13.22/mmm2007-10-25_18.59/mmm2007-07-26_17.23/mmm2007-07-26_17.23/mmm2007-07-26_17.23/Blog/cns!1pU-rgQVTuuWM1TX8W8PfmDA!1073.entry)
