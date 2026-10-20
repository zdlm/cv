(function () {
  "use strict";

  var S = window.SITE;
  var C = window.CONTENT;
  var LANGS = ["en", "da", "zh"];
  var HTML_LANG = { en: "en", da: "da", zh: "zh-CN" };
  var lang = "en";
  var selected = null;

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
    // Text in another language has other heights: re-pin
    pins.forEach(function (p) { p.measure(); });
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
    C[lang].years.slice().reverse().forEach(function (entry) {
      var at = toYear(entry[0] + "-06");
      list.push({ key: "year-" + entry[0], course: "year", from: at, to: at, point: true,
        label: entry[0], title: entry[0], meta: "", body: entry[1],
        colour: at < MOVED - 0.01 ? "bj-0" : "cph-0" });
    });
    // AI projects: small bricks that pile up per quarter
    var piles = {};
    Object.keys(S.ai.items).filter(function (id) {
      return S.ai.groups.some(function (g) { return g.items.indexOf(id) > -1; });
    }).map(function (id) { return { id: id, y: toYear(S.ai.items[id].at) }; })
      .sort(function (a, b) { return a.y - b.y; })
      .forEach(function (it) {
        var q = Math.floor(it.y * 4) / 4 + 0.125;
        piles[q] = (piles[q] || 0) + 1;
        var txt = t("ai.items." + it.id);
        list.push({ key: "ai-" + it.id, course: "ai", from: q, to: q, point: true, pile: piles[q] - 1,
          label: txt[0], title: txt[0], meta: S.ai.items[it.id].year,
          body: txt[1], href: "#aip-" + it.id, colour: colourFor(it.y) });
      });
    return list;
  }

  var brickData = {};

  function renderWall() {
    var grid = $("#wall-grid");
    grid.textContent = "";
    var courses = ["year", "ai", "side", "teach", "work", "study"];
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
    // The "now" cursor that sweeps across while the wall plays (setupScrub)
    var now = el("span", "wall-now");
    now.hidden = true;
    now.appendChild(el("span", "wall-now-label"));
    overlay.appendChild(now);

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
        if (b.pile !== undefined) {
          btn.classList.add("pile");
          btn.style.setProperty("--pile", b.pile);
        }
        if (lanes > 1 && !b.point) {
          btn.style.top = (b.lane * 100 / lanes) + "%";
          btn.style.bottom = ((lanes - b.lane - 1) * 100 / lanes) + "%";
          btn.classList.add("stacked");
        }
        btn.style.setProperty("--d", ((courses.length - 1 - ci) * 0.15 + (pct(b.from) / 100) * 0.8).toFixed(2) + "s");
        var tooltip = b.course === "year" ? b.title + ": " + b.body : b.title;
        btn.setAttribute("aria-label", tooltip + (b.meta ? ", " + b.meta : ""));
        btn.title = tooltip;
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
    select(selected, false);
  }

  // Default to the latest year note: the newest job is already the first entry under Work
  function defaultBrick() {
    var years = C[lang].years.map(function (e) { return e[0]; }).sort();
    return "year-" + years[years.length - 1];
  }

  function select(key, user) {
    if (!brickData[key]) key = defaultBrick();
    selected = key;
    $$(".brick").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.key === key)); });
    var b = brickData[key];
    var d = $("#brick-detail");
    // Only announce what the visitor picked, not every year the scroll plays past
    d.setAttribute("aria-live", user ? "polite" : "off");
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
  }

  /* ---------- sections ---------- */
  function renderJobs() {
    var ol = $("#jobs"), older = $("#jobs-older"), rail = $("#work-rail");
    ol.textContent = "";
    older.textContent = "";
    rail.textContent = "";
    var earlier = S.jobs.filter(function (j) { return j.from < S.earlierBefore; });
    $("#jobs-earlier").hidden = !earlier.length;
    if (earlier.length) {
      $("#jobs-earlier > summary").textContent = t("ui.earlierJobs") + " · " +
        earlier.map(function (j) { return t("jobs." + j.id + ".org"); }).join(lang === "zh" ? "、" : ", ") + " · " +
        earlier[earlier.length - 1].from.slice(0, 4) + "–" + earlier[0].to.slice(0, 4);
    }
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
      var isEarlier = earlier.indexOf(j) > -1;
      // Earlier roles live in the fold; while Work plays they join the list (setupWorkPlay)
      if (isEarlier) { li.dataset.earlier = "1"; older.appendChild(li); } else ol.appendChild(li);
      if (isEarlier && j === earlier[0]) rail.appendChild(el("li", "rail-group", t("ui.earlierJobs")));
      var r = el("li"), a = el("a");
      a.href = "#job-" + j.id;
      var y0 = j.from.slice(0, 4), y1 = j.to ? j.to.slice(0, 4) : t("ui.now");
      a.appendChild(el("span", "rail-when", y0 === y1 ? y0 : y0 + "–" + y1));
      a.appendChild(el("span", "rail-org", t(base + "org")));
      r.appendChild(a);
      rail.appendChild(r);
    });
  }

  /* ---------- project diagrams: drawn as you read (CSS, .dg-*) ---------- */
  // Each returns inline SVG inside its viewBox (VIEW). Labels come from projects.<id>.diagram.
  function esc(x) { return String(x).replace(/[&<>"]/g, function (c) { return "&#" + c.charCodeAt(0) + ";"; }); }
  var DIAGRAMS = {
    // Many upstream systems flow into one profile, which splits into audience segments
    cdp: function (L) {
      var src = [30, 62, 94, 126], seg = [40, 80, 120], o = "";
      src.forEach(function (y) { o += '<path class="dg-line dg-in" pathLength="1" d="M70 ' + (y + 10) + ' C150 ' + (y + 10) + ' 160 90 220 90"/>'; });
      seg.forEach(function (y) { o += '<path class="dg-line dg-out" pathLength="1" d="M280 90 C330 90 320 ' + (y + 10) + ' 370 ' + (y + 10) + '"/>'; });
      src.forEach(function (y) { o += '<rect class="dg-box dg-src" x="10" y="' + y + '" width="60" height="20" rx="3"/>'; });
      seg.forEach(function (y) { o += '<rect class="dg-box dg-seg" x="370" y="' + y + '" width="60" height="20" rx="3"/>'; });
      o += '<circle class="dg-core" cx="250" cy="90" r="30"/><text class="dg-core-text" x="250" y="95" text-anchor="middle">360°</text>';
      o += '<text class="dg-label" x="10" y="18">' + esc(L[0]) + '</text>';
      o += '<text class="dg-label dg-core-label" x="250" y="146" text-anchor="middle">' + esc(L[1]) + '</text>';
      o += '<text class="dg-label dg-seg-label" x="430" y="28" text-anchor="end">' + esc(L[2]) + '</text>';
      return o;
    },
    // The direct line runs through bad weather; the optimised route bends around it
    route: function (L) {
      var o = '<path class="dg-direct" d="M40 100 L440 100"/>';
      [82, 96, 110].forEach(function (y, i) {
        o += '<path class="dg-weather" style="--i:' + i + '" d="M170 ' + y + ' q17 -9 34 0 t34 0 t34 0 t34 0"/>';
      });
      o += '<path class="dg-route" pathLength="1" d="M40 100 C150 160 330 160 440 100"/>';
      o += '<circle class="dg-port" cx="40" cy="100" r="6"/><circle class="dg-port dg-dest" cx="440" cy="100" r="6"/>';
      o += '<text class="dg-label dg-weather-label" x="240" y="64" text-anchor="middle">' + esc(L[0]) + '</text>';
      o += '<text class="dg-label dg-route-label" x="240" y="170" text-anchor="middle">' + esc(L[1]) + '</text>';
      o += '<text class="dg-label dg-gain" x="440" y="78" text-anchor="end">' + esc(L[2]) + '</text>';
      return o;
    }
  };
  var VIEW = { cdp: "0 0 480 180", route: "0 50 480 130" };
  function diagram(kind, labels) {
    var f = el("figure", "diagram diagram-" + kind);
    f.setAttribute("aria-hidden", "true"); // it pictures the text above, which says it all
    f.innerHTML = '<svg viewBox="' + VIEW[kind] + '" xmlns="http://www.w3.org/2000/svg">' + DIAGRAMS[kind](labels || []) + "</svg>";
    return f;
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
      if (p.diagram) art.appendChild(diagram(p.diagram, get(C[lang], base + "diagram") || get(C.en, base + "diagram")));
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
    // AI side projects: one compact row each, selected ones first.
    // A row shows name, result and tools; opening it shows the description and link.
    var list = $("#ai-built");
    list.textContent = "";
    var groupOf = {};
    S.ai.groups.forEach(function (g) { g.items.forEach(function (id) { groupOf[id] = g.id; }); });
    var order = S.ai.featured.concat(S.ai.groups.reduce(function (all, g) {
      return all.concat(g.items.filter(function (id) { return S.ai.featured.indexOf(id) === -1; }));
    }, []));
    order.forEach(function (id) {
      var meta = S.ai.items[id], txt = K.items[id] || C.en.ai.items[id];
      var li = el("li", "aip");
      li.id = "aip-" + id;
      li.dataset.group = groupOf[id];
      var head = el("button", "ai-row-head");
      head.type = "button";
      head.setAttribute("aria-expanded", "false");
      head.setAttribute("aria-controls", li.id + "-more");
      var star = el("span", "ai-star");
      if (S.ai.featured.indexOf(id) > -1) { star.textContent = "★"; star.title = t("ui.selected"); }
      star.setAttribute("aria-hidden", "true");
      head.appendChild(star);
      head.appendChild(el("span", "ai-name", txt[0]));
      head.appendChild(el("span", "ai-res", t("ai.results." + id)));
      head.appendChild(el("span", "ai-tools-inline", meta.tools.slice(0, 2).join(" · ")));
      head.appendChild(el("span", "ai-toggle"));
      head.addEventListener("click", function () { toggleRow(li); });
      var more = el("div", "ai-more");
      more.id = li.id + "-more";
      more.inert = true;
      var inner = el("div", "ai-more-inner");
      inner.appendChild(el("p", "ai-meta", meta.year + " · " + K.groups[groupOf[id]]));
      inner.appendChild(el("p", "ai-desc", txt[1]));
      var tools = el("ul", "ai-card-tools");
      meta.tools.forEach(function (x) { tools.appendChild(el("li", null, x)); });
      inner.appendChild(tools);
      if (meta.link) {
        var a = el("a", "ai-open", t("ui.openProject") + " ↗");
        a.href = meta.link;
        inner.appendChild(a);
      }
      more.appendChild(inner);
      li.appendChild(head);
      li.appendChild(more);
      list.appendChild(li);
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
    renderQuick();
    labelTabs();
    renderAI();
    renderFilters();
    renderCourse();
    renderCoaching();
    renderTeaching();
    renderDenmark();
    renderWall();
    renderJobs();
    renderProjects();
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

  /* ---------- pinned stages: a stage sticks while its run scrolls past ---------- */
  // Wide screens only. The stage (section title + content) sticks under the header while
  // the taller run scrolls by, so a section starts playing when its title reaches the top.
  // opts.on(room) prepares the stage and says whether it fits in `room` px of screen;
  // opts.length() is the scroll distance to play; opts.update(p) gets progress 0..1.
  var pins = [];
  function pinStage(opts) {
    var mq = matchMedia("(min-width: 1000px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)");
    var top = 0, extra = 0, ticking = false;
    var pin = { active: false, measure: measure, start: function () { return opts.run.getBoundingClientRect().top + scrollY - top; },
      length: function () { return extra; } };
    function measure() {
      pin.active = false;
      opts.run.style.height = opts.stage.style.top = "";
      opts.stage.classList.remove("pinned");
      opts.off();
      if (!mq.matches) return;
      top = $(".bar").offsetHeight + 8;
      if (!opts.on(innerHeight - top - 8)) { opts.off(); return; }
      opts.stage.classList.add("pinned");
      opts.stage.style.top = top + "px";
      extra = Math.round(opts.length());
      opts.run.style.height = opts.stage.offsetHeight + extra + "px";
      pin.active = true;
      update();
    }
    function update() {
      ticking = false;
      if (pin.active) opts.update(Math.min(1, Math.max(0, (top - opts.run.getBoundingClientRect().top) / extra)));
    }
    addEventListener("scroll", function () {
      if (pin.active && !ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    addEventListener("resize", function () { requestAnimationFrame(measure); });
    if (mq.addEventListener) mq.addEventListener("change", measure);
    measure();
    pins.push(pin);
    return pin;
  }

  /* ---------- the wall plays year by year ---------- */
  // Scroll progress becomes a year: bricks after it wait unlaid, and the panel shows that year's note.
  var PX_PER_YEAR = 50;
  var wallPin = null;
  function setupScrub() {
    var run = $("#wall-run"), stage = $("#wall-stage"), wall = $("#wall-grid");
    var lastYear = null;
    wallPin = pinStage({
      run: run, stage: stage,
      length: function () { return (END - START) * PX_PER_YEAR; },
      on: function (room) {
        stage.classList.add("scrubbing");
        // Shorter screens get a compact stage first; if even that is too tall, stay static
        if (stage.offsetHeight > room) stage.classList.add("compact");
        if (stage.offsetHeight > room) return false;
        wall.classList.add("scrub");
        return true;
      },
      off: function () {
        stage.classList.remove("scrubbing", "compact");
        wall.classList.remove("scrub");
        $$(".brick", wall).forEach(function (b) {
          var d = brickData[b.dataset.key];
          b.classList.remove("unlaid");
          if (d && !d.point) b.style.width = (pct(d.to) - pct(d.from)) + "%";
        });
        $(".wall-now", wall).hidden = true;
        lastYear = null;
      },
      update: function (p) {
        var y = START + p * (END - START);
        $$(".brick", wall).forEach(function (b) {
          var d = brickData[b.dataset.key];
          b.classList.toggle("unlaid", d.from > y);
          // Unlaid bricks wait as full-length ghosts; a brick being laid grows up to the cursor
          if (!d.point) b.style.width = (pct(d.from > y ? d.to : Math.min(d.to, y)) - pct(d.from)) + "%";
        });
        var now = $(".wall-now", wall);
        now.hidden = p <= 0 || p >= 1;
        now.style.left = pct(y) + "%";
        now.firstChild.textContent = Math.floor(y);
        // The panel shows the latest year note the cursor has passed (or the first one)
        var notes = C[lang].years.map(function (e) { return +e[0]; }).sort(function (a, b) { return a - b; });
        var passed = notes.filter(function (n) { return n <= y; });
        var year = "year-" + (passed.length ? passed[passed.length - 1] : notes[0]);
        if (p > 0 && year !== lastYear) { lastYear = year; select(year, false); }
      }
    });
  }

  /* ---------- Work plays one job at a time ---------- */
  // All jobs share one spot; as you scroll, the current one fades out upwards and the
  // next fades in from below. The rail on the left lists them and jumps to one.
  var PX_PER_JOB = 420;
  function setupWorkPlay() {
    var run = $("#work-run"), stage = $("#work-stage"), rail = $("#work-rail");
    var list = $("#jobs"), older = $("#jobs-older"), fold = $("#jobs-earlier");
    function jobs() { return $$("#jobs > .job"); }
    var pin = pinStage({
      run: run, stage: stage,
      length: function () { return (jobs().length - 1) * PX_PER_JOB; },
      on: function (room) {
        // Play the earlier roles too: move them out of the fold, after the others
        $$(".job", older).forEach(function (li) { list.appendChild(li); });
        fold.hidden = true;
        stage.classList.add("playing");
        return jobs().length > 1 && stage.offsetHeight <= room;
      },
      off: function () {
        stage.classList.remove("playing");
        jobs().forEach(function (li) { li.style.opacity = li.style.transform = li.style.visibility = ""; });
        $$('#jobs > .job[data-earlier]').forEach(function (li) { older.appendChild(li); });
        fold.hidden = !older.children.length;
      },
      update: function (p) {
        var list = jobs(), t = p * (list.length - 1);
        list.forEach(function (li, k) {
          // d < 0: still to come (below); d > 0: already passed (moved up and out).
          // Out first, then in: a job is fully shown until 0.35 away and gone at 0.5,
          // so two jobs never overlap.
          var d = t - k, o = Math.min(1, Math.max(0, 1 - (Math.abs(d) - 0.35) / 0.15));
          li.style.opacity = o;
          li.style.transform = "translateY(" + (Math.max(-1, Math.min(1, -d)) * 2.5) + "rem)";
          li.style.visibility = o ? "" : "hidden";
        });
        var on = Math.round(t);
        $$("a", rail).forEach(function (a, k) {
          if (k === on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
        });
      }
    });
    // While playing, a link to a job scrolls to the moment that job is shown
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#job-"]');
      if (!a || !pin.active) return;
      var k = jobs().indexOf(document.getElementById(a.getAttribute("href").slice(1)));
      if (k < 0) return;
      e.preventDefault();
      scrollTo({ top: pin.start() + k * PX_PER_JOB + 1, behavior: "smooth" });
    });
  }

  /* ---------- narrow screens: build the wall once it scrolls into view ---------- */
  function setupBuild() {
    var wall = $("#wall-grid");
    if (wallPin && wallPin.active) return;
    if (!("IntersectionObserver" in window)) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { wall.classList.add("build"); io.disconnect(); }
      });
    }, { threshold: 0.35 });
    io.observe(wall);
  }

  /* ---------- quick facts under the hero ---------- */
  function renderQuick() {
    var dl = $("#quick-facts");
    dl.textContent = "";
    (C[lang].ui.quick || C.en.ui.quick).forEach(function (q) {
      var div = el("div", "q");
      div.appendChild(el("dt", null, q[0]));
      div.appendChild(el("dd", null, q[1]));
      dl.appendChild(div);
    });
  }

  /* ---------- AI project rows ---------- */
  function toggleRow(li, open) {
    open = open === undefined ? !li.classList.contains("open") : open;
    li.classList.toggle("open", open);
    $(".ai-row-head", li).setAttribute("aria-expanded", String(open));
    $(".ai-more", li).inert = !open;
  }
  // From the wall (or any #aip- link): show all, open the row, bring it to the middle, flash it
  function showRow(id) {
    var li = document.getElementById(id);
    if (!li) return false;
    if (li.hidden) { aiFilter = "all"; applyFilter(false); }
    toggleRow(li, true);
    li.scrollIntoView({ block: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    li.classList.remove("flash");
    void li.offsetWidth; // restart the flash
    li.classList.add("flash");
    return true;
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#aip-"]');
    if (a && showRow(a.getAttribute("href").slice(1))) e.preventDefault();
  });

  /* ---------- AI project filters ---------- */
  var aiFilter = "all";
  function renderFilters() {
    var box = $("#ai-filters");
    box.textContent = "";
    var K = C[lang].ai || C.en.ai;
    [["all", t("ui.filterAll")]].concat(S.ai.groups.map(function (g) { return [g.id, K.groups[g.id]]; }))
      .forEach(function (f) {
        var b = el("button", "chip", f[1]);
        b.type = "button";
        b.setAttribute("aria-pressed", String(aiFilter === f[0]));
        b.addEventListener("click", function () { aiFilter = f[0]; applyFilter(true); });
        box.appendChild(b);
      });
    applyFilter();
  }
  // On a click the cards glide to their new places (FLIP: measure, change, animate the difference)
  function applyFilter(animate) {
    var ids = ["all"].concat(S.ai.groups.map(function (g) { return g.id; }));
    $$("#ai-filters .chip").forEach(function (b, i) { b.setAttribute("aria-pressed", String(ids[i] === aiFilter)); });
    var moving = animate && document.body.animate && !matchMedia("(prefers-reduced-motion: reduce)").matches;
    var items = $$("#ai-built .aip");
    var before = items.map(function (n) { return n.offsetParent ? n.getBoundingClientRect() : null; });
    items.forEach(function (n) { n.hidden = !(aiFilter === "all" || n.dataset.group === aiFilter); });
    if (!moving) return;
    var timing = { duration: 320, easing: "cubic-bezier(0.4, 0, 0.6, 1)" }; // --dur, --ease
    items.forEach(function (n, i) {
      if (!n.offsetParent) return;
      var a = before[i], b = n.getBoundingClientRect();
      if (a) n.animate([{ transform: "translate(" + (a.left - b.left) + "px," + (a.top - b.top) + "px)" }, { transform: "none" }], timing);
      else n.animate([{ opacity: 0, transform: "translateY(0.5rem)" }, { opacity: 1, transform: "none" }], timing);
    });
  }

  /* ---------- "Outside work" as tabs ---------- */
  var TABS = ["coaching", "course", "teaching", "denmark"];
  var activeTab = "coaching";
  function tabLabel(id) {
    return id === "course" ? t("ui.tabCourse") : t("ui.nav." + id);
  }
  function setupTabs() {
    var host = $("#beyond");
    var list = el("div", "tabs");
    list.setAttribute("role", "tablist");
    list.setAttribute("aria-label", t("ui.tabsLabel"));
    TABS.forEach(function (id) {
      var sec = document.getElementById(id);
      sec.dataset.tab = id;
      sec.setAttribute("role", "tabpanel");
      var b = el("button", "tab");
      b.type = "button";
      b.id = "tab-" + id;
      b.setAttribute("role", "tab");
      b.setAttribute("aria-controls", id);
      sec.setAttribute("aria-labelledby", b.id);
      b.addEventListener("click", function () { activate(id, true); });
      b.addEventListener("keydown", function (e) {
        var i = TABS.indexOf(id);
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          var n = TABS[(i + (e.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length];
          activate(n, false);
          document.getElementById("tab-" + n).focus();
        }
      });
      list.appendChild(b);
    });
    // One red bar that slides to the selected tab
    list.appendChild(el("span", "tab-ink"));
    host.appendChild(list);
    // Web fonts and language switches change the tab sizes: keep the bar under its tab
    if (window.ResizeObserver) new ResizeObserver(placeInk).observe(list);
    else addEventListener("resize", placeInk);
    document.body.classList.add("has-tabs");
    // Links that point into a hidden tab open that tab first
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var target = document.getElementById(a.getAttribute("href").slice(1));
      var panel = target && target.closest("[data-tab]");
      if (panel) activate(panel.dataset.tab, false);
      var fold = target && target.closest("details");
      if (fold) fold.open = true;
    });
    var h = location.hash.slice(1);
    var start = document.getElementById(h);
    var p = start && start.closest("[data-tab]");
    activeTab = p ? p.dataset.tab : "coaching"; // first paint: no slide
    activate(activeTab, false);
    var fold = start && start.closest("details");
    if (fold) fold.open = true;
  }
  function labelTabs() {
    TABS.forEach(function (id) {
      var b = document.getElementById("tab-" + id);
      if (b) b.textContent = tabLabel(id);
    });
    placeInk();
  }
  function placeInk() {
    var ink = $(".tab-ink"), b = document.getElementById("tab-" + activeTab);
    if (!ink || !b) return;
    ink.style.left = b.offsetLeft + "px";
    ink.style.width = b.offsetWidth + "px";
    ink.style.top = (b.offsetTop + b.offsetHeight - 3) + "px";
  }
  function activate(id, scroll) {
    var from = TABS.indexOf(activeTab), to = TABS.indexOf(id);
    activeTab = id;
    TABS.forEach(function (x) {
      var sec = document.getElementById(x), b = document.getElementById("tab-" + x);
      var on = x === id;
      sec.classList.toggle("tab-off", !on);
      b.setAttribute("aria-selected", String(on));
      b.tabIndex = on ? 0 : -1;
    });
    placeInk();
    // The new panel slides in from the side of its tab
    var panel = document.getElementById(id);
    if (from !== to && panel.animate && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var dx = (to > from ? 1 : -1) * 3;
      panel.animate([{ opacity: 0, transform: "translateX(" + dx + "rem)" }, { opacity: 1, transform: "none" }],
        { duration: 320, easing: "cubic-bezier(0.4, 0, 0.6, 1)" }); // --dur, --ease
    }
    if (scroll) $("#beyond").scrollIntoView({ block: "start" });
  }

  /* ---------- nav: mark the section in view ---------- */
  // Sections without their own nav link light up the nearest one
  var SPY = { ai: "ai", wall: "work", work: "work", projects: "projects", toolbox: "projects",
    education: "projects", coaching: "coaching", course: "coaching", teaching: "teaching",
    denmark: "denmark", contact: "contact" };
  function setupSpy() {
    var nav = $(".nav"), ticking = false, current = null;
    var ids = Object.keys(SPY);
    function update() {
      ticking = false;
      // The section in view is the last one whose top has passed 40% of the screen
      var on = null, line = innerHeight * 0.4;
      ids.forEach(function (id) {
        var n = document.getElementById(id);
        if (n && n.offsetParent && n.getBoundingClientRect().top <= line) on = SPY[id];
      });
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) on = "contact";
      if (on === current) return;
      current = on;
      $$(".nav a").forEach(function (a) {
        var hit = a.getAttribute("href") === "#" + on;
        if (hit) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
        // On narrow screens the nav scrolls sideways: keep the current link visible
        if (hit && nav.scrollWidth > nav.clientWidth) {
          nav.scrollTo({ left: a.offsetLeft - nav.offsetLeft - nav.clientWidth / 2 + a.offsetWidth / 2 });
        }
      });
    }
    addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ---------- opening: the seal stamps, the greeting cycles once ---------- */
  function intro() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("opening");
    var h1 = $(".hello");
    var seq = ["Hej.", "你好。", "Hi."].filter(function (g) { return g !== t("hero.hello"); });
    var i = 0;
    h1.classList.add("cycling");
    (function step() {
      if (i < seq.length) { h1.textContent = seq[i++]; setTimeout(step, 420); }
      else { h1.textContent = t("hero.hello"); h1.classList.remove("cycling"); }
    })();
  }

  /* ---------- init ---------- */
  $$(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang, true); });
  });
  setupCopy();
  setupTabs();
  setLang(pickLang(), false);
  setupScrub();
  setupWorkPlay();
  setupBuild();
  setupSpy();
  intro();
})();
