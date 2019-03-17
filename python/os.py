打开Python交互式命令行，我们来看看如何使用os模块的基本功能：

>>> import os
>>> os.name # 操作系统类型
'posix'
如果是posix，说明系统是Linux、Unix或Mac OS X，如果是nt，就是Windows系统。

要获取详细的系统信息，可以调用uname()函数：

>>> os.uname()
posix.uname_result(sysname='Darwin', nodename='MichaelMacPro.local', release='14.3.0', version='Darwin Kernel Version 14.3.0: Mon Mar 23 11:59:05 PDT 2015; root:xnu-2782.20.48~5/RELEASE_X86_64', machine='x86_64')
注意uname()函数在Windows上不提供，也就是说，os模块的某些函数是跟操作系统相关的。

环境变量

在操作系统中定义的环境变量，全部保存在os.environ这个变量中，可以直接查看：

操作文件和目录

操作文件和目录的函数一部分放在os模块中，一部分放在os.path模块中，这一点要注意一下。

小结

Python的os模块封装了操作系统的目录和文件操作，要注意这些函数有的在os模块中，有的在os.path模块中。
