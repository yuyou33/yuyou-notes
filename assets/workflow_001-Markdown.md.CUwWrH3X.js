import{_ as l,E as t,c as o,J as e,w as s,aa as i,o as r,a as n}from"./chunks/framework.D7pbs6VA.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"workflow/001-Markdown.md","filePath":"workflow/001-Markdown.md","lastUpdated":1741441378000}'),p={name:"workflow/001-Markdown.md"},d=i(`<p>[toc]</p><h2 id="一-markdown语法" tabindex="-1">一.Markdown语法 <a class="header-anchor" href="#一-markdown语法" aria-label="Permalink to &quot;一.Markdown语法&quot;">​</a></h2><h3 id="_1-标题" tabindex="-1">1.标题 <a class="header-anchor" href="#_1-标题" aria-label="Permalink to &quot;1.标题&quot;">​</a></h3><p>#的个数对应几级标题，快捷键<code>Ctrl+1（2，3，4，5，6）Ctrl+0</code>表示段落</p><h3 id="_2-字体" tabindex="-1">2.字体 <a class="header-anchor" href="#_2-字体" aria-label="Permalink to &quot;2.字体&quot;">​</a></h3><h5 id="斜体文本" tabindex="-1">斜体文本 <a class="header-anchor" href="#斜体文本" aria-label="Permalink to &quot;斜体文本&quot;">​</a></h5><p>用<code>*</code>或<code>_</code>括住，快捷键<code>Ctrl+I</code></p><h5 id="粗体文本" tabindex="-1">粗体文本 <a class="header-anchor" href="#粗体文本" aria-label="Permalink to &quot;粗体文本&quot;">​</a></h5><p>用<code>**</code>或<code>__</code>括住，快捷键<code>Ctrl+B</code></p><h5 id="粗斜体文本" tabindex="-1">粗斜体文本 <a class="header-anchor" href="#粗斜体文本" aria-label="Permalink to &quot;粗斜体文本&quot;">​</a></h5><p>用<code>***</code>或<code>___</code>括住</p><h3 id="_3-各种线" tabindex="-1">3.各种线 <a class="header-anchor" href="#_3-各种线" aria-label="Permalink to &quot;3.各种线&quot;">​</a></h3><h5 id="分割线" tabindex="-1">分割线 <a class="header-anchor" href="#分割线" aria-label="Permalink to &quot;分割线&quot;">​</a></h5><p>使用三个及以上的 <code>+</code> 号或 <code>*</code> 号或 <code>-</code> 来表示</p><h5 id="删除线" tabindex="-1">删除线 <a class="header-anchor" href="#删除线" aria-label="Permalink to &quot;删除线&quot;">​</a></h5><p>用<code>~~</code>括住，快捷键<code>Alt+Shift+5</code></p><h5 id="下划线" tabindex="-1">下划线 <a class="header-anchor" href="#下划线" aria-label="Permalink to &quot;下划线&quot;">​</a></h5><p>使用HTML的标签<code>&lt;u&gt;</code>和<code>&lt;/u&gt;</code>表示增加下划线的文本，如：<code>&lt;u&gt;</code>要增加下划线的文本<code>&lt;/u&gt;</code>,快捷键<code>Ctrl+U</code></p><h3 id="_4-列表" tabindex="-1">4.列表 <a class="header-anchor" href="#_4-列表" aria-label="Permalink to &quot;4.列表&quot;">​</a></h3><h5 id="无序列表" tabindex="-1">无序列表 <a class="header-anchor" href="#无序列表" aria-label="Permalink to &quot;无序列表&quot;">​</a></h5><p>可以使用<code>*</code>，<code>+</code>或<code>-</code>标记符号来表示无序列表项</p><ul><li>第一项</li><li>第二项</li></ul><h5 id="有序列表" tabindex="-1">有序列表 <a class="header-anchor" href="#有序列表" aria-label="Permalink to &quot;有序列表&quot;">​</a></h5><p>用数字加上<code>.</code>再加上空格来表示有序列表</p><ol><li>第一项</li><li>第二项</li><li>第三项</li></ol><h5 id="嵌套列表" tabindex="-1">嵌套列表 <a class="header-anchor" href="#嵌套列表" aria-label="Permalink to &quot;嵌套列表&quot;">​</a></h5><p>首先使用<code>*</code>、<code>+</code>或<code>-</code>进入列表，然后回车换行，会发现系统自动生成列表第二项，此时按下<code>Tab</code>键，列表第二项变为第一项的子列表。按回车退出当前列表</p><ul><li>y <ul><li>er</li></ul></li></ul><h3 id="_5-区块" tabindex="-1">5.区块 <a class="header-anchor" href="#_5-区块" aria-label="Permalink to &quot;5.区块&quot;">​</a></h3><p>当我们要引用别人的文章内容时，可以将其放在区块内</p><p>用<code>&gt;</code>加空格来表示区块</p><blockquote><p>23432232323</p><p>232232</p><p>23232</p></blockquote><h3 id="_6-代码" tabindex="-1">6.代码 <a class="header-anchor" href="#_6-代码" aria-label="Permalink to &quot;6.代码&quot;">​</a></h3><h5 id="段内代码块" tabindex="-1">段内代码块 <a class="header-anchor" href="#段内代码块" aria-label="Permalink to &quot;段内代码块&quot;">​</a></h5><p>用一对 **\`**括住代码</p><h5 id="代码段" tabindex="-1">代码段 <a class="header-anchor" href="#代码段" aria-label="Permalink to &quot;代码段&quot;">​</a></h5><p>用三个\` 加Enter/空格+编程语言</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_7-链接" tabindex="-1">7.链接 <a class="header-anchor" href="#_7-链接" aria-label="Permalink to &quot;7.链接&quot;">​</a></h3><h5 id="打开网页" tabindex="-1">打开网页 <a class="header-anchor" href="#打开网页" aria-label="Permalink to &quot;打开网页&quot;">​</a></h5><p>两种方法</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[链接文字](链接地址)</span></span>
<span class="line"><span>或</span></span>
<span class="line"><span>&lt;链接地址&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>效果如下</p><p><a href="https://www.baidu.com/" target="_blank" rel="noreferrer">百度</a><a href="https://www.baidu.com/" target="_blank" rel="noreferrer">https://www.baidu.com/</a></p><p>按住<code>Ctrl+鼠标左键</code>点击访问</p><h5 id="打开本地文件" tabindex="-1">打开本地文件 <a class="header-anchor" href="#打开本地文件" aria-label="Permalink to &quot;打开本地文件&quot;">​</a></h5><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[打开LinkTest.md文档](./LinkTest.md)</span></span>
<span class="line"><span>[打开LinkTest.png照片](./img/LinkTest.png)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="页内跳转" tabindex="-1">页内跳转 <a class="header-anchor" href="#页内跳转" aria-label="Permalink to &quot;页内跳转&quot;">​</a></h5><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>语法为[链接文字](#标题文字)</span></span>
<span class="line"><span>如	[跳转到第一章第一节](#1.1 Markdown介绍)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><a href="#1.#标题">跳转到第一节</a></p><h3 id="_8-图片" tabindex="-1">8.图片 <a class="header-anchor" href="#_8-图片" aria-label="Permalink to &quot;8.图片&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>![alt 属性文本](图片地址)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>![alt 属性文本](图片地址 &quot;可选标题&quot;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>![本地png图片PictureTest.png](./img/PictureTest.png)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>![本地jpg图片](./img/PictureTest.jpg)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>![网络图片](http://static.runoob.com/images/runoob-logo.png &quot;菜鸟教程&quot;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>也可以直接使用<code>Ctrl+C</code>，<code>Ctrl+V</code>来直接进行复制粘贴图片</p><h3 id="_9-表格" tabindex="-1">9.表格 <a class="header-anchor" href="#_9-表格" aria-label="Permalink to &quot;9.表格&quot;">​</a></h3><p>Markdown 制作表格使用 <code>|</code> 来分隔不同的单元格，使用 <code>-</code> 来分隔表头和其他行。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>|表头|表头|表头|</span></span>
<span class="line"><span>|---|---|----|</span></span>
<span class="line"><span>|单元格|单元格|单元格|</span></span>
<span class="line"><span>|单元格|单元格|单元格|</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table><thead><tr><th>表头</th><th>表头</th><th>表头</th></tr></thead><tbody><tr><td>单元格</td><td>单元格</td><td>单元格</td></tr><tr><td>单元格</td><td>单元格</td><td>单元格</td></tr></tbody></table><p><code>:-</code>表示左对齐</p><p><code>-:</code>表示右对齐</p><p><code>:-:</code>表示中间对齐</p><p>快捷键<code>Ctrl+T</code>插入表格</p><hr><h2 id="二-数学公式" tabindex="-1">二.数学公式 <a class="header-anchor" href="#二-数学公式" aria-label="Permalink to &quot;二.数学公式&quot;">​</a></h2><h3 id="_1-插入" tabindex="-1">1.插入 <a class="header-anchor" href="#_1-插入" aria-label="Permalink to &quot;1.插入&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>第一种方法：$数学公式$</span></span>
<span class="line"><span>第二种方法：</span></span>
<span class="line"><span>$$</span></span>
<span class="line"><span>数学公式</span></span>
<span class="line"><span>$$</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在行间公式内换行，在换行的位置使用<code>\\\\</code> $$ 1+2=3 \\3+4=7 $$</p><h3 id="_2-上标下标" tabindex="-1">2.上标下标 <a class="header-anchor" href="#_2-上标下标" aria-label="Permalink to &quot;2.上标下标&quot;">​</a></h3><p>用<code>^</code>，<code>_</code>后跟相应的符号来实现</p><p>$$ a^2 \\ x_4 $$ 如果作为上标、下标的符号不止一个，则需要用花括号<code>{}</code>将其括起来</p><h3 id="_3-根号" tabindex="-1">3.根号 <a class="header-anchor" href="#_3-根号" aria-label="Permalink to &quot;3.根号&quot;">​</a></h3><p>用<code>\\sqrt{}</code>来表示根号 $$ \\sqrt{3} $$ 用<code>\\sqrt[]{}</code>来表示更具体的根号信息 $$ \\sqrt[3]{4}，\\sqrt[4]{10} $$</p><h3 id="_4-上下水平线" tabindex="-1">4.上下水平线 <a class="header-anchor" href="#_4-上下水平线" aria-label="Permalink to &quot;4.上下水平线&quot;">​</a></h3><p>$$ 下水平线：\\underline{a+b} 上水平线：\\overline{a+b} $$</p><h3 id="_5-上下水平大括号" tabindex="-1">5.上下水平大括号 <a class="header-anchor" href="#_5-上下水平大括号" aria-label="Permalink to &quot;5.上下水平大括号&quot;">​</a></h3><p>$$ \\overbrace{x_1+x_2+x_3}^{3个元素}\\ \\underbrace{x_1+x_2+x_3}_{3个元素} $$</p><h3 id="_6-向量符号" tabindex="-1">6.向量符号 <a class="header-anchor" href="#_6-向量符号" aria-label="Permalink to &quot;6.向量符号&quot;">​</a></h3><p>$$ \\vec{a}\\ \\vec{AB}\\ \\vec{ABC}\\ \\overrightarrow{AB}\\ \\overleftarrow{AB} $$</p><h3 id="_7-分数" tabindex="-1">7.分数 <a class="header-anchor" href="#_7-分数" aria-label="Permalink to &quot;7.分数&quot;">​</a></h3><p>$$ \\frac{1}{2}\\ \\frac{\\sqrt{3}}{4} $$</p><h3 id="_8-积分运算符" tabindex="-1">8.积分运算符 <a class="header-anchor" href="#_8-积分运算符" aria-label="Permalink to &quot;8.积分运算符&quot;">​</a></h3><p>$$ \\int\\ \\int_{1}^{2} $$</p><h3 id="_9-求和运算符" tabindex="-1">9.求和运算符 <a class="header-anchor" href="#_9-求和运算符" aria-label="Permalink to &quot;9.求和运算符&quot;">​</a></h3><p>$$ \\sum\\ \\sum_{i=1}^{10}x_i $$</p><h3 id="_10-连乘运算符" tabindex="-1">10.连乘运算符 <a class="header-anchor" href="#_10-连乘运算符" aria-label="Permalink to &quot;10.连乘运算符&quot;">​</a></h3><p>$$ \\prod\\ \\prod_{i=1}^{10}x_i\\ \\prod_{i=1}^{10}x_i $$</p><h3 id="_11-特殊符号" tabindex="-1">11.特殊符号 <a class="header-anchor" href="#_11-特殊符号" aria-label="Permalink to &quot;11.特殊符号&quot;">​</a></h3><p><strong>希腊字母</strong></p><p>α 为<code>\\alpha</code>，β 为<code>\\beta</code>，γ为<code>\\gamma</code>，θ 为<code>\\theta</code>，ρ 为<code>\\rho</code>，λ为<code>\\lambda</code>，μ 为<code>\\mu</code></p><p>Δ为<code>\\Delta</code>，π 为<code>\\pi</code>，Ω 为<code>\\Omega</code></p><p><strong>关系运算符</strong></p><p>大于&gt;，大于等于≥ 为<code>\\geq</code>或<code>\\ge</code></p><p>小于&lt;，小于等于≤ 为<code>\\leq</code>或<code>\\le</code></p><p>等于=，不等于≠ 为<code>\\neq</code>或<code>\\ne</code></p><p><strong>加减乘除</strong></p><p>加<code>+</code> 减<code>-</code></p><p>乘x为<code>\\times</code> 除÷为<code>\\div</code></p><h3 id="_12-矩阵表示" tabindex="-1">12.矩阵表示 <a class="header-anchor" href="#_12-矩阵表示" aria-label="Permalink to &quot;12.矩阵表示&quot;">​</a></h3><h3 id="_13-方程组" tabindex="-1">13.方程组 <a class="header-anchor" href="#_13-方程组" aria-label="Permalink to &quot;13.方程组&quot;">​</a></h3><h3 id="_14-分段函数" tabindex="-1">14.分段函数 <a class="header-anchor" href="#_14-分段函数" aria-label="Permalink to &quot;14.分段函数&quot;">​</a></h3><p><a href="https://blog.csdn.net/qq_41261251/article/details/102817673" target="_blank" rel="noreferrer">csdn链接</a></p><hr><h2 id="三-typora与html" tabindex="-1">三.Typora与HTML <a class="header-anchor" href="#三-typora与html" aria-label="Permalink to &quot;三.Typora与HTML&quot;">​</a></h2><h3 id="_1-改变字体颜色及大小" tabindex="-1">1.改变字体颜色及大小 <a class="header-anchor" href="#_1-改变字体颜色及大小" aria-label="Permalink to &quot;1.改变字体颜色及大小&quot;">​</a></h3><p>用<code>&lt;font&gt; &lt;/font&gt;</code>标签来改变字体的颜色及大小</p>`,105),c=i(`<h3 id="_2-改变对齐方式" tabindex="-1">2.改变对齐方式 <a class="header-anchor" href="#_2-改变对齐方式" aria-label="Permalink to &quot;2.改变对齐方式&quot;">​</a></h3><p>用标签<code>&lt;p&gt; &lt;/p&gt;</code>加上属性<code>align</code></p><p align="left">左对齐</p><p align="center">中间对齐</p><p align="right">右对齐</p><h3 id="_3-插入图像" tabindex="-1">3.插入图像 <a class="header-anchor" href="#_3-插入图像" aria-label="Permalink to &quot;3.插入图像&quot;">​</a></h3><p>用标签<code>&lt;img src=url /&gt;</code>来插入图片</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;img src=&quot;img/56.gif&quot; /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>改变图片的大小</span></span>
<span class="line"><span>&lt;img src=&quot;img/1.jpg&quot; width=100 height=100/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>也可以改变图片的位置</span></span>
<span class="line"><span>&lt;img src=&quot;img/1.jpg&quot; width=30 height=30 style=&quot;float:left&quot;/&gt;图片在左边</span></span>
<span class="line"><span>&lt;img src=&quot;img/1.jpg&quot; width=30 height=30 style=&quot;float:right&quot;/&gt;图片在右边</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr><h2 id="四-扩展用法" tabindex="-1">四.扩展用法 <a class="header-anchor" href="#四-扩展用法" aria-label="Permalink to &quot;四.扩展用法&quot;">​</a></h2><h3 id="_1-插入emoji表情" tabindex="-1">1.插入emoji表情 <a class="header-anchor" href="#_1-插入emoji表情" aria-label="Permalink to &quot;1.插入emoji表情&quot;">​</a></h3><p>用<code>:emoji:</code>的语法来插入表情</p><p>:happy:的语法为<code>:happy:</code></p><p>🦀的语法为<code>:crab:</code></p><p>🐴的语法为<code>:horse:</code></p><h3 id="_2-插入目录" tabindex="-1">2.插入目录 <a class="header-anchor" href="#_2-插入目录" aria-label="Permalink to &quot;2.插入目录&quot;">​</a></h3><p><code>[toc]</code></p><h3 id="_3-导出" tabindex="-1">3.导出 <a class="header-anchor" href="#_3-导出" aria-label="Permalink to &quot;3.导出&quot;">​</a></h3><p>选择文件 --&gt; 导出，可以选择导出的文件格式，有pdf,html,word等格式</p><h3 id="_4-文本高亮" tabindex="-1">4.文本高亮 <a class="header-anchor" href="#_4-文本高亮" aria-label="Permalink to &quot;4.文本高亮&quot;">​</a></h3><p>用一对<code>==</code>将要高亮的文本括起来</p><p>==要高亮的文本== ==背景会用黄色填充==</p><h3 id="_5-上下标" tabindex="-1">5.上下标 <a class="header-anchor" href="#_5-上下标" aria-label="Permalink to &quot;5.上下标&quot;">​</a></h3><p>用一对<code>~</code>将下标括起来，如：<code>H~2~O</code>表示H~2~O</p><p>用一对<code>^</code>将上标括起来，如：<code>X^2^</code>表示X^2^</p>`,27);function h(u,b,m,k,g,_){const a=t("font");return r(),o("div",null,[d,e(a,{size:"3",color:"red"},{default:s(()=>[n("字体颜色为红色，大小为3")]),_:1}),e(a,{size:"4",color:"blue"},{default:s(()=>[n("字体颜色为蓝色，大小为4")]),_:1}),e(a,{size:"6",color:"violet"},{default:s(()=>[n("字体颜色为紫罗兰，大小为6")]),_:1}),c])}const f=l(p,[["render",h]]);export{v as __pageData,f as default};
