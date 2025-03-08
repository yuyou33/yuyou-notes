import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/编程学习/': [
        { text: '导览', link: '/编程学习' },
        {
            text: 'C++',
            collapsed: false,
            items: [
                { text: 'CS106L', link: '/编程学习/C++/CS106L/CS106l' }
            ]
        },
        {
            text: 'Linux',
            collapsed: false,
            items: [
                { text: 'vim', link: '/编程学习/Linux学习/001-vim' },
                { text: 'linux常用命令', link: '/编程学习/Linux学习/002-linux常用命令' },
                { text: 'The Missing Semester', link: '/编程学习/Linux学习/003-The Missing Semester' }
            ]
        }
    ],
    '/workflow/': [
        { text: '导览', link: '/workflow' },
        { text: 'Markdown', link: '/workflow/001-Markdown' },
        { text: '正则表达式', link: '/workflow/002-正则表达式' }
    ],
    '/实用工具/': [
        { text: '导览', link: '/实用工具'}
    ]

}
