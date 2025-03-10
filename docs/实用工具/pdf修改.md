# pdf 修改

## pdf 拆分合并-PDFtk

### 安装

```sh
sudo apt-get install pdftk
```

### 用法示例

具体选项看这里： [pdftk-man](http://www.pdflabs.com/docs/pdftk-man-page/)

```sh
#提取1-15页为一个文件
$ pdftk input.pdf cat 1-15 output new.pdf

#提取第1至3，第5，第6至10页，并合并为一个pdf文件
$ pdftk input.pdf cat 1-3 5 6-10 output combined.pdf

#合并(concatenate) 前面所有的pdf为output.pdf
$ pdftk file1.pdf file2.pdf ... cat output new.pdf

#拆分PDF的每一页为一个新文件 并按照指定格式设定文件名
$ pdftk input.pdf burst output new_%d.pdf

#按照通配符，合并大量PDF文件
$ pdftk *.pdf cat output combined.pdf

#去除第 13 页,其余的保存为新PDF
$ pdftk in.pdf cat 1-12 14-end output out1.pdf

#扫描一本书，odd.pdf 为书的全部奇数页，even.pdf 为书的全部偶数页，下面的命令可以将两个 pdf 合并成页码正常的书
$ pdftk A=odd.pdf B=even.pdf shuffle A B output collated.pdf

#按180°旋转所有页面
$ pdftk input.pdf cat 1-endsouth output output.pdf

#按顺时针90°旋转第三页，其他页不变
$ pdftk input.pdf cat 1-2 3east 4-end output output.pdf

#输入密码转换成无密码PDF
pdftk secured.pdf input_pw foopass output unsecured.pdf
```

### 修改目录

```sh
# 提取PDF的目录结构为一个txt文件
$ pdftk sample.pdf dump_data output info.txt

# 修改信息
# ...

# 把更改的信息加载回PDF
$ pdftk sample.pdf update_info info.txt output sample2.pdf
```

## 图片转 pdf-img2pdf

> 例如想批量下载图片并转成 pdf

### 安装

```sh
sudo apt install img2pdf
```

### 首先是用 shell 脚本批量下载图片

```sh
#!/bin/bash

# 设置基础URL（请替换为实际的图片URL前缀）
base_url="https://node2d-public.hep.com.cn/16f1dc38777d811d0fe8947462dd6bfa.pdf/16f1dc38777d811d0fe8947462dd6bfa.pdf.files/"
start=1     # 起始序号
end=53       # 结束序号
delay=1      # 请求间隔（秒）

for ((i=start; i<=end; i++)); do
    # 拼接完整图片URL
    img_url="${base_url}${i}.png"

    # 使用 curl 检查文件是否存在，存在则下载
    if curl --output /dev/null --silent --head --fail "$img_url"; then
        echo "正在下载: $img_url"
        curl -O "$img_url" --silent
    else
        echo "文件不存在: $img_url"
    fi

    # 避免频繁请求
    sleep $delay
done

echo "下载完成！"
```

### 图片转 pdf

```sh
img2pdf $(ls -v *.png) -0 output.pdf
```
