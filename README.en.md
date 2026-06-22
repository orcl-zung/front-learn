# Frontend Learning Course · From Senior Java Dev to Full-Stack

> [中文 README](README.md) | **English**

Master **CSS → modern JavaScript → TypeScript → React → Vue3** systematically, through the lens of the **Java / JVM / Spring** ecosystem you already know — and ship a **personal blog system** frontend by the end.

[Open course home](index.html) · [Mission](MISSION.md) · [Java ↔ Frontend concept map](reference/concept-map-java-frontend.html) · [Glossary](reference/glossary.html)

---

## ✨ What this is

A frontend learning workspace tailored for **Java backend developers**. Instead of generic tutorials, every frontend concept is **pinned to a Java/JVM counterpart** you already know — the browser ≈ JVM, the event loop ≈ Swing's EDT, reactivity ≈ `PropertyChangeSupport` — so the "frontend is mysterious" wall comes down once and for all.

The capstone isn't a throwaway todo demo but a **blog system** (article rendering, motion, SEO, better-auth authentication, RBAC permissions, full-text search). All lesson examples use the blog domain.

## 🎯 Who it's for

- Senior Java developers who want to grow from backend into a **full-stack** engineer who ships both ends.
- People who can "copy-paste" existing Vue2/Vue3 admin modules together, but for whom the foundations (CSS, modern JS/TS, the browser runtime, reactivity) are still a black box.
- Anyone who blanks on frontend jargon and wants it anchored to a Java concept.

## 🗺️ Learning path

| Stage | Topic | What you'll get |
|-------|-------|-----------------|
| ① | Orient & map | Build a coordinate system; pin unfamiliar terms to Java concepts |
| ② | CSS foundations | Fix the biggest gap: box model, Flexbox, Grid, positioning, responsive, motion |
| ③ | Modern JavaScript | From "can read" to "can write": syntax, DOM, async, event loop |
| ④ | TypeScript | Your home turf — a quick win (structural vs Java's nominal typing) |
| ⑤ | React in depth | Prioritized — ship the blog frontend: components, hooks, routing, forms, APIs |
| ⑥ | Vue3 in contrast | Recreate the same features with the Composition API; articulate the differences |
| ⑦ | Ship the project | Land every skill on a real blog system and deliver it |

> Framework order: **React first, then Vue as contrast** (interleaving strengthens retention).

See the [course home](index.html) for full progress and roadmap. Currently in **Stage ①**.

## 📂 Structure

```
front-learn/
├── index.html               # Course home · all navigation entry points
├── lessons/                 # Lessons: one self-contained HTML each
│   └── 0001-前端世界地图-从java眼睛看.html
├── reference/               # Reference docs · compressed essentials, re-check often
│   ├── concept-map-java-frontend.html   # Java ↔ frontend concept map
│   ├── glossary.html                    # Glossary
│   └── project-blog-map.html            # feature → knowledge → stage mapping
├── learning-records/        # Learning records · decision-level insights only
├── assets/                  # Shared styles + theme switcher
│   ├── style.css            # Typography / palette shared by every page
│   └── theme.js             # Light/dark toggle (no-flash, follows system, persisted)
├── MISSION.md               # Learning mission and success criteria
├── RESOURCES.md             # High-trust learning resources
└── NOTES.md                 # Teaching notes and learner profile
```

## ▶️ Run locally

It's a static site — **no install, no build step**. Open [`index.html`](index.html) any way you like:

- **Simplest**: double-click `index.html` to open it in a browser.
- **Recommended** (avoids relative-path / `file://` quirks): serve the repo root locally —

  ```bash
  # Python 3 (ships with the OS)
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

All page links are relative, so they resolve correctly once pushed to GitHub on any OS.

## 🧠 Teaching method

- **Core device: Java/JVM/Spring analogies throughout.** Every new concept starts with a Java skeleton.
- Communication language: **Chinese**; code, identifiers, and terms stay in English.
- Cadence: each lesson is short, quick to finish, and ends with a tangible small win — following **desirable difficulty** (retrieval practice, spacing, interleaving).
- Each lesson is a self-contained HTML under `lessons/`, linking the shared stylesheet `assets/style.css`.

## 📚 Engineering docs

- [MISSION.md](MISSION.md) — learning mission, success criteria, and scope
- [RESOURCES.md](RESOURCES.md) — high-trust resources (MDN / web.dev / zh.javascript.info …)
- [NOTES.md](NOTES.md) — teaching notes, learner profile, and structural conventions

## 📌 Status

🚧 **In progress** — Stage ① (Orient & map) is done; moving into Stage ② (CSS foundations).

## 📄 License

For personal learning. Course content and examples are original to this workspace; external resources are copyrighted by their respective sources (see [RESOURCES.md](RESOURCES.md)).
