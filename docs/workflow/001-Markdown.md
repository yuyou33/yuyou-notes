# Markdown

## 一.Markdown 语法

### 1.标题

`#`的个数对应几级标题，快捷键`Ctrl+1（2，3，4，5，6）Ctrl+0`表示段落 i

### 2.字体

##### 斜体文本

用`*`或`_`括住，快捷键`Ctrl+I`

##### 粗体文本

用`**`或`__`括住，快捷键`Ctrl+B`

##### 粗斜体文本

用`***`或`___`括住

### 3.各种线

##### 分割线

使用三个及以上的 `+` 号或 `*` 号或 `-` 来表示

##### 删除线

用`~~`括住，快捷键`Alt+Shift+5`

##### 下划线

使用 HTML 的标签`<u>`和`</u>`表示增加下划线的文本，如：`<u>`要增加下划线的文本`</u>`,快捷键`Ctrl+U`

### 4.列表

##### 无序列表

可以使用`*`，`+`或`-`标记符号来表示无序列表项

- 第一项
- 第二项

##### 有序列表

用数字加上`.`再加上空格来表示有序列表

1. 第一项
2. 第二项
3. 第三项

##### 嵌套列表

首先使用`*`、`+`或`-`进入列表，然后回车换行，会发现系统自动生成列表第二项，此时按下`Tab`键，列表第二项变为第一项的子列表。按回车退出当前列表

- y
  - er
  -

### 5.区块

当我们要引用别人的文章内容时，可以将其放在区块内
用`>`加空格来表示区块

> 23432232323
>
> 232232
>
> 23232

### 6.代码

##### 段内代码块

用一对

```
用一对  ` 括住代码
```

##### 代码段

用三个` 加 Enter/空格+编程语言

```c
#include <stdio.h>
int main()
{
	printf("hello world\n");
	return 0;
}
```

### 7.链接

##### 打开网页

两种方法

```
[链接文字](链接地址)
或
<链接地址>
```

效果如下
[百度](https://www.baidu.com/)
<https://www.baidu.com/>
按住`Ctrl+鼠标左键`点击访问

##### 打开本地文件

```
[打开LinkTest.md文档](./LinkTest.md)
[打开LinkTest.png照片](./img/LinkTest.png)
```

##### 页内跳转

```
语法为[链接文字](#标题文字)
如	[跳转到第一章第一节](#1.1 Markdown介绍)
```

[跳转到第一节](#1.#标题)

### 8.图片

```
![alt 属性文本](图片地址)

![alt 属性文本](图片地址 "可选标题")
```

```
![本地png图片PictureTest.png](./img/PictureTest.png)

![本地jpg图片](./img/PictureTest.jpg)

![网络图片](http://static.runoob.com/images/runoob-logo.png "菜鸟教程")
```

也可以直接使用`Ctrl+C`，`Ctrl+V`来直接进行复制粘贴图片

### 9.表格

Markdown 制作表格使用 `|` 来分隔不同的单元格，使用 `-` 来分隔表头和其他行。

```
|表头|表头|表头|
|---|---|----|
|单元格|单元格|单元格|
|单元格|单元格|单元格|
```

| 表头   | 表头   | 表头   |
| ------ | ------ | ------ |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

`:-`表示左对齐
`-:`表示右对齐
`:-:`表示中间对齐
快捷键`Ctrl+T`插入表格

---

## 二.数学公式

### 1.插入

```
第一种方法：$数学公式$
第二种方法：
$$
数学公式
$$
```

在行间公式内换行，在换行的位置使用`\\`

$$
1+2=3
\\3+4=7
$$

### 2.上标下标

用`^`，`_`后跟相应的符号来实现

$$
a^2 \\ x_4
$$

如果作为上标、下标的符号不止一个，则需要用花括号`{}`将其括起来

### 3.根号

用`\sqrt{}`来表示根号

$$
\sqrt{3}
$$

用`\sqrt[]{}`来表示更具体的根号信息

$$
\sqrt[3]{4}，\sqrt[4]{10}
$$

### 4.上下水平线

$$
下水平线：\underline{a+b}
上水平线：\overline{a+b}
$$

### 5.上下水平大括号

$$
\overbrace{x_1+x_2+x_3}^{3个元素}\\
\underbrace{x_1+x_2+x_3}_{3个元素}
$$

### 6.向量符号

$$
\vec{a}\\
\vec{AB}\\
\vec{ABC}\\
\overrightarrow{AB}\\
\overleftarrow{AB}
$$

### 7.分数

$$
\frac{1}{2}\\
\frac{\sqrt{3}}{4}
$$

### 8.积分运算符

$$
\int\\
\int_{1}^{2}
$$

### 9.求和运算符

$$
\sum\\
\sum_{i=1}^{10}x_i
$$

### 10.连乘运算符

$$
\prod\\
\prod_{i=1}^{10}x_i\\
\prod_{i=1}^{10}x_i
$$

### 11.特殊符号

**希腊字母**
α 为`\alpha`，β 为`\beta`，γ 为`\gamma`，θ 为`\theta`，ρ 为`\rho`，λ 为`\lambda`，μ 为`\mu`
Δ 为`\Delta`，π 为`\pi`，Ω 为`\Omega`

**关系运算符**
大于>，大于等于 ≥ 为`\geq`或`\ge`

小于<，小于等于 ≤ 为`\leq`或`\le`

等于=，不等于 ≠ 为`\neq`或`\ne`
**加减乘除**
加`+` 减`-`
乘 x 为`\times` 除 ÷ 为`\div`

### 12.矩阵表示

### 13.方程组

### 14.分段函数

[csdn 链接](https://blog.csdn.net/qq_41261251/article/details/102817673)

---

## 三.Typora 与 HTML

### 1.改变字体颜色及大小

用`<font> </font>`标签来改变字体的颜色及大小
<font size=3 color="red">字体颜色为红色，大小为 3</font>
<font size=4 color="blue">字体颜色为蓝色，大小为 4</font>
<font size=6 color="violet">字体颜色为紫罗兰，大小为 6</font>

### 2.改变对齐方式

用标签`<p> </p>`加上属性`align`

<p align="left">左对齐</p>
<p align="center">中间对齐</p>
<p align="right">右对齐</p>

### 3.插入图像

用标签`<img src=url />`来插入图片

```
<img src="img/56.gif" />
```

```
改变图片的大小
<img src="img/1.jpg" width=100 height=100/>
```

```
也可以改变图片的位置
<img src="img/1.jpg" width=30 height=30 style="float:left"/>图片在左边
<img src="img/1.jpg" width=30 height=30 style="float:right"/>图片在右边
```

### 4.折叠

模板：

```html
<details>
  <summary>Title</summary>
  contents ...
</details>
```

Title 为折叠显示的摘要

<details> <summary>Title</summary>
    contents ...
</details>

折叠代码：

```html
<details>
  <summary>点我展开看代码</summary>
  # 方式1
  <pre><code>
      code...
  </code></pre>
  # 方式2 (三点）编程语言 code... （三点）(在obsidian和网站都不支持)
</details>
```
<details>
  <summary>点我展开看代码</summary>
  # 方式1
  <pre><code>
      code...
  </code></pre>
  # 方式2 (三点）编程语言 code... （三点）
  ```c++
  cout << "yuyou";
  ```
</details>

---

## 四.扩展用法

### 1.插入 emoji 表情

用`:emoji:`的语法来插入表情

:happy:的语法为`:happy:`

🦀 的语法为`:crab:`

🐴 的语法为`:horse:`

### 2.插入目录

`[toc]`

### 3.导出

选择文件 --> 导出，可以选择导出的文件格式，有 pdf,html,word 等格式

### 4.文本高亮

用一对`==`将要高亮的文本括起来

==要高亮的文本==
==背景会用黄色填充==

### 5.上下标

用一对`~`将下标括起来，如：`H~2~O`表示 H~2~O
用一对`^`将上标括起来，如：`X^2^`表示 X^2^
