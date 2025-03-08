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