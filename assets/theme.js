/* ==========================================================================
   主题切换组件 · 可复用
   用法：每个页面 <head> 里（紧跟样式表之后）同步引入对应路径的 theme.js：
       <script src="assets/theme.js"></script>          <!-- 根目录页面 -->
       <script src="../assets/theme.js"></script>       <!-- lessons/ 或 reference/ 下 -->
   - 同步加载 + 立即应用 data-theme，避免页面闪烁(FOUC)。
   - 偏好持久化到 localStorage；首次访问跟随系统 prefers-color-scheme。
   - DOM 就绪后注入右上角切换按钮。
   ========================================================================== */
(function () {
  "use strict";
  var KEY = "theme-pref";
  var root = document.documentElement;

  function systemDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function preferred() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    return saved === "dark" || saved === "light" ? saved : (systemDark() ? "dark" : "light");
  }
  function apply(theme) { root.setAttribute("data-theme", theme); }

  // 1) 立即应用 —— 本脚本在 <head> 同步执行，赶在首次绘制前定主题。
  apply(preferred());

  // 2) DOM 就绪后注入按钮并绑定切换。
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }
  ready(function () {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";
    btn.setAttribute("aria-label", "切换深色 / 浅色主题");
    btn.title = "切换深色 / 浅色主题";
    btn.innerHTML =
      '<span class="icon icon-moon" aria-hidden="true">🌙</span>' +
      '<span class="icon icon-sun" aria-hidden="true">☀️</span>';
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
    document.body.appendChild(btn);

    // 跟随系统变化（仅当用户未手动设置过时）。
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        var saved = null;
        try { saved = localStorage.getItem(KEY); } catch (err) {}
        if (!saved) apply(e.matches ? "dark" : "light");
      });
    }
  });
})();
