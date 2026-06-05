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
牛顿法是一种迭代改进算法，用于查找返回值为 0 的数学函数的参数，它会对所有可微函数的零点的猜测值进行改造  
`newton_update`  表示函数$f$及其导数$df$沿着这条切线到 0 的计算过程。

```py
def newton_update(f, df):
	def update(x):
		return x - f(x) / df(x)
	return update

def find_zero(f, df):
	def near_zero(x):
		return approx_eq(f(x), 0)
	return improve(newton_update(f, df), near_zero)
```

**柯里化**  
给定一个函数  `f(x, y)`，我们可以定义另一个函数  `g`  使得  `g(x)(y)`  等价于  `f(x, y)`。在这里，`g`  是一个高阶函数，它接受单个参数  `x`  并返回另一个接受单个参数  `y`  的函数  
例如：`pow`函数的柯里化版本

```py
>>> def curried_pow(x):
        def h(y):
            return pow(x, y)
        return h
>>> curried_pow(2)(3)
8
```

**Lambda 表达式**  
可以使用 lambda 表达式临时创建函数，返回类型是一个函数

```py
def compose1(f, g):
	return lambda x: f(g(x))
```

结构：

```py
lambda              x         :              f(g(x))
"A function that    takes x   and returns    f(g(x))"
```

特点：简洁、直观，但难以辨认

**函数装饰器**

```py {7}
>>> def trace(fn):
        def wrapped(x):
            print('-> ', fn, '(', x, ')')
            return fn(x)
        return wrapped

>>> @trace
    def triple(x):
        return 3 * x

>>> triple(12)
->  <function triple at 0x102a39848> ( 12 )
36
```

相当于：

```py
>>> def triple(x):
        return 3 * x
>>> triple = trace(triple)
```

**多参数**  
如果一个函数有多个参数，我们在嵌套一个高阶函数时，可以忽略具体参数，直接用`*args`代替

```py
def higher(fn, x):
	def function(*args):
		return fn(*args)
```

### 递归函数

函数调用自身  
示例：分割数  
求正整数分割为每部分不大于 m 的方案数  
将全方案划分为两部分讨论：

1. 使用最大数 m 分割整数 n-m
2. 使用最大数 m-1 分割整数 n

```py
def count_partitions(n, m):
    """计算使用最大 m 的整数分割 n 的方式的数量"""
    if n == 0:
        return 1
    elif n < 0:
        return 0
    elif m == 0:
        return 0
    else:
        return count_partitions(n-m, m) + count_partitions(n, m-1)
```

## Chapter 2: Building Abstractions with Data

### 引言

每个值都有一个类来确定他的类型  
内置的`type`函数可以检查任何值的类

```py
>>> type(2)
<class 'int'>
```

python 包含三种原始数字类型：整数（`int`）、浮点数（`float`）和复数（`complex`）

> [!tip]
> 不同于其他编程语言，python3 中的`int`值是无界的

### 数据抽象和序列

数据抽象：不关注底层具体实现，封装成方法，无论底层怎么变，方法仍可照常使用即可  
`list`**列表**

```py
>>> [10, 20]
[10, 20]
```

访问方法：

```py
//多重赋值：
>>> pair = [10, 20]
>>> pair [10, 20]
>>>  x, y = pair
//元素选择运算符：
>>> pair[0]
10
>>> pair[1]
20
//等效函数getitem
>>> getitem(pair, 0)
10
```

`len()`返回长度  
列表间可以相加和乘以整数

```py
>>> digits = [1, 8, 2, 8]
>>> [2, 7] + digits * 2
[2, 7, 1, 8, 2, 8, 1, 8, 2, 8]
```

也可以嵌套使用

```py
>>> pairs = [[10, 20], [30, 40]]
>>> pairs[1]
[30, 40]
>>> pairs[1][0]
30
```

**`for`语句**

```py
for <name> in <expression>:
    <suite>
```

`for`执行结束后，`<name>`将绑定到序列的最后一个元素  
`<name>`可以有多个，将序列中每个元素解包到各自变量中

```py
>>> pairs = [[1, 2], [2, 2], [2, 3], [4, 4]]
>>> same_count = 0
>>> for x, y in pairs:
        if x == y:
            same_count = same_count + 1
>>> same_count
2
```

**`range`范围**  
用于表示整数范围，接受三个参数：起始值、结束值+1、步长(可选)

```py
>>> range(1, 10)  # 包括 1，但不包括 10
range(1, 10)
```

如果只给一个参数，那这个参数作为结束值+1，从 0 开始  
一个惯用的使用方式：如果`<name>`没有在后面使用，用`_`作为 name，表示该命名不会出现在未来任何表达式中  
**列表推导式**

```py
>>> odds = [1, 3, 5, 7, 9]
>>> [x+1 for x in odds] //列表推导式
[2, 4, 6, 8, 10]
```

对序列每个元素执行操作  
还可以选取符合条件的元素

```py
>>> [x for x in odds if 25 % x == 0]
[1, 5]
```

先选取符合条件的序列，再执行操作  
**`in`和`not in`**  
可用于测试某个值是否在序列中，返回结果是 True 或 False  
**切片**  
用于选取原始序列的一段连续范围，三个参数：起始索引、结束索引+1、步长（可选，负数代表反向选取），之间用`：`冒号分割,省略参数则默认极值

```py
digits = [1, 8, 2, 8]
>>> digits[0:2]
[1, 8]
>>> digits[1:]
[8, 2, 8]

```

**字符串**  
在 python 中用单引号或双引号括起来  
成员资格（`in`和`not in`）逻辑有点不同：匹配子字符串而不是单个字符  
**多行字面量**
字符串可以不限于一行。跨越多行的字符串字面量可以用三重引号括起  
**字符串强制转换**  
用`str()`函数，将其他类型变量作为参数转为字符串  
**树**  
**链表**

### 可变数据

类包含数据和方法（函数）  
列表的方法：  
`pop()`从列表中移除并返回最后一个元素  
`remove()`从列表中移除第一个与参数相同的元素  
`append()`在列表最后插入一个元素  
`extend()`将另一个列表中的所有元素添加到当前列表的最后  
用另一个变量初始化一个变量，在用类方法修改变量时，两个变量会同步变化  
python 提供了`is`和`not is`比较操作符来验证两个变量是否指向同一个对象，比简单的相等验证更准确  
列表推导式总会返回一个新列表  
**`tuple`元组**  
方法：
`count()`计数  
`index()`返回参数的下标， 这两种方法列表和元组通用  
元组是不可变数据

```py
>>> 1, 2 + 3
(1, 5)
>>> ("the", 1, ("and", "only"))
('the', 1, ('and', 'only'))
>>> type( (10, 20) )
<class 'tuple'>
```

**字典**  
用于存储键值对，用冒号分隔

```py
>>> numerals = {'I': 1.0, 'V': 5, 'X': 10}
```

字典的 key 不可以是可变数据，也不能包含可变数据  
一个 key 只能对应一个 value  
`get()`方法  
返回指定 key 在字典中的 value,如果没有则返回默认值，`get()`接受两个参数：key 和默认值  
**推导式**

```py
>>> {x: x*x for x in range(3,6)}
{3: 9, 4: 16, 5: 25}
```

**局部状态**  
非局部声明`nonlocal`  
声明变量为 nonlocal 后，任何尝试为该变量赋值的语句，都不会在当前帧寻找，而是找到定义该变量的帧

### 面对对象编程

**类**

```py
class name:
	def init(self, arg):
```

类的构造函数`_init_`一般第一个参数是`self`绑定到创建的实例对象  
点表达式的等效函数`getattr()`，两个参数，实例对象和对象属性  
`hasattr()`测试对象是否具有指定的属性

> [!tip] 命名约定
> 类名通常使用 CapWords 约定（也称为 CamelCase，因为名称中间的大写字母看起来像驼峰）编写。  
> 方法名称遵循使用下划线分隔的小写单词命名函数的标准约定。

如果属性名称以下划线开头，则只能在类本身的方法中访问它，用户不能访问

**类属性**  
类属性(类变量/静态变量)在类的所有对象之间共享  
普通变量不需要在`class`下额外声明，在方法中赋值即声明  
调用属性时，优先查找实例属性，再查找类属性，实例属性和类属性可以有同名的

**继承**

```py
class inher(base):
	...
```

**多继承**

```py
>>> class AsSeenOnTVAccount(CheckingAccount, SavingsAccount):
        def __init__(self, account_holder):
            self.holder = account_holder
            self.balance = 1
```

当使用函数时，会按继承关系从左到右然后向上查找函数定义

### 实现类和对象

## Chapter 3: Interpreting Computer Programs

## Chapter 4: Data Processing
