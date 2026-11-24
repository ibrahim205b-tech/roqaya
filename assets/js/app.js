(function () {
  "use strict";
  var S = window.SITE || {}, I = window.I18N || { en: {}, ui: {} };
  var $ = function (id) { return document.getElementById(id); };
  var qa = function (sel, root) { return [].slice.call((root || document).querySelectorAll(sel)); };
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  var pageUrl = S.url || location.href.split(/[?#]/)[0];

  /* ================= اللغة / language ================= */
  var lang = "ar";
  try { lang = new URLSearchParams(location.search).get("lang") || localStorage.getItem("rq-lang") || "ar"; } catch (e) {}
  if (lang !== "en") lang = "ar";
  var U = function () { return I.ui[lang]; };
  var T = function (o) { return o == null ? "" : (typeof o === "string" ? o : (o[lang] || o.ar || "")); };

  /* store the Arabic originals written in the HTML */
  var AR = {}, ARIA = {};
  qa("[data-i18n]").forEach(function (n) { AR[n.getAttribute("data-i18n")] = n.textContent; });
  qa("[data-i18n-aria]").forEach(function (n) { ARIA[n.getAttribute("data-i18n-aria")] = n.getAttribute("aria-label"); });

  var MONTHS = {
    ar: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  };
  function fmtDate(iso) {
    if (!iso) return "";
    var p = iso.split("-").map(Number);
    return p[2] + " " + MONTHS[lang][p[1] - 1] + " " + p[0];
  }

  function applyStatic() {
    var html = document.documentElement;
    html.lang = lang; html.dir = lang === "ar" ? "rtl" : "ltr";
    qa("[data-i18n]").forEach(function (n) {
      var k = n.getAttribute("data-i18n");
      n.textContent = lang === "ar" ? AR[k] : (I.en[k] != null ? I.en[k] : AR[k]);
    });
    qa("[data-i18n-aria]").forEach(function (n) {
      var k = n.getAttribute("data-i18n-aria");
      n.setAttribute("aria-label", lang === "ar" ? ARIA[k] : (I.en[k] || ARIA[k]));
    });
    document.title = U().title;
    var lb = $("langBtn");
    lb.textContent = U().langBtn; lb.setAttribute("aria-label", U().langAria);
    lb.setAttribute("lang", lang === "ar" ? "en" : "ar");
    $("heroImg").alt = T(S.hero && S.hero.alt);
  }

  function setLang(l, user) {
    lang = l;
    try { localStorage.setItem("rq-lang", l); } catch (e) {}
    if (user) {
      try {
        var u = new URL(location.href);
        if (l === "en") u.searchParams.set("lang", "en"); else u.searchParams.delete("lang");
        history.replaceState(null, "", u.pathname + u.search + u.hash);
      } catch (e) {}
    }
    applyStatic(); renderAll();
  }
  $("langBtn").addEventListener("click", function () {
    var next = lang === "ar" ? "en" : "ar";
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setLang(next, true); return; }
    document.body.classList.add("switching");
    setTimeout(function () { setLang(next, true); document.body.classList.remove("switching"); }, 180);
  });

  /* ================= إظهار الأقسام / section switches ================= */
  var SEC = S.sections || {};
  qa("[data-sec]").forEach(function (s) {
    if (SEC[s.getAttribute("data-sec")] === false) s.hidden = true;
  });
  qa("#nav a, .foot-nav a").forEach(function (a) {
    var t = document.querySelector(a.getAttribute("href"));
    if (t && t.hidden) a.hidden = true;
  });

  /* ================= القائمة / navigation ================= */
  var menuBtn = $("menuBtn"), nav = $("nav"), top = $("top");
  function closeMenu() { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); document.body.classList.remove("menu-open"); }
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
    document.body.classList.toggle("menu-open", open);
    if (open) { var f = nav.querySelector("a:not([hidden])"); if (f) f.focus(); }
  });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) { closeMenu(); menuBtn.focus(); } });
  window.addEventListener("scroll", function () { top.classList.toggle("scrolled", window.scrollY > 8); }, { passive: true });

  /* active link */
  var links = qa("#nav a");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          var on = a.getAttribute("href") === "#" + en.target.id;
          a.classList.toggle("on", on);
          if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(function (a) { var t = document.querySelector(a.getAttribute("href")); if (t) io.observe(t); });
  }

  /* reveal on scroll */
  function arm() {
    var items = qa(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach(function (n) { n.classList.add("in"); }); return;
    }
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .05 });
    items.forEach(function (n) { ro.observe(n); });
  }

  /* ================= النسخ / clipboard ================= */
  function copy(text) {
    return new Promise(function (res, rej) {
      function fallback() {
        var t = el("textarea"); t.value = text; t.setAttribute("readonly", ""); t.style.cssText = "position:fixed;opacity:0;top:0";
        document.body.appendChild(t); t.select();
        var ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
        t.remove(); ok ? res() : rej();
      }
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(res, fallback);
      else fallback();
    });
  }
  function flash(btn, txt) {
    var o = btn.getAttribute("data-label") || btn.textContent; btn.setAttribute("data-label", o);
    btn.textContent = txt; btn.classList.add("done");
    setTimeout(function () { btn.textContent = btn.getAttribute("data-label"); btn.classList.remove("done"); }, 2000);
  }
  function say(node, m) { node.textContent = m; setTimeout(function () { if (node.textContent === m) node.textContent = ""; }, 4500); }
  function wa(num, text) { return "https://wa.me/" + num + (text ? "?text=" + encodeURIComponent(text) : ""); }

  /* ================= عارض الوثائق / lightbox ================= */
  var lb = $("lb"), lbImg = $("lbImg"), stage = $("lbStage"), set = [], idx = 0, lastFocus = null;
  function show(i) {
    idx = (i + set.length) % set.length;
    var it = set[idx];
    lbImg.src = it.img; lbImg.alt = it.title || "";
    $("lbTitle").textContent = (it.title || "") + (set.length > 1 ? "  ·  " + (idx + 1) + " " + U().of + " " + set.length : "");
    stage.classList.remove("zoom"); $("lbZoom").textContent = U().zoomIn;
    var dl = $("lbDl"); dl.hidden = !it.download; if (it.download) dl.href = it.img;
    var many = set.length > 1; $("lbPrev").hidden = !many; $("lbNext").hidden = !many;
  }
  function openLb(items, i) {
    set = items; lastFocus = document.activeElement;
    lb.hidden = false; document.body.classList.add("lock");
    show(i); $("lbClose").focus();
  }
  function closeLb() {
    lb.hidden = true; document.body.classList.remove("lock"); lbImg.removeAttribute("src");
    if (lastFocus) lastFocus.focus();
  }
  function toggleZoom() { var z = stage.classList.toggle("zoom"); $("lbZoom").textContent = z ? U().zoomOut : U().zoomIn; }
  $("lbClose").addEventListener("click", closeLb);
  $("lbZoom").addEventListener("click", toggleZoom);
  lbImg.addEventListener("click", toggleZoom);
  $("lbPrev").addEventListener("click", function () { show(idx - 1); });
  $("lbNext").addEventListener("click", function () { show(idx + 1); });
  stage.addEventListener("click", function (e) { if (e.target === stage) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    var rtl = lang === "ar";
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowRight") show(idx + (rtl ? -1 : 1));
    else if (e.key === "ArrowLeft") show(idx + (rtl ? 1 : -1));
    else if (e.key === "Tab") {
      var f = qa("button:not([hidden]),a:not([hidden])", lb);
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  var sx = null;
  stage.addEventListener("touchstart", function (e) { sx = e.touches.length === 1 ? e.touches[0].clientX : null; }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    if (sx == null || stage.classList.contains("zoom")) return;
    var dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 60) show(idx + ((dx > 0) === (lang === "ar") ? 1 : -1));
  });

  /* ================= الوثائق / documents ================= */
  var CATS = ["all", "diagnosis", "imaging", "lab", "genetic", "opinion", "treatment", "official"];
  var docs = S.documents || [], current = "all";
  function thumbOf(p) { return p.replace(/\.jpg$/, "-thumb.jpg"); }
  function renderFilters() {
    var box = $("filters"); box.innerHTML = "";
    CATS.forEach(function (c) {
      var n = c === "all" ? docs.length : docs.filter(function (d) { return d.cat === c; }).length;
      var b = el("button", "chip"); b.type = "button";
      b.appendChild(el("span", "", U().cats[c]));
      b.appendChild(el("small", "", String(n)));
      b.setAttribute("aria-pressed", c === current);
      b.addEventListener("click", function () { current = c; renderFilters(); renderDocs(); });
      box.appendChild(b);
    });
  }
  function renderDocs() {
    var box = $("docs"); box.innerHTML = "";
    var list = docs.filter(function (d) { return current === "all" || d.cat === current; });
    var viewable = list.filter(function (d) { return d.img; }).map(function (d) { return { img: d.img, title: T(d.title), download: d.download }; });
    if (!list.length) { box.appendChild(el("p", "empty", U().emptyCat)); return; }
    var vi = 0;
    list.forEach(function (d) {
      var card = el("article", "doc");
      var media;
      if (d.img) {
        var myIdx = vi++;
        media = el("button", "doc-media"); media.type = "button";
        media.setAttribute("aria-label", U().view + ": " + T(d.title));
        var im = el("img"); im.src = thumbOf(d.img); im.alt = ""; im.loading = "lazy"; im.decoding = "async"; im.width = 560; im.height = 747;
        im.onerror = function () { im.onerror = null; im.src = d.img; };
        media.appendChild(im);
        media.addEventListener("click", function () { openLb(viewable, myIdx); });
      } else {
        media = el("div", "doc-media doc-pending");
        media.appendChild(el("span", "", U().pendingDoc));
      }
      card.appendChild(media);
      var body = el("div", "doc-body");
      var meta = el("p", "doc-meta");
      meta.appendChild(el("span", "doc-cat", U().cats[d.cat] || ""));
      meta.appendChild(el("time", "", d.date ? fmtDate(d.date) : U().noDate));
      if (d.date) meta.lastChild.setAttribute("datetime", d.date);
      body.appendChild(meta);
      body.appendChild(el("h3", "", T(d.title)));
      body.appendChild(el("p", "doc-type", T(d.type)));
      if (d.note) body.appendChild(el("p", "doc-note", T(d.note)));
      if (d.issuer) body.appendChild(el("p", "doc-issuer", U().issuer + ": " + T(d.issuer)));
      var act = el("div", "doc-act");
      if (d.img) {
        var v = el("button", "link", U().view); v.type = "button";
        v.addEventListener("click", function () { media.click(); });
        act.appendChild(v);
        if (d.download) { var a = el("a", "link", U().download); a.href = d.img; a.setAttribute("download", ""); act.appendChild(a); }
      }
      if (act.children.length) body.appendChild(act);
      card.appendChild(body); box.appendChild(card);
    });
  }

  /* ================= الرحلة العلاجية / journey ================= */
  function renderJourney() {
    var ol = $("timeline"); ol.innerHTML = "";
    (S.journey || []).forEach(function (t) {
      var li = el("li", "tl-i st-" + t.status + " reveal");
      var head = el("div", "tl-head");
      var when = t.date ? fmtDate(t.date) : T(t.when);
      var w = el(t.date ? "time" : "span", "tl-when", when); if (t.date) w.setAttribute("datetime", t.date);
      head.appendChild(w);
      head.appendChild(el("span", "badge b-" + t.status, U().st[t.status]));
      li.appendChild(head);
      li.appendChild(el("h3", "", T(t.title)));
      li.appendChild(el("p", "", T(t.text)));
      if (T(t.source)) li.appendChild(el("small", "", U().source + ": " + T(t.source)));
      ol.appendChild(li);
    });
  }

  /* ================= التحديثات / updates ================= */
  var dlg = $("articleDlg");
  function openArticle(u) {
    $("artDate").textContent = fmtDate(u.date); $("artDate").setAttribute("datetime", u.date);
    $("artTitle").textContent = T(u.title);
    var b = $("artBody"); b.innerHTML = "";
    if (u.photo) { var im = el("img"); im.src = u.photo; im.alt = ""; b.appendChild(im); }
    T(u.body).split(/\n\n+/).forEach(function (p) { b.appendChild(el("p", "", p)); });
    var d = $("artDoc");
    if (u.doc) {
      d.hidden = false;
      d.onclick = function (e) {
        e.preventDefault(); dlg.close();
        var it = docs.filter(function (x) { return x.img === u.doc; })[0];
        if (it) openLb([{ img: it.img, title: T(it.title), download: it.download }], 0);
      };
    } else d.hidden = true;
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
  }
  $("artClose").addEventListener("click", function () { dlg.close ? dlg.close() : dlg.removeAttribute("open"); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  function renderNews() {
    var box = $("news"); box.innerHTML = "";
    var list = (S.updates || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    list.forEach(function (u, i) {
      var a = el("article", "post reveal" + (i === 0 ? " lead-post" : ""));
      if (u.photo) { var im = el("img", "post-img"); im.src = u.photo; im.alt = ""; im.loading = "lazy"; a.appendChild(im); }
      var t = el("time", "", fmtDate(u.date)); t.setAttribute("datetime", u.date); a.appendChild(t);
      a.appendChild(el("h3", "", T(u.title)));
      a.appendChild(el("p", "", T(u.summary)));
      var b = el("button", "link more", U().readMore); b.type = "button";
      b.addEventListener("click", function () { openArticle(u); });
      a.appendChild(b);
      box.appendChild(a);
    });
  }

  /* ================= الاستغاثة / appeal ================= */
  var appealLang = null;
  function appealText(l) {
    var A = S.appeal || {};
    return (A.title ? A.title[l] + "\n\n" : "") + (A.body ? A.body[l] : "") + "\n\n" + (A.footer ? A.footer[l] + " " : "") + pageUrl;
  }
  function renderAppeal() {
    var l = appealLang || lang, A = S.appeal || {};
    $("tabAr").setAttribute("aria-selected", l === "ar"); $("tabEn").setAttribute("aria-selected", l === "en");
    var c = $("appealText"); c.innerHTML = ""; c.lang = l; c.dir = l === "ar" ? "rtl" : "ltr";
    c.appendChild(el("h3", "", A.title ? A.title[l] : ""));
    (A.body ? A.body[l] : "").split(/\n\n+/).forEach(function (p) { c.appendChild(el("p", "", p)); });
    var f = el("p", "appeal-url"); f.appendChild(document.createTextNode((A.footer ? A.footer[l] : "") + " "));
    var a = el("a", "", pageUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")); a.href = pageUrl; a.dir = "ltr"; f.appendChild(a);
    c.appendChild(f);
  }
  $("tabAr").addEventListener("click", function () { appealLang = "ar"; renderAppeal(); });
  $("tabEn").addEventListener("click", function () { appealLang = "en"; renderAppeal(); });
  $("appealText").parentNode.querySelector("[role=tablist]").addEventListener("keydown", function (e) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    appealLang = (appealLang || lang) === "ar" ? "en" : "ar"; renderAppeal();
    $(appealLang === "ar" ? "tabAr" : "tabEn").focus();
  });
  $("copyAppeal").addEventListener("click", function () {
    var b = this; copy(appealText(appealLang || lang)).then(function () { flash(b, U().copied); say($("appealStatus"), U().textCopied); });
  });
  $("shareAppeal").addEventListener("click", function () {
    var l = appealLang || lang, A = S.appeal || {};
    if (navigator.share) navigator.share({ title: A.title[l], text: A.body[l], url: pageUrl }).catch(function () {});
    else location.hash = "#share";
  });
  $("printAppeal").addEventListener("click", function () {
    var l = appealLang || lang, A = S.appeal || {}, box = $("printBox");
    box.innerHTML = ""; box.lang = l; box.dir = l === "ar" ? "rtl" : "ltr";
    box.appendChild(el("p", "pr-brand", l === "ar" ? "رقية · استغاثة إنسانية" : "Ruqayya · Humanitarian appeal"));
    box.appendChild(el("h1", "", A.title[l]));
    A.body[l].split(/\n\n+/).forEach(function (p) { box.appendChild(el("p", "", p)); });
    box.appendChild(el("p", "pr-url", A.footer[l] + " " + pageUrl));
    var D = S.donation || {};
    if (D.enabled && D.methods) {
      box.appendChild(el("h2", "", I.ui[l].donateT));
      D.methods.forEach(function (m) { box.appendChild(el("p", "", m.label[l] + ": " + m.value)); });
      if (D.holder) box.appendChild(el("p", "", I.ui[l].holder + ": " + D.holder[l]));
    }
    document.body.classList.add("printing-appeal");
    window.print();
    setTimeout(function () { document.body.classList.remove("printing-appeal"); }, 500);
  });

  /* ================= التبرع / donation ================= */
  function renderDonate() {
    var D = S.donation || {}, card = $("donateCard"); card.innerHTML = "";
    if (D.enabled && D.methods && D.methods.length) {
      if (D.goalUSD) {
        var g = el("div", "goal");
        g.appendChild(el("span", "", U().goal));
        g.appendChild(el("strong", "", "$" + D.goalUSD.toLocaleString("en-US")));
        g.appendChild(el("small", "", U().usd));
        card.appendChild(g);
      }
      card.appendChild(el("h3", "", U().donateT));
      D.methods.forEach(function (m) {
        var f = el("div", "field"), d = el("div");
        d.appendChild(el("span", "", T(m.label)));
        var s = el("strong", "num", m.value); s.dir = "ltr"; d.appendChild(s);
        f.appendChild(d);
        if (m.copy) {
          var b = el("button", "btn btn-line btn-sm", U().copyNum); b.type = "button";
          b.setAttribute("aria-label", U().copyNum + ": " + T(m.label));
          b.addEventListener("click", function () { copy(m.value.replace(/\s/g, "")).then(function () { flash(b, U().copied); }); });
          f.appendChild(b);
        }
        card.appendChild(f);
      });
      [["holder", D.holder], ["receiver", D.receiver]].forEach(function (x) {
        if (!x[1]) return;
        var f = el("div", "field"), d = el("div");
        d.appendChild(el("span", "", U()[x[0]])); d.appendChild(el("strong", "", T(x[1])));
        f.appendChild(d); card.appendChild(f);
      });
      if (D.whatsapp) {
        var w = el("a", "btn btn-gold btn-block", U().waDonate); w.href = wa(D.whatsapp, U().waDonateMsg); w.target = "_blank"; w.rel = "noopener";
        card.appendChild(w);
      }
    } else {
      card.classList.add("off");
      card.appendChild(el("h3", "", U().donateOff));
      card.appendChild(el("p", "", U().donateOffP));
    }
  }

  /* ================= المساهمون / contributors ================= */
  function renderContrib() {
    var box = $("contrib"); box.innerHTML = "";
    var list = S.contributors || [], types = ["individual", "medical", "charity", "institution"];
    if (list.length) {
      var grid = el("div", "c-grid");
      list.forEach(function (c) {
        var k = el("article", "c-card reveal");
        if (c.logo) { var im = el("img"); im.src = c.logo; im.alt = ""; im.loading = "lazy"; k.appendChild(im); }
        k.appendChild(el("span", "c-type", U().contribTypes[c.type] || ""));
        k.appendChild(el("h3", "", T(c.name)));
        if (c.role) k.appendChild(el("p", "", T(c.role)));
        grid.appendChild(k);
      });
      box.appendChild(grid);
    }
    var cats = el("div", "c-cats");
    types.forEach(function (t) {
      var n = list.filter(function (c) { return c.type === t; }).length;
      var d = el("div", "c-cat reveal");
      if (n) d.appendChild(el("strong", "", String(n)));
      d.appendChild(el("span", "", U().contribTypes[t]));
      if (!n) d.appendChild(el("em", "", U().contribNone));
      cats.appendChild(d);
    });
    box.appendChild(cats);
    var note = el("div", "c-note reveal");
    if (!list.length) note.appendChild(el("p", "c-empty", U().contribEmpty));
    note.appendChild(el("p", "", U().contribHow));
    var a = el("a", "btn btn-line btn-sm", U().contribCta); a.href = "#contact"; note.appendChild(a);
    box.appendChild(note);
  }

  /* ================= المشاركة / share ================= */
  var ICON = {
    wa: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2z"/>',
    fb: '<path d="M14 8V6.2c0-.8.2-1.2 1.4-1.2H17V2h-2.6C11.3 2 10 3.5 10 6v2H8v3h2v11h4V11h2.7l.3-3h-3z"/>',
    x: '<path d="M17.7 3H21l-7.2 8.2L22 21h-6.6l-5.1-6.7L4.4 21H1.1l7.7-8.8L1 3h6.8l4.7 6.2L17.7 3zm-1.2 16h1.8L6.9 4.9H5L16.5 19z"/>',
    tg: '<path d="m21.5 3.6-3.1 15.6c-.2 1-.9 1.3-1.8.8l-4.8-3.6-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2l-11 6.9-4.7-1.5c-1-.3-1-1 .2-1.5L20.2 2.4c.8-.3 1.6.2 1.3 1.2z"/>',
    ig: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r="1.2"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    text: '<path d="M8 4h9a2 2 0 0 1 2 2v12M5 8h9a1 1 0 0 1 1 1v11H6a1 1 0 0 1-1-1V8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    native: '<path d="M12 3v12M7 8l5-5 5 5M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  function shareBtn(key, href, onClick) {
    var n = el(href ? "a" : "button", "sh sh-" + key);
    if (href) { n.href = href; n.target = "_blank"; n.rel = "noopener"; } else n.type = "button";
    n.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">' + ICON[key] + "</svg>";
    n.appendChild(el("span", "", U().share[key]));
    if (onClick) n.addEventListener("click", onClick);
    return n;
  }
  function renderShare() {
    var g = $("shareGrid"); g.innerHTML = "";
    var u = encodeURIComponent(pageUrl), tx = encodeURIComponent(U().shareText), st = $("shareStatus");
    g.appendChild(shareBtn("wa", "https://wa.me/?text=" + tx + "%20" + u));
    g.appendChild(shareBtn("fb", "https://www.facebook.com/sharer/sharer.php?u=" + u));
    g.appendChild(shareBtn("x", "https://twitter.com/intent/tweet?text=" + tx + "&url=" + u));
    g.appendChild(shareBtn("tg", "https://t.me/share/url?url=" + u + "&text=" + tx));
    g.appendChild(shareBtn("ig", null, function () { var b = this; copy(pageUrl).then(function () { flash(b.querySelector("span"), U().copied); say(st, U().igCopied); }); }));
    g.appendChild(shareBtn("link", null, function () { var b = this; copy(pageUrl).then(function () { flash(b.querySelector("span"), U().copied); say(st, U().linkCopied); }); }));
    g.appendChild(shareBtn("text", null, function () { var b = this; copy(appealText(lang)).then(function () { flash(b.querySelector("span"), U().copied); say(st, U().textCopied); }); }));
    if (navigator.share) g.appendChild(shareBtn("native", null, function () { navigator.share({ title: document.title, text: U().shareText, url: pageUrl }).catch(function () {}); }));
  }

  /* ================= الأحاديث، الأسئلة، التواصل ================= */
  function renderHadiths() {
    var box = $("hadiths"); box.innerHTML = "";
    (S.hadiths || []).forEach(function (h) {
      var q = el("blockquote", "hadith reveal");
      q.appendChild(el("p", "", (lang === "ar" ? "«" : "“") + T(h.text) + (lang === "ar" ? "»" : "”")));
      box.appendChild(q);
    });
  }
  function renderFaq() {
    var box = $("faqList"); box.innerHTML = "";
    (S.faq || []).forEach(function (f, i) {
      var d = el("details", "qa reveal");
      var s = el("summary"); s.appendChild(el("span", "", T(f.q))); s.appendChild(el("i", "", "")); d.appendChild(s);
      d.appendChild(el("p", "", T(f.a)));
      box.appendChild(d);
    });
  }
  function renderContacts() {
    var box = $("contacts"); box.innerHTML = "";
    var sel = $("fTo"), keep = sel.value; sel.innerHTML = "";
    (S.contacts || []).forEach(function (c) {
      var k = el("div", "cc");
      k.appendChild(el("h3", "", T(c.name)));
      k.appendChild(el("p", "", T(c.role)));
      var row = el("div", "cc-row");
      if (c.phone) { var t = el("a", "btn btn-line-light btn-sm"); t.href = "tel:" + c.phone.replace(/\s/g, ""); var sp = el("span", "", c.phone); sp.dir = "ltr"; t.appendChild(sp); t.setAttribute("aria-label", U().call + " " + c.phone); row.appendChild(t); }
      if (c.whatsapp) { var w = el("a", "btn btn-gold btn-sm", U().wa); w.href = wa(c.whatsapp, U().waContactMsg); w.target = "_blank"; w.rel = "noopener"; row.appendChild(w); }
      if (c.email) { var m = el("a", "btn btn-line-light btn-sm", c.email); m.href = "mailto:" + c.email; row.appendChild(m); }
      k.appendChild(row); box.appendChild(k);
      if (c.whatsapp) { var o = el("option", "", T(c.name)); o.value = c.key; sel.appendChild(o); }
    });
    if (keep) sel.value = keep;
  }
  $("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var name = $("fName").value.trim(), msg = $("fMsg").value.trim(), err = $("formErr");
    err.textContent = "";
    if (!name) { err.textContent = U().formErrName; $("fName").focus(); return; }
    if (!msg) { err.textContent = U().formErrMsg; $("fMsg").focus(); return; }
    var c = (S.contacts || []).filter(function (x) { return x.key === $("fTo").value; })[0];
    if (!c) return;
    var topic = $("fTopic").options[$("fTopic").selectedIndex].text;
    var text = U().formHead + "\n" + U().formFrom + ": " + name + "\n" + U().formTopic + ": " + topic + "\n\n" + msg;
    window.open(wa(c.whatsapp, text), "_blank", "noopener");
    err.textContent = U().formOpened; err.classList.add("ok");
    setTimeout(function () { err.classList.remove("ok"); }, 6000);
  });

  /* ================= render ================= */
  function renderAll() {
    renderFilters(); renderDocs(); renderJourney(); renderNews(); renderAppeal();
    renderDonate(); renderContrib(); renderShare(); renderHadiths(); renderFaq(); renderContacts();
    arm();
  }
  applyStatic(); renderAll();
  document.documentElement.classList.add("ready");
})();
