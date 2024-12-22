---
title: "用WiX编写MSI安装包"
date: "2005-11-21"
tags: 
  - "计算机技术"
---

 

[WiX](http://sourceforge.net/projects/wix/)（Windows Installer XML）是[Rob Mensching](http://blogs.msdn.com/robmen/)（Windows组的一个SDE）写的一个用来编写MSI安装包的工具集，已经被微软内部的很多产品组采用，例如Office组，以及我所在的MSN组，等等。

下面是WiX的一个简单例子（相当于高级的Hello World!的级别），在这个例子中编写了一个SimpleCopy.msi。安装SimpleCopy.msi将能够：

- 创建C:\\Program Files\\SimpleCopy目录并拷贝一系列文件；
- 创建HKEY\_LOCAL\_MACHINE\\SOFTWARE\\MPG Lab注册表键，该键下的DestPath变量存储了一个文件路径，DestPath可以在msiexec命令行中用DESTPATH来指定；
- 创建名为SimplyCopy的Scheduled Task，该任务每小时运行一次，执行C:\\Program Files\\SimpleCopy\\SimpleCopy.exe，将该目录下data\\source.xml拷贝到DestPath中指定的目录；
- Uninstall时，安装时拷贝的文件、创建的注册表键和Scheduled Task都将被删除。

下面就是用WiX编写SimpleCopy.msi的步骤：

1\. 从[http://sourceforge.net/projects/wix](http://sourceforge.net/projects/wix)下载wix的[2.0.3220.0](http://prdownloads.sourceforge.net/wix/binaries-2.0.3220.0.zip?download)版本并解压到硬盘，将candle.exe所在的路径添加到Path环境变量中；  
2\. 用C#编写SimpleCopy.cs并用csc.exe在同一目录下编译成SimpleCopy.exe:

```
using System;
using System.IO;
using System.Reflection;
using Microsoft.Win32;

namespace SimpleCopy
...{
    internal class Application
    ...{
        [STAThread]
        private static void Main(string[] args)
        ...{
            string sourcexml = GetExecutableLocation() + @"\data\source.xml";
            if (File.Exists(sourcexml))...{
                DateTime now = DateTime.Now;
                File.Copy(sourcexml, Application.QueryDestPath() +
                            @"\source_" + now.ToString("yyMMdd_HH.mm.ss") + ".xml", true);
            }
            else...{
                StreamWriter writer = new StreamWriter(QueryDestPath() + @"\error.log", false);
                writer.WriteLine(DateTime.Now.ToString());
                writer.WriteLine("Cannot find source file: " + sourcexml);
                writer.Close();
            }
        }

        private static string QueryDestPath()
        ...{
            RegistryKey regkey = Registry.LocalMachine.OpenSubKey(@"SOFTWARE\MPG Lab");
            if (regkey != null)...{
                object obj = regkey.GetValue("DestPath");
                if (obj != null)...{
                    return obj.ToString();
                }                
            }

            if (false == Directory.Exists(GetExecutableLocation() + @"\regkey_not_found"))...{
                Directory.CreateDirectory(GetExecutableLocation() + @"\regkey_not_found");
            }
            return (GetExecutableLocation() + @"\regkey_not_found");
        }

        private static string GetExecutableLocation()
        ...{
            return Directory.GetParent(Assembly.GetEntryAssembly().Location).ToString();
        }

    }
}
```

3\. 在SimpleCopy.cs同一目录下创建"data"子目录，在data\\下创建一个任意内容的source.xml；  
4\. 在SimpleCopy.cs同一目录下编写SimpleCopy.wxs，其Schema文件wix.xsd可以在wix下载解压后的doc目录中找到。SimpleCopy.wxs内容如下：

```
<?xml version='1.0'?>
<Wix xmlns='http://schemas.microsoft.com/wix/2003/01/wi'>
    <Product Id='c859431f-086d-4840-b2d7-a84b3bce50f2' Name='SimpleCopy' 
            Language='1033' Version='1.0.0.0' Manufacturer='MPG China'>
        <Package Id='2738eb03-978b-4712-8e21-7e1868c74c2f' InstallerVersion='200' Compressed='yes' />
        <Property Id='DESTPATH' Value ='C:\'/>
        <Media Id='1' Cabinet='product.cab' EmbedCab='yes' />
        <Directory Id='TARGETDIR' Name='SourceDir'>
            <Directory Id='ProgramFilesFolder' Name='PFiles'>
                <Directory Id='AppDirectory' Name='SimpleCp' LongName='SimpleCopy'>
                    <Component Id='ExecutableFile' DiskId='1' Guid='379ccaeb-a8c9-448e-a4b3-fa9884676492'>
                        <File Id='SimpleCopy_exe' Name='SimpleCp.exe' 
                            LongName='SimpleCopy.exe' src='SimpleCopy.exe' />
                    </Component>
                    <Directory Id='DataFolder' Name='data'>
                        <Component Id='SrcXml' DiskId='1' Guid='746496f1-d2b1-4334-9b6f-00f71938c459'>
                            <File Id='Source_xml' Name='source.xml' src='data\source.xml' />
                            <Registry Id='4e10403a-1976-447f-b38c-59839cb7c5cb' Root='HKLM' Type='string' 
                                Key='SOFTWARE\MPG Lab' Name='DestPath' Value ='[DESTPATH]'/>
                        </Component>
                    </Directory>
                </Directory>
            </Directory>
        </Directory>
        <Feature Id='AllFiles' Title='Simple Copy All Files' Level='1'>
            <ComponentRef Id='ExecutableFile' />
            <ComponentRef Id='SrcXml' />
        </Feature>
        <InstallExecuteSequence>
            <Custom Action='CreateScheduleTask' After='InstallFinalize'>NOT Installed</Custom>
            <Custom Action='DeleteScheduleTask' After='InstallFinalize'>Installed</Custom>
        </InstallExecuteSequence>
        <Property Id='SCHTASKS'>SCHTASKS.exe</Property>
        <CustomAction Id='CreateScheduleTask' Property='SCHTASKS' 
            ExeCommand='/Create /RU "" /SC HOURLY /TN SimplyCopy /TR "%ProgramFiles%\SimpleCopy\SimpleCopy.exe"'/>
        <CustomAction Id='DeleteScheduleTask' Property='SCHTASKS' 
            ExeCommand='/Delete /TN SimplyCopy /F'/>
    </Product>
</Wix>
```

5\. 打开命令行，进入SimpleCopy.cs所在的目录，先后运行candle SimpleCopy.wxs以及light SimpleCopy.wixobj，然后就得到SimpleCopy.msi了：

`![](images/o_wixsample.gif)`

6\. 在命令行运行“msiexec /i SimpleCopy.msi /quiet /log log.txt DESTPATH=d:\\”就可以安装了。

相比较其他MSI编写工具（例如Visual Studio 2003/2005，以及InstallShield等），WiX的优点是：

1. 便于版本控制（wxs是纯文本的）；
2. 便于自动化（编辑工具candle.exe和light.exe都是命令行的）。
