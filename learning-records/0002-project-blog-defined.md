# 项目落地目标已明确：个人博客系统

用户明确了具体项目：一个**个人博客系统**，作为全部前端学习的落地载体。
覆盖功能：博客文章展示（列表/详情/排版）、页面动效、SEO、better-auth 用户认证、
RBAC 动态权限、全文搜索、可供客户端调用的后端 API。

**Implications：**
- 全部课程示例域从「泛泛 demo」切换为**博客域**（文章卡片、评论表单、文章排版…），
  让每节课产出都直接服务于真实目标。
- 项目功能与学习阶段的映射固化在 `reference/project-blog-map.html`，后续备课以此为锚。
- 触发一个**延后决策**：后端栈（Java Spring Boot vs TS 全栈）。better-auth 是 TS 原生库 +
  博客强需 SEO（SSR/SSG）→ 倾向 Next.js 全栈；但用户是 Java 资深，可能想保留 Java 出 API。
  该决策延后到阶段 4–5（用户具备 React 基础后）再用提问正式定，详见 [[MISSION.md]] 与 NOTES.md。
  在此之前，CSS / JS / TS 三阶段的课程与该决策无关，照常推进。
