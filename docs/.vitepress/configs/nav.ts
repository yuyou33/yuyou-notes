import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '主页', link: '/' },
  { text: '编程学习', link: '/编程学习/' },
  {
    text: 'workflow',
    link: '/workflow/',
  },
  { text: '实用工具', link: '/实用工具/' },
  {
    text: '测试页面',
    link: '/test/',
  },
]
