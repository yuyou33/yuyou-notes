import{_ as s,c as e,o as i,al as a}from"./chunks/framework.saZHKLzJ.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"workflow/git/commit规范.md","filePath":"workflow/git/commit规范.md","lastUpdated":1741612635000}'),d={name:"workflow/git/commit规范.md"};function l(n,t,r,o,p,c){return i(),e("div",null,t[0]||(t[0]=[a(`<h2 id="commit-规范" tabindex="-1">commit 规范 <a class="header-anchor" href="#commit-规范" aria-label="Permalink to &quot;commit 规范&quot;">​</a></h2><p><code>git commit message</code>  的格式</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&gt;(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scope</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subject</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">body</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">footer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><code>type</code>（必填）：<code>commit</code>  的类型</li><li><code>scope</code>（选填）：<code>commit</code>  的影响范围</li><li><code>subject</code>（必填）：<code>commit</code>  信息的简短描述（50 字以内）</li><li><code>body</code>（选填）：<code>commit</code>  信息的具体描述</li><li><code>footer</code>（选填）：重大变化（<code>Breaking Change</code>）和需要关闭的<code>Issue</code></li></ul><table tabindex="0"><thead><tr><th>type</th><th>含义</th></tr></thead><tbody><tr><td><em>feat</em></td><td>新功能</td></tr><tr><td><em>fix</em></td><td>修复 bug</td></tr><tr><td><em>docs</em></td><td>文档类改动</td></tr><tr><td><em>style</em></td><td>代码格式改动，同理适用于业务样式调整</td></tr><tr><td><em>refactor</em></td><td>重构（即不是新增功能，也不是修复 bug）</td></tr><tr><td><em>perf</em></td><td>性能优化相关</td></tr><tr><td><em>types</em></td><td><code>TypeScript</code>  类型相关的改动</td></tr><tr><td><em>test</em></td><td>单元测试、e2e 测试</td></tr><tr><td><em>build</em></td><td>构建工具或者依赖项的改动</td></tr><tr><td><em>ci</em></td><td>修改项目持续集成流程</td></tr><tr><td><em>chore</em></td><td>其他类型的提交</td></tr><tr><td><em>revert</em></td><td>恢复或还原相关提交</td></tr><tr><td><em>wip</em> | <em>draft</em></td><td>托管平台对应的草稿标识</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">提示</p><p>在 commit 时会有 pre-commit hook 检查 想忽略他可以使用 <code>-n</code>即<code>--no-verify</code></p></div>`,6)]))}const k=s(d,[["render",l]]);export{h as __pageData,k as default};
