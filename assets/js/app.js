(function () {
  "use strict";
  var S = window.SITE || {};
  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  var pageUrl = S.url || location.href.split("#")[0];
  var shareText = "رقية، فتاة في الحادية والعشرين، تحتاج إلى فرصة للعلاج خارج العراق. اقرأ قصتها وشارك استغاثتها:";

  /* ---------- القائمة ---------- */
  var menuBtn = document.querySelector(".menu-btn"), nav = $("nav");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  /* ---------- صورة الواجهة ---------- */
  if (S.heroPhoto) {
    var inner = document.querySelector(".niche-inner");
    inner.innerHTML = "";
    var hp = el("img"); hp.src = S.heroPhoto; hp.alt = S.heroPhotoAlt || "";
    inner.appendChild(hp);
    $("niche").removeAttribute("aria-hidden");
  }

  /* ---------- المراحل ---------- */
  (S.timeline || []).forEach(function (t) {
    var li = el("li", t.now ? "now" : "");
    li.appendChild(el("time", "", t.when));
    li.appendChild(el("h4", "", t.title));
    li.appendChild(el("p", "", t.text));
    if (t.source) li.appendChild(el("small", "", "المصدر: " + t.source));
    $("timeline").appendChild(li);
  });

  /* ---------- عارض الصور ---------- */
  var lb = $("lb"), lbImg = $("lbImg"), stage = $("lbStage"), set = [], idx = 0, lastFocus = null;
  function show(i) {
    idx = (i + set.length) % set.length;
    var it = set[idx];
    lbImg.src = it.img; lbImg.alt = it.title || "";
    $("lbTitle").textContent = (it.title || "") + (set.length > 1 ? " (" + (idx + 1) + " من " + set.length + ")" : "");
    stage.classList.remove("zoom"); $("lbZoom").textContent = "تكبير";
    var dl = $("lbDl");
    if (it.download) { dl.hidden = false; dl.href = it.img; } else { dl.hidden = true; }
    var many = set.length > 1; $("lbPrev").hidden = !many; $("lbNext").hidden = !many;
  }
  function openLb(items, i) {
    set = items; lastFocus = document.activeElement;
    lb.hidden = false; document.body.style.overflow = "hidden";
    show(i); $("lbClose").focus();
  }
  function closeLb() {
    lb.hidden = true; document.body.style.overflow = ""; lbImg.src = "";
    if (lastFocus) lastFocus.focus();
  }
  function toggleZoom() {
    var z = stage.classList.toggle("zoom");
    $("lbZoom").textContent = z ? "تصغير" : "تكبير";
  }
  $("lbClose").addEventListener("click", closeLb);
  $("lbZoom").addEventListener("click", toggleZoom);
  lbImg.addEventListener("click", toggleZoom);
  $("lbPrev").addEventListener("click", function () { show(idx - 1); });
  $("lbNext").addEventListener("click", function () { show(idx + 1); });
  stage.addEventListener("click", function (e) { if (e.target === stage) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowRight") show(idx - 1);   /* اتجاه RTL */
    else if (e.key === "ArrowLeft") show(idx + 1);
    else if (e.key === "Tab") {
      var f = lb.querySelectorAll("button:not([hidden]),a:not([hidden])");
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  var sx = null;
  stage.addEventListener("touchstart", function (e) { sx = e.touches.length === 1 ? e.touches[0].clientX : null; }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    if (sx == null || stage.classList.contains("zoom")) return;
    var dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 60) show(idx + (dx > 0 ? 1 : -1));
  });

  /* ---------- الوثائق ---------- */
  var cats = [["all", "الكل"], ["reports", "التقارير الطبية"], ["official", "الكتب الرسمية"], ["scans", "نتائج الفحوصات"]];
  var docs = S.documents || [], current = "all";
  function thumbOf(p) { return p.replace(/\.jpg$/, "-thumb.jpg"); }
  function renderDocs() {
    var box = $("docs"); box.innerHTML = "";
    var list = docs.filter(function (d) { return current === "all" || d.cat === current; });
    var viewable = list.filter(function (d) { return d.img; });
    list.forEach(function (d) {
      var card = el("article", "doc");
      if (d.img) {
        var b = el("button", "doc-thumb"); b.type = "button";
        b.setAttribute("aria-label", "عرض: " + d.title);
        var im = el("img"); im.src = thumbOf(d.img); im.alt = ""; im.loading = "lazy";
        im.onerror = function () { im.onerror = null; im.src = d.img; };
        b.appendChild(im);
        b.addEventListener("click", function () { openLb(viewable, viewable.indexOf(d)); });
        card.appendChild(b);
      } else {
        card.appendChild(el("div", "doc-thumb doc-pending", "تُضاف الوثيقة بعد موافقة العائلة"));
      }
      var body = el("div", "doc-body");
      body.appendChild(el("h3", "", d.title));
      if (d.note) body.appendChild(el("p", "", d.note));
      if (d.img && d.download) {
        var a = el("a", "", "تحميل الوثيقة"); a.href = d.img; a.setAttribute("download", "");
        body.appendChild(a);
      }
      card.appendChild(body); box.appendChild(card);
    });
  }
  cats.forEach(function (c) {
    if (c[0] !== "all" && !docs.some(function (d) { return d.cat === c[0]; })) return;
    var b = el("button", "chip", c[1]); b.type = "button";
    b.setAttribute("aria-pressed", c[0] === "all");
    b.addEventListener("click", function () {
      current = c[0];
      [].forEach.call($("filters").children, function (x) { x.setAttribute("aria-pressed", x === b); });
      renderDocs();
    });
    $("filters").appendChild(b);
  });
  renderDocs();

  /* ---------- المعرض ---------- */
  var gal = S.gallery || [], grid = $("galleryGrid");
  if (!gal.length) {
    grid.appendChild(el("p", "empty", "تُضاف صور رقية هنا بعد موافقة عائلتها على نشرها. لا تُعرض في هذا الموقع أي صور لا تخصّها."));
  } else {
    gal.forEach(function (g, i) {
      var b = el("button"); b.type = "button"; b.setAttribute("aria-label", g.caption || "صورة " + (i + 1));
      var im = el("img"); im.src = g.img; im.alt = g.caption || ""; im.loading = "lazy";
      b.appendChild(im);
      b.addEventListener("click", function () { openLb(gal.map(function (x) { return { img: x.img, title: x.caption }; }), i); });
      grid.appendChild(b);
    });
  }

  /* ---------- النسخ ---------- */
  function copy(text, btn, done) {
    var ok = function () { var o = btn.textContent; btn.textContent = done || "تم النسخ"; setTimeout(function () { btn.textContent = o; }, 2000); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, fallback);
    else fallback();
    function fallback() {
      var t = el("textarea"); t.value = text; t.style.position = "fixed"; t.style.opacity = "0";
      document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); ok(); } catch (e) {}
      t.remove();
    }
  }
  function copyField(label, value, btnText) {
    var f = el("div", "field"), d = el("div");
    d.appendChild(el("span", "", label)); d.appendChild(el("strong", "", value));
    f.appendChild(d);
    if (btnText) {
      var b = el("button", "btn btn-ghost btn-small", btnText); b.type = "button";
      b.addEventListener("click", function () { copy(value.replace(/\s/g, ""), b); });
      f.appendChild(b);
    }
    return f;
  }
  function waLink(num, text) { return "https://wa.me/" + num + (text ? "?text=" + encodeURIComponent(text) : ""); }

  /* ---------- التبرع ---------- */
  var D = S.donation || {}, card = $("donateCard");
  if (D.enabled && (D.walletNumber || D.bankAccount || D.cardNumber || D.fatherPhone)) {
    card.appendChild(el("h3", "", "وسائل المساهمة"));
    if (D.walletNumber) card.appendChild(copyField("رقم المحفظة" + (D.walletProvider ? " (" + D.walletProvider + ")" : ""), D.walletNumber, "نسخ الرقم"));
    if (D.bankAccount) card.appendChild(copyField("رقم الحساب المصرفي" + (D.bankName ? " (" + D.bankName + ")" : ""), D.bankAccount, "نسخ الرقم"));
    if (D.cardNumber) card.appendChild(copyField("رقم بطاقة الماستر كارد", D.cardNumber, "نسخ الرقم"));
    if (D.cardHolder) card.appendChild(copyField("اسم صاحب الحساب", D.cardHolder));
    if (D.receiver) card.appendChild(copyField("الجهة المستلمة للأموال", D.receiver));
    if (D.fatherPhone) card.appendChild(copyField("هاتف والد رقية", D.fatherPhone, "نسخ الهاتف"));
    card.appendChild(el("p", "warn", "قبل التحويل: تأكد من مطابقة الرقم لما هو منشور هنا، وتواصل مع والد رقية عبر واتساب للتحقق من اسم المستفيد."));
    if (D.whatsapp) {
      var w = el("a", "btn btn-primary", "تواصل عبر واتساب"); w.href = waLink(D.whatsapp, "السلام عليكم، أودّ المساهمة في علاج رقية."); w.target = "_blank"; w.rel = "noopener";
      card.appendChild(w);
    }
  } else {
    card.appendChild(el("h3", "", "وسائل المساهمة قيد التأكيد"));
    card.appendChild(el("p", "", "ستُنشر هنا بيانات التحويل المعتمدة واسم المستفيد بعد تأكيدها مع عائلة رقية. لا نعرض أي بيانات مالية غير مؤكدة."));
    card.appendChild(el("p", "warn", "حتى ذلك الحين، يمكنك مساعدة رقية بمشاركة هذه الصفحة."));
    var s = el("a", "btn btn-primary", "شارك استغاثة رقية"); s.href = "#share"; card.appendChild(s);
  }

  /* ---------- من يقف خلف الاستغاثة ---------- */
  var A = S.advocate || {};
  $("advName").textContent = A.name || "";
  if (A.photo) { var ap = el("img"); ap.src = A.photo; ap.alt = "صورة " + (A.name || ""); ap.loading = "lazy"; $("advPhoto").appendChild(ap); }

  /* ---------- الأحاديث ---------- */
  (S.hadiths || []).forEach(function (h) {
    var q = el("blockquote", "hadith");
    q.appendChild(el("p", "", "«" + h.text + "»"));
    q.appendChild(el("cite", "", h.source));
    $("hadiths").appendChild(q);
  });

  /* ---------- المشاركة ---------- */
  var status = $("shareStatus");
  function say(m) { status.textContent = m; setTimeout(function () { if (status.textContent === m) status.textContent = ""; }, 4000); }
  var u = encodeURIComponent(pageUrl), tx = encodeURIComponent(shareText);
  [["واتساب", "https://wa.me/?text=" + tx + "%20" + u],
   ["فيسبوك", "https://www.facebook.com/sharer/sharer.php?u=" + u],
   ["تيليغرام", "https://t.me/share/url?url=" + u + "&text=" + tx]
  ].forEach(function (x) {
    var a = el("a", "btn btn-ghost btn-small", x[0]); a.href = x[1]; a.target = "_blank"; a.rel = "noopener";
    $("shareRow").appendChild(a);
  });
  var ig = el("button", "btn btn-ghost btn-small", "إنستغرام"); ig.type = "button";
  ig.addEventListener("click", function () { copy(pageUrl, ig, "تم نسخ الرابط"); say("تم نسخ الرابط. الصقه في قصتك أو في نبذة حسابك على إنستغرام."); });
  $("shareRow").appendChild(ig);
  var cp = el("button", "btn btn-ghost btn-small", "نسخ رابط الموقع"); cp.type = "button";
  cp.addEventListener("click", function () { copy(pageUrl, cp, "تم نسخ الرابط"); });
  $("shareRow").appendChild(cp);
  $("shareMain").addEventListener("click", function () {
    if (navigator.share) navigator.share({ title: document.title, text: shareText, url: pageUrl }).catch(function () {});
    else { copy(pageUrl, $("shareMain"), "تم نسخ الرابط"); say("تم نسخ الرابط. أرسله لمن تحب."); }
  });

  /* ---------- التواصل ---------- */
  function contactCard(title, desc, phone, wa, email) {
    var c = el("div", "contact");
    c.appendChild(el("h3", "", title)); c.appendChild(el("p", "", desc));
    var row = el("div", "row");
    if (phone) { var t = el("a", "btn btn-ghost btn-small", phone); t.href = "tel:" + phone.replace(/\s/g, ""); t.style.direction = "ltr"; row.appendChild(t); }
    if (wa) { var w = el("a", "btn btn-primary btn-small", "واتساب مباشر"); w.href = waLink(wa, "السلام عليكم، بخصوص حالة رقية."); w.target = "_blank"; w.rel = "noopener"; row.appendChild(w); }
    if (email) { var m = el("a", "btn btn-ghost btn-small", email); m.href = "mailto:" + email; row.appendChild(m); }
    if (row.children.length) c.appendChild(row);
    else c.appendChild(el("p", "fine", "تُضاف وسيلة التواصل بعد موافقة صاحبها."));
    return c;
  }
  $("contacts").appendChild(contactCard("والد رقية", "للاستفسار عن الحالة والتحقق من المعلومات.", D.fatherPhone, D.whatsapp, ""));
  $("contacts").appendChild(contactCard(A.name || "ساعي إيصال الحالة", "ساعي إيصال الحالة إلى الجهات الطبية والإنسانية.", "", A.whatsapp, A.email));
})();
