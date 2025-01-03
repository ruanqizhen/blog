---
title: "MSI Installer 中的升级"
date: "2005-11-21"
tags: 
  - "光阴片语"
---

    这是我遇到的一个 MSI Installer 的问题。

    当目标机器已经装有一个旧版本的软件，现在我们又产生了一个新的安装包，并且在新安装包中制定了升级策略。在目标机器上安装新版本软件后，发现一些文件没有被安装上。使用 MSI Installer 的修复功能，缺失的文件才被装上。

    这是 MSI Installer 的 Component 的升级策略所决定的。MSI Intaller 规范认为，所有的 Component 在不同的版本中只应有文件的更新，而不应有文件数量的增加或减少，或文件名变化。并且，MSI Installer 为了提高效率，在安装时，是先安装新文件，再删除旧版本。由于我们平时在制作 Installer 时，为了方便，没有完全保证 Component 在不同版本下保持一致。这就造成了升级策略的混乱。在安装包运行到移除旧版本这一步时，本来不应当被删掉的 Component 也被删掉了。

    一个简单的解决办法是，让 MSI Installer 先卸载旧版本，再安装新文件。具体办法是把 RemoveExistingProducts Action 向前移到 InstallValidate action 和 InstallInitialize action 之间。Platform SDK上有详细说明。 这样，在升级时，会慢一些。但不至于造成混乱。
