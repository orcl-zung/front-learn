# 前端学习课程 · 从 Java 高级开发到全栈

> **English** | [English README](README.en.md)

用 **Java / JVM / Spring 的眼睛**，系统打通 CSS → 现代 JavaScript → TypeScript → React → Vue3，最终独立交付一个**个人博客系统**前端。

[打开课程首页](index.html) · [学习使命](MISSION.md) · [概念对照表](reference/concept-map-java-frontend.html) · [术语表](reference/glossary.html)

---

## ✨ 这是什么

一个为 **Java 后端开发者**量身定制的前端学习工作区。不照搬通用教程，而是把每个前端概念**钉到一个你熟悉的 Java/JVM 对应物**上——浏览器 ≈ JVM、事件循环 ≈ Swing EDT、响应式 ≈ `PropertyChangeSupport`——让"前端很神秘"的墙被一次性拆掉。

落地项目不是泛泛的 todo demo，而是**博客系统**（文章展示、动效、SEO、better-auth 认证、RBAC 动态权限、全文搜索）。全部课程示例都用博客域。

## 🎯 适合谁

- Java 高级开发，想从后端扩展为能独立交付前后端的**全栈**。
- 能用 Vue2/Vue3「粘贴复制」拼出后台模块，但底层（CSS、现代 JS/TS、浏览器运行时、响应式机制）还是黑盒。
- 看到 frontend 术语会发懵，想把它挂到一个 Java 概念上。

## 🗺️ 学习路径

| 阶段 | 主题 | 说明 |
|------|------|------|
| ① | 定位与地图 | 建立坐标系，把陌生术语钉到 Java 概念上 |
| ② | CSS 基础 | 补最大的缺口：盒模型、Flexbox、Grid、定位、响应式、动效 |
| ③ | 现代 JavaScript | 从「能读」到「能写」：语法、DOM、异步、事件循环 |
| ④ | TypeScript | 你的主场、快赢点（结构类型 vs Java 名义类型） |
| ⑤ | React 深入 | 优先吃透，落地博客前端：组件、Hook、路由、表单、API |
| ⑥ | Vue3 对照 | 组合式 API 复现同一功能，讲清与 React 的差异 |
| ⑦ | 项目落地 | 把全部能力落到真实博客系统，独立交付 |

> 框架顺序：**先 React 深入，再 Vue 对照学习**（交错对比强化记忆）。

课程进度与路线图见 [首页](index.html)。当前在**阶段 ①**。

## 📂 目录结构

```
front-learn/
├── index.html               # 课程首页 · 全部导航入口
├── lessons/                 # 课程：每节一个自包含 HTML
│   └── 0001-前端世界地图-从java眼睛看.html
├── reference/               # 参考文档 · 压缩精华、常回查
│   ├── concept-map-java-frontend.html   # Java ↔ 前端 概念对照表
│   ├── glossary.html                    # 术语表
│   └── project-blog-map.html            # 功能 → 知识 → 阶段 映射
├── learning-records/        # 学习记录 · 只记决策级洞见
├── assets/                  # 共享样式 + 主题切换
│   ├── style.css            # 所有页面共用的排版 / 配色
│   └── theme.js             # 深浅色切换（防闪烁、跟随系统、持久化）
├── MISSION.md               # 学习使命与成功标准
├── RESOURCES.md             # 高可信学习资源清单
└── NOTES.md                 # 教学笔记与用户画像
```

## ▶️ 本地预览

纯静态站点，**无需安装、无需构建**。任选一种方式打开 [`index.html`](index.html)：

- **最简单**：直接双击 `index.html` 用浏览器打开。
- **推荐**（避免相对路径/file 协议的坑）：在仓库根目录起一个本地服务器——

  ```bash
  # Python 3（系统自带）
  python3 -m http.server 8000
  # 然后访问 http://localhost:8000
  ```

所有页面链接都是相对路径，push 到 GitHub 后任何系统都能跳转。

## 🧠 教学方法

- **核心手段：全程 Java/JVM/Spring 类比。** 每个新概念先给一个 Java 骨架。
- 沟通语言：**中文**；代码、标识符、术语用英文。
- 节奏：每节课短、可快速完成、带一个可感知的小胜利；遵循**可取难度**（检索练习、间隔、交错）。
- 每节课是 `lessons/` 下一个自包含 HTML，链接共享样式 `assets/style.css`。

## 📚 工程文档

- [MISSION.md](MISSION.md) — 学习使命、成功标准与边界
- [RESOURCES.md](RESOURCES.md) — MDN / web.dev / zh.javascript.info 等高可信资源
- [NOTES.md](NOTES.md) — 教学笔记、用户画像与教学结构约定

## 📌 状态

🚧 **进行中** — 阶段 ①（定位与地图）已完成，正在进入阶段 ②（CSS 基础）。

## 📄 License

个人学习用途。课程内容与示例为本工作区原创；外部资源版权归各自来源所有（见 [RESOURCES.md](RESOURCES.md)）。
