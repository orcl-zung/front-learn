# 教学笔记 NOTES.md

记录用户偏好与教学过程中的工作备忘，供后续 session 参考。

## 用户画像
- Java 高级开发，后端背景（Spring/JVM 生态熟悉）。
- 强类型思维扎实 → TypeScript 学习成本极低，应作为信心来源与早期快赢点。
- CSS 基本不会；JS/TS 停留在「能看懂一些」，能读不能写。
- 有 Vue2/Vue3 后台管理经验，但属于粘贴复制已有模块，未建立心智模型。

## 教学偏好（已确认）
- **核心手段：用 Java/JVM/Spring 类比讲前端。** 每个新概念先给 Java 骨架。
  标志性元素：课程 HTML 里的 `.analogy` 提示框；参考文档 `concept-map-java-frontend.html`。
- 沟通用中文；代码、标识符、术语原文用英文。
- 框架：先 React 深入 → 再 Vue3 对照（交错对比强化）。
- CSS：系统补基础。

## 项目（已明确）
**个人博客系统**：文章展示（列表/详情/排版）、页面动效、SEO、better-auth 用户认证、
RBAC 动态权限、全文搜索、客户端可用的后端 API。

全部课程示例改用博客域（文章卡片、评论表单、文章排版等），不再用 todo demo。
功能→知识→阶段的映射见 `reference/project-blog-map.html`。

### 关键待决策（延后到阶段 4–5，用 AskUserQuestion 正式定）
后端栈 = **Java Spring Boot** vs **TS 全栈**。权衡记录：
- better-auth 是 TS 原生库 → 若坚持 better-auth，认证逻辑倾向落在 TS 侧（Next.js API / 独立 TS 服务）。
- SEO 一体化 → 倾向 **Next.js（React）** 做前端 + SSR/SSG。
- 用户是 Java 资深 → 也可 Java 出 API + React 前端（此时 better-auth 换成 Spring Security，但与用户点名 better-auth 的意愿冲突）。
- 在用户具备 React 基础、能评估 Next.js 复杂度之前，不要逼他做这个决定。
- 在此之前所有 CSS/JS/TS 课与该决策完全无关，照常推进。

## 教学结构约定
- 课程进度与路线图见每课结尾；当前在第 2 阶段「CSS 基础」第 1 步（第 2 课「盒模型」已完成），下一课 Flexbox。
- 每节课是 `lessons/` 下一个自包含 HTML，链接共享样式 `assets/style.css`。
- 参考文档放 `reference/`，是「压缩精华、常回查」的资料；术语统一遵守 `glossary.html`。
- 学习记录放 `learning-records/`，只记「决策级」洞见与用户披露的先验知识，不是流水账。
- **主题（深/浅色）**：能力做在 `assets/style.css`（CSS 变量 + `[data-theme=dark]` 覆盖层）
  与可复用组件 `assets/theme.js`（防闪烁、右上角切换按钮、localStorage 持久化、跟随系统）。
  **每个新建的 HTML 页面都必须在 `<head>` 引入 theme.js**（根目录 `assets/theme.js`，
  子目录 `../assets/theme.js`），且页面内联 `<style>` 只用 CSS 变量、不写硬编码颜色，
  否则暗黑主题下会错色。
- **课程间导航（易漏点）**：每课 `<footer class="lesson-foot">` 用 `.nav-rows` 放上一课/下一课链接。
  写新课时，上一课链接可立即确定；**下一课先留纯文字占位，等下一课文件创建后再回填成链接**。
  做 N 课时务必回填第 N−1 课 footer 的下一课链接（2026-06 曾因此漏过：第 1 课 footer 的"下一课"做完第 2 课后没补，纯文字点不动）。
