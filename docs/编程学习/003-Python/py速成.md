# py 速成

## 基本语法

### 注释

`#`单行注释

```py
"""
用来包裹跨行字符串，也用来注释
"""
```

### 数字运算

```py
1 / 5 #结果是浮点数 0.2
1 // 5 #结果是整数0
1 % 5 #取模结果为整数1

x = 1e4 + 7 #结果是浮点数
x = 10**4 + 7 #幂运算结果是整数
x = 1_0007 #也可以这么写，结果是整数

x += 1 #py没有自增/自减运算符
```

内置的`pow(a, b, mod)`提供了快速幂的实现

### 基本输入输出

主要通过内置函数`input()`和`print()`完成

```py
>>> a = [1,2,3]; print(a[-1])  # 打印时默认末尾换行
3
>>> print(ans[0], ans[1])  # 可以输出任意多个变量，默认以空格间隔
1 2
>>> print(a[0], a[1], end='')  # 令 end='', 使末尾不换行
1 2>>>
>>> print(a[0], a[1], sep=', ')  # 令 sep=', '，改变间隔样式
1, 2
>>> print(str(a[0]) + ', ' + str(a[1]))  # 输出同上，但是手动拼接成一整个字符串
```

`input()`行为接近 C++的`getline()`

### 字符串

```py
>>> s = """ hello
...yuyou!"""         #py中单引号和双引号等价，用引号括起来代表字符串
>>> s[-1]  #负数索引从右边计数
!
>>> s[0] = '0'   #error! str是不可变类型，不能原地修改
```

`len()`取长度  
切片  
格式`s[左闭索引:右开索引:步长]

```py
>>> s = 'yuyou'
>>> s[0:3]
yuy
>>> s[3:]
ou
>>> s[::-1]  #步长-1时获得反转的字符串
uoyuy
```

字符串是以 Unicode 编码的，可以用`ord()`将字符转换成编码，用`chr()`逆向转换

### 创建数组

**list**  
用方括号标注，逗号分割的一组值  
例如`[1, 2, 3, 4]`

```py
>>> nums = [0, 1, 2, 3, 4, 5, 6]
>>> nums[0] = 1; nums #支持索引访问、修改元素
[1, 1, 2, 3, 4, 5, 6]
>>> nums.append(nums[-1] + nums[-2]) #同push_back()
[1, 1, 2, 3, 4, 5, 6, 11]
>>> nums.pop()  #弹出并返回末尾元素，可以当栈使用，可以指定位置，默认是末尾
11
>>> nums.insert(0, 137)
[137, 1, 1, 2, 3, 4, 5, 6]
>>> nums.remove(1); nums  #按值移除首个出现的，若不存在，则报错
[137, 1, 2, 3, 4, 5, 6]
>>> len(nums)
7
>>> nums.reverse(); nums  #原地逆转
[6, 5, 4, 3, 2, 1, 137]
>>> sorted(nums)  #排序
[1, 2, 3, 4, 5, 6, 137]
>>> nunms.count(1)
1
>>>  numns.index(1) #返回值首次出现的索引号，若不存在则报错
0
>>> del nums[3:]; nums  #删除
[1, 2, 3]
>>> nums.clear()  #清空
```

数组和字符串之间切换：

```py
>>> # 建立一个 [65, 70) 区间上的整数数组，range 也是一种类型，可看作左闭右开区间，第三个参数为步长可省略
>>> nums = list(range(65,70))  # 记得 range 外面还要套一层 list()
[65, 66, 67, 68, 69]
>>> lst = [chr(x) for x in nums]  # 列表推导式的典型结构，[exp for var in iterable if cond]
>>> lst  # 上两句可以合并成 [chr(x) for x in range(65,70)]
['A', 'B', 'C', 'D', 'E']
>>> s = ''.join(lst); s # 用空字符串 '' 拼接列表中的元素生成新字符串
'A B C D E'
>> list(s)  # 字符串生成字符列表
['A', ' ', 'B', ' ', 'C', ' ', 'D', ' ', 'E']
>>> # 如果你不知道有 s.lower() 方法就可能写出下面这样新瓶装旧酒的表达式
>>> ''.join([chr(ord(ch) - 65 + 97) for ch in s if ch >= 'A' and ch <= 'Z'])
'abcde'
```

使用 list 创建二维数组：

```py
vis = [[0] * 3] * 3
'''不要这么做，这样结果是三个引用相同的数组构成的二维数组,
修改一个时，另外两个也会修改，因为list是可变对象 '''
#应当使用列表推导式
vis = [[0] * 3 for _ in range(3)]
```

**使用 NumPy**  
NumPy 是 Python 科学计算库

```py
>>> import numpy as np
>>> np.empty(3) # 开容量为 3 的空数组，注意没有初始化为 0
array([0.00000000e+000, 0.00000000e+000, 2.01191014e+180])
>>> np.zeros((3, 3)) # 开 3*3 的数组，并初始化为 0
array([[0., 0., 0.],
       [0., 0., 0.],
       [0., 0., 0.]])
>>> a1 = np.zeros((3, 3), dtype=int) # 开 3×3 的整数数组
>>> a1[0][0] = 1 # 访问和赋值
>>> a1[0, 0] = 1 # 更友好的语法
>>> a1.shape # 数组的形状
(3, 3)

>>> a1[:2, :2] # 取前两行、前两列构成的子阵，无拷贝
array([[1, 0],
       [0, 0]])

>>> a1[:, [0, 2]] # 获取第 1、3 列，无拷贝
array([[1, 0],
       [0, 0],
       [0, 0]])
>>> np.max(a1) # 获取数组最大值
1
>>> a1.flatten() # 将数组展平
array([1, 0, 0, 0, 0, 0, 0, 0, 0])

>>> np.sort(a1, axis = 1) # 沿行方向对数组进行排序，返回排序结果
array([[0, 0, 1],
       [0, 0, 0],
       [0, 0, 0]])
>>> a1.sort(axis = 1) # 沿行方向对数组进行原地排序
```

### 输入输出

**格式化输出**

- 使用`printf()`风格的`%`操作符

```py
>>> pi = 3.1415926; print('%.4f' % pi)   # 格式为 %[flags][width][.precision]type
3.1416
>>> '%.4f - %8f = %d' % (pi, 0.1416, 3)  # 右边多个参数用 () 括住，后面会看到其实是「元组」
'3.1416 - 0.141600 = 3'
```

- `format`函数
  模板

```py
'字符串'.format(参数1, 参数2,...)
```

使用`{}`作为占位符
实例：

```py
# 按位置
>>> print("Hello, {}! You have {} messages.".format("Alice", 5))
Hello, Alice! You have 5 messages.
# 按索引
>>> print("{1} is {0} years old.".format(25, "Bob"))
Bob is 25 years old.
>>> print("{0} + {0} = {1}".format(3, 6))
3 + 3 = 6
# 按关键词
>>> print("Name: {name}, Age: {age}".format(name="Charlie", age=30))
Name: Charlie, Age: 30
# 混合使用
>>> "{name} got {score:.1f} in {subject}".format(
    name="Diana", score=92.567, subject="Math"
)
Diana got 92.6 in Math
```

- `f-string` py3.6 新增
  **split()函数**  
  `input()`函数行为接近`getline()`  
  如果输入形式是一行输入多个数值，就需要使用字符串的`split()`  
  例子：

```py
>>> s = input('请输入一串数字: '); s  # 自己调试时可以向 input() 传入字符串作为提示
请输入一串数字: 1 2 3 4 5 6
'1 2 3 4 5 6'
>>> a = s.split(); a
['1', '2', '3', '4', '5', '6']
>>> a = [int(x) for x in a]; a
[1, 2, 3, 4, 5, 6]
>>> # 以上输入过程可写成一行 a = [int(x) for x in input().split()]
>>> sum(a) / len(a)  # sum() 是内置函数
3.5
```

**文件读写**

```py
a = []
with open("in.txt") as f:
    N = int(f.readline())  # 读入第一行的 N
    a[len(a) :] = [[int(x) for x in f.readline().split()] for i in range(N)]

with open("out.txt", "w") as f:
    f.write("1\n")
```

### 控制流程

**循环**

```py
u, v, w = [], [], []
for i in range(4):
	_u, _v, _w = [int(x) for x in input().split()]
	u.append(_u), v.append(_v), w.append(_w)
print(u, v, w)
```

**选择**

```py
# 条件表达式两侧无括号
if 4 >= 3 > 2 and 3 != 5 == 5 != 7:
    print("关系运算符可以连续使用")
    x = None or [] or -2
    print("&&  ||  !", "与  或  非", "and or not", sep="\n")
    print("善用 and/or 可节省行数")
    if not x:
        print("负数也是 True，不执行本句")
    elif x & 1:
        print("用 elif 而不是 else if\n" "位运算符与 C 相近，偶数&1 得 0，不执行本句")
    else:
        print("也有三目运算符") if x else print("注意结构")
```

**异常处理**  
py 使用 EAFP 风格的异常处理

```py
s = "OI-wiki"
pat = "NOIP"
x = s.find(pat)  # find() 找不到返回 -1
try:
    y = s.index(pat)  # index() 找不到则抛出错误
    print(y)  # 这句被跳过
except ValueError:
    print("没找到")
    try:
        print(y)  # 此时 y 并没有定义，故又会抛出错误
    except NameError as e:
        print("无法输出 y")
        print("原因:", e)
```

### 内置容器

内置容器除了 list(列表), 还有 tuple(元组)、dict(字典)、set(集合)  
**元组**  
元组可以理解为不可变的列表，是列表的引用，不可修改(元组的元素如果是可变的，则元素可修改)

```py
tup = tuple([[1, 2], 4])  # 由列表得到元组
# 等同于 tup = ([1,2], 4)
tup[0].append(3)
print(tup)
a, b = 0, "I-Wiki"  # 多变量赋值其实是元组拆包
print(id(a), id(b))
b, a = a, b
print(id(a), id(b))  # 会看到 a, b 的 id 值现在互换了
```

**字典**  
字典类似 C++的`map`，用以存储键值对

```py
dic = {"key": "value"}  # 基本形式
dic = {chr(i): i for i in range(65, 91)}  # 大写字母到对应 ASCII 码的映射，注意断句
dic = dict(zip([chr(i) for i in range(65, 91)], range(65, 91)))  # 效果同上
dic = {dic[k]: k for k in dic}  # 将键值对逆转，for k in dic 迭代其键
dic = {v: k for k, v in dic.items()}  # 和上行作用相同，dic.items() 以元组存放单个键值对
dic = {
    k: v for k, v in sorted(dic.items(), key=lambda x: -x[1])
}  # 字典按值逆排序，用到了 lambda 表达式

print(dic["A"])  # 返回 dic 中 以 'A' 为键的项，这里值为65
dic["a"] = 97  # 将 d[key] 设为 value，字典中原无 key 就是直接插入
if "b" in dic:  # LBYL(Look Before You Leap) 风格
    print(dic["b"])  # 若字典中无该键则会出错，故先检查
else:
    dic["b"] = 98

# 经典场景 统计出现次数
# 新键不存在于原字典，需要额外处理
try:  # EAFP (Easier to Ask for Forgiveness than Permission) 风格
    cnter[key] += 1
except KeyError:
    cnter[key] = 1
```

**集合**  
不会存重复的元素，可以看成只存键的字典，用`{}`括住元素

### 编写函数

```py
def add(a, b):
	return a + b
```

在使用默认参数时，需要注意，应设置为不变量，默认参数仅仅在函数定义的时候赋值一次

### 装饰器

装饰器是一个函数，接受一个函数或方法作为唯一的参数，并返回一个新函数或方法

```py
@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)
```

## 实用

### 头文件

```py
import sys
from bisect import bisect_left, bisect_right
import itertools
from functools import lru_cache # 或者 cache
from heapq import heappush, heappop
from collections import deque, Counter, defaultdict
from math import gcd, inf
import datetime #计算日期相关

sys.setrecursionlimit(200000) # 扩充递归深度
input = lambda: sys.stdin.readline().strip() # 替代内置input，解决超时并去掉换行符

def solve():
    pass

if __name__ == '__main__':
    solve()
```

### 函数

`enumerate()`返回对应列表/元组/字符串的下标和数据

### 输入输出

```py
n, m = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]
```

使用`f-string`格式输入

```py
a=5
print(f"{a:b}") //二进制
print(f"a等于：{a},二进制：{a:b}")
math_pi = 3.1415926
hours, mins = 8, 5
print(f"Time is {hours:02d}:{mins:02d}, Pi is {math_pi:.2f}")
```

未知行数的多行输入

```py
while True:
    try:
        s = input()
    except EOFError:
        break
```

快速读取所有，按空格分割，不论换行：
`data = sys.stdin.read().split() `

### list

```py
ls = [9, 2, 7, 4, 5]
ls.append(10)   #[9, 2, 7, 4, 5, 10]
ls.insert(1, 99) ##[9, 99, 2, 7, 4, 5, 10]
val = ls.pop() #返回10
ls.pop(0)
ls.remove(2) #删除遇到的第一个值为2

#切片 [start:end:step] step为-1代表逆序
rev_ls = ls[::-1]

max_v = max(ls)
min_v = min(ls)
sum_v = sum(ls)

count_2 = ls.count(2) # 统计2出现次数

# 查找元素顶一次出现的索引
idx_5 = ls.index(5) # 如果不存在会报错，建议用 in 先判断

ls.sort() #原地升序
ls.sort(reverse=True) #倒序

new_sorted_ls = sorted(ls) #  非原地排序：sorted() 会返回一个新的数组，原数组不变

points = [[1, 5], [2, 3], [1, 9]]
# 规则：先按第一维升序，如果第一维相同，第二维【降序】
points.sort(key=lambda x: (x[0], -x[1]))
# 结果: [[1, 9], [1, 5], [2, 3]]

# 【深拷贝与浅拷贝陷阱
# 如果写 arr2 = arr1，两者其实指向同一个内存。改 arr2 也会改 arr1。
# 正确复制一维数组的做法：
arr2 = ls[:] # 或者 ls.copy()

# 二维数组陷阱与正确初始化
# 错误做法: dp = [[0]*5]*3 （改一行会导致三行全改，因为里面的行全指向同一个地址）
# 正确做法（推导式）：
dp = [[0] * 5 for _ in range(3)]
```

### string

```py
s = "lanqiaocup"

#   英文字符与ASCII码的转换
ascii_val = ord('A')
char_str = chr(56)

if "qiao" in s:
    idx = s.find("qiao")  #找不到返回-1

cnt = s.count('a')

rev_s = s[::-1]

arr = ["lan", "qiao", "2024"]
res = "-".join(arr) # 输出：lan-qiao-2024

#  字符判别
"a".isalpha()
"123".isdigit()
"A".isupper()
"b".islower()

# 大小写转化
lower_s = s.lower()
upper_s = s.upper()
# 首字母大写用 s.capitalize(), 单词首字母大写用 s.title()

# 替换
replaced_s = s.replace("qiao", "bridge")
```

### set & dict

```py

my_set = set([1, 2, 2, 3, 3])
if 2 in my_set:
    pass

setA = {1, 2, 3}
setB = {3, 4, 5}

inter = setA & setB  # 交集
union = setA | setB # 并集
diff  = setA - setB

# 元素增删
setA.add(9)
setA.discard(2) # 移除2,如果2不存在[不会]报错， 而setA.remove(2)如果不存在会报错

# 字典
scores = {"Alice": 90, "Bob": 85}
scores["Charlie"] = 100 # 新增或更新

# 查找使用get
tom_scare = scores.get("Tom", 0)  #  如果没有Tom，默认返回0，不会报错且不注入字典

# 遍历字典
for name, score in scores.items():
    print(name, score)

# 按值排序
sorted_by_val = sorted(scores.items(), key = lambda x : x[1], reverse = True)
```

### py 语法糖

```py
# 交换值
a, b = 1, 5
a, b = b, a

# 数学比较法
x = 5
if 1 <= x <= 10:
    print("Yes")

# 三目运算符
max_val = a if a > b else b

# 同时获取索引和元素的 enumerate
arr = ['apple', 'banana', 'orange']
for idx, val in enumerate(arr):
    print(f"索引 {idx} 存着 {val}")

# 并行遍历同等长度的多个数组 zip
nums = [1, 2, 3]
for color, num in zip(arr, nums):
    print(color, num)

# 列表推导式
a = [x**2 for x in range(1,11) if x % 2 == 0]

# 状态判别：any和all
bool_arr = [True, False, True]
if all(bool_arr): pass  # 判断是否全为真
if any(bool_arr): pass  # 判断是否存在真

# 字典推导式翻转键值对
ori_dict = {1:"a", 2:'b'}
rev_dict = {v: k for k, v in ori_dict.items()}

# for...else...结构, 如果是自然结束，就执行else
for i in range(2, 5):
    if i == 10:
        print("Found")
        break
else:
    print("Not Found")

# 星号 `*` 列表拆包截取
head, *middle, tail = [1, 2, 3, 4, 5, 6]

# 二维数组展平为一维
grid = [[1, 2, 3], [4, 5], [6]]
flat = sum(grid, [])
max_of_grid = max(max(row) for row in grid)

# 序列反向迭代 reverseed，不占内存消耗
for x in reversed(arr):
    pass
```

### 内置算法库

#### `collections`  模块（高级数据结构集合）

```py
from collections import deque, Counter, defaultdict

# 队列操作
q = deque([1, 2, 3])
q.append(4)  # 从右边进
q.appendleft(0)  # 从左边进
v1 = q.popleft()   # 从左边出
v2 = q.pop()   # 从右边出

# 词频统计 Counter
freq = Counter("banana") # {"a": 3, "n": 2, "b": 1}
most_common_2 = freq.most_common(2)  # [('a', 3), ('n', 2)]

# 可以直接往里 append，不需要判断 key 是否存在
graph = defaultdict(list)
graph['A'].append('B') # 即使A是第一次出现，也会自动创建一个 [] 后 append，零报错
counts = defaultdict(int)
counts['x'] += 1
```

#### `itertools`  模块（暴力搜索与迭代神器）

```py
import itertools

# 全排列
for p in itertools.permutations([1, 2, 3]):
    print(*p) # 输出6种元组，不用自己写dfs

# 无序组合的生成
# C(n, m)的情况，从abc中挑2个
for c in itertools.combinations(['a', 'b', 'c'], 2):
    print(*c)

# 前缀和运算 accumulate
arr = [1, 2, 3, 4]
pref = list(itertools.accumulate(arr))

# 相邻相同元素分组 groupby
for key, group in itertools.groupby("aaabbbccdaa"):
    print(key, len(list(group)))
```

#### `bisect`  模块（二分查找）

```py
import bisect

# 二分查找
arr = [1, 3, 5, 5, 5, 8, 9]
idx_left = bisect.bisect_left(arr, 5)
idx_right = bisect.bisect_right(arr, 5)
cnt_5 = idx_right - idx_left

# 在维护数组有序的情况下插入
bisect.insort(arr, 6)
```

#### `heapq`  模块（优先队列 / 堆）

```py
import heapq

h = [5, 2, 9, 1, 7]
heapq.heapify(h)  # 线性时间建堆（默认最小堆）

heapq.heappush(h, 4) # 推元素进堆

min_val = heapq.heappop(h)  # 弹出堆顶元素

# 获取列表中最大/最小的K个数
top2_max = heapq.nlargest(2, h)
top2_min = heapq.nsmallest(2, h)

```
