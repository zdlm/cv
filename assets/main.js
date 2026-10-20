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
    ["hero-youtube", "contact-youtube"].forEach(function (id) { document.getElementById(id).href = S.course.youtube; });
    document.getElementById("contact-xhs").href = S.course.xhs;
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
    S.teach.forEach(function (s) {
      var f = toYear(s.from), to = toYear(s.to);
      list.push({ key: "teach-" + s.id, course: "teach", from: f, to: to,
        label: t("teach." + s.id + ".label"),
        title: t("teach." + s.id + ".label"),
        meta: range(s.from, s.to),
        body: t("teach." + s.id + ".text"),
        href: s.href, colour: colourFor(f) });
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
    var courses = ["life", "side", "teach", "work", "study"];
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
      var inRow = all.filter(function (b) { return b.course === name; });
      // Overlapping bricks in one row get stacked into lanes
      var laneEnds = [];
      inRow.slice().sort(function (a, b) { return a.from - b.from; }).forEach(function (b) {
        if (b.point) { b.lane = 0; return; }
        var l = 0;
        while (laneEnds[l] !== undefined && laneEnds[l] > b.from + 0.01) l++;
        laneEnds[l] = b.to;
        b.lane = l;
      });
      var lanes = Math.max(1, laneEnds.length);
      inRow.forEach(function (b, i) {
        brickData[b.key] = b;
        var btn = el("button", "brick " + b.colour + (b.point ? " point" : ""));
        btn.type = "button";
        btn.dataset.key = b.key;
        var w = pct(b.to) - pct(b.from);
        btn.style.left = pct(b.from) + "%";
        btn.style.width = w + "%";
        if (lanes > 1 && !b.point) {
          btn.style.top = (b.lane * 100 / lanes) + "%";
          btn.style.bottom = ((lanes - b.lane - 1) * 100 / lanes) + "%";
          btn.classList.add("stacked");
        }
        btn.style.setProperty("--d", ((courses.length - 1 - ci) * 0.15 + (pct(b.from) / 100) * 0.8).toFixed(2) + "s");
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

  function renderTeaching() {
    var C2 = C[lang].teaching || C.en.teaching;
    var dl = $("#tc-facts");
    dl.textContent = "";
    C2.facts.forEach(function (f) {
      var div = el("div", "tc-fact");
      div.appendChild(el("dt", null, f[0]));
      div.appendChild(el("dd", null, f[1]));
      dl.appendChild(div);
    });
    var ol = $("#tc-plan");
    ol.textContent = "";
    C2.plan.forEach(function (p) {
      var li = el("li");
      li.appendChild(el("strong", null, p[0]));
      li.appendChild(el("span", null, p[1]));
      ol.appendChild(li);
    });
    var ul = $("#tc-extras");
    ul.textContent = "";
    C2.extras.forEach(function (x) { ul.appendChild(el("li", null, x)); });
    $("#tc-link").href = S.teaching.teacherPage;
  }

  function renderCoaching() {
    var K = C[lang].coaching || C.en.coaching;
    var st = $("#co-stats");
    st.textContent = "";
    K.stats.forEach(function (s) {
      var div = el("div", "stat");
      div.appendChild(el("dt", null, s[0]));
      div.appendChild(el("dd", null, s[1]));
      st.appendChild(div);
    });
    var cs = $("#co-cases");
    cs.textContent = "";
    K.cases.forEach(function (k) {
      var art = el("article", "co-case");
      art.appendChild(el("h4", null, k[0]));
      art.appendChild(el("p", null, k[1]));
      art.appendChild(el("p", "co-result", k[2]));
      cs.appendChild(art);
    });
    var how = $("#co-how");
    how.textContent = "";
    K.how.forEach(function (h) {
      var div = el("div");
      div.appendChild(el("dt", null, h[0]));
      div.appendChild(el("dd", null, h[1]));
      how.appendChild(div);
    });
    var vs = $("#co-videos");
    vs.textContent = "";
    S.coaching.videos.forEach(function (u, i) {
      var li = el("li");
      var a = el("a", null, K.videoNames[i] || u);
      a.href = u;
      li.appendChild(a);
      vs.appendChild(li);
    });
  }

  function renderCourse() {
    var K = C[lang].course || C.en.course;
    var D = S.course, nf;
    try { nf = new Intl.NumberFormat(HTML_LANG[lang]); } catch (e) { nf = { format: String }; }
    var ol = $("#cs-modules");
    ol.textContent = "";
    D.modules.forEach(function (mod, i) {
      var li = el("li");
      li.appendChild(el("strong", null, K.modules[i][0]));
      var span = el("span", null, K.modules[i][1] + " ");
      var a = el("a", "cs-lessons", K.lessons.replace("{a}", mod.from).replace("{b}", mod.to));
      a.href = mod.video;
      span.appendChild(a);
      li.appendChild(span);
      ol.appendChild(li);
    });
    $("#cs-playlist").href = D.coursePlaylist;
    $("#cs-qaplaylist").href = D.qaPlaylist;
    var dl = $("#cs-channels");
    dl.textContent = "";
    [["youtube", D.youtube], ["wechat", null], ["xhs", D.xhs]].forEach(function (pair) {
      var k = pair[0];
      var row = el("div", "channel");
      var dt = el("dt");
      if (pair[1]) { var a = el("a", null, K.channels[k].name); a.href = pair[1]; dt.appendChild(a); }
      else dt.textContent = K.channels[k].name;
      row.appendChild(dt);
      row.appendChild(el("dd", null, K.channels[k].text
        .replace("{handle}", D.youtubeHandle)
        .replace("{subs}", nf.format(D.youtubeSubs))
        .replace("{xhs}", D.xhsId)));
      dl.appendChild(row);
    });
    var ul = $("#cs-qa");
    ul.textContent = "";
    D.qa.forEach(function (q, i) {
      var li = el("li");
      var a = el("a", "zh", q.zh);
      a.href = q.url;
      a.lang = "zh-CN";
      li.appendChild(a);
      if (K.qa && K.qa[i]) li.appendChild(el("span", "tr", K.qa[i]));
      ul.appendChild(li);
    });
  }

  function renderAI() {
    var K = C[lang].ai || C.en.ai;
    function pairs(sel, list, links) {
      var dl = $(sel);
      dl.textContent = "";
      list.forEach(function (p, i) {
        var div = el("div");
        var dt = el("dt");
        if (links && links[i]) { var a = el("a", null, p[0]); a.href = links[i]; dt.appendChild(a); }
        else dt.textContent = p[0];
        div.appendChild(dt);
        div.appendChild(el("dd", null, p[1]));
        dl.appendChild(div);
      });
    }
    pairs("#ai-work", K.work);
    var bw = $("#ai-built");
    bw.textContent = "";
    S.ai.groups.forEach(function (g) {
      var grp = el("div", "ai-group");
      grp.appendChild(el("h4", "ai-group-title", K.groups[g.id]));
      var grid = el("div", "ai-cards");
      g.items.forEach(function (id) {
        var meta = S.ai.items[id], txt = K.items[id] || C.en.ai.items[id];
        var card = el("article", "ai-card");
        var h = el("h5");
        if (meta.link) { var a = el("a", null, txt[0]); a.href = meta.link; h.appendChild(a); }
        else h.textContent = txt[0];
        card.appendChild(h);
        card.appendChild(el("p", "ai-card-year", meta.year));
        card.appendChild(el("p", "ai-card-body", txt[1]));
        var ul = el("ul", "ai-card-tools");
        meta.tools.forEach(function (x) { ul.appendChild(el("li", null, x)); });
        card.appendChild(ul);
        grid.appendChild(card);
      });
      grp.appendChild(grid);
      bw.appendChild(grp);
    });
    pairs("#ai-takes", K.takes);
    // 2 x 2 grid: columns = I know / I don't know, rows = AI knows / AI doesn't
    var z = $("#ai-zones");
    z.textContent = "";
    z.appendChild(el("span", "ai-corner"));
    z.appendChild(el("span", "ai-axis ai-col", K.axes[0]));
    z.appendChild(el("span", "ai-axis ai-col", K.axes[1]));
    var order = [[0, 1], [2, 3]];
    order.forEach(function (row, r) {
      z.appendChild(el("span", "ai-axis ai-row", K.axes[2 + r]));
      row.forEach(function (zi) {
        var cell = el("div", "ai-zone zone-" + zi);
        cell.appendChild(el("strong", null, K.zones[zi][0]));
        cell.appendChild(el("span", null, K.zones[zi][1]));
        z.appendChild(cell);
      });
    });
    $("#ai-linkedin").href = S.linkedin + "recent-activity/all/";
    var tl = $("#ai-tools");
    tl.textContent = "";
    S.ai.tools.forEach(function (x) { tl.appendChild(el("li", null, x)); });
  }

  function render() {
    renderStatic();
    renderAI();
    renderCourse();
    renderCoaching();
    renderTeaching();
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
