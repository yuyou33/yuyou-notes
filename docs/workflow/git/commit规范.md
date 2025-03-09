# commit 规范

`git commit message`  的格式

```sh
<type>(<scope>): <subject>

<body>

<footer>
```

- `type`（必填）：`commit`  的类型
- `scope`（选填）：`commit`  的影响范围
- `subject`（必填）：`commit`  信息的简短描述（50 字以内）
- `body`（选填）：`commit`  信息的具体描述
- `footer`（选填）：重大变化（`Breaking Change`）和需要关闭的`Issue`

| type             | 含义                                   |
| ---------------- | -------------------------------------- |
| _feat_           | 新功能                                 |
| _fix_            | 修复 bug                               |
| _docs_           | 文档类改动                             |
| _style_          | 代码格式改动，同理适用于业务样式调整   |
| _refactor_       | 重构（即不是新增功能，也不是修复 bug） |
| _perf_           | 性能优化相关                           |
| _types_          | `TypeScript`  类型相关的改动           |
| _test_           | 单元测试、e2e 测试                     |
| _build_          | 构建工具或者依赖项的改动               |
| _ci_             | 修改项目持续集成流程                   |
| _chore_          | 其他类型的提交                         |
| _revert_         | 恢复或还原相关提交                     |
| *wip* \| *draft* | 托管平台对应的草稿标识                 |
