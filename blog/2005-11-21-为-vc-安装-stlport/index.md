---
title: "为 VC 安装 STLPort"
date: "2005-11-21"
tags: 
  - "只言片语"
---

1. 从 [www.stlport.com](http://www.stlport.com) 下载。
2. 解压缩。
3. 在你的 VC bin 路径下（VC 6 默认是 C:\\Program Files\\Microsoft Visual Studio\\VC98\\Bin），运行VCVARS32.BAT。
4. 到你的 STL Port 解压缩路径下的 src 文件夹，一次运行如下命令：  
    copy vc6.mak makefile    （如果是安装在 VC 6 下）  
    nmake clean all  
    nmake install
5. 成功 :)
