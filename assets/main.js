(function () {
  "use strict";

  var S = window.SITE;
  var C = window.CONTENT;
  var LANGS = ["en", "da", "zh"];
  var HTML_LANG = { en: "en", da: "da", zh: "zh-CN" };
  var lang = "en";
  var selected = "lego";

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function get(obj, path) {
    return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, obj);
  }
  function t(path) { return get(C[lang], path) || get(C.en, path) || ""; }

  function toYear(ym) {
    if (!ym) { var d = new Date(); return d.getFullYear() + d.getMonth() / 12; }
    var p = ym.split("-");
    return +p[0] + (+p[1] - 1) / 12;
  }
  function fmtMonth(ym) {
    if (!ym) return t("ui.now");
    var p = ym.split("-");
    var d = new Date(+p[0], +p[1] - 1, 1);
    try {
      return new Intl.DateTimeFormat(HTML_LANG[lang], { year: "numeric", month: "short" }).format(d);
    } catch (e) { return ym; }
  }
  function range(from, to) { return fmtMonth(from) + " – " + fmtMonth(to); }

  var START = toYear(S.timelineStart);
  var END = toYear(null) + 0.15;
  function pct(y) { return ((y - START) / (END - START)) * 100; }
  var MOVED = toYear(S.movedToCopenhagen);

  /* ---------- language ---------- */
  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS.indexOf(q) > -1) return q;
    try {
      var s = localStorage.getItem("lang");
      if (s && LANGS.indexOf(s) > -1) return s;
    } catch (e) {}
    return "en";
  }

  function setLang(l, remember) {
    lang = l;
    document.documentElement.lang = HTML_LANG[l];
    document.title = t("meta.title");
    var md = $('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta.description"));
    if (remember) {
      try { localStorage.setItem("lang", l); } catch (e) {}
      try {
        var u = new URL(location.href);
        if (l === "en") u.searchParams.delete("lang"); else u.searchParams.set("lang", l);
        history.replaceState(null, "", u.pathname + u.search + u.hash);
      } catch (e) {}
    }
    $$(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === l));
    });
    render();
  }

  /* ---------- static strings ---------- */
  function renderStatic() {
    $$("[data-t]").forEach(function (n) { n.textContent = t(n.dataset.t); });
    var mail = "mailto:" + S.email;
    ["hero-email", "contact-email"].forEach(function (id) {
      var a = document.getElementById(id); a.href = mail; a.textContent = S.email;
    });
    ["hero-github", "contact-github"].forEach(function (id) { document.getElementById(id).href = S.github; });
    ["hero-linkedin", "contact-linkedin"].forEach(function (id) { document.getElementById(id).href = S.linkedin; });
    ["hero-blog", "contact-blog"].forEach(function (id) {
      var a = document.getElementById(id); a.href = S.denmark.blog.url; a.textContent = t("denmark.channels.blog.name");
    });
  }

  /* ---------- the wall ---------- */
  var colourCount = { bj: 0, cph: 0 };
  function colourFor(fromYear) {
    if (fromYear < MOVED - 0.01) return "bj-" + (colourCount.bj++ % 3);
    return "cph-" + (colourCount.cph++ % 5);
  }

  function bricks() {
    colourCount = { bj: 0, cph: 0 };
    var list = [];
    // Study first so the foundations take the first grey tones
    S.edu.slice().reverse().forEach(function (e) {
      var f = toYear(e.from), to = toYear(e.to);
      list.push({ key: "edu-" + e.id, course: "study", from: f, to: to,
        label: t("edu." + e.id + ".short"),
        title: t("edu." + e.id + ".school"),
        meta: t("edu." + e.id + ".degree") + " · " + range(e.from, e.to),
        body: t("edu." + e.id + ".note"),
        href: "#education", colour: colourFor(f) });
    });
    S.jobs.slice().reverse().forEach(function (j) {
      var f = toYear(j.from), to = toYear(j.to);
      list.push({ key: "job-" + j.id, course: "work", from: f, to: to,
        label: t("jobs." + j.id + ".org"),
        title: t("jobs." + j.id + ".org"),
        meta: t("jobs." + j.id + ".role") + " · " + range(j.from, j.to) + " · " + t("jobs." + j.id + ".city"),
        body: t("jobs." + j.id + ".body"),
        href: "#job-" + j.id, colour: colourFor(f) });
    });
    S.side.forEach(function (s) {
      var f = toYear(s.from), to = toYear(s.to);
      list.push({ key: "side-" + s.id, course: "side", from: f, to: to,
        label: t("side." + s.id + ".label"),
        title: t("side." + s.id + ".label"),
        meta: range(s.from, s.to),
        body: t("side." + s.id + ".text"),
        href: "#denmark", colour: colourFor(f) });
    });
    S.life.forEach(function (m) {
      var c = toYear(m.at);
      list.push({ key: "life-" + m.id, course: "life", from: c, to: c, point: true,
        label: t("life." + m.id + ".label"),
        title: t("life." + m.id + ".label"),
        meta: "",
        body: t("life." + m.id + ".text"),
        href: "#years", colour: colourFor(c) });
    });
    return list;
  }

  var brickData = {};

  function renderWall() {
    var grid = $("#wall-grid");
    grid.textContent = "";
    var courses = ["life", "side", "work", "study"];
    var all = bricks();
    brickData = {};

    // year axis + move marker live in an overlay
    var overlay = el("div", "wall-overlay");
    overlay.setAttribute("aria-hidden", "true");
    for (var y = Math.ceil(START); y <= Math.floor(END); y++) {
      if (y % 2) continue;
      var tick = el("span", "tick", String(y));
      tick.style.left = pct(y) + "%";
      overlay.appendChild(tick);
    }
    var mv = el("span", "moved");
    mv.style.left = pct(MOVED) + "%";
    mv.appendChild(el("span", "moved-label", t("ui.moved")));
    overlay.appendChild(mv);

    courses.forEach(function (name, ci) {
      var row = el("div", "course course-" + name);
      row.appendChild(el("span", "course-label", t("ui.courses." + name)));
      var track = el("div", "track");
      all.filter(function (b) { return b.course === name; }).forEach(function (b, i) {
        brickData[b.key] = b;
        var btn = el("button", "brick " + b.colour + (b.point ? " point" : ""));
        btn.type = "button";
        btn.dataset.key = b.key;
        var w = pct(b.to) - pct(b.from);
        btn.style.left = pct(b.from) + "%";
        btn.style.width = w + "%";
        btn.style.setProperty("--d", ((3 - ci) * 0.15 + (pct(b.from) / 100) * 0.8).toFixed(2) + "s");
        btn.setAttribute("aria-label", b.title + (b.meta ? ", " + b.meta : ""));
        btn.title = b.title;
        var lab = el("span", "brick-label", b.label);
        btn.appendChild(lab);
        if (w < (b.point ? 1 : 5.2)) btn.classList.add("narrow");
        btn.addEventListener("click", function () { select(b.key, true); });
        track.appendChild(btn);
      });
      row.appendChild(track);
      grid.appendChild(row);
    });
    grid.appendChild(overlay);
    var sc = grid.parentNode;
    sc.scrollLeft = sc.scrollWidth;
    select(selected === "lego" ? "job-lego" : selected, false);
  }

  function select(key, user) {
    if (!brickData[key]) key = "job-lego";
    selected = key;
    $$(".brick").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.key === key)); });
    var b = brickData[key];
    var d = $("#brick-detail");
    d.textContent = "";
    d.className = "brick-detail " + b.colour;
    var h = el("h3", null, b.title);
    d.appendChild(h);
    if (b.meta) d.appendChild(el("p", "meta", b.meta));
    if (b.body) d.appendChild(el("p", "body", b.body));
    if (b.href && b.course !== "life") {
      var a = el("a", "more", t("ui.readMore"));
      a.href = b.href;
      d.appendChild(a);
    }
    if (!user) {
      var hint = el("p", "hint", t("ui.wallHint"));
      d.appendChild(hint);
    }
  }

  /* ---------- sections ---------- */
  function renderJobs() {
    var ol = $("#jobs");
    ol.textContent = "";
    S.jobs.forEach(function (j) {
      var base = "jobs." + j.id + ".";
      var li = el("li", "job");
      li.id = "job-" + j.id;
      var when = el("p", "when", range(j.from, j.to));
      var main = el("div", "job-main");
      main.appendChild(el("h3", null, t(base + "org")));
      main.appendChild(el("p", "role", t(base + "role") + ", " + t(base + "city")));
      main.appendChild(el("p", "body", t(base + "body")));
      var note = t(base + "note");
      if (note) {
        var q = el("p", "note");
        q.appendChild(el("span", "note-label", t("ui.inMyWords")));
        q.appendChild(document.createTextNode(note));
        main.appendChild(q);
      }
      var tags = el("ul", "tags");
      j.tags.forEach(function (x) { tags.appendChild(el("li", null, x)); });
      main.appendChild(tags);
      li.appendChild(when);
      li.appendChild(main);
      ol.appendChild(li);
    });
  }

  function renderProjects() {
    var wrap = $("#project-list");
    wrap.textContent = "";
    S.projects.forEach(function (p) {
      var base = "projects." + p.id + ".";
      var art = el("article", "project" + (p.favourite ? " fav" : ""));
      art.id = "project-" + p.id;
      if (p.favourite) art.appendChild(el("span", "fav-stamp", t("ui.favourite")));
      art.appendChild(el("h3", null, t(base + "title")));
      art.appendChild(el("p", "where", t(base + "where")));
      art.appendChild(el("p", "body", t(base + "body")));
      if (p.links) {
        var ul = el("ul", "plinks");
        p.links.forEach(function (l) {
          var li = el("li"); var a = el("a", null, l[0]); a.href = l[1]; li.appendChild(a); ul.appendChild(li);
        });
        art.appendChild(ul);
      }
      wrap.appendChild(art);
    });
  }

  function renderYears() {
    var ol = $("#year-list");
    ol.textContent = "";
    C[lang].years.forEach(function (y) {
      var li = el("li", y[0] === S.movedToCopenhagen.slice(0, 4) ? "pivot" : null);
      li.appendChild(el("span", "y", y[0]));
      li.appendChild(el("span", "yt", y[1]));
      ol.appendChild(li);
    });
  }

  function renderToolbox() {
    var dl = $("#toolbox-list");
    dl.textContent = "";
    Object.keys(S.toolbox).forEach(function (g) {
      var row = el("div", "tool-row");
      row.appendChild(el("dt", null, t("ui.toolbox." + g)));
      var dd = el("dd");
      S.toolbox[g].forEach(function (x) { dd.appendChild(el("span", "tool", x)); });
      row.appendChild(dd);
      dl.appendChild(row);
    });
  }

  function renderEdu() {
    var wrap = $("#edu-list");
    wrap.textContent = "";
    S.edu.forEach(function (e) {
      var base = "edu." + e.id + ".";
      var div = el("div", "school");
      div.appendChild(el("h3", null, t(base + "school")));
      div.appendChild(el("p", "role", t(base + "degree") + ", " + range(e.from, e.to)));
      var n = t(base + "note");
      if (n) div.appendChild(el("p", "body", n));
      wrap.appendChild(div);
    });
  }

  function renderDenmark() {
    var D = S.denmark, nf;
    try { nf = new Intl.NumberFormat(HTML_LANG[lang]); } catch (e) { nf = { format: String }; }
    var dl = $("#dk-stats");
    dl.textContent = "";
    ["posts", "followers", "readers", "top"].forEach(function (k) {
      var div = el("div", "stat");
      div.appendChild(el("dt", null, nf.format(D.stats[k])));
      div.appendChild(el("dd", null, t("denmark.stats." + k)));
      dl.appendChild(div);
    });
    var ul = $("#dk-topics");
    ul.textContent = "";
    (C[lang].denmark.topics || []).forEach(function (x) { ul.appendChild(el("li", null, x)); });
    var rec = $("#dk-recent");
    rec.textContent = "";
    var tr = C[lang].denmark.recent || [];
    S.denmarkRecent.forEach(function (art, i) {
      var li = el("li");
      var a = el("a", "zh", art.zh);
      a.href = art.url;
      a.lang = "zh-CN";
      li.appendChild(a);
      if (tr[i]) { var en = el("span", "tr", tr[i]); en.lang = HTML_LANG[lang]; li.appendChild(en); }
      rec.appendChild(li);
    });
    var ch = $("#dk-channels");
    ch.textContent = "";
    ["wechat", "blog"].forEach(function (k) {
      var row = el("div", "channel");
      row.appendChild(el("dt", null, t("denmark.channels." + k + ".name")));
      var dd = el("dd");
      dd.appendChild(document.createTextNode(
        t("denmark.channels." + k + ".text")
          .replace("{posts}", nf.format(D.blog.posts))
          .replace("{views}", nf.format(D.blog.views))));
      if (k === "blog") {
        dd.appendChild(document.createTextNode(" "));
        var a = el("a", null, D.blog.label);
        a.href = D.blog.url;
        dd.appendChild(a);
      }
      row.appendChild(dd);
      ch.appendChild(row);
    });
  }

  function render() {
    renderStatic();
    renderDenmark();
    renderWall();
    renderJobs();
    renderProjects();
    renderYears();
    renderToolbox();
    renderEdu();
  }

  /* ---------- copy email ---------- */
  function setupCopy() {
    var btn = $("#copy-email");
    btn.addEventListener("click", function () {
      function done() {
        btn.textContent = t("ui.copied");
        setTimeout(function () { btn.textContent = t("ui.copy"); }, 1800);
      }
      function fallback() {
        var r = document.createRange();
        r.selectNodeContents($("#contact-email"));
        var s = getSelection(); s.removeAllRanges(); s.addRange(r);
      }
      try {
        navigator.clipboard.writeText(S.email).then(done, fallback);
      } catch (e) { fallback(); }
    });
  }

  /* ---------- build the wall once it scrolls into view ---------- */
  function setupBuild() {
    var wall = $("#wall-grid");
    if (!("IntersectionObserver" in window)) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { wall.classList.add("build"); io.disconnect(); }
      });
    }, { threshold: 0.35 });
    io.observe(wall);
  }

  /* ---------- init ---------- */
  $$(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang, true); });
  });
  setupCopy();
  setLang(pickLang(), false);
  setupBuild();
})();
