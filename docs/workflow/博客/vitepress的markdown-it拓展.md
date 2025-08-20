为博客增加上下标功能

```bash
pnpm add -D markdown-it-sup markdown-it-sub
```

在`docs/.vitepress/config.ts`中添加：

```ts
// @ts-ignore
import markdownItSup from 'markdown-it-sup'
// @ts-ignore
import markdownItSub from 'markdown-it-sub'

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(markdownItSup)
      md.use(markdownItSub)
    }
  },

```
