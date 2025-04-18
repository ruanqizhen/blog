---
title: "生物信息学的发展、现状与展望"
date: "2006-02-25"
tags: 
  - "天马行空"
---

## 摘要
生物信息学（Bioinformatics）是生物学、计算机科学、应用数学等多学科交叉融合形成的新兴学科，是计算机技术在生命科学领域应用的杰出典范。本文旨在阐述如何运用计算机科学的方法对生物学数据进行高效的收集、筛选、编辑、整合、管理和可视化呈现，从而深入探索生物学规律，揭示生命奥秘。

## 一. 生命科学简介  
生命科学是当今世界科学发展的重要前沿领域，被誉为“21世纪的科学”。人类对生命奥秘的探索源远流长。19世纪细胞学说的创立，将生命研究推进到细胞层面。更高层次地理解生命奥秘、掌握生命本质、乃至最终实现对生老病死的有效干预，是人类孜孜以求的永恒目标。

2000年人类基因组计划的初步完成，以及水稻、牛、羊等其他生物基因组计划的相继实施，标志着人类对生命的认知跃升至分子水平，推动生命科学从定性描述性研究向定量精确性研究迈出了坚实的一步。现代生命科学研究范式与传统生物学研究模式迥然不同，亟需借助新兴技术手段探索分子层面的生命现象。信息技术与生命科学的深度融合，在基因组学、蛋白质组学、药物研发、临床医疗等领域取得了举世瞩目的成就，充分彰显了计算机科学与生命科学之间密不可分的联系。

生物信息学应运而生，它通过对生物学实验数据的获取、处理、存储、检索和深入分析，旨在揭示数据背后蕴藏的生物学意义。分子生物学的迅猛发展是推动生物信息学发展的主要动力。因此，生物信息学的研究主要集中于核苷酸和氨基酸序列的存储、分类、检索和分析等方面。狭义而言，生物信息学可定义为：将计算机科学和数学应用于生物大分子信息的获取、处理、存储、分类、检索和分析，从而理解这些生物大分子信息的生物学意义的交叉学科。广义而言，生物信息学最终将发展成为一门研究生物系统中信息现象的学科，但目前仍以分子生物学与信息技术（尤其是互联网技术）的结合为主。生物信息学的研究对象是各种生物学数据，研究工具是计算机和网络资源，研究方法包括生物学数据的搜索（收集和筛选）、处理（编辑、整理、管理和显示）以及利用（计算、模拟）。

生物信息学不仅是一门独立的科学学科，更是一种重要的研发工具。从科学角度而言，它是一门研究生物及生物相关系统中信息内容和信息流动的综合系统科学。唯有借助生物信息学的计算处理，我们才能从海量分散的生物学观测数据中获得对生命运行机制的系统性理解。从工具角度而言，它是未来生物医药研发不可或缺的驱动力。只有基于生物信息学对大量已有数据资料的分析处理所提供的理论指导，我们才能选择正确的研发方向；同样，只有选择恰当的生物信息学分析方法和手段，才能准确处理和评估新的观测数据并得出可靠的结论。

由此可见，生物信息学在未来的生物医药科研和开发中具有广泛而关键的应用价值。同时，由于生物信息学是生物科学与计算科学、物理学、化学、网络技术等密切结合的交叉学科，具有极强的专业性，使得专业的生物医药科研或开发机构难以独立承担其所需的生物信息学业务。激烈的市场竞争以及由此带来的高度专业化分工趋势，使得生物医药开发机构难以在内部解决对生物信息学服务的迫切需求，学术界内的生物科研机构亦是如此。而这种需求，仅靠分散的生物信息学科研机构是远远无法满足的。因此，在生命科学的新纪元，提供综合性的生物信息学服务将是一个至关重要且极具挑战性的领域。

## 二. 生物信息学诞生的历史必然性  

生物信息学的萌芽可以追溯到计算机发展初期。早在 1956 年，美国田纳西州的 Gatlinburg 就召开了首次“生物学中的信息理论讨论会”。然而，生物信息学的真正发展却相对滞后，直到 20 世纪八九十年代，伴随着计算机技术的飞速发展，才迎来了其蓬勃发展的时期。无论从理论还是实践层面来看，生物信息学的本质都是利用计算机科学和网络技术来解决生物学问题。它的诞生和发展顺应时代需求，是历史的必然，已悄然渗透到生物科学的各个领域，成为不可或缺的重要组成部分。

20世纪特别是末期，生物科学技术迅猛发展，极大地丰富了生物科学的数据资源。海量数据的涌现，迫切需要一种强大的工具进行组织和管理，以便存储已知生物学知识并进行后续的加工和利用。大量多样化的生物学数据资源中必然蕴含着重要的生物学规律，这些规律是破解诸多生命奥秘的关键所在。然而，继续沿用传统的人工分析方法来处理如此庞杂的数据已然力不从心。我们需要一种强大的工具来辅助人类完成这些分析工作。可以说，随着 21 世纪的到来，生物科学的重点和潜在突破点已经从 20 世纪的实验分析和数据积累转移到数据分析及其指导下的实验验证上来。生物科学也正在经历着从分析还原思维向系统整合思维的转变。

因此，我们所寻求的那种强大的数据处理和分析工具成为未来生物科学发展的关键。恰逢其时，以数据处理和分析为核心的计算机科学技术和网络技术也取得了突飞猛进的进展，自然而然地成为生物学家的必然选择。计算机科学技术和网络技术日益渗透到生物科学的各个方面，一门崭新的、蓬勃发展且拥有巨大潜力的生物信息学也随之应运而生并不断发展成熟。历史的必然性选择了生物信息学——生物科学与计算科学的融合体——作为下一代生物科学研究的重要工具。

## 三. 生物信息学的研究内容  

目前，生物信息学界的研究主要集中在基因组学、蛋白质组学、蛋白质结构以及相关的药物设计等方面，其研究内容大致包括以下几个方面：

1.. **生物信息的收集、存储、管理与提供**。包括建立国际生物信息数据库和生物信息传输的网络系统；建立生物信息数据质量的评估与检测系统；提供生物信息在线服务；实现生物信息可视化和构建专家系统。

1.1 **生物信息数据库**。数据库建设是生物信息学的重要组成部分。目前，互联网上存在着涵盖生命科学各个领域的数据库，例如，核酸序列数据库有GenBank、EMBL、DDBJ等，蛋白质序列数据库有SWISS-PROT、PIR、OWL、NRL3D、TrEMBL等，三维结构数据库有PDB、NDB、BioMagResBank、CCSD等，与蛋白质结构相关的数据库还有SCOP、CATH、FSSP、3D-ALI、DSSP等，与基因组相关的数据库有ESTdb、OMIM、GDB、GSDB等，文献数据库有Medline、Uncover等，以及其他数百种数据库。一些公司还开发了商业数据库，如MDL等。

1.2 **生物信息数据库发展现状**。数据库内容的爆炸性增长是生物信息学数据库的重要特征，这主要得益于基因组计划的实施。除了数量上的增长，数据库的复杂程度也在不断提高，包含大量的注释、参考文献及软件，并通过链接将相关内容与其他数据库连接起来。数据库结构层次的加深客观上要求管理的进步，面向对象数据库管理方法正逐步取代传统的模式。在基因组相关数据库的发展中，以下几个方面尤为重要：建立基因组信息的评估与检测系统；实现数据标准化；进行基因组信息的可视化和专家系统研究；发展次级和专业数据库。用户与数据库之间快速有效地传递信息是基因组信息的收集、管理与使用的关键要素。目前，与基因组信息相关的数据库都拥有自己的互联网地址和主页，互联网上也涌现出许多相关的在线服务器。

1.3 **生物信息学网络上的数据库服务进展**。生物信息学各个领域的软件数量庞大，并行算法、遗传算法、面向对象算法、并行虚拟机技术等已被应用于最新的程序中。生物信息学数据库覆盖面广、分布分散且格式不统一。因此，一些生物计算中心将多个数据库整合在一起提供综合服务，构建数据库的一体化和集成环境。生物信息网格中的数据库服务广泛采用服务器-客户端模式。这些服务器包括大量的数据库搜索和序列比对服务器以及各专业领域的服务器，甚至有服务器将各种搜索算法硬件化，实行并行计算和先进的内存管理，从而大幅提高搜索速度。我国在基因组信息的收集与提供方面也取得了一定的进展：北京大学物理化学研究所建立了PDB数据库中国节点；北京大学生命科学院建立了EMBL数据库的中国节点；中国科学院生物物理所与日本JIPID合作，收集中国科学家测定的DNA和蛋白质序列，并与国际相应数据库进行交流；中国医学科学院肿瘤研究所建立了NEE-HOW服务器等。相信这一领域在我国将迅速发展。

2.. **基因组序列信息的提取和分析**。包括基因的发现与鉴定，如利用国际EST（Expressed Sequence Tags）数据库（dbEST）和各自实验室测定的相应数据，经过大规模并行计算发现新基因和新SNPs以及各种功能分析；基因组中非编码区的信息结构分析，提出理论模型，阐明该区域的重要生物学功能；进行模式生物完整基因组的信息结构分析和比较研究；利用生物信息研究遗传密码起源、基因组结构的演化、基因组空间结构与DNA折叠的关系以及基因组信息与生物进化关系等生物学的重大问题。

2.1 **新基因的发现**。包括通过计算分析从EST序列库中拼接出完整的新基因编码区，即“电子克隆”；通过计算分析从基因组DNA序列中确定新基因编码区。经过多年的积累，已形成许多分析方法，如根据编码区特有的序列特征、根据编码区与非编码区在碱基组成上的差异、根据高维分布的统计方法、根据神经网络方法、根据分形方法和根据密码学方法等。

2.2 **非蛋白编码区生物学意义的分析**。非蛋白编码区约占人类基因组的95%，其生物学意义尚未完全阐明。但从进化角度来看，其中必然蕴含着重要的生物学功能。由于它们不编码蛋白，一般认为其生物学功能可能体现在对基因表达的时空调控上。对非蛋白编码区进行生物学意义分析的策略有两种：一是基于已实验证实的功能已知的DNA元件的序列特征，预测非蛋白编码区中可能含有的功能已知的DNA元件，从而预测其可能的生物学功能，并通过实验进行验证；二是直接通过数理理论探索非蛋白编码区新的未知序列特征，并从理论上预测其可能的信息含义，最后同样通过实验验证。

3.. **功能基因组相关信息分析**。包括与大规模基因表达谱分析相关的算法、软件研究，基因表达调控网络的研究；与基因组信息相关的核酸、蛋白质空间结构的预测和模拟，以及蛋白质功能预测的研究。

3.1 **基因组整体功能及其调节网络的系统把握**。仅掌握基因组中部分基因的表达调控远不足以把握生命的本质，因为生命现象是基因组中所有功能单元相互作用的共同结果。基因芯片技术可以监测基因组在不同时间节点的整体转录表达状况，因此成为该领域一项非常重要和关键的实验技术。对该技术产生的大量实验数据进行高效分析，从中获得基因组运转以及调控的整体系统机制或网络机制，是生物信息学在该领域中首先要解决的问题。

3.2 **基因组演化与物种演化**。仅依靠某些基因或分子的演化现象来阐明物种整体的演化历史并不完全可靠。例如，人与黑猩猩之间有98%-99%的结构基因和蛋白质是相同的，但表型上却存在巨大差异。这提示我们基因组整体组织方式而非个别基因在研究物种演化历史中起着重要作用。由于基因组是物种所有遗传信息的储存库，从根本上决定着物种个体的发育和生理，因此，从基因组整体结构组织和整体功能调节网络方面，结合相应的生理表征现象，进行基因组整体的演化研究，将是揭示物种真实演化历史的最佳途径。

4.. **蛋白质组学研究**。基因组对生命体的整体控制必须通过其表达的全部蛋白质来执行。由于基因芯片技术只能反映从基因组到RNA的转录水平上的表达情况，且从RNA到蛋白质还有许多中间环节的影响，因此仅凭基因芯片技术还不能最终掌握生物功能具体执行者——蛋白质的整体表达状况。因此，近年来在发展基因芯片的同时，人们也发展了一套研究基因组所有蛋白质产物表达情况的蛋白质组学技术，从技术上来讲包括二维凝胶电泳技术和质谱测序技术。通过二维凝胶电泳技术可以获得某一时间截面上蛋白质组的表达情况，通过质谱测序技术就可以得到所有这些蛋白质的序列组成。关键在于如何运用生物信息学理论方法去分析所得到的巨量数据，从中还原出生命运转和调控的整体系统分子机制。

5..  **蛋白质结构和功能的预测**。结构基因组和蛋白质组研究的迅猛发展，涌现出许多新的蛋白序列。然而，仅有氨基酸序列远不足以了解它们的功能，因为蛋白质的功能是通过其三维结构来实现的，且蛋白质三维结构并非静态的，在行使功能的过程中其结构也会相应改变。因此，获得这些新蛋白的完整、精确和动态的三维结构成为一项紧迫的任务。目前，除了通过X射线衍射晶体结构分析、多维核磁共振（NMR）波谱分析和电子显微镜二维晶体三维重构（电子晶体学，EC）等物理方法得到蛋白质三维结构之外，另一种广泛使用的方法是通过计算机辅助预测。目前，一般认为蛋白质的折叠类型只有数百到数千种，远小于蛋白质所具有的自由度数目，且蛋白质的折叠类型与其氨基酸序列具有相关性，因此有可能直接从蛋白质的氨基酸序列通过计算机辅助方法预测出蛋白质的三维结构。

6..  **生物大分子结构模拟和药物设计**。包括RNA的结构模拟和反义RNA的分子设计；蛋白质空间结构模拟和分子设计；具有不同功能域的复合蛋白质以及连接肽的设计；生物活性分子的电子结构计算和设计；纳米生物材料的模拟与设计；基于酶和功能蛋白质结构、细胞表面受体结构的药物设计；基于DNA结构的药物设计等。近年来，随着结构生物学的发展，相当数量的蛋白质以及一些核酸、多糖的三维结构获得精确测定，基于生物大分子结构知识的药物设计成为当前的热点。生物信息学的研究不仅可提供生物大分子空间结构的信息，还能提供电子结构的信息，如能级、表面电荷分布、分子轨道相互作用等以及动力学行为的信息，如生物化学反应中的能量变化、电荷转移、构象变化等。理论模拟还可研究包括生物分子及其周围环境的复杂体系和生物分子的量子效应。

7..  **生物信息分析的技术与方法研究**。包括发展有效的能支持大规模作图与测序需要的软件、数据库以及数据库工具，诸如电子网络等远程通讯工具；改进现有的理论分析方法，如统计方法、模式识别方法、隐马尔科夫过程方法、分维方法、神经网络方法、复杂性分析方法、密码学方法、多序列比较方法等；创建一切适用于基因组信息分析的新方法、新技术，包括引入复杂系统分析技术、信息系统分析技术等；建立严格的多序列比较方法；发展与应用密码学方法以及其他算法和分析技术，用于解释基因组的信息，探索DNA序列及其空间结构信息的新表征；发展研究基因组完整信息结构和信息网络的研究方法等；发展生物大分子空间结构模拟、电子结构模拟和药物设计的新方法与新技术。

8..  **应用与发展研究**。汇集与疾病相关的人类基因信息，发展患者样品序列信息检测技术和基于序列信息选择表达载体、引物的技术，建立与动植物良种繁育相关的数据库以及与大分子设计和药物设计相关的数据库。

生物信息学的任务远不止于此。在以上工作的基础上，最重要的是如何运用数理理论成果对生物体进行完整系统的数理模型描述，使人类能够从更明确的角度和更易于操作的途径来认识和控制自身以及其他生命体。

## 四. 生物信息学发展的现状  

随着基因组计划的不断推进，我们拥有的海量数据必须通过生物信息学的手段进行收集、分析和整理，才能转化为有用的信息和知识。只有经过生物信息学手段的分析处理，我们才能获得对基因组的正确理解。因此，可以说人类基因组计划为生物信息学提供了兴盛的契机，创造了巨大的发展空间。生物信息学已深入到生命科学的方方面面。

国外一直非常重视生物信息学的发展，各种专业研究机构和公司蓬勃发展，生物科技公司和制药工业内部的生物信息学部门也日益增多。但由于对生物信息学的需求非常迅猛，即使是像美国这样的发达国家也面临着供不应求、人才匮乏的局面。近年来，英国鉴于国内对生物信息学专业人才日益迫切的需求，所有主要的研究资助机构：医学研究委员会（MRC）、生物技术和生物科学研究委员会、工程学和物理科学研究委员会（EPSRC）、粒子物理和天文学研究委员会（PPARC）和Wellcome Trust不仅达成共识，认为应该高度优先地满足对生物信息学技术的需求，而且已经实现了对生物信息学人才培养的大力资助。

事实上，欧美等发达国家在生物信息方面已有较长时间的积累。从数据库的角度来讲，早在60年代，美国就建立了手工搜集数据的蛋白质数据库。美国洛斯阿拉莫斯国家实验室1979年就已建立起GenBank数据库，欧洲分子生物学实验室1982年就已提供核酸序列数据库EMBL的服务，日本也于1984年着手建立国家级的核酸序列数据库DDBJ并于1987年开始提供服务。从专业机构的角度来讲，美国于1988年在国会的支持下成立了国家生物技术信息中心（NCBI），其目的是进行计算分子生物学的基础研究，构建和发布分子生物学数据库；欧洲于1993年3月着手建立欧洲生物信息学研究所（EBI），日本也于1995年4月组建了自己的信息生物学中心（CIB）。从数据分析技术的角度来讲，早在1962年，Zuckerkandl和Pauling就将序列变异分析与其演化关系联系起来，从而开辟了分子演化的崭新研究领域；1964年，Davies开创了蛋白质结构预测的研究；1970年，Needleman和Wunsch发表了广受重视的两序列比较算法；1974年，Ratner首次运用理论方法对分子遗传调控系统进行处理分析；1975年，Pipas和McMahon首次提出运用计算机技术预测RNA二级结构；随着1976年之后大量生物学数据分析技术的涌现，《科学》杂志于1980年第209卷就发表了关于计算分子生物学的综述；正如我们现在所看到的，在八九十年代，生物学数据分析技术在国外更是获得了突飞猛进的发展。从专业出版业来看，由于起初没有专门的期刊，专业文献都散落在其他领域的期刊中；到了1970年，出现了《生物医学中的计算机方法和程序》这本相关期刊；到1985年4月，就有了第一种生物信息学专业期刊——《生物科学中的计算机应用》；现在，我们可以看到的专业期刊已经很多了，包括纸质期刊和网络期刊两种，如《生物信息学》（原《生物科学中的计算机应用》）、《生物理论》、《生物信息技术与系统》、《生物信息通讯》、《生物信息学简报》以及《计算生物学杂志》等。从网络资源来看，国外互联网上的生物信息学网点非常繁多，大到代表国家级研究机构的，小到代表专业实验室的都有。大型机构的网点一般提供相关新闻、数据库服务和软件在线服务，小型科研机构一般是介绍自己的研究成果，有的还提供自己设计的算法的在线服务。总体而言，基本都是面向生物信息学专业人士，各种分析方法虽然很全面，但却分散在不同的网点，分析结果也需专业人士来解读。   

目前，绝大部分的核酸和蛋白质数据库由美国、欧洲和日本的三家数据库系统产生；它们共同组成了DDBJ/EMBL/GenBank国际核酸序列数据库，每天交换数据，同步更新。其他一些国家，如德国、法国、意大利、瑞士、澳大利亚、丹麦和以色列等，在分享网络共享资源的同时，也分别建有自己的生物信息学机构、二级或更高级的具有各自特色的专业数据库以及自己的分析技术，服务于本国生物医学研究和开发，有些服务也开放于全世界。   

国内对生物信息学领域也越来越重视，自北京大学物理化学研究所于1996年建立了国内第一家生物信息学网络服务器以来，我国生物信息学也蓬勃发展了起来。国内近年来开展生物信息学研究的单位主要有：北京大学、清华大学、中国科学院生物物理所、军事医学科学院、上海生命科学研究院、中国科学院微生物所、中国科学院遗传所人类基因组中心、中国医学科学院、天津大学、复旦大学、南开大学、中国科技大学、东南大学、内蒙古大学等。北京大学于1997年3月成立了生物信息学中心，中科院上海生命科学研究院也于2000年3月成立了生物信息学中心，分别维护着国内两个专业水平相对较高的生物信息学网站，但从全国总体上来看与国际水平差距很大。一方面，国内生物（医药）科学研究与开发对生物信息学研究和服务的需求市场非常广阔，另一方面，真正开展生物信息学具体研究和服务的机构或公司却相对较少，仅有的几家科研机构主要开展生物信息学理论研究，声称提供生物信息学服务的公司所提供的服务也仅局限于简单的计算机辅助分子生物学实验设计，而且服务体系并不完善；目前国内互联网上已经有了几家生物信息学网站，但大部分偏于所有生物（医）学领域的新闻报道，生物信息学专业技术服务的含量太少，研究力量薄弱，这就与国外有了较大差距。

## 五. 生物信息学的发展展望  

生物信息学是为适应人类基因组信息分析的需求而出现的一门与信息科学、数学、计算机科学等交叉的新兴学科。生物信息学已经成为基因组研究中强有力的、不可或缺的研究手段，被广泛用于加速新基因的发现过程，以达到抢先注册“有用”新基因专利的目的。在这场世界范围内的竞争中，中国科学家以及科研资金投向的决策部门如何结合我国科研水平的现状、优势领域等客观情况，将有限的投资投入以求获得最大可能的科学研究以及商业回报，是一个无法回避的新课题。面对挑战，生物信息学在21世纪的发展进程中，应该考虑到它的历史使命。在今后的工作中，应该做好以下几个方面的工作：

**理论研究**。任何学科的发展都离不开基础理论的研究，生物信息学也不例外。它对许多学科都提出了巨大的挑战。今后科学家在理论研究方面要做好几个主要工作：人类基因组信息结构复杂性研究；序列（特别是非编码区）信息分析；基因组结构与遗传语言；语法和词法分析；大规模基因表达谱分析，相关算法、软件研究；基因表达调控网络研究；基因组信息相关的蛋白质功能分析。

**软件开发**。现在虽然已经开发出大量的软件工具，但是大多数软件缺乏技术细节的描述，使得新软件编制时不能很好地利用已有的软件资源，造成各种软件都有自己的输入输出格式，相互之间互不通用。同时，大量软件的出现带来一个新问题，即生物学家面对数量众多的软件无从选择。这两个问题的解决需要对各种软件的功能特性和技术细节进行详尽的介绍，并进行比较。

**集成数据库**。公共数据库与互联网相连，为世界各地的科学家提供快速高效的服务，因而成为获取生物学数据的最佳媒介。目前，国际上著名的公共数据库有Genbank、EMBL、DDBJ、Swiss-Prot、PIR、PDB等。

**生物数据的质量监控**。监控已有的生物数据究竟具有多大的可信度，对于物理图谱的构建工作有十分重大的意义。

**学科交叉**。长期以来，生物学家、计算机科学家、数学家这三类科学家都是埋头于各自的研究领域，而不关心其他学科的发展和要求。这种状况在我国尤为突出。生物信息学的发展要求三者之间加强沟通，其意义不仅在于推动生物信息学自身的发展，而且将成为促进整个生物学发展的强大动力。

生物信息学是一门对已有数据进行研究和理解的学科。根据统计学原理，在一定程度上，统计结果的显著性与数据量的对数成正比。因此，随着数据库中数据量的飞速增长，基于数据库的研究工作必将有所突破。可以相信，随着人类基因组计划的完成以及蛋白质组研究的逐步开展，生物信息学在揭示生命的奥秘中会更加成熟和完善，生物信息学科也将随之得到巨大发展。相信在人类基因组计划和即将开始的中国人基因组研究计划中，生物信息学将发挥越来越大的作用，并推动生物学进入一个全新的境界。

  
## 参考资料：
    1. 《生物信息学》，陈润生，《生物物理学报》，1999，15：5-12  
    2. 《国内外生物信息学数据库服务新进展》，李维忠、王任小、林大威等，《生物化学与生物物理进展》，1999，26：22-25  
    3. 《蛋白质结构预测的现状与展望》，王志新，《生命化学》，1999，6：19-22  
    4. 《蛋白质的结构预测与分子设计》，来鲁华，北京大学出版社1993  
    5. 《以结构为基础的药物设计与分子模拟》，张亮仁，科学出版社，1999  
    6. 《生物信息资源的应用与二次开发》，黄戈、罗静初、顾孝诚等，高技术通讯，1999, 9(1), –60-62,34  
    7. 物信息学手册 郝柏林， 张淑誉 - 2000  
    8. 生物信息学  赵国屏… - 2000 - 北京  
    9. 生物信息学的现状与展望  张春霆 - 世界科技研究与发展, 2000  
    10. 生物信息学: 生物实验数据和计算技术结合的新领域  欧阳曙光 - 科学通报, 1999  
    11. 生物信息学对计算机科学发展的机遇与挑战  何红波， 谭晓超， 李斌， 李义兵, HE … - 生物信息学, 2005  
    12. 展望21 世纪的生命科学  李宝健 - 生命科学, 2000  
    13. 1986~ 2004 年自然科学基金(生命科学) 资助项目情况简析  于建荣， 张凤珠， 岳东方， 伍宗韶 - 生命科学, 2005  
    14. 计算机科学在生物信息学中的应用  施晓秋， 孔繁胜 - 浙江工业大学学报, 2001  
    15. 生物信息学——信息时代生命科学研究的公共平台  黄原 - 中学生物教学, 2004  
    16. 系统生物学研究进展  杨胜利 - 中国科学院院刊, 2004  
    17. 跨学科时代的基因工程研究  司徒琳莉， 于敦亮 - 牡丹江师范学院学报: 自然科学版, 1997  
    
