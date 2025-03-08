---
dg-publish: "true"
CreatDate: 2024-09-18T00:04:00
ReviseDate: 2024-11-08T23:44:00
---
# 第一讲 课程概览与shell
##### `ctrl`+`l`清屏快捷键
##### `<` `>` 重定向
	`cat < t1.text > t2.text`  示例
##### `>>` 追加
##### `|` 管道符（取左边的输出作为右边的输入）
	`ls -l | tail -n1`示例：输出最后一行
##### `sudo su`以超级用户登陆shell
##### `tee` 将输入传入文件并输出
##### `xdg-open`以合适的程序打开相应文件

---

# 第二讲 shell工具和脚本
#### 变量
eg:`foo=bar`
引用的时候用`$foo`
#### 字符串表示
#####  双引号`“` 会将其中的变量替换 
eg: `echo "value is $foo"`
	`value is bar`
#####  单引号`’` 直接输出 
#### 创建一个函数的步骤
`vim mcd.sh`创建脚本文件
```bash
mcd () {
	mkdir -p "$1"
	cd "$1"
}
```
`source mcd.sh`导入函数
`mcd test`使用

`!!`可以代替上次输出的命令
`$?`上次的错误代码
`$#`参数数量
`$$`命令进程ID
`$0`运行脚本的名字

#### 脚本文件检查工具shellcheck
#### 命令查询工具tldr(too long dont read)
#### find命令
eg:`find . -name src -type d`
在当前目录下寻找名为src的目录
eg:`find . -path '**/test/*.py' -type f`
寻找在test目录下的py文件
##### -mtime
修改时间eg:` -mtime -1`寻找在一天之内修改的文件
#####  -exec
eg:`find . -name '*.tmp' -exec rm {}\;`
找到.tmp后缀文件并执行删除操作
#### locate命令
查找文件系统中有指定子串的路径，由建立的数据库存储，查找速度更快
手动更新数据库:`updatedb`
#### 查找使用的命令`history`
#### 一些工具
`broot`
`nnn`

---

# 第三讲 编辑器（vim）
`.`按下后重复操作
##### vim插件
CtrlP文件查找工具

---

# 第四讲 数据整理
##### `less`翻页器
##### `sed`流编辑器
 eg:`sed 's/.*exmple//'`将exmple和前面的字符替换为空
 eg:`sed 's/[ab]//'`将a或b替换为空
	 ps:这里需要用到正则表达式[[002•正则表达式]]
##### `wc`统计工具
`-l`显示行数
##### `sort`排序
##### `uniq`去重
`-c`重复的计数
##### `awk`和sed类似的流编辑器，更专注于列
eg:`awk '{print $2}'`选取第二列输出
##### `paste`
`-s`将列处理为以`tap`分隔的一行
`-d`使其以`，`分隔而不是`tap`
##### `bc`计算
eg:`echo '1 + 2' | bc -l`
##### `grep`筛选特定字符串
`-v`输出不匹配的
##### `xargs`将输入作为参数
eg:`    | xargs rustup toolchain uninstall`
##### 一个有意思的拍照命令
`ffmpeg -loglevel panic -i /dev/video0 -frames 1 -f image2 - | convert - -colorspace gray - | tee copy1.png | feh -`

---

# 第五讲命令行环境
### 1.任务控制
##### signal
Unix信号
SIGINT 程序终止信号 ^c
SIGSTOP 停止程序 ^z 
##### 一些指令
`sleep`
`jobs`显示任务
	以`%1`标识符指代任务
`bg` background 继续执行任务
`fg`
`nohup`不接受挂起HUP
	`&`在后台执行
`kill`
	`-STOP`
### 2.终端复用器
#### tmux
##### session
`tmux`开始一个新的会话
`tmux new -s NAME`以指定名称开始一个新的会话
`tmux -ls`列出当前所有会话
`<C-b> d` ，将当前会话分离
`tmux a`重新连接最后一个会话 也可以通过 -t 来指定具体的会话
##### windows
`<C-b> c` 创建一个新的窗口，使用 `<C-d>` 关闭
`<C-b> N` 跳转到第 N 个窗口，注意每个窗口都是有编号的
`<C-b> p` 切换到前一个窗口
`<C-b> n` 切换到下一个窗口
`<C-b> ,` 重命名当前窗口
`<C-b> w` 列出当前所有窗口
##### panes
`<C-b> "`水平分割
`<C-b> %`垂直分割
`<C-b> <方向>`切换到指定方向的面板，<方向> 指的是键盘上的方向键
`<C-b> z 切换当前面板的缩放
`<C-b> <空格>`在不同的面板排布间切换
### 3.dotfiles和配置shell
##### dotfiles
 `bash` - `~/.bashrc`, `~/.bash_profile`
 `git` - `~/.gitconfig`
 `vim` - `~/.vimrc` 和 `~/.vim` 目录
 `ssh` - `~/.ssh/config`
 `tmux` - `~/.tmux.conf`
参考:
[Anish的配置](https://github.com/anishathalye/dotfiles)
[Jon的配置](https://github.com/jonhoo/configs)
[Jose的配置](https://github.com/jjgo/dotfiles)
###### 别名
`alias`

### 4.终端服务器
`ssh foo@bar.mit.edu`连接至服务器
##### 密钥生成
```zsh
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519
```
##### 拷贝公钥到服务器
```zsh
cat .ssh/id_ed25519.pub | ssh foobar@remote 'cat >> ~/.ssh/authorized_keys'
或
ssh-copy-id -i .ssh/id_ed25519.pub foobar@remote
```
##### 通过 SSH 复制文件
`ssh+tee`
`scp`
`rsync`
```zsh
cat localfile | ssh remote_server tee serverfile
或
scp path/to/local_file remote_host:path/to/remote_file
```
##### virtualbox虚拟机
```zsh
关闭虚拟机
VBoxManage controlvm "ubuntu_server" poweroff
打开虚拟机
VBoxManage startvm "ubuntu_server" --type headless
```
##### 配置远端设备文件~/.ssh/config
```zsh
Host vm
   User username_goes_here
   HostName ip_goes_here
   IdentityFile ~/.ssh/id_ed25519
   LocalForward 9999 localhost:8888

```

##### 建立服务器
```zsh
python -m http.server 8888
```
在虚拟机中启动一个 Web 服务器通过`http://localhost:9999访问
#### 一些工具
`Mosh`（即 mobile shell对 ssh 进行了改进，它允许连接漫游、间歇连接及智能本地回显。
`sshfs`可以将远端服务器上的一个文件夹挂载到本地，然后您就可以使用本地的编辑器了

---

# 第六讲 版本控制(git) 
### Git 的命令行接口
##### 基础
`git help <command>`: 获取 git 命令的帮助信息
`git init`: 创建一个新的 git 仓库，其数据会存放在一个名为 .git 的目录下
`git status`: 显示当前的仓库状态
	-s显示简短信息
`git add <filename>`: 添加文件到暂存区
`git commit`: 创建一个新的提交
`git log`: 显示历史日志
`git log --all --graph --decorate --oneline`: 可视化历史记录（有向无环图）
`git diff <filename>`: 显示与暂存区文件的差异
`git diff <revision> <filename>`: 显示某个文件两个版本之间的差异
`git checkout <revision>`: 更新 HEAD 和目前的分支
##### 分支和合并
`git branch`: 显示分支
`git branch <name>`: 创建分支
`git checkout -b <name>`: 创建分支并切换到该分支 相当于 `git branch <name>; git checkout <name>`
`git merge <revision>`: 合并到当前分支
`git mergetool`: 使用工具来处理合并冲突
`git rebase`: 将一系列补丁变基（rebase）为新的基线
##### 远端操作
`git remote`: 列出远端
`git remote add <name> <url>`: 添加一个远端
`git push <remote> <local branch>:<remote branch>`: 将对象传送至远端并更新远端引用
`git branch --set-upstream-to=<remote>/<remote branch>`: 创建本地和远端分支的关联关系
`git fetch`: 从远端获取对象/索引
`git pull`: 相当于 `git fetch; git merge`
`git clone`: 从远端下载仓库
##### 撤销
`git commit --amend`: 编辑提交的内容或信息
`git reset HEAD <file>`: 恢复暂存的文件
`git checkout -- <file>`: 丢弃修改
`git restore`: git2.32 版本后取代 git reset 进行许多撤销操作
##### Git 高级操作
`git config`: Git 是一个 高度可定制的 工具
`git clone --depth=1`: 浅克隆（shallow clone），不包括完整的版本历史信息
`git add -p`: 交互式暂存
`git rebase -i`: 交互式变基
`git blame`: 查看最后修改某行的人
`git stash`: 暂时移除工作目录下的修改内容
`git bisect`: 通过二分查找搜索历史记录
`.gitignore`: 指定 故意不追踪的文件
### Git的补充
[ProGit书](https://git-scm.com/book/zh/v2)
截止到 `24/10/21` 看到4.7（有需要再继续看

---

# 第七讲 调试及性能分析


### 日志
linux日志一般存放在/var/log目录下
系统日志在/var/log/syslog/
`lnav`日志查看工具,有高亮提示
`journalctl`linux下的日志查看命令
	eg:`journalctl --since "1m ago"`
向系统日志中写日志
	eg:`logger "hello logs"`

### 调试
python的调试器是pdb (ipdb更好用)
eg:`python -m ipdb *.py`
##### 一些命令
- **l**(ist) - 显示当前行附近的 11 行或继续执行之前的显示；
- **s**(tep) - 执行当前行，并在第一个可能的地方停止；
- **n**(ext) - 继续执行直到当前函数的下一条语句或者 return 语句；
- **b**(reak) - 设置断点（基于传入的参数）；
- **p**(rint) - 在当前上下文对表达式求值并打印结果。还有一个命令是 **pp** ，它使用 [`pprint`](https://docs.python.org/3/library/pprint.html) 打印；
- **r**(eturn) - 继续执行直到当前函数返回；
- **q**(uit) - 退出调试器。

### 静态分析工具
eg:可以发现某个循环变量覆盖了某个已经存在的变量或函数名
或是有个变量在被读取之前并没有被定义
`pyflakesr`
`mypy`

### 性能分析
- 真实时间
- 用户时间
- 系统时间
##### 性能分析工具
###### cpu
- 追踪分析器
- 采样分析器
eg:用**cProfile**模块分析每次函数调用所消耗的时间
```zsh
python -m cProfile -s tottime grep.py 1000 '^(import|\s*def)[^,]*$' *.py
```
用python实现基础的grep命令
``` python
#!/usr/bin/env python

import sys, re

def grep(pattern, file):
    with open(file, 'r') as f:
        print(file)
        for i, line in enumerate(f.readlines()):
            pattern = re.compile(pattern)
            match = pattern.search(line)
            if match is not None:
                print("{}: {}".format(i, line), end="")

if __name__ == '__main__':
    times = int(sys.argv[1])
    pattern = sys.argv[2]
    for i in range(times):
        for file in sys.argv[3:]:
            grep(pattern, file)
```
**line-profiler**
###### 内存
**memory-profiler**
```zsh
python -m memory_profiler example.py
```
### 事件分析
**perf**
### 可视化
火焰图
调用图
### 资源监控
- 通用监控 **htop**  **glances**  **dstat**
- I/O操作 **iotop**
- 磁盘使用 **df**显示每个分区的信息**du**当前目录下每个文件的磁盘使用情况`-h`**ncdu**交互式
- 内存使用 **free**
- 被进程打开文件信息 **lsof**
- 网络连接和配置 **ss**
- 网络使用 **nethogs** **iftop**
**stress** 压力测试工具
**hyperfine** 基准测试 
	eg:比较`fd`和`find`速度`hyperfine --warmup 3 'fd -e jpg' 'find . -iname "*.jpg"'`

---

# 第八讲 元编程
### make
### 依赖
语义版本号
### 持续集成系统(CI)
### 测试
- 单元测试
- 集成测试
- 回归测试

---

# 第九讲 安全和密码学
### 熵
$log_2X$
### 哈希函数
##### sha1
eg:
```zsh
printf 'hello' | sha1sum
```
- 不可逆
- 抗碰撞
##### 承诺机制
### 密钥生成函数
速度慢
##### 对称加密
##### 非对称加密

---

# 第十讲 大杂烩
### 修改键盘映射
下面是一些修改键位映射的软件：
- macOS - [karabiner-elements](https://pqrs.org/osx/karabiner/), [skhd](https://github.com/koekeishiya/skhd) 或者 [BetterTouchTool](https://folivora.ai/)
- Linux - [xmodmap](https://wiki.archlinux.org/index.php/Xmodmap) 或者 [Autokey](https://github.com/autokey/autokey)
- Windows - 控制面板，[AutoHotkey](https://www.autohotkey.com/) 或者 [SharpKeys](https://www.randyrants.com/category/sharpkeys/)
- QMK - 如果你的键盘支持定制固件，[QMK](https://docs.qmk.fm/) 可以直接在键盘的硬件上修改键位映射。保留在键盘里的映射免除了在别的机器上的重复配置。
### 守护进程
**cron**可以用来定期运行一些程序
### FUSE
一些有趣的 FUSE 文件系统包括：
- [sshfs](https://github.com/libfuse/sshfs)：使用 SSH 连接在本地打开远程主机上的文件
- [rclone](https://rclone.org/commands/rclone_mount/)：将 Dropbox、Google Drive、Amazon S3、或者 Google Cloud Storage 一类的云存储服务挂载为本地文件系统
- [gocryptfs](https://nuetzlich.net/gocryptfs/)：覆盖在加密文件上的文件系统。文件以加密形式保存在磁盘里，但该文件系统挂载后用户可以直接从挂载点访问文件的明文
- [kbfs](https://keybase.io/docs/kbfs)：分布式端到端加密文件系统。在这个文件系统里有私密（private），共享（shared），以及公开（public）三种类型的文件夹
- [borgbackup](https://borgbackup.readthedocs.io/en/stable/usage/mount.html)：方便用户浏览删除重复数据后的压缩加密备份
### 备份
### API
[IFTTT](https://ifttt.com/) 这个网站可以将很多 API 整合在一起，让某 API 发生的特定事件触发在其他 API 上执行的任务。IFTTT 的全称 If This Then That 足以说明它的用法，比如在检测到用户的新推文后，自动发布在其他平台。但是你可以对它支持的 API 进行任意整合
### 常见命令行标志参数及模式
### 窗口管理器
**平铺式管理器**
### VPN
自己配置一个 VPN，可以了解一下 [WireGuard](https://www.wireguard.com/) 以及 [Algo](https://github.com/trailofbits/algo)。
### Markdown
### Hammerspoon (macOS 桌面自动化)
### 开机引导以及 Live USB
### Docker, Vagrant, VMs, Cloud, OpenStack
### 交互式记事本编程

---

# 第十一讲 提问&回答
### [课程讲义](https://missing-semester-cn.github.io/2020/qa/#%E6%9C%89%E5%93%AA%E4%BA%9B%E6%9C%89%E7%94%A8%E7%9A%84%E6%95%B0%E6%8D%AE%E6%95%B4%E7%90%86%E5%B7%A5%E5%85%B7)

**The end**
