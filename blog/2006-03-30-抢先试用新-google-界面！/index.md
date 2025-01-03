---
title: "抢先试用新 Google 界面！"
date: "2006-03-30"
tags: 
  - "码农札记"
---

 首先在 [http://www.google.com](http://www.google.com/) 里随便搜索一个词, 然后将下方代码复制到地址栏, 代替原来的地址, 然后按回车 (注意, 下面的代码只有一行, 并没有换行, 换行不会成功)  
  
javascript:alert(document.cookie="PREF=ID=fb7740f107311e46:TM=1142683332:LM=1142683332:S=fNSw6ljXTzvL3dWu;path=/;domain=."+location.href.split('/')\[2\].substr(location.href.split('/')\[2\].indexOf('google')));  
  
这时会弹出一个对话框, 点击确认。

重新进入 google，你就能看见新版的 Google 搜索界面了 :)
