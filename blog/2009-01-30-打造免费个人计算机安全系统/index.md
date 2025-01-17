---
title: "打造免费个人计算机安全系统"
date: "2009-01-30"
tags: 
  - "码农札记"
---

最近一阵子，我试用了一些市面上常见的免费计算机安全相关软件，找到了两个较为适合个人计算机上使用的杀毒软件。我家用的电脑正在使用这两款杀毒软件，现在推荐给对杀毒软件不是太了解的计算机用户。

首先是小红伞（Avira），这是一款德国产的杀毒软件。它是我试验过的几款杀毒软件里杀毒率最高、系统资源占用也不高的软件。小红伞针对家庭用户有三个版本，最常用的是个人免费版和个人专业版。个人免费版已经包含了完整的监视和杀毒功能，足够个人使用了；个人专业版增加了清理间谍软件、快速升级等功能，其实用处并不太大。个人专业版是收费的，但是用户只要到小红伞的主页上递交一份申请，就可以免费获得它的使用密钥。小红伞是从傻瓜型软件，只要装上就不用再管它了。用户不需做任何配置，遇到病毒它会自己处理。适合任何用户。

另一款杀毒软件ThreatFire，原产于美国。这款杀毒软件有两个版本，个人版和商用版。两个版本功能基本相同，都具备完整的监控查杀功能。主要区别在于个人用可以免费；而商用则要收费。ThreatFire的病毒扫描功能很一般，略强于国产的X星、X霸杀毒软件，但是还不能与小红伞、卡巴斯基等相提并论。它真正擅长的是病毒监视功能。它是通过行为而非特征码来判断病毒的，类似国产的"微点"。通过行为判断病毒可以不依赖于庞大的病毒特征库，因此它在运行时占用资源极低，可以抵御新出现的未知病毒。ThreatFire的另一个非常有特色的功能是其社区功能，每个加入社区的计算机受到未知威胁后都会把信息发送给ThreatFire的服务器。ThreatFire通过统计数据就可以判断某一威胁是有害的病毒，还是一般正常操作。这样一来，不必专业人员参与，也可以自动完成定义病毒的工作。这应该是个前景看好的尝试。ThreatFile与小红伞相比占用资源低，适合给破机器用。但它的配置比较复杂，适合有一定软件知识的用户使用。

我现在是这两款软件共同使用，99%以上的已知病毒都可以被小红伞拦截住，其余漏网之鱼会被ThreatFire兜住。

不过，现在病毒还没泛滥到不可收拾的程度，并非其它杀毒软件就起不到保护电脑的作用了。一般电脑上按装上一款主流杀毒软件，就可以挡住绝大多数的威胁了。下面是我整理的一张表格，列出的都是我试用过的完全免费软件。如果是最近两三年购买的电脑，只要在每一栏中选择一款软件安上，再不用担心病毒侵犯了。  
```
<table style="border-collapse:collapse;text-align:left;margin-left:auto;margin-right:auto;" border="0"><colgroup><col style="width:277px;"><col style="width:284px;"></colgroup><tbody valign="top"><tr><td style="border:.5pt solid black;"><p><font size="3"><span style="font-size:10pt;">以查杀已知病毒为主的杀毒软件</span></font></p></td><td style="border-color:black black black 0;border-style:solid solid solid none;border-width:.5pt .5pt .5pt medium;"><p><font size="3"><span style="font-size:10pt;"><a href="http://www.free-av.com/">小红伞</a>、<a href="http://free.avg.com/">AVG</a>、<a href="http://www.avast.com/cns/download-avast-home.html">avist</a>、<a href="http://www.mozhe.com/dl/tav.html">趋势</a>、<a href="http://sd.360.cn/">360杀毒</a></span></font></p></td></tr><tr><td style="border-color:0 black black;border-style:none solid solid;border-width:medium .5pt .5pt;"><p><font size="3"><span style="font-size:10pt;">病毒防御软件，拦截新病毒</span></font></p></td><td style="border-color:0 black black 0;border-style:none solid solid none;border-width:medium .5pt .5pt medium;"><p><font size="3"><span style="font-size:10pt;"><a href="http://www.threatfire.com/cn/">ThreatFire</a></span></font></p></td></tr><tr><td style="border-color:0 black black;border-style:none solid solid;border-width:medium .5pt .5pt;"><p><span style="font-size:10pt;">辅助安全软件，清除流氓软件，检查系统漏洞等。</span></p></td><td style="border-color:0 black black 0;border-style:none solid solid none;border-width:medium .5pt .5pt medium;"><p><font size="3"><span style="font-size:10pt;"><a href="http://www.sucop.com/">超级巡警</a>、<a href="http://www.duba.net/qing/">金山清理专家</a>、<a href="http://www.arswp.com/">Windows清理助手</a>、<a href="http://www.360.cn/">360安全卫士</a></span></font></p></td></tr><tr><td style="border-color:0 black black;border-style:none solid solid;border-width:medium .5pt .5pt;"><p><font size="3"><span style="font-size:10pt;">防火墙</span></font></p></td><td style="border-color:0 black black 0;border-style:none solid solid none;border-width:medium .5pt .5pt medium;"><p><span style="font-size:10pt;">XP、Vista系统自带的防火墙</span></p></td></tr></tbody></table>

对于使用年限较长，配置较差的电脑，同时运行几款安全软件对系统的速度影响很大。对这类电脑而言，可以仅装一个ThreatFire防病毒。查杀病毒以及辅助的功能没必要频繁运行。这些功能可以交给网上杀毒工具（[百度安全中心](http://an.baidu.com/)、[金山在线杀毒](http://shadu.duba.net/)）、绿色杀毒软件（[大蜘蛛绿色版](http://www.freedrweb.com/cureit/)）和绿色辅助安全软件（[超级巡警绿色版](http://www.sucop.com/)）去完成。这些绿色软件平时不运行，不占用计算机内存和系统资源。只要每隔几个星期，进行下载更新，并运行这些绿色软件给电脑做一次扫描检查即可。

我刚参加工作时，公司里的电脑还处于奔III时代，运行的是Windows 98操作系统，并且都没有安装杀毒软件。不过，那时候病毒的主要传播途径就是文件拷贝，只要不乱安装和使用盗版软件，基本不太会中毒。我的电脑很长一段时间都平安无事，直到有一天运行了同事通过邮件发给我的一个小程序，结果，没多久电脑就瘫痪了。

公司就在一家大型超市隔壁，那里有正版的杀毒软件卖。于是我立即去买了一套正版江民杀毒软件，那时好像叫KV200。江民杀毒软件是我大学时代所用过的最牛的杀毒软件，所以我想也没想就花了将近300块钱买了它。可惜，这个软件在易用性上实在是差劲了点。当时已经是Win98的天下了。它还在使用DOS界面，必须随软盘一起运行，也没有监视功能。所以没多久，就被我淘汰了。

公司的电脑后来全部安装了Mcafee企业版防病毒软件。公司的电脑在其保护下，之后七八年没中过毒。所以，我一直认为Mcafee非常强大，给我家里电脑安装的也是同一款杀毒软件。可是，去年，我家里开通了宽带上网，网络开通还不到一个星期，我的电脑就中毒身亡了。为啥同一款杀毒软件在家里就不起作用了呢？根据我后来的调查发现，Mcafee企业版的强大之处在于网管可以为其指定各种安全规则，并发布到终端机上去。比如，不允许运行临时文件夹下的任何可执行文件、不许使用P2P软件等。但我家里的电脑是常常用来娱乐的，有了这些限制，我没法上网玩游戏、没法下载电影了，电脑也就等于没用了。所以，我移除了家用电脑上的Mcafee所有限制。没了这些规则限制，Mcafee的安全性一下子变成二流水平了，根本抵不住病毒的进攻。这件事也让我意识到，一个防病毒软件是有适用场合的。像Mcafee的主要客户都是大企业，它的产品自然会侧重企业应用而不是家庭用。

去年，我的电脑牺牲没多久，生产360安全卫士的公司就宣布要提供永久免费的杀毒软件。还宣布杀毒软件的趋势就是免费，他们的言论引来国内多家杀毒软件公司的炮轰。我非常同意360的观点，针对个人市场的杀毒软件肯定会逐步走向免费的。实际上，现在市面上的免费杀毒软件非常多。但产品免费，公司一样可以从中获利，比如在产品上携带广告、利用免费软件收集信息，提供给商用软件，再从商业软件上盈利。

我在为自己家用电脑寻找新杀毒软件的过程中，试用和比对了数款常见的杀毒软件。经过比较，我发现免费的杀毒软件，其功能与效果，一点也不比收费的差。尤其是国产的三大杀毒软件，他们面向国内客户都是收费的，但效果与国外的几款免费软件比，甚至不在一个档次上。这确实令人失望。  


```