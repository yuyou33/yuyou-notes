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

# 