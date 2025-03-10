import{_ as a,c as o,o as d,al as c}from"./chunks/framework.saZHKLzJ.js";const i="/yuyou-notes/assets/linux_content.D7q5ja7U.png",m=JSON.parse('{"title":"linux 常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"编程学习/Linux/002-linux常用命令.md","filePath":"编程学习/Linux/002-linux常用命令.md","lastUpdated":1741623681000}'),l={name:"编程学习/Linux/002-linux常用命令.md"};function r(s,e,t,n,h,u){return d(),o("div",null,e[0]||(e[0]=[c('<h1 id="linux-常用命令" tabindex="-1">linux 常用命令 <a class="header-anchor" href="#linux-常用命令" aria-label="Permalink to &quot;linux 常用命令&quot;">​</a></h1><h2 id="ls-显示当前路径下的文件" tabindex="-1"><code>ls</code> 显示当前路径下的文件 <a class="header-anchor" href="#ls-显示当前路径下的文件" aria-label="Permalink to &quot;`ls` 显示当前路径下的文件&quot;">​</a></h2><p><code>-l</code> 显示详细信息</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">`-`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表示普通文件</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">`d`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 目录</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">`l`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 链接文件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>-a</code> 显示隐藏文件 <code>-h</code> 显示文件大小 <code>-t</code> 按修改时间排序 <code>-r</code> 逆序显示 <code>-i</code> 查看 i 节点</p><h2 id="ln-创建链接文件" tabindex="-1"><code>ln</code> 创建链接文件 <a class="header-anchor" href="#ln-创建链接文件" aria-label="Permalink to &quot;`ln` 创建链接文件&quot;">​</a></h2><p><code>ln 源文件名称 链接文件名称</code> 格式 <code>-s</code> 表示是软链接</p><h2 id="echo-打印-创建文件" tabindex="-1"><code>echo</code> 打印/创建文件 <a class="header-anchor" href="#echo-打印-创建文件" aria-label="Permalink to &quot;`echo` 打印/创建文件&quot;">​</a></h2><h2 id="cat查看文件内容" tabindex="-1"><code>cat</code>查看文件内容 <a class="header-anchor" href="#cat查看文件内容" aria-label="Permalink to &quot;`cat`查看文件内容&quot;">​</a></h2><h2 id="rm-删除文件-目录" tabindex="-1"><code>rm</code> 删除文件/目录 <a class="header-anchor" href="#rm-删除文件-目录" aria-label="Permalink to &quot;`rm` 删除文件/目录&quot;">​</a></h2><h2 id="chmod-更改权限" tabindex="-1"><code>chmod</code> 更改权限 <a class="header-anchor" href="#chmod-更改权限" aria-label="Permalink to &quot;`chmod` 更改权限&quot;">​</a></h2><p><code>chmod u+x 文件名</code> 添加权限(u g o)(r w x) <code>chmod 777 文件名</code> 添加权限(u g o)(r4 w2 x1)</p><h2 id="touch-更新文件时间-创建文件" tabindex="-1"><code>touch</code> 更新文件时间/创建文件 <a class="header-anchor" href="#touch-更新文件时间-创建文件" aria-label="Permalink to &quot;`touch` 更新文件时间/创建文件&quot;">​</a></h2><h2 id="pwd-显示当前路径" tabindex="-1"><code>pwd</code> 显示当前路径 <a class="header-anchor" href="#pwd-显示当前路径" aria-label="Permalink to &quot;`pwd` 显示当前路径&quot;">​</a></h2><h2 id="cd-切换路径" tabindex="-1"><code>cd</code> 切换路径 <a class="header-anchor" href="#cd-切换路径" aria-label="Permalink to &quot;`cd` 切换路径&quot;">​</a></h2><p><code>/</code> 根目录 <code>～</code> 用户的家目录 <code>-</code> 上次路径 <code>..</code> 上层路径 <img src="'+i+'" alt=""></p><ul><li><code> /bin</code> - 基本命令二进制文件</li><li><code>/sbin</code> - 基本的系统二进制文件，通常是 root 运行的</li><li><code>/dev</code> - 设备文件，通常是硬件设备接口文件</li><li><code>/etc</code> - 主机特定的系统配置文件</li><li><code>/home</code> - 系统用户的主目录</li><li><code>/lib</code> - 系统软件通用库</li><li><code>/opt</code> - 可选的应用软件</li><li><code>/sys</code> - 包含系统的信息和配置(<a href="https://missing-semester-cn.github.io/2020/course-shell/" target="_blank" rel="noreferrer">第一堂课</a>  介绍的)</li><li><code>/tmp</code> - 临时文件( <code>/var/tmp</code> ) 通常重启时删除</li><li><code>/usr/</code> - 只读的用户数据 <ul><li><code>/usr/bin</code> - 非必须的命令二进制文件</li><li><code>/usr/sbin</code> - 非必须的系统二进制文件，通常是由 root 运行的</li><li><code>/usr/local/bin</code> - 用户编译程序的二进制文件</li></ul></li><li><code>/var</code> -变量文件 像日志或缓存</li></ul><h2 id="cp-复制文件-目录" tabindex="-1"><code>cp</code> 复制文件/目录 <a class="header-anchor" href="#cp-复制文件-目录" aria-label="Permalink to &quot;`cp` 复制文件/目录&quot;">​</a></h2><p><code>cp 源文件 复制的文件</code> 复制操作 <code>-r</code> 复制目录需要递归复制</p><h2 id="mv-移动文件-重命名" tabindex="-1"><code>mv</code> 移动文件/重命名 <a class="header-anchor" href="#mv-移动文件-重命名" aria-label="Permalink to &quot;`mv` 移动文件/重命名&quot;">​</a></h2><h2 id="mkdir-创建目录" tabindex="-1"><code>mkdir</code> 创建目录 <a class="header-anchor" href="#mkdir-创建目录" aria-label="Permalink to &quot;`mkdir` 创建目录&quot;">​</a></h2><p><code>-p</code> 创建多级目录 <code>mkdir -p folder1/folder2/folder3</code> 示例</p><h2 id="du-查看目录大小-目录结构" tabindex="-1"><code>du</code> 查看目录大小/目录结构 <a class="header-anchor" href="#du-查看目录大小-目录结构" aria-label="Permalink to &quot;`du` 查看目录大小/目录结构&quot;">​</a></h2>',23)]))}const b=a(l,[["render",r]]);export{m as __pageData,b as default};
