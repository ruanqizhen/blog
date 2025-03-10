---
title: "医用软件概述"
date: "2006-02-25"
tags: 
  - "天马行空"
  - "久病成医"
---

## 摘要

科技进步将人类带入了信息时代，计算机已成为各行各业业务处理与管理工作中不可或缺的工具，并对各行业的发展起到了日益重要的推动作用。计算机信息管理技术的应用，不仅能在很大程度上代替人工操作、减少人员工作量、减轻工作负担、降低工作失误，更重要的是能够建立准确、高效、便捷的信息流通渠道，为工作提供所需精准、及时的信息，辅助决策者做出正确而及时的决策，从而为应用该技术的单位带来显著的效益。

为充分利用计算机信息技术，促进我国医疗卫生事业的快速发展，国家早在1996年就启动了金卫工程，旨在构建全国医疗卫生系统的信息高速公路，实现各卫生机构信息传递的网络化、信息化。伴随我国医疗卫生信息网络的建设，医院也将建设自身的信息系统列入了重要议程。实践证明，建设一套适合自身需求的、实用的医院信息系统，对提升医院的经济效益、社会效益、管理水平及医疗质量都大有裨益。

## 一、医院信息系统 (HIS)

医院信息系统（Hospital Information System, HIS）在国际学术界已被公认为新兴的医学信息学（Medical Informatics）的重要分支。美国该领域的著名教授Morris Collen于1988年曾著文为HIS下了如下定义：利用电子计算机和通讯设备，为医院各部门提供病人诊疗信息和行政管理信息的收集、存储、处理、提取和数据交换能力，并满足所有授权用户的功能需求。

一个完整的医院信息系统（Integrated Hospital Information System, IHIS）应包含医院管理信息系统（Hospital Management Information System, HMIS）与临床信息系统（Clinical Information System, CIS）。

*   **医院管理信息系统（HMIS）** 的主要目标是支持医院的行政管理与事务处理业务，减轻事务处理人员的劳动强度，辅助医院管理，辅助高层领导决策，提高医院的工作效率，从而使医院能够以较少的投入获得更好的社会效益与经济效益。财务系统、人事系统、住院病人管理系统、药品库存管理系统等属于HMIS的范畴。

*   **临床信息系统（CIS）** 的主要目标是支持医院医护人员的临床活动，收集和处理病人的临床医疗信息，丰富和积累临床医学知识，并提供临床咨询、辅助诊疗、辅助临床决策，提高医护人员的工作效率，为病人提供更优质、更高效的服务。医嘱处理系统、病人床边系统、医生工作站系统、实验室信息系统（LIS）、放射科信息系统（RIS）等属于CIS的范畴。

相较而言，HMIS所需资源较少，在磁盘容量、工作站数量、网络传输能力、显示器质量等方面的要求均低于CIS。支持HMIS的计算机技术相对成熟和简单。由于HMIS以处理文字和数字类数据为主，较少涉及声音、图像、多媒体数据的动态传递等复杂需求，因此实现起来相对容易。CIS在数据处理的实时性、响应速度、安全保密性等方面通常比HMIS有更严格的要求。从投入与产出角度考虑，许多医院管理者认为HMIS相较于CIS，能够使医院更直接、更明显、更迅速地获得回报，即以较少的投入获得较大的收益。当然，HMIS和CIS也不是截然分开的，HMIS中常常会涉及一些病人的临床信息，特别是其收集的病人主索引、病案首页等信息往往是CIS以病人为中心的临床医疗信息的基础。而CIS一旦建立，也往往会使HMIS工作更加准确和高效。

## 二、医院信息系统子系统的划分

医院信息系统包含的内容繁多复杂，根据其在医院的实施顺序，大致可以分为以下几个阶段：

1.  **管理信息系统（HMIS）：** 通常包括：门急诊挂号子系统、门急诊病人管理及计价收费子系统、住院病人管理子系统、药库/药房管理子系统、病案管理子系统、医疗统计子系统、人事/工资管理子系统、财务管理与医院经济核算子系统、医院后勤物资供应子系统、固定资产/医疗设备管理子系统、院长办公综合查询与辅助决策支持系统等。

2.  **临床信息系统（CIS）：** 可能包含的内容非常广泛，甚至可能是专科、专病、专课题的信息处理系统，例如：住院病人医嘱处理子系统、护理信息系统、医生工作站系统、临床实验室信息系统（LIS）、医学影像诊断报告处理系统、放射科信息系统（RIS）、手术室管理子系统、病理科信息系统、血库管理子系统、营养与膳食计划管理子系统、临床用药咨询与控制子系统等。

3.  **医院信息系统的高级应用：** 这一阶段主要包括医学图像的存储与传输系统（PACS）、病人床边信息系统、计算机化病人病案系统（CPR/EMR，电子病历）、科研支持系统、教学支持系统、互联网医学信息系统、远程医疗与教学等。

## 三、开发医院信息系统的意义

过去，我国医院的信息处理主要依赖手工方式，劳动强度大、工作效率低，医护人员和管理人员的大量时间都消耗在事务性工作上，导致“人不能尽其才”；病人排队等候时间长，就诊流程繁琐，影响了医院的秩序和患者体验；病案、临床检验、病理检查等宝贵的数据资料检索困难，甚至难以实现；手工方式也无法对这些资料进行深入的统计分析，无法充分应用于医学科研；在经济管理上也容易出现漏、跑、错、费等现象；医院物资管理由于信息不准确，容易造成积压和浪费，导致“物不能尽其用”。开发HIS是解决上述问题的有效途径。HIS的有效运行将提高医院各项工作的效率和质量，促进医学科研和教学；减轻各类事务性工作的劳动强度，使医护人员能够投入更多的时间和精力服务于病人；改善经营管理，堵塞管理漏洞，保障病人和医院的经济利益，为医院创造经济效益。

完整的HIS实现了信息的全过程追踪和动态管理，从而简化患者的诊疗过程，优化就诊环境，改变目前排队多、等候时间长、秩序混乱的局面。例如，目前多数医院就诊必须经过挂号、等候病历、划价、收费、取药或治疗等一系列过程，一个患者至少需要排几次队，耗费大量时间。实施HIS后，每个病人用于诊疗中间环节的时间会大幅度减少，从而显著提升患者就医体验。HIS的实施也强化了医院内部管理，降低了医护人员的工作强度，减少了人为误差和漏洞，加速了资金周转，减少了药品、器械等物资积压。HIS的效益不仅体现在医院内部，更重要的是其对医院管理、医疗质量和医学研究的长期效应带来的综合效益。完整的病人医学记录是医学研究的重要信息资源，这类资源在手工作业环境下大部分被浪费了，而HIS则可以有效地保存和利用这些宝贵的数据。

## 四、医院信息系统的特点

医院信息系统是迄今为止世界上现存的企业级信息系统中最复杂的一类。这由医院本身的目标、任务和性质决定。它不仅要像其他所有管理信息系统（MIS）一样追踪管理伴随人流、财流、物流所产生的管理信息，从而提高整个医院的运作效率，而且还应支持以病人医疗信息记录为中心的整个医疗、科研活动。

广义地说，医院管理信息系统是MIS在医院环境的具体应用。它具有以下一些特性：

1.  **强大的数据管理能力：** 具有大规模、高效率的数据库管理系统，支持医院快速、动态增长的信息量。

2.  **强大的联机事务处理能力（OLTP）：** 能够高效处理大量的并发事务请求，保证数据的实时性和一致性。

3.  **高可用性和可靠性：** 典型的7天/24小时不间断运行系统，具有高安全性和高可靠性，保障医疗服务的连续性。

4.  **用户友好性：** 易学易用的用户界面，降低用户的使用门槛。

5.  **可定制性和可扩展性：** 能够根据不同医院的需求进行定制和扩展，适应医院的发展规划。

6.  **模块化和集成化：** 采用模块化结构，方便系统的扩展和集成，实现不同系统之间的数据共享和协同工作。

7.  **符合行业标准和规范：** 符合国家和行业的医疗信息标准和规范，例如电子病历基本规范、医院信息系统基本功能规范等。

8.  **良好的开放性和可移植性：** 适应不同的硬件和软件平台，支持多种关系型数据库和操作系统。

9.  **先进的技术架构：** 采用先进的硬件和软件技术，保证系统的性能和安全性。

## 五、医院信息系统的发展历史与现状

发达国家医院信息系统的开发和应用已有数十年的历史，取得了长足的进步，涌现出许多公认的成功案例。

纵观国外HIS的发展历史，大致可分为几个阶段：早期主要集中在开发医院行政管理功能，如财务收费管理、住院病人和门诊病人管理等。随后，开发的重点转向医疗信息的处理领域，如病人医疗处理系统、实验室信息系统等。随后，研究者将重点放在了病人床边系统（Bedside Information System）、医学影像的存储与传输系统（Picture Archiving and Communication System, PACS）、计算机化病人病案（Computer-Based Patient Record, CPR/EMR，即电子病历）、统一的医学语言系统（Unified Medical Language System, UMLS）等方面。医院信息系统正朝着小型化（Downsizing）、智能化（Intelligence）和集成化（Integration）的方向发展。

我国医院信息系统的研发工作始于20世纪80年代初期，至今已有数十年历史，经历了单机单任务阶段、多机多任务阶段以及微机网络一体化阶段，取得了显著进步。HIS的应用已涉及诸多方面，一些子系统的功能（例如财务账目管理、药品库存管理、住院病人管理等）也日趋完善。然而，我国在大型综合性医院中真正实现完整HIS的案例仍然相对较少。医院对信息的需求始终是HIS发展的原动力。进入20世纪90年代以来，一些在计算机技术应用方面积累了经验、或成功运行了某些部门级信息系统的医院，迫切希望从国内外市场上寻求一套较为完整、适合中国国情的HIS产品。专家们也呼吁国家卫生部门及有关部门集中优势力量，投入资金、人力和物力，开发一套适合中国市场的、具有中国特色的HIS，以满足医院的迫切需求，并进而推动整个中国医药卫生信息产业的形成。

在中国医院信息系统（CHISC/SV1.0）正是在这种形势下诞生的。CHIS的开发成功及在试点医院的成功运行，使其成为我国HIS研究、开发和应用的新里程碑，标志着我国医院计算机应用进入了一个新阶段——完整HIS的应用与推广阶段。CHIS的研制成功和实际应用与推广，使我国医院计算机应用水平与国际先进水平的差距至少缩短了数年。

## 六、医院管理软件与数字医院

医院管理系统的广泛应用已为人们所熟知，但随着信息技术的迅猛发展，其系统的局限性和不足也逐渐显现。数字技术的进步和发展，为数字医院和数字医疗的建立和发展奠定了基础。

1.  **概念：** 数字医院（Digital Hospital）是由数字医院管理（Digital Hospital Management）和数字医疗（Digital Healthcare/Digital Medicine）构成和建立的现代医院经营和管理模式。它包括现实世界的实体医院和网络虚拟医院，从应用角度看是基于现代数字技术和计算机信息处理技术产生的网络集成管理系统。数字医院和数字医疗是现代医院管理的重要发展方向。相较于侧重管理的数字医院管理，数字医疗更加关注临床诊疗的数字化，其重要性日益凸显。目前，许多医院仍处于HIS的发展阶段，需要更加重视数字医疗的发展。

2.  **架构：** 数字医院的主体框架由数字医院管理和数字医疗构成。与传统的HIS相比，数字医院由于增加了控制和数字医疗信息，因此两者之间存在显著差异。数字医疗涵盖的范围更广，包括远程医疗、移动医疗、人工智能辅助诊断、基因组医学等新兴领域。

3.  **意义和作用：** 数字医院和数字医疗系统的建立对医院的管理和运作产生了革命性的影响：

    *   **管理模式的变革：** 医院可以实现更加智能化的管理和运营，例如通过数据分析优化资源配置、预测疾病趋势等。
    *   **融入信息社会：** 为社会提供全方位、高效、优质的医疗服务，提升医疗服务的可及性和便捷性。
    *   **打破地域限制：** 将医疗服务扩展到全球任何一个地方，实现远程会诊、远程监护等，解决医疗资源分布不均的问题。
    *   **高效利用医疗信息：** 提高医疗技术和质量，减少医疗差错，例如通过临床决策支持系统辅助医生进行诊断和治疗。
    *   **极大地方便了病人：** 改善患者就医体验，例如提供在线预约、移动支付、电子病历查询等服务。
    *   **推动医疗技术的进步和发展：** 利用“数字病人”（Digital Patient）技术，进行医学模拟、手术规划、药物研发等，加速医疗技术的创新和发展。

4.  **实践和应用：** 医院计算机辅助数字医疗系统（Hospital Computer Aided Digital treatment, HCADT）是基于数字医院和数字医疗理论的一项实践应用。它根据目前医院的临床实际情况，采用数字电子病历和计算机辅助治疗（Computer-Aided Care, CAC）等数字医疗技术，弥补了传统HIS的不足，推动医院管理迈上新的台阶。

    *   HCADT系统在数字医疗核心上采用CAC技术，并提供开放的数字医疗接口，可以充分发挥计算机辅助诊断（Computer-Aided Diagnosis, CAD）和专家系统的作用，并为数字病人技术的应用提供支撑环境。
    *   HCADT系统采用数字电子病历（Digital Electronic Health Record, EHR/EMR），可以方便地进行数据流控制，从而实现医疗管理的自动化过程和自动化控制。
    *   病人挂号、收费、计价划价、取药、诊疗过程的计算机自动化处理，极大地提高了医院临床一线的工作效率，方便了患者。
    *   HCADT系统的数字电子病历档案，对于医院的科研、临床和教学具有无可估量的价值。
    *   HCADT系统为远程医疗、社区医疗、网络门诊、虚拟社区医院和网络医疗会诊等医疗服务提供了便捷的实现途径，从而提高医院的竞争能力。

## 参考文献

1. “金卫工程” 的进展和展望 李本增 - 中国医院管理, 1998
2. 金卫工程进展 高燕婕 - 中国医院统计, 1998
3. 加强“金卫工程” 的全面建设推进卫生信息化进程 夏旭， 李健康 - 图书馆论坛, 1999
4. 医院信息系统建设与应用 傅征， 任连仲… - 2002 - 北京: 人民军医出版社
5. 医院信息系统与PACS 的融合  蒲卫， 李军 - 医疗设备信息, 2001
6. 医院信息系统建立和应用中的教训 任连仲， 汪建华 - 中华医院管理杂志, 2002
7.  医院信息系统建设的整体规划和分步实施方法  刘前进 - 中华医院管理杂志, 1999
8. 医院信息系统建设的十大问题  金新政 - 中国医院管理, 2003
9. 医学信息学  包含飞， 郑学侃 - 2002 - 上海: 上海科学技术出版社
10. 医学信息学的现状与未来  董建成 - 中华医院管理杂志, 2004
11. 实用医学信息学  丁宝芬 - 2003 - 南京: 东南大学出版社
12. 医院管理信息系统  金新政， 徐德林 - 1998 - 北京
13. 医院管理信息系统的建设与发展  雷鸣 - 中国医院管理, 2001
14. 医院管理信息系统的设计和实现  朱战立， 刘天时 - 西安石油学院学报: 自科版, 2000
15. 医院管理信息系统的管理  穆荔， 张小庄 - 中华医院管理杂志, 2000
16. 临床信息系统的设计核心  丁宝芬 - 医学信息: 医学与计算机应用, 2000
17. 医院信息系统与PACS 的融合  蒲卫， 李军 - 医疗设备信息, 2001
18. PACS 与QA, QC 的探讨  申占文， 贾琳芝， 晁月甫 - 现代医用影像学, 2004
19. 试论数字化医院的建设  施高瞻， 荆施展 - 中国现代医学杂志, 2003
20. 如何选择医院信息管理软件  任连仲 - 中华医院管理杂志, 1999
21. 医院信息管理系统在组网时应注意的几个问题  潘传迪 - 中国医院管理, 2001
22. 中国医院信息系统发展前瞻性研究  黄剑， 胡东武 - 中华医院管理杂志, 1997
23. 医院管理软件的开发 郑万松， 陈雪峰 - 中国现代医学杂志, 2002
24. 我院信息化建设的总体规划与实施  陈金雄， 吴学贵 - 中华医院管理杂志, 2002
25. 数字医院的建设与实践 王景明 - 中华现代医院管理杂志, 2003
26. 未来的数字医院系统及其关键技术  王卫东 - 医疗设备信息, 2004
27. 数字化医院现状研究与发展探讨 朱杏香 - 医学信息: 医学与计算机应用, 2001
28. 数字化医院前景展望 薛冠华 - 中国病案, 2001
29. 计算机辅助医学影像学诊断报告处理系统的开发与应用  高培毅， 林燕 - 中华放射学杂志, 199
30. 计算机辅助护理诊断系统的研究  计虹， 曲维香 - 中华医院管理杂志, 1994
31. 数字化医院建设成本效益分析  吴昊， 刘国祥， 李书章， 陈黎明 - 解放军医院管理杂志, 2004

