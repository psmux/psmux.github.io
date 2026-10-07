/* psmux.github.io: live star counts, media from media/manifest.json,
   install tabs, copy buttons, nav highlighting and the hero terminal. */
(function () {
  "use strict";

  /* ---------- data ---------- */

  // Baked numbers from research/projects.json (2026-10-08). Used until the API answers.
  var PROJECTS = {
    "psmux": { stars: 3626, release: "v3.3.8" },
    "psmux-plugins": { stars: 39 },
    "DeskVNC": { stars: 69, release: "v0.27.10" },
    "GodwinMix": { stars: 1, release: "v0.2.1" },
    "pstop": { stars: 255, release: "v0.5.4" },
    "psnet": { stars: 148, release: "v1.1.0" },
    "vigil": { stars: 4 },
    "TerminalMap": { stars: 20, release: "v0.1.0" },
    "Tmux-Plugin-Panel": { stars: 85, release: "v0.1.1" },
    "omp-manager": { stars: 72, release: "v0.1.2" },
    "Psroot": { stars: 14 },
    "tmuxtop": { stars: 2, release: "v0.1" }
  };

  // Where each page finds its media. Point this at another file to swap media sets.
  var MEDIA_MANIFEST = "/media/manifest.json";
  var MEDIA_BASE = "/media/";
  var STAR_CACHE_KEY = "psmux-stars-v1";
  var STAR_CACHE_MS = 60 * 60 * 1000;

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function fmt(n) { return Number(n).toLocaleString("en-US"); }
  function lower(s) { return String(s).toLowerCase(); }

  /* ---------- star counts ---------- */

  function paintStars(map) {
    var total = 0;
    Object.keys(PROJECTS).forEach(function (repo) {
      var n = map[lower(repo)];
      if (typeof n === "number") PROJECTS[repo].stars = n;
      total += PROJECTS[repo].stars;
    });
    $all("[data-stars]").forEach(function (el) {
      var repo = el.getAttribute("data-stars");
      var p = PROJECTS[repo];
      if (p) el.textContent = fmt(p.stars);
    });
    $all("[data-total-stars]").forEach(function (el) { el.textContent = fmt(total); });
  }

  function readCache() {
    try {
      var raw = localStorage.getItem(STAR_CACHE_KEY);
      if (!raw) return null;
      var c = JSON.parse(raw);
      if (!c || Date.now() - c.t > STAR_CACHE_MS) return null;
      return c.d;
    } catch (e) { return null; }
  }
  function writeCache(d) {
    try { localStorage.setItem(STAR_CACHE_KEY, JSON.stringify({ t: Date.now(), d: d })); } catch (e) { /* private mode */ }
  }

  function loadStars() {
    var cached = readCache();
    if (cached) { paintStars(cached); return; }
    if (!window.fetch) return;
    fetch("https://api.github.com/users/psmux/repos?per_page=100", { headers: { "Accept": "application/vnd.github+json" } })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (list) {
        var d = {};
        list.forEach(function (r) { if (r && r.name) d[lower(r.name)] = r.stargazers_count; });
        writeCache(d);
        paintStars(d);
      })
      .catch(function () { /* keep the baked numbers */ });
  }

  /* ---------- media ---------- */

  function resolve(src) {
    if (!src) return "";
    if (/^(https?:)?\/\//.test(src) || src.charAt(0) === "/") return src;
    if (src.indexOf("media/") === 0) return "/" + src;
    return MEDIA_BASE + src;
  }

  function itemsFor(manifest, repo) {
    var pool = manifest && (manifest.repos || manifest.projects || manifest);
    if (!pool || typeof pool !== "object") return [];
    var key = Object.keys(pool).filter(function (k) { return lower(k) === lower(repo); })[0];
    var list = key ? pool[key] : null;
    if (list && !Array.isArray(list) && Array.isArray(list.items)) list = list.items;
    if (!Array.isArray(list)) return [];
    return list.filter(function (it) { return it && it.src && (it.type === "video" || it.type === "image"); })
      .sort(function (a, b) { return (b.hero ? 1 : 0) - (a.hero ? 1 : 0); });
  }

  function buildMedia(it, opts) {
    var el;
    if (it.type === "video") {
      el = document.createElement("video");
      el.muted = true; el.loop = true; el.playsInline = true;
      el.setAttribute("muted", ""); el.setAttribute("playsinline", ""); el.setAttribute("loop", "");
      el.preload = "none";
      if (it.poster) el.poster = resolve(it.poster);
      if (it.alt) { el.setAttribute("aria-label", it.alt); el.setAttribute("role", "img"); }
      var sources = [];
      if (it.webm) sources.push({ src: resolve(it.webm), type: "video/webm" });
      sources.push({ src: resolve(it.src), type: /\.webm$/i.test(it.src) ? "video/webm" : "video/mp4" });
      el._sources = sources;
      el.className = "lazy-video";
      if (opts && opts.controls) el.controls = true;
    } else {
      el = document.createElement("img");
      el.src = resolve(it.src);
      el.alt = it.alt || "";
      el.decoding = "async";
      if (!(opts && opts.eager)) el.loading = "lazy";
    }
    if (it.width) el.width = it.width;
    if (it.height) el.height = it.height;
    return el;
  }

  function fillSlot(slot, items) {
    if (!items.length) return;
    var variant = slot.getAttribute("data-variant");
    slot.innerHTML = "";
    if (variant === "feature") {
      var fig = document.createElement("figure");
      fig.className = "frame";
      var cap = document.createElement("figcaption");
      cap.className = "media-src";
      var show = function (i) {
        var old = fig.querySelector("img, video");
        var el = buildMedia(items[i], { controls: false, eager: i === 0 && slot.hasAttribute("data-eager") });
        if (old) fig.replaceChild(el, old); else fig.insertBefore(el, fig.firstChild);
        cap.textContent = items[i].source ? "Source: " + items[i].source : "";
        cap.hidden = !items[i].source;
        watchVideo(el, slot);
      };
      fig.appendChild(cap);
      slot.appendChild(fig);
      // move caption below the frame so it is not cropped by overflow
      slot.appendChild(cap);
      show(0);
      if (items.length > 1) {
        var strip = document.createElement("div");
        strip.className = "thumbs";
        items.forEach(function (it, i) {
          var b = document.createElement("button");
          b.type = "button";
          b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
          b.setAttribute("aria-label", "Show: " + (it.alt || ("item " + (i + 1))));
          if (it.type === "image" || it.poster) {
            var t = document.createElement("img");
            t.src = resolve(it.type === "image" ? it.src : it.poster);
            t.alt = ""; t.loading = "lazy"; t.width = 120; t.height = 68;
            b.appendChild(t);
          } else {
            var v = document.createElement("span"); v.className = "vid"; v.textContent = "video"; b.appendChild(v);
          }
          b.addEventListener("click", function () {
            $all("button", strip).forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
            b.setAttribute("aria-pressed", "true");
            show(i);
          });
          strip.appendChild(b);
        });
        slot.appendChild(strip);
      }
    } else {
      var el = buildMedia(items[0], {});
      slot.appendChild(el);
      if (items[0].type === "video") {
        var hint = document.createElement("span");
        hint.className = "play-hint"; hint.setAttribute("aria-hidden", "true");
        hint.textContent = reduceMotion ? "hover to play" : "video";
        slot.appendChild(hint);
      }
      watchVideo(el, slot.closest(".card") || slot);
    }
  }

  function attachSources(v) {
    if (v._attached || !v._sources) return;
    v._sources.forEach(function (s) {
      var so = document.createElement("source"); so.src = s.src; so.type = s.type; v.appendChild(so);
    });
    v._attached = true;
    v.preload = "metadata";
    v.load();
  }

  var videoIO = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) {
        attachSources(v);
        if (!reduceMotion) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, { rootMargin: "200px 0px", threshold: 0.15 }) : null;

  function watchVideo(el, hoverRoot) {
    if (el.tagName !== "VIDEO") return;
    if (videoIO) videoIO.observe(el); else attachSources(el);
    if (reduceMotion && hoverRoot) {
      var play = function () { attachSources(el); var p = el.play(); if (p && p.catch) p.catch(function () {}); };
      var stop = function () { el.pause(); };
      hoverRoot.addEventListener("mouseenter", play);
      hoverRoot.addEventListener("mouseleave", stop);
      hoverRoot.addEventListener("focusin", play);
      hoverRoot.addEventListener("focusout", stop);
    }
  }

  function loadMedia() {
    var slots = $all("[data-media]");
    if (!slots.length || !window.fetch) return;
    fetch(MEDIA_MANIFEST, { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (manifest) {
        slots.forEach(function (slot) {
          try { fillSlot(slot, itemsFor(manifest, slot.getAttribute("data-media"))); } catch (e) { /* keep placeholder */ }
        });
      })
      .catch(function () { /* no manifest yet: placeholders stay */ });
  }

  /* ---------- install tabs and copy buttons ---------- */

  var tabSeq = 0;
  function initTabs() {
    $all("[data-tabs]").forEach(function (box) {
      var tabs = $all('[role="tab"]', box);
      var panels = $all('[role="tabpanel"]', box);
      tabs.forEach(function (t, i) {
        var id = "tab" + (++tabSeq);
        t.id = id; t.type = "button";
        if (panels[i]) { panels[i].id = id + "p"; panels[i].setAttribute("aria-labelledby", id); t.setAttribute("aria-controls", id + "p"); }
        t.tabIndex = t.getAttribute("aria-selected") === "true" ? 0 : -1;
        t.addEventListener("click", function () { select(i); });
        t.addEventListener("keydown", function (e) {
          var k = e.key, n = null;
          if (k === "ArrowRight") n = (i + 1) % tabs.length;
          else if (k === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
          else if (k === "Home") n = 0;
          else if (k === "End") n = tabs.length - 1;
          if (n !== null) { e.preventDefault(); select(n); tabs[n].focus(); }
        });
      });
      function select(i) {
        tabs.forEach(function (t, j) { t.setAttribute("aria-selected", j === i ? "true" : "false"); t.tabIndex = j === i ? 0 : -1; });
        panels.forEach(function (p, j) { p.hidden = j !== i; });
      }
    });
  }

  function commandText(pre) {
    var clone = pre.cloneNode(true);
    $all(".pr", clone).forEach(function (n) { n.parentNode.removeChild(n); });
    return clone.textContent.replace(/\s+$/, "");
  }

  function initCopy() {
    $all(".cmd").forEach(function (cmd) {
      var pre = cmd.querySelector("pre");
      if (!pre || cmd.querySelector(".copy")) return;
      var b = document.createElement("button");
      b.type = "button"; b.className = "copy"; b.setAttribute("aria-label", "Copy command");
      b.innerHTML = '<svg aria-hidden="true"><use href="#i-copy"/></svg>';
      b.addEventListener("click", function () {
        var text = commandText(pre);
        var done = function () {
          b.classList.add("done"); b.innerHTML = '<svg aria-hidden="true"><use href="#i-check"/></svg>';
          b.setAttribute("aria-label", "Copied");
          setTimeout(function () { b.classList.remove("done"); b.innerHTML = '<svg aria-hidden="true"><use href="#i-copy"/></svg>'; b.setAttribute("aria-label", "Copy command"); }, 1600);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
        } else { fallbackCopy(text); done(); }
      });
      cmd.appendChild(b);
    });
  }
  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* ---------- status line highlighting ---------- */

  function initNav() {
    var links = $all("[data-win]");
    if (!links.length || !("IntersectionObserver" in window)) return;
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("data-win")] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute("aria-current"); });
        var a = byId[e.target.id];
        if (a) a.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(byId).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- hero terminal (illustration) ---------- */

  function initTerm() {
    var term = document.getElementById("hero-term");
    if (!term) return;
    var panes = term.querySelector(".panes");
    var P = $all(".pane pre", term);
    var paneEls = $all(".pane", term);
    var status = term.querySelector(".tstatus");
    var winName = term.querySelector(".w-active");
    var keys = term.querySelector(".keys");
    var clock = term.querySelector(".st-right");
    var PROMPT = '<span class="t-c">PS C:\\dev&gt;</span> ';
    var visible = true, gen = 0, meterTimer = null;

    function sleep(ms) {
      var g = gen;
      return new Promise(function (res, rej) {
        var start = Date.now();
        (function tick() {
          if (g !== gen) return rej("restart");
          if (!visible || document.hidden) { start += 200; return setTimeout(tick, 200); }
          if (Date.now() - start >= ms) return res();
          setTimeout(tick, Math.min(60, ms));
        })();
      });
    }
    function setLines(i, html) { P[i].innerHTML = html; }
    function cursor() { return '<span class="cursor"></span>'; }
    function focus(i) { paneEls.forEach(function (p, j) { p.classList.toggle("active", j === i); }); }
    async function type(i, before, text, speed) {
      for (var k = 1; k <= text.length; k++) {
        setLines(i, before + PROMPT + esc(text.slice(0, k)) + cursor());
        await sleep(speed || 55 + Math.random() * 40);
      }
    }
    function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
    async function showKeys(html) {
      keys.innerHTML = html; keys.classList.add("on");
      await sleep(1100);
      keys.classList.remove("on");
    }

    var crates = ["libc v0.2.159", "windows-sys v0.59.0", "crossterm v0.28.1", "unicode-width v0.2.0",
      "portable-pty-psmux v0.9.7", "vt100-psmux v0.16.13", "serde v1.0.210", "tokio v1.40.0", "clap v4.5.20",
      "regex v1.11.0", "psmux v3.3.8 (C:\\dev\\psmux)"];

    function bar(pct, width) {
      var n = Math.round(pct / 100 * width);
      var s = "";
      for (var i = 0; i < width; i++) s += i < n ? "|" : " ";
      var g = s.slice(0, Math.min(n, Math.round(width * 0.55)));
      var a = s.slice(g.length, Math.min(n, Math.round(width * 0.8)));
      var r = s.slice(g.length + a.length, n);
      var rest = s.slice(n);
      return '<span class="t-g">' + g + '</span><span class="t-a">' + a + '</span><span class="t-r">' + r + '</span>' + rest;
    }
    function pad(s, n) { s = String(s); while (s.length < n) s = " " + s; return s; }
    function pstopFrame() {
      var pane = paneEls[1];
      var cw = parseFloat(getComputedStyle(pane).fontSize) * 0.6 || 7.8;
      var chars = Math.floor((pane.clientWidth - 24) / cw);
      var w = Math.max(4, Math.min(16, Math.floor((chars - 23) / 2)));
      var lines = [];
      for (var c = 0; c < 4; c++) {
        var a = 8 + Math.random() * 70, b = 5 + Math.random() * 60;
        lines.push(' <span class="t-c">' + c + '</span>[' + bar(a, w) + pad(a.toFixed(1), 5) + '%]  <span class="t-c">' + (c + 4) + '</span>[' + bar(b, w) + pad(b.toFixed(1), 5) + '%]');
      }
      var mem = 38 + Math.random() * 6;
      lines.push(' <span class="t-c">Mem</span>[' + bar(mem, Math.max(6, w * 2 + 4)) + ' <span class="t-d">' + (mem * 0.317).toFixed(1) + 'G/31.7G</span>]');
      lines.push("");
      lines.push('<span style="background:#5fe08f;color:#04140a">  PID USER     CPU% MEM% Command          </span>');
      var procs = [["9812", "dev", "cargo.exe"], ["10244", "dev", "rustc.exe"], ["4120", "dev", "psmux.exe"], ["7764", "dev", "pwsh.exe"], ["1336", "SYSTEM", "svchost.exe"]];
      procs.forEach(function (p, i) {
        var cpu = i < 2 ? 40 + Math.random() * 50 : Math.random() * 4;
        lines.push(pad(p[0], 5) + " " + (p[1] + "      ").slice(0, 8) + " " + pad(cpu.toFixed(1), 4) + " " + pad((Math.random() * 3 + 0.4).toFixed(1), 4) + " " + (i === 2 ? '<span class="t-g">' + p[2] + '</span>' : p[2]));
      });
      return lines.join("\n");
    }

    function finalState() {
      panes.setAttribute("data-layout", "3");
      status.classList.add("on");
      winName.textContent = "0:pstop*";
      var built = crates.slice(-6).map(function (c) { return '   <span class="t-g t-b">Compiling</span> ' + c; }).join("\n");
      setLines(0, PROMPT + "cargo build --release\n" + built + '\n    <span class="t-g t-b">Finished</span> `release` profile [optimized] target(s) in 41.32s\n' + PROMPT);
      setLines(1, pstopFrame());
      setLines(2, PROMPT + "tmux ls\nwork: 1 windows (created Thu Oct  8 14:02:11 2026) (attached)\n" + PROMPT + cursor());
      focus(2);
    }

    async function run() {
      // reset
      panes.setAttribute("data-layout", "1");
      status.classList.remove("on");
      winName.textContent = "0:pwsh*";
      setLines(0, ""); setLines(1, ""); setLines(2, "");
      focus(0);
      var head = '<span class="t-d">PowerShell 7.4.6</span>\n\n';
      setLines(0, head + PROMPT + cursor());
      await sleep(900);
      await type(0, head, "psmux new-session -s work");
      await sleep(450);
      setLines(0, PROMPT + cursor());
      status.classList.add("on");
      await sleep(900);
      await type(0, "", "cargo build --release");
      await sleep(300);
      var out = PROMPT + "cargo build --release\n";
      for (var i = 0; i < crates.length; i++) {
        out += '   <span class="t-g t-b">Compiling</span> ' + crates[i] + "\n";
        var lines = out.split("\n");
        setLines(0, lines.slice(-16).join("\n"));
        await sleep(150 + Math.random() * 140);
        if (i === 5) {
          await showKeys('<kbd>Ctrl</kbd>+<kbd>b</kbd> <kbd>%</kbd><span class="what">split-window -h</span>');
          panes.setAttribute("data-layout", "2");
          focus(1);
          setLines(1, PROMPT + cursor());
          await sleep(500);
          await type(1, "", "pstop");
          await sleep(250);
          winName.textContent = "0:pstop*";
          setLines(1, pstopFrame());
          meterTimer = setInterval(function () { if (visible && !document.hidden) setLines(1, pstopFrame()); }, 900);
        }
      }
      out += '    <span class="t-g t-b">Finished</span> `release` profile [optimized] target(s) in 41.32s\n' + PROMPT;
      setLines(0, out.split("\n").slice(-16).join("\n"));
      await sleep(700);
      await showKeys('<kbd>Ctrl</kbd>+<kbd>b</kbd> <kbd>"</kbd><span class="what">split-window -v</span>');
      panes.setAttribute("data-layout", "3");
      focus(2);
      setLines(2, PROMPT + cursor());
      await sleep(500);
      await type(2, "", "tmux ls");
      await sleep(300);
      setLines(2, PROMPT + "tmux ls\nwork: 1 windows (created Thu Oct  8 14:02:11 2026) (attached)\n" + PROMPT + cursor());
      await sleep(7000);
      clearInterval(meterTimer);
    }

    if (reduceMotion) { finalState(); return; }

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(term);
    }
    (async function loop() {
      for (;;) {
        try { await run(); } catch (e) { clearInterval(meterTimer); if (e !== "restart") { finalState(); return; } }
      }
    })();
  }

  /* ---------- boot ---------- */

  function boot() {
    initTabs();
    initCopy();
    initNav();
    paintStars({});
    loadStars();
    loadMedia();
    initTerm();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
