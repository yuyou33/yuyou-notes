import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/编程学习/': [
        { text: '导览', link: '/编程学习/index' },
        {
            text: 'C++',
            collapsed: false,
            items: [
                { text: 'CS106L', link: '/编程学习/C++/CS106L/CS106l' }
            ]
        },
        {
            text: 'Python',
            collapsed: false,
            items: [
                { text: 'CS61A', link: '/编程学习/Python/CS61A/CS61A' }
            ]
        },
        {
            text: 'Linux',
            collapsed: false,
            items: [
                { text: 'vim', link: '/编程学习/Linux/001-vim' },
                { text: 'linux常用命令', link: '/编程学习/Linux/002-linux常用命令' },
                { text: 'The Missing Semester', link: '/编程学习/Linux/003-The Missing Semester' }
            ]
        }
    ],
    '/workflow/': [
        { text: '导览', link: '/workflow/index' },
        {
            text: 'git',
            collapsed: false,
            items: [
                { text: 'commit规范', link: '/workflow/git/commit规范'}
            ]
        },
        { text: 'Markdown', link: '/workflow/001-Markdown' },
        { text: '正则表达式', link: '/workflow/002-正则表达式' },
        {
            text: '踩坑记录',
            collapsed: false,
            items: [
                { text: '踩坑记录', link: '/workflow/踩坑记录/踩坑记录'}
            ]
        },
        {
            text: '博客',
            collapsed: false,
            items: [
                { text: 'vitepress的markdown-it拓展', link: '/workflow/博客/vitepress的markdown-it拓展'}
            ]
        },
    ],
    '/实用工具/': [
        { text: '导览', link: '/实用工具/index'},
        { text: 'pdf修改', link: '/实用工具/pdf修改'}
    ]

}
