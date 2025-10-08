# CS61A

## Chapter 1: Building Abstractions with Functions

### 开始

python 交互式会话，按下`<C>-p`(上一个)`<C>-n`(下一个)浏览历史记录  
使用`<C>-d`退出会话并丢弃历史记录

```py
from urllib.request import urlopen
shakespeare = urlopen('https://www.composingprograms.com/shakespeare.txt')
words = set(shakespeare.read().decode().split())
result = {w for w in words if len(w) == 6 and w[::-1] in words}
print(result)
```

上述代码的作用是从莎士比亚戏剧中出现的单词中找出长度为 6 且互文的单词

### 编程要素

**导入库函数**  
`math`模块提供了各种数学函数  
`operator`模块提供了运算符对应的函数

```py
from math import sqrt
from operator import add, sub, mul
```

赋值`=`可以为名称绑定值，也可以绑定函数  
可以在单个语句中为多个变量分配值，左右用逗号隔开

```py
rea, circumference = pi * radius * radius, 2 * pi * radius
```

对于多重赋值，先对`=`右边的表达式求值，再和左边变量绑定，因此可以在单个语句内交换两个变量的值

```py
x, y = 3, 4.5
y, x = x, y
```

**纯函数和非纯函数**  
纯函数接受参数并返回输出  
非纯函数除了返回值外，还会产生改变状态的副作用  
`print`就是个非纯函数，返回值是`None`，副作用是产生输出

### 定义新的函数

函数定义格式：`def`语句、函数名、参数以及返回  
函数的第二行必须进行缩进

```py
def <name>(<formal parameters>):
    return <return expression>
```

**抽象函数**  
三个核心属性：  
**域 domain**  是它可以接受的参数集合  
**范围 range**  是它可以返回的值的集合
**意图 intent**  是计算输入和输出之间的关系（以及它可能产生的任何副作用）

**运算符**
对于除法，Python 提供了两个运算符，`/`和`//`，前者产生浮点数，后者向下取整

```py
>>> 5 / 4
1.25
>>> 5 // 4
1
```

### 设计函数

**文档**  
函数定义通常包括描述函数的文档，称为“文档字符串 docstring”，它必须在函数体中缩进。文档字符串通常使用三个引号，第一行描述函数的任务，随后的几行可以描述参数并解释函数的意图：

```py
def pressure(v, t, n):
    """计算理想气体的压力，单位为帕斯卡

	使用理想气体定律：http://en.wikipedia.org/wiki/Ideal_gas_law

	v -- 气体体积，单位为立方米
	t -- 绝对温度，单位为开尔文
	n -- 气体粒子
	"""
	k = 1.38e-23  # 玻尔兹曼常数
	return n * k * t / v
```

当使用函数名作为参数调用`help`时，会看到他的文档字符串，按 q 退出

**函数默认值**
可以为函数的参数提供默认值

```py
>>> def pressure(v, t, n=6.022e23):
        k = 1.38e-23  # 玻尔兹曼常数
        return n * k * t / v
```

`pressure`函数在提供两个参数时，使用默认值，在提供三个参数时，默认值被忽略

### 控制

通常，Python 代码是一系列语句。简单语句是不以冒号结尾的单行，而由其他语句（简单语句和复合语句）组成被称为复合语句。复合语句通常跨越多行，以单行头部（header）开始，并以冒号结尾，其中冒号标识语句的类型。头部和缩进的句体（suite）一起称为子句。复合语句由一个或多个子句组成：

```py
<header>:
    <statement>
    <statement>
    ...
<separating header>:
    <statement>
    <statement>
    ...
...
```

**选择**

```py
if <expression>:
    <suite>
elif <expression>:
    <suite>
else:
    <suite>
```

三个基本的逻辑运算符

```py
>>> True and False
False
>>> True or False
True
>>> not False
True
```

**循环**

```py
while <expression>:
    <suite>
```

**测试**  
断言`assert`验证是否符合预期，后面是一个带引号的文本行（单引号或双引号都可以，但要保持一致），如果表达式的计算结果为假值，则显示该行。

```py
>>> assert fib(8) == 13, '第八个斐波那契数应该是 13'
```

文档测试（Doctests）：Python 提供了一种方便的方法，可以将简单的测试直接放在函数的文档字符串中。文档字符串的第一行应该包含函数的单行描述，接着是一个空行，下面可能是参数和函数意图的详细描述。此外，文档字符串可能包含调用该函数的交互式会话示例：

```py
>>> def sum_naturals(n):
        """返回前 n 个自然数的和。

        >>> sum_naturals(10)
        55
        >>> sum_naturals(100)
        5050
        """
        total, k = 0, 1
        while k <= n:
            total, k = total + k, k + 1
        return total
```

然后，可以通过 doctest 模块来验证交互，如下。

```py
>>> from doctest import testmod
>>> testmod()
TestResults(failed=0, attempted=2)
```

如果仅想验证单个函数的 doctest 交互，我们可以使用名为  `run_docstring_examples`  的  `doctest`  函数。第一个参数是要测试的函数；第二个参数应该始终是表达式  `globals()`  的结果，这是一个用于返回全局环境的内置函数；第三个参数  `True`  表示我们想要“详细”输出：所有测试运行的目录。

```py
>>> from doctest import run_docstring_examples
>>> run_docstring_examples(sum_naturals, globals(), True)
Finding tests in NoName
Trying:
    sum_naturals(10)
Expecting:
    55
ok
Trying:
    sum_naturals(100)
Expecting:
    5050
ok
```

当在文件中编写 Python 时，可以通过使用 doctest 命令行选项启动 Python 来运行文件中的所有 doctest：

```shell
python3 -m doctest <python_source_file>
```

### 高阶函数

可以操作函数的函数就叫做高阶函数（接收函数作为参数，或将函数作为返回值）

```py
def summation(n, term):
	total, k = 0, 1
	while k <= n:
		total, k = total + term(k), k + 1
	return total
def identity(x):
	return x
def sum_naturals(n):
	return summation(n, identity)
sum_naturals(10)
55
```

**迭代改进**通用方法

```py
def improve(update, close, guess=1):
	while not close(guess):
		guess = update(guess)
	return guess
```

**嵌套定义**  
上面函数`update`只有一个参数，万一需要两个参数，该怎么办？  
思考一个问题：计算一个数的平方根，通过以下更新，值会收敛为`a`的平方根

```py
def sqrt_update(x, a):
     return average(x, a/x)
```

但这个函数有两个参数，无法直接套到`improve`函数中，因此需要嵌套定义：

```py
def sqrt(a):
	def sqrt_update(x):
		return average(x, a/x)
	def sqrt_close(x):
		return approx_eq(x * x, a)
	return improve(sqrt_update, sqrt_close)
```

**函数作为返回值**  
如果给了两个基础函数`f(x)`和`g(x)`,我们想要`h(x) = f(g(x))`

```py
def square(x):
    return x * x

def successor(x):
    return x + 1

def compose1(f, g):
    def h(x):
        return f(g(x))
    return h

square_successor = compose1(square, successor)
result = square_successor(12)
```

**牛顿法**

## Chapter 2: Building Abstractions with Data

## Chapter 3: Interpreting Computer Programs

## Chapter 4: Data Processing
