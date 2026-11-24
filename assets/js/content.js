/* ==================================================================
   محتوى موقع رقية — ملف البيانات الوحيد الذي تحتاج إلى تعديله
   Ruqayya website content — the only file you need to edit.

   • كل نص يُكتب بثلاث لغات: { ar: "...", en: "...", ckb: "..." }  (ckb = الكردية السورانية)
   • Every text field is bilingual: { ar: "...", en: "..." }
   • الحقل الفارغ "" يُخفى تلقائياً، أو يظهر بدلاً منه إشعار «يُضاف بعد التحقق».
   • لا تُضِف معلومة طبية أو مالية أو اسم داعم قبل التحقق منه وموافقة صاحبه.
   • Never add a medical, financial or supporter entry before it is verified
     and its owner has agreed to publication.

   هذا البناء مقصود: عند ربط نظام إدارة لاحقاً (مثل Decap CMS أو أي واجهة
   برمجية)، يكفي أن يولّد هذا الملف نفسه أو ملف JSON بالبنية نفسها.
   ================================================================== */
window.SITE = {
  url: "https://roqayya.pages.dev/",

  /* إظهار الأقسام أو إخفاؤها / show or hide whole sections */
  sections: {
    story: true, reports: true, journey: true, updates: true,
    contributions: true, donate: true, appeal: true, share: true,
    about: true, mercy: true, faq: true, contact: true
  },

  /* ---------------- صورة الواجهة / Hero photograph ---------------- */
  hero: {
    photo: "assets/img/roqaya.jpg",
    photoSmall: "assets/img/roqaya-380.jpg",
    alt: { ar: "رقية", en: "Ruqayya", ckb: "ڕوقەیە" }
  },

  /* ---------------- الوثائق الطبية / Medical documents ----------------
     cat: diagnosis | imaging | lab | genetic | opinion | treatment | official
     img: مسار الصورة المنشورة. اتركه "" لإظهار «تُنشر بعد الموافقة».
     download: true فقط لما وافقت العائلة على تحميله.               */
  documents: [
    { cat: "diagnosis", date: "2026-08-09",
      type: { ar: "تقرير فحص PET/CT · الصفحة 1", en: "PET/CT report · page 1", ckb: "ڕاپۆرتی پشکنینی PET/CT · لاپەڕەی ١" },
      title: { ar: "التشخيص والتاريخ المرضي", en: "Diagnosis and clinical history", ckb: "دەستنیشانکردن و مێژووی نەخۆشی" },
      note: { ar: "يذكر التشخيص: ساركوما العظام من النمط الأرومي الغضروفي، والجراحة السابقة، وإحدى عشرة دورة من العلاج الكيميائي.",
              en: "States the diagnosis — chondroblastic osteosarcoma — the previous surgery, and eleven cycles of chemotherapy.", ckb: "دەستنیشانکردنەکە دیاری دەکات: ئۆستیۆسارکۆمای جۆری کۆندرۆبلاستیک، هەروەها نەشتەرگەرییە پێشووەکە و یازدە خولی چارەسەری کیمیایی." },
      issuer: { ar: "مركز اللؤلؤة للبت سكان والمفراس الحلزوني، كربلاء", en: "Al-Lo'loaa Center for PET/CT Scan, Karbala", ckb: "سەنتەری لۆلۆئە بۆ پشکنینی PET/CT، کەربەلا" },
      img: "assets/img/docs/pet-1.jpg", download: false },
    { cat: "imaging", date: "2026-08-09",
      type: { ar: "تقرير فحص PET/CT · الصفحة 2", en: "PET/CT report · page 2", ckb: "ڕاپۆرتی پشکنینی PET/CT · لاپەڕەی ٢" },
      title: { ar: "نتائج الحوض والفقرات", en: "Pelvis and spine findings", ckb: "ئەنجامەکانی حەوز و بڕبڕەکانی پشت" },
      note: { ar: "زيادة في حجم الكتلة ونشاطها قرب الفقرات القطنية (L3–L5)، مع تأثّر أجزاء من الفقرتين الرابعة والخامسة.",
              en: "Increase in the size and activity of the mass beside the lumbar spine (L3–L5), affecting parts of the L4 and L5 vertebrae.", ckb: "زیادبوونی قەبارە و چالاکیی گرێکە لە نزیک بڕبڕەکانی کەمەر (L3–L5)، کە بەشێک لە بڕبڕەی چوارەم و پێنجەمی گرتووەتەوە." },
      issuer: { ar: "مركز اللؤلؤة للبت سكان والمفراس الحلزوني، كربلاء", en: "Al-Lo'loaa Center for PET/CT Scan, Karbala", ckb: "سەنتەری لۆلۆئە بۆ پشکنینی PET/CT، کەربەلا" },
      img: "assets/img/docs/pet-2.jpg", download: false },
    { cat: "imaging", date: "2026-08-09",
      type: { ar: "تقرير فحص PET/CT · الخلاصة", en: "PET/CT report · impression", ckb: "ڕاپۆرتی پشکنینی PET/CT · کورتە" },
      title: { ar: "خلاصة الفحص: المرض في حالة تقدّم", en: "Impression: progressive disease", ckb: "کورتەی پشکنین: نەخۆشییەکە لە پەرەسەندندایە" },
      note: { ar: "تنص الخلاصة على أن الصورة العامة تشير إلى تقدّم المرض مقارنة بالفحص السابق.",
              en: "The impression states that the overall picture indicates progressive disease compared with the previous scan.", ckb: "کورتەکە دەڵێت وێنەی گشتی ئاماژە بە پەرەسەندنی نەخۆشییەکە دەکات بە بەراورد لەگەڵ پشکنینی پێشوو." },
      issuer: { ar: "مركز اللؤلؤة للبت سكان والمفراس الحلزوني، كربلاء", en: "Al-Lo'loaa Center for PET/CT Scan, Karbala", ckb: "سەنتەری لۆلۆئە بۆ پشکنینی PET/CT، کەربەلا" },
      img: "assets/img/docs/pet-3.jpg", download: true },
    { cat: "imaging", date: "2026-08-09",
      type: { ar: "صور الفحص", en: "Scan images", ckb: "وێنەکانی پشکنین" },
      title: { ar: "صور المقاطع: منطقة الحوض", en: "Cross-sections: pelvis", ckb: "وێنەی بڕگەکان: ناوچەی حەوز" },
      note: { ar: "مقارنة بين الفحص السابق والفحص الحالي.", en: "Previous study compared with the current study.", ckb: "بەراوردێک لە نێوان پشکنینی پێشوو و پشکنینی ئێستادا." },
      issuer: { ar: "مركز اللؤلؤة للبت سكان والمفراس الحلزوني، كربلاء", en: "Al-Lo'loaa Center for PET/CT Scan, Karbala", ckb: "سەنتەری لۆلۆئە بۆ پشکنینی PET/CT، کەربەلا" },
      img: "assets/img/docs/pet-5.jpg", download: false },
    { cat: "imaging", date: "2026-08-09",
      type: { ar: "صور الفحص", en: "Scan images", ckb: "وێنەکانی پشکنین" },
      title: { ar: "صور المقاطع: مقاطع إضافية (1)", en: "Cross-sections: additional views (1)", ckb: "وێنەی بڕگەکان: بڕگەی زیاتر (١)" },
      note: { ar: "مقارنة بين الفحص السابق والفحص الحالي.", en: "Previous study compared with the current study.", ckb: "بەراوردێک لە نێوان پشکنینی پێشوو و پشکنینی ئێستادا." },
      issuer: { ar: "مركز اللؤلؤة للبت سكان والمفراس الحلزوني، كربلاء", en: "Al-Lo'loaa Center for PET/CT Scan, Karbala", ckb: "سەنتەری لۆلۆئە بۆ پشکنینی PET/CT، کەربەلا" },
      img: "assets/img/docs/pet-6.jpg", download: false },
    { cat: "imaging", date: "2026-08-09",
      type: { ar: "صور الفحص", en: "Scan images", ckb: "وێنەکانی پشکنین" },
      title: { ar: "صور المقاطع: مقاطع إضافية (2)", en: "Cross-sections: additional views (2)", ckb: "وێنەی بڕگەکان: بڕگەی زیاتر (٢)" },
      note: { ar: "مقارنة بين الفحص السابق والفحص الحالي.", en: "Previous study compared with the current study.", ckb: "بەراوردێک لە نێوان پشکنینی پێشوو و پشکنینی ئێستادا." },
      issuer: { ar: "مركز اللؤلؤة للبت سكان والمفراس الحلزوني، كربلاء", en: "Al-Lo'loaa Center for PET/CT Scan, Karbala", ckb: "سەنتەری لۆلۆئە بۆ پشکنینی PET/CT، کەربەلا" },
      img: "assets/img/docs/pet-7.jpg", download: false },
    { cat: "treatment", date: "2026-09-21",
      type: { ar: "تقرير طبي رسمي", en: "Official medical report", ckb: "ڕاپۆرتێکی پزیشکیی فەرمی" },
      title: { ar: "تقرير مستشفى الإمام الحسن المجتبى التعليمي", en: "Imam Al-Hassan Al-Mujtaba Teaching Hospital report", ckb: "ڕاپۆرتی نەخۆشخانەی فێرکاریی ئیمام حەسەن موجتەبا" },
      note: { ar: "ينص على أنها مصابة بسرطان عظم راجع، وتحت العلاج الكيميائي، وبحاجة إلى جراحة متقدمة خارج العراق.",
              en: "States that she has recurrent bone cancer, is receiving chemotherapy, and needs advanced surgery outside Iraq.", ckb: "دەڵێت تووشی شێرپەنجەی ئێسکی گەڕاوە بووە، لە ژێر چارەسەری کیمیاییدایە، و پێویستی بە نەشتەرگەرییەکی پێشکەوتووە لە دەرەوەی عێراق." },
      issuer: { ar: "دائرة صحة كربلاء المقدسة", en: "Karbala Health Directorate", ckb: "فەرمانگەی تەندروستیی کەربەلا" },
      img: "assets/img/docs/report-mujtaba.jpg", download: true },
    { cat: "opinion", date: "",
      type: { ar: "وثيقة طبية", en: "Medical document", ckb: "بەڵگەنامەیەکی پزیشکی" },
      title: { ar: "وثيقة عدم توفر العملية داخل العراق", en: "Statement that the operation is unavailable in Iraq", ckb: "بەڵگەنامەی بەردەست نەبوونی نەشتەرگەرییەکە لە ناو عێراق" },
      note: { ar: "صادرة عن مستشفى وارث الدولي لعلاج الأورام. تُنشر صورتها بعد موافقة العائلة.",
              en: "Issued by Warith International Cancer Hospital. The image will be published once the family approves.", ckb: "لە لایەن نەخۆشخانەی نێودەوڵەتیی وارس بۆ چارەسەری شێرپەنجە دەرچووە. وێنەکەی دوای ڕەزامەندیی خێزانەکە بڵاو دەکرێتەوە." },
      issuer: { ar: "مستشفى وارث الدولي لعلاج الأورام", en: "Warith International Cancer Hospital", ckb: "نەخۆشخانەی نێودەوڵەتیی وارس بۆ چارەسەری شێرپەنجە" },
      img: "", download: false },
    { cat: "official", date: "",
      type: { ar: "مراسلة رسمية", en: "Official letter", ckb: "نووسراوێکی فەرمی" },
      title: { ar: "مناشدة عاجلة إلى السيد وزير الصحة", en: "Urgent appeal to the Minister of Health", ckb: "داوایەکی بەپەلە بۆ بەڕێز وەزیری تەندروستی" },
      note: { ar: "تطلب الإسراع في تقييم ملفها وإحالته إلى لجنة الإخلاء الطبي، وإرسالها للعلاج خارج العراق، وتحديداً إلى الهند، إذا تعذّر توفير العلاج داخل البلاد.",
              en: "Asks for her file to be assessed quickly and referred to the medical evacuation committee, so she can be treated abroad — specifically in India — if the treatment cannot be provided in Iraq.", ckb: "داوا دەکات دۆسیەکەی بە خێرایی هەڵبسەنگێنرێت و بنێردرێت بۆ لیژنەی گواستنەوەی پزیشکی، بۆ ئەوەی بۆ چارەسەر بنێردرێتە دەرەوەی عێراق، بە تایبەتی هیندستان، ئەگەر چارەسەرەکە لە ناوخۆ دابین نەکرا." },
      issuer: { ar: "والد رقية: لؤي كاظم إبراهيم", en: "Ruqayya's father, Luay Kadhim Ibrahim", ckb: "باوکی ڕوقەیە: لوئەی کازم ئیبراهیم" },
      img: "assets/img/docs/letter-minister.jpg", download: true }
  ],

  /* ---------------- الرحلة العلاجية / Treatment journey ----------------
     status: "done" موثّق بوثيقة | "family" بحسب العائلة | "pending" قيد الانتظار | "next" قرار قادم
     date: اكتبه فقط إذا كان موثّقاً. */
  journey: [
    { status: "done", date: "",
      when: { ar: "التشخيص", en: "Diagnosis", ckb: "دەستنیشانکردن" },
      title: { ar: "ساركوما العظام في الحوض والعجز", en: "Osteosarcoma of the pelvis and sacrum", ckb: "ئۆستیۆسارکۆما لە ناوچەی حەوز و عەجز" },
      text: { ar: "شُخّصت رقية بساركوما العظام من النمط الأرومي الغضروفي في منطقة الحوض والعجز.",
              en: "Ruqayya was diagnosed with chondroblastic osteosarcoma in the pelvis and sacrum.", ckb: "ڕوقەیە تووشی ئۆستیۆسارکۆمای جۆری کۆندرۆبلاستیک بووە لە ناوچەی حەوز و عەجز." },
      source: { ar: "تقرير PET/CT، الصفحة 1", en: "PET/CT report, page 1", ckb: "ڕاپۆرتی PET/CT، لاپەڕەی ١" } },
    { status: "done", date: "",
      when: { ar: "العلاج الأول", en: "First treatment", ckb: "یەکەم چارەسەر" },
      title: { ar: "جراحة ثم علاج كيميائي", en: "Surgery, then chemotherapy", ckb: "نەشتەرگەری، پاشان چارەسەری کیمیایی" },
      text: { ar: "خضعت لاستئصال جراحي لجناح العجز الأيسر والجزء الخلفي من عظم الحرقفة الأيسر، ثم تلقّت إحدى عشرة دورة من العلاج الكيميائي.",
              en: "She underwent surgical removal of the left sacral ala and the back part of the left iliac bone, followed by eleven cycles of chemotherapy.", ckb: "نەشتەرگەرییەکی بۆ کرا بۆ لابردنی باڵی چەپی ئێسکی عەجز و بەشی دواوەی ئێسکی حەرقەفەی چەپ، پاشان یازدە خولی چارەسەری کیمیایی وەرگرت." },
      source: { ar: "تقرير PET/CT، الصفحة 1", en: "PET/CT report, page 1", ckb: "ڕاپۆرتی PET/CT، لاپەڕەی ١" } },
    { status: "done", date: "2026-02-27",
      when: { ar: "", en: "", ckb: "" },
      title: { ar: "فحص PET/CT سابق", en: "Earlier PET/CT scan", ckb: "پشکنینێکی پێشووی PET/CT" },
      text: { ar: "أُجري في مركز آخر، واعتُمد أساساً للمقارنة في الفحص اللاحق.",
              en: "Performed at another centre and used as the baseline for the later comparison.", ckb: "لە سەنتەرێکی تر ئەنجام درا، و وەک بنەمای بەراورد لە پشکنینی دواتردا بەکارهات." },
      source: { ar: "تقرير PET/CT، الصفحة 1", en: "PET/CT report, page 1", ckb: "ڕاپۆرتی PET/CT، لاپەڕەی ١" } },
    { status: "done", date: "2026-08-09",
      when: { ar: "", en: "", ckb: "" },
      title: { ar: "الفحص يُظهر تقدّم المرض", en: "Scan shows the disease is progressing", ckb: "پشکنین پەرەسەندنی نەخۆشییەکە پیشان دەدات" },
      text: { ar: "أظهر فحص PET/CT زيادة في حجم الكتلة ونشاطها قرب الفقرات القطنية، وخلص إلى أن المرض في حالة تقدّم.",
              en: "A PET/CT scan showed growth and increased activity of the mass beside the lumbar spine, and concluded that the disease is progressing.", ckb: "پشکنینی PET/CT زیادبوونی قەبارە و چالاکیی گرێکەی لە نزیک بڕبڕەکانی کەمەر پیشان دا، و گەیشتە ئەو ئەنجامەی کە نەخۆشییەکە لە پەرەسەندندایە." },
      source: { ar: "تقرير PET/CT، الخلاصة", en: "PET/CT report, impression", ckb: "ڕاپۆرتی PET/CT، کورتە" } },
    { status: "done", date: "2026-09-21",
      when: { ar: "", en: "", ckb: "" },
      title: { ar: "تقرير طبي: جراحة متقدمة خارج العراق", en: "Medical report: advanced surgery abroad", ckb: "ڕاپۆرتی پزیشکی: نەشتەرگەرییەکی پێشکەوتوو لە دەرەوەی وڵات" },
      text: { ar: "أكّد تقرير مستشفى الإمام الحسن المجتبى التعليمي أنها مصابة بسرطان عظم راجع، وتحت العلاج الكيميائي، وبحاجة إلى جراحة متقدمة خارج العراق.",
              en: "A report from Imam Al-Hassan Al-Mujtaba Teaching Hospital confirmed recurrent bone cancer, ongoing chemotherapy, and the need for advanced surgery outside Iraq.", ckb: "ڕاپۆرتی نەخۆشخانەی فێرکاریی ئیمام حەسەن موجتەبا جەختی کردەوە کە تووشی شێرپەنجەی ئێسکی گەڕاوە بووە، لە ژێر چارەسەری کیمیاییدایە، و پێویستی بە نەشتەرگەرییەکی پێشکەوتووە لە دەرەوەی عێراق." },
      source: { ar: "تقرير طبي رسمي", en: "Official medical report", ckb: "ڕاپۆرتێکی پزیشکیی فەرمی" } },
    { status: "done", date: "",
      when: { ar: "بعد التقرير", en: "After the report", ckb: "دوای ڕاپۆرتەکە" },
      title: { ar: "مناشدة إلى وزير الصحة", en: "Appeal to the Minister of Health", ckb: "داوا لە وەزیری تەندروستی" },
      text: { ar: "رفعت العائلة مناشدة لإحالة ملفها إلى لجنة الإخلاء الطبي وإرسالها للعلاج خارج العراق، وتحديداً إلى الهند، إذا تعذّر العلاج داخل البلاد.",
              en: "The family appealed for her file to be referred to the medical evacuation committee and for her to be treated abroad — specifically in India — if treatment is not available in Iraq.", ckb: "خێزانەکەی داوایان کرد دۆسیەکەی بنێردرێت بۆ لیژنەی گواستنەوەی پزیشکی و بۆ چارەسەر بنێردرێتە دەرەوەی عێراق، بە تایبەتی هیندستان، ئەگەر چارەسەرەکەی لە ناوخۆ دابین نەکرا." },
      source: { ar: "نص المناشدة", en: "Text of the appeal", ckb: "دەقی داواکە" } },
    { status: "family", date: "",
      when: { ar: "أربعة أشهر", en: "Four months", ckb: "چوار مانگ" },
      title: { ar: "أربعة أشهر من التأجيل والمماطلة", en: "Four months of delays", ckb: "چوار مانگ دواخستن و دواکەوتن" },
      text: { ar: "منذ أربعة أشهر ورقية تتنقّل ذهاباً وإياباً من محافظة كربلاء لمتابعة إجراءات ملفها، وسط تأجيلات متكررة ومماطلة في الإجراءات.",
              en: "For four months, Ruqayya has been travelling back and forth from Karbala to follow up on her file, facing repeated postponements and delays in the procedures.",
              ckb: "ماوەی چوار مانگە ڕوقەیە لە پارێزگای کەربەلاوە دێت و دەچێت بۆ بەدواداچوونی ڕێکارەکانی دۆسیەکەی، لە نێو دواخستنی بەردەوام و دواکەوتنی ڕێکارەکاندا." },
      source: { ar: "عائلة رقية", en: "Ruqayya's family", ckb: "خێزانی ڕوقەیە" } },
    { status: "family", date: "",
      when: { ar: "قرار الوزارة", en: "The ministry's decision", ckb: "بڕیاری وەزارەت" },
      title: { ar: "الوزارة لم توافق على تسفيرها إلى الهند", en: "The ministry did not approve sending her to India", ckb: "وەزارەت ڕەزامەندیی نەدا بە ناردنی بۆ هیندستان" },
      text: { ar: "لم توافق وزارة الصحة على تسفير رقية إلى الهند عبر قسم الإخلاء الطبي، وتعذّرت بأنها لا يمكنها تسفير هذه الحالة إلى الهند.",
              en: "The Ministry of Health did not approve sending Ruqayya to India through the medical evacuation department, saying it could not send this case to India.",
              ckb: "وەزارەتی تەندروستی ڕەزامەندیی نەدا بە ناردنی ڕوقەیە بۆ هیندستان لە ڕێگەی بەشی گواستنەوەی پزیشکییەوە، و بیانووی ئەوەی هێنایەوە کە ناتوانێت ئەم حاڵەتە بنێرێتە هیندستان." },
      source: { ar: "عائلة رقية", en: "Ruqayya's family", ckb: "خێزانی ڕوقەیە" } },
    { status: "pending", date: "",
      when: { ar: "الآن", en: "Now", ckb: "ئێستا" },
      title: { ar: "ما زالت بحاجة إلى العلاج خارج العراق", en: "She still needs treatment outside Iraq", ckb: "هێشتا پێویستی بە چارەسەر هەیە لە دەرەوەی عێراق" },
      text: { ar: "تقريرها الطبي يؤكد حاجتها إلى جراحة متقدمة خارج العراق. وبعد اعتذار الوزارة، تبحث عائلتها عن طريق آخر لتأمين علاجها.",
              en: "Her medical report confirms she needs advanced surgery outside Iraq. Since the ministry declined, her family is looking for another way to secure her treatment.",
              ckb: "ڕاپۆرتە پزیشکییەکەی جەخت دەکاتەوە کە پێویستی بە نەشتەرگەرییەکی پێشکەوتووە لە دەرەوەی عێراق. دوای ئەوەی وەزارەت داوای لێبوردنی کرد، خێزانەکەی بە دوای ڕێگایەکی تردا دەگەڕێن بۆ دابینکردنی چارەسەرەکەی." },
      source: { ar: "", en: "", ckb: "" } },
    { status: "next", date: "",
      when: { ar: "القرار القادم", en: "Next decision", ckb: "بڕیاری داهاتوو" },
      title: { ar: "تحديد جهة العلاج وموعده", en: "Choosing where and when she is treated", ckb: "دیاریکردنی شوێن و کاتی چارەسەر" },
      text: { ar: "لم يُحدَّد بعد المستشفى ولا موعد الجراحة. يُنشر أي قرار هنا فور تأكيده.",
              en: "Neither the hospital nor the date of surgery has been decided yet. Any decision will be posted here once it is confirmed.", ckb: "هێشتا نە نەخۆشخانەکە و نە کاتی نەشتەرگەرییەکە دیاری نەکراوە. هەر بڕیارێک دوای پشتڕاستکردنەوەی لێرە بڵاو دەکرێتەوە." },
      source: { ar: "", en: "", ckb: "" } }
  ],

  /* ---------------- التحديثات / Updates (الأحدث أولاً) ---------------- */
  updates: [
    { date: "2026-11-24", photo: "",
      title: { ar: "وزارة الصحة لم توافق على تسفير رقية إلى الهند", en: "Ministry of Health did not approve sending Ruqayya to India", ckb: "وەزارەتی تەندروستی ڕەزامەندیی نەدا بە ناردنی ڕوقەیە بۆ هیندستان" },
      summary: { ar: "بعد أربعة أشهر من التأجيلات، تعذّرت الوزارة بأنها لا يمكنها تسفير حالتها إلى الهند عبر قسم الإخلاء الطبي.",
                 en: "After four months of delays, the ministry said it could not send her case to India through the medical evacuation department.",
                 ckb: "دوای چوار مانگ دواخستن، وەزارەت بیانووی ئەوەی هێنایەوە کە ناتوانێت حاڵەتەکەی لە ڕێگەی بەشی گواستنەوەی پزیشکییەوە بنێرێتە هیندستان." },
      body: { ar: "بحسب عائلة رقية، لم توافق وزارة الصحة على تسفيرها إلى الهند عبر قسم الإخلاء الطبي، وتعذّرت بأنها لا يمكنها تسفير هذه الحالة إلى دولة الهند.\n\nجاء ذلك بعد أربعة أشهر من التأجيلات والمماطلة في الإجراءات، كانت رقية خلالها تتنقّل ذهاباً وإياباً من محافظة كربلاء لمتابعة ملفها، رغم مرضها.\n\nما زال تقريرها الطبي يؤكد حاجتها إلى جراحة متقدمة خارج العراق، وتبحث عائلتها اليوم عن طريق آخر لتأمين علاجها.",
              en: "According to Ruqayya's family, the Ministry of Health did not approve sending her to India through the medical evacuation department, saying it could not send this case to India.\n\nThis came after four months of postponements and delays in the procedures, during which Ruqayya, despite her illness, travelled back and forth from Karbala to follow up on her file.\n\nHer medical report still confirms that she needs advanced surgery outside Iraq, and her family is now looking for another way to secure her treatment.",
              ckb: "بەپێی قسەی خێزانی ڕوقەیە، وەزارەتی تەندروستی ڕەزامەندیی نەدا بە ناردنی بۆ هیندستان لە ڕێگەی بەشی گواستنەوەی پزیشکییەوە، و بیانووی ئەوەی هێنایەوە کە ناتوانێت ئەم حاڵەتە بنێرێتە وڵاتی هیندستان.\n\nئەمە دوای چوار مانگ دواخستن و دواکەوتنی ڕێکارەکان هات، کە لەو ماوەیەدا ڕوقەیە سەرەڕای نەخۆشییەکەی لە پارێزگای کەربەلاوە دەهات و دەچوو بۆ بەدواداچوونی دۆسیەکەی.\n\nڕاپۆرتە پزیشکییەکەی هێشتا جەخت دەکاتەوە کە پێویستی بە نەشتەرگەرییەکی پێشکەوتووە لە دەرەوەی عێراق، و خێزانەکەی ئێستا بە دوای ڕێگایەکی تردا دەگەڕێن بۆ دابینکردنی چارەسەرەکەی." } },
    { date: "2026-11-24", photo: "",
      title: { ar: "إطلاق النسخة الجديدة من منصة رقية", en: "The new Ruqayya platform is live", ckb: "وەشانی نوێی پلاتفۆرمی ڕوقەیە بڵاو کرایەوە" },
      summary: { ar: "صار الموقع متاحاً بالعربية والكردية والإنجليزية، مع أرشيف منظّم للوثائق الطبية ومسار زمني للرحلة العلاجية.",
                 en: "The site is now available in Arabic, Kurdish and English, with an organised archive of medical documents and a timeline of her treatment journey.", ckb: "ماڵپەڕەکە ئێستا بە عەرەبی و کوردی و ئینگلیزی بەردەستە، لەگەڵ ئەرشیفێکی ڕێکخراوی بەڵگەنامە پزیشکییەکان و هێڵێکی کاتی بۆ گەشتی چارەسەرەکەی." },
      body: { ar: "أطلقنا النسخة الجديدة من هذه المنصة لتصل قصة رقية إلى عدد أكبر من الناس داخل العراق وخارجه.\n\nتضم المنصة الآن قصتها كاملة، والوثائق الطبية مصنّفة حسب نوعها وتاريخها، ومساراً زمنياً يفصل ما هو موثّق عمّا لا يزال بانتظار القرار، إضافة إلى نص الاستغاثة بثلاث لغات جاهزاً للنسخ والمشاركة والطباعة.\n\nستُنشر هنا كل مستجدات حالتها فور التحقق منها.",
              en: "We have launched the new version of this platform so that Ruqayya's story can reach more people, in Iraq and beyond.\n\nIt now brings together her full story, her medical documents sorted by type and date, and a timeline that separates what is documented from what is still awaiting a decision. Her appeal is available in three languages, ready to copy, share or print.\n\nEvery new development in her case will be posted here once it has been verified.", ckb: "وەشانی نوێی ئەم پلاتفۆرمەمان بڵاو کردەوە بۆ ئەوەی چیرۆکی ڕوقەیە بگاتە خەڵکێکی زیاتر لە ناو عێراق و دەرەوەی.\n\nپلاتفۆرمەکە ئێستا چیرۆکە تەواوەکەی، بەڵگەنامە پزیشکییەکانی بەپێی جۆر و بەروار، و هێڵێکی کاتی لەخۆ دەگرێت کە ڕاستییە بەڵگەدارەکان لەوانە جیا دەکاتەوە کە هێشتا چاوەڕێی بڕیارن. هەروەها دەقی هاوارەکە بە سێ زمان ئامادەیە بۆ کۆپیکردن و هاوبەشکردن و چاپکردن.\n\nهەموو پێشهاتێکی نوێی حاڵەتەکەی دوای پشتڕاستکردنەوە لێرە بڵاو دەکرێتەوە." } },
    { date: "2026-09-21", photo: "",
      title: { ar: "تقرير طبي يؤكد حاجتها إلى جراحة خارج العراق", en: "Medical report confirms she needs surgery outside Iraq", ckb: "ڕاپۆرتێکی پزیشکی جەخت دەکاتەوە کە پێویستی بە نەشتەرگەری هەیە لە دەرەوەی عێراق" },
      summary: { ar: "صدر تقرير مستشفى الإمام الحسن المجتبى التعليمي في كربلاء بشأن حالتها.",
                 en: "Imam Al-Hassan Al-Mujtaba Teaching Hospital in Karbala issued a report on her condition.", ckb: "نەخۆشخانەی فێرکاریی ئیمام حەسەن موجتەبا لە کەربەلا ڕاپۆرتێکی لەبارەی دۆخەکەیەوە دەرکرد." },
      body: { ar: "أصدر مستشفى الإمام الحسن المجتبى التعليمي في كربلاء تقريراً طبياً بتاريخ 21 أيلول 2026، ينص على أن رقية مصابة بسرطان عظم راجع، وأنها تحت العلاج الكيميائي، وبحاجة إلى جراحة متقدمة خارج العراق.\n\nالتقرير منشور كاملاً في قسم التقارير الطبية.",
              en: "On 21 September 2026, Imam Al-Hassan Al-Mujtaba Teaching Hospital in Karbala issued a medical report stating that Ruqayya has recurrent bone cancer, is receiving chemotherapy, and needs advanced surgery outside Iraq.\n\nThe full report is published in the Medical Reports section.", ckb: "لە ٢١ی ئەیلوولی ٢٠٢٦، نەخۆشخانەی فێرکاریی ئیمام حەسەن موجتەبا لە کەربەلا ڕاپۆرتێکی پزیشکیی دەرکرد کە دەڵێت ڕوقەیە تووشی شێرپەنجەی ئێسکی گەڕاوە بووە، لە ژێر چارەسەری کیمیاییدایە، و پێویستی بە نەشتەرگەرییەکی پێشکەوتووە لە دەرەوەی عێراق.\n\nڕاپۆرتەکە بە تەواوی لە بەشی ڕاپۆرتە پزیشکییەکاندا بڵاو کراوەتەوە." },
      doc: "assets/img/docs/report-mujtaba.jpg" },
    { date: "2026-08-09", photo: "",
      title: { ar: "فحص PET/CT يُظهر تقدّم المرض", en: "PET/CT scan shows the disease is progressing", ckb: "پشکنینی PET/CT پەرەسەندنی نەخۆشییەکە پیشان دەدات" },
      summary: { ar: "أظهر الفحص زيادة في حجم الكتلة قرب الفقرات القطنية.",
                 en: "The scan showed the mass beside the lumbar spine had grown.", ckb: "پشکنینەکە دەریخست کە گرێکەی نزیک بڕبڕەکانی کەمەر گەورەتر بووە." },
      body: { ar: "أُجري لرقية فحص PET/CT في مركز اللؤلؤة في كربلاء بتاريخ 9 آب 2026، وقورن بفحص سابق أُجري في 27 شباط 2026.\n\nأظهر الفحص زيادة في حجم الكتلة ونشاطها قرب الفقرات القطنية، مع تأثّر أجزاء من الفقرتين الرابعة والخامسة، وخلص إلى أن الصورة العامة تشير إلى تقدّم المرض.\n\nصفحات التقرير منشورة في قسم التقارير الطبية.",
              en: "Ruqayya had a PET/CT scan at the Al-Lo'loaa Center in Karbala on 9 August 2026, compared with an earlier scan from 27 February 2026.\n\nThe scan showed the mass beside the lumbar spine had grown and become more active, affecting parts of the L4 and L5 vertebrae. Its impression was that the overall picture indicates progressive disease.\n\nThe report pages are published in the Medical Reports section.", ckb: "لە ٩ی ئابی ٢٠٢٦ پشکنینی PET/CT بۆ ڕوقەیە لە سەنتەری لۆلۆئە لە کەربەلا ئەنجام درا، و لەگەڵ پشکنینێکی پێشووی ٢٧ی شوباتی ٢٠٢٦ بەراورد کرا.\n\nپشکنینەکە زیادبوونی قەبارە و چالاکیی گرێکەی لە نزیک بڕبڕەکانی کەمەر پیشان دا، کە بەشێک لە بڕبڕەی چوارەم و پێنجەمی گرتووەتەوە، و گەیشتە ئەو ئەنجامەی کە وێنەی گشتی ئاماژە بە پەرەسەندنی نەخۆشییەکە دەکات.\n\nلاپەڕەکانی ڕاپۆرتەکە لە بەشی ڕاپۆرتە پزیشکییەکاندا بڵاو کراونەتەوە." },
      doc: "assets/img/docs/pet-3.jpg" }
  ],

  /* ---------------- المساهمون / Contributors ----------------
     type: individual | medical | charity | institution
     لا تُضِف اسماً أو شعاراً قبل إذن صاحبه.
     مثال: { type: "charity", name: {ar:"",en:""}, role: {ar:"",en:""}, logo: "" } */
  contributors: [],

  /* ---------------- التبرع / Donation (بيانات منشورة سابقاً بموافقة العائلة) ---------------- */
  donation: {
    enabled: true,
    goalUSD: 20000,
    methods: [
      { label: { ar: "رقم المحفظة (ماستر كارد)", en: "Wallet number (Mastercard)", ckb: "ژمارەی جزدان (ماستەرکارد)" }, value: "910192624815", copy: true },
      { label: { ar: "رقم الحساب المصرفي (مصرف الرافدين)", en: "Bank account (Rafidain Bank)", ckb: "ژمارەی هەژماری بانکی (بانکی ڕافیدەین)" }, value: "3673129643", copy: true }
    ],
    holder: { ar: "لؤي كاظم إبراهيم", en: "Luay Kadhim Ibrahim", ckb: "لوئەی کازم ئیبراهیم" },
    receiver: { ar: "والد رقية", en: "Ruqayya's father", ckb: "باوکی ڕوقەیە" },
    whatsapp: "9647801513941"
  },

  /* ---------------- جهات التواصل / Contacts ---------------- */
  contacts: [
    { key: "father",
      name: { ar: "لؤي كاظم إبراهيم (أبو فاطمة)", en: "Luay Kadhim Ibrahim (Abu Fatima)", ckb: "لوئەی کازم ئیبراهیم (ئەبو فاتیمە)" },
      role: { ar: "والد رقية — للاستفسار عن الحالة والتحقق من المعلومات", en: "Ruqayya's father — for questions about her case and to verify information", ckb: "باوکی ڕوقەیە — بۆ پرسیارکردن لەبارەی حاڵەتەکە و پشتڕاستکردنەوەی زانیارییەکان" },
      phone: "+964 780 151 3941", whatsapp: "9647801513941", email: "" },
    { key: "advocate",
      name: { ar: "إبراهيم علي عبد الحسين الشويلي", en: "Ibrahim Ali Abdulhussein Al-Shuwaili", ckb: "ئیبراهیم عەلی عەبدولحوسێن شوەیلی" },
      role: { ar: "ساعٍ لإيصال الحالة إلى الجهات الطبية والإنسانية", en: "Advocate connecting her case with medical and humanitarian bodies", ckb: "هەوڵ دەدات حاڵەتەکە بگەیەنێتە لایەنە پزیشکی و مرۆییەکان" },
      phone: "+964 774 652 0005", whatsapp: "9647746520005", email: "" }
  ],

  /* ---------------- الأحاديث (لا تُضِف حديثاً قبل التحقق من صحته ومصدره) ---------------- */
  hadiths: [
    { text: { ar: "واللهُ في عونِ العبدِ ما كان العبدُ في عونِ أخيه", en: "God helps His servant as long as the servant helps his brother.", ckb: "واللهُ في عونِ العبدِ ما كان العبدُ في عونِ أخيه" },
      source: { ar: "صحيح مسلم", en: "Sahih Muslim", ckb: "صحیح موسلیم" } },
    { text: { ar: "من نفَّس عن مؤمنٍ كُربةً من كُرَبِ الدنيا نفَّس اللهُ عنه كُربةً من كُرَبِ يوم القيامة", en: "Whoever relieves a believer of one of the hardships of this world, God will relieve him of one of the hardships of the Day of Resurrection.", ckb: "من نفَّس عن مؤمنٍ كُربةً من كُرَبِ الدنيا نفَّس اللهُ عنه كُربةً من كُرَبِ يوم القيامة" },
      source: { ar: "صحيح مسلم", en: "Sahih Muslim", ckb: "صحیح موسلیم" } }
  ],

  /* ---------------- نص الاستغاثة / Appeal text (فقرات مفصولة بسطر فارغ) ---------------- */
  appeal: {
    title: { ar: "استغاثة إنسانية لعلاج رقية", en: "A humanitarian appeal for Ruqayya's treatment", ckb: "هاوارێکی مرۆیی بۆ چارەسەری ڕوقەیە" },
    body: {
      ar: "رقية لؤي كاظم إبراهيم، شابة في الحادية والعشرين من عمرها من محافظة كربلاء المقدسة، تواجه انتكاساً في مرض ساركوما العظام الذي أصاب منطقة الحوض والعجز بالقرب من الفقرات.\n\nخضعت لعملية جراحية وإحدى عشرة دورة من العلاج الكيميائي، ثم أظهر فحص PET/CT في 9 آب 2026 أن المرض عاد وتقدّم. وفي 21 أيلول 2026 أكّد تقرير مستشفى الإمام الحسن المجتبى التعليمي حاجتها إلى جراحة متقدمة خارج العراق.\n\nوبعد أربعة أشهر من التأجيلات والمماطلة في الإجراءات، كانت رقية خلالها تتنقّل ذهاباً وإياباً من محافظة كربلاء لمتابعة ملفها، لم توافق وزارة الصحة على تسفيرها إلى الهند عبر قسم الإخلاء الطبي.\n\nتُقدَّر تكاليف رحلتها العلاجية بنحو 20,000 دولار أمريكي، وهو مبلغ يفوق قدرة عائلتها.\n\nنناشد أصحاب الأيادي البيضاء، والأطباء، والمؤسسات الطبية والإنسانية، الوقوف إلى جانبها. كل مساهمة، وكل مشاركة، قد تفتح أمامها باب أمل جديد.",
      en: "Ruqayya Luay Kadhim Ibrahim is a 21-year-old young woman from Karbala, Iraq. She is facing a relapse of osteosarcoma, a bone cancer affecting her pelvis and sacrum, close to the spine.\n\nShe underwent surgery and eleven cycles of chemotherapy, but a PET/CT scan on 9 August 2026 showed that the disease had returned and was progressing. On 21 September 2026, a report from Imam Al-Hassan Al-Mujtaba Teaching Hospital confirmed that she needs advanced surgery outside Iraq.\n\nAfter four months of postponements and delays, during which Ruqayya travelled back and forth from Karbala to follow up on her file, the Ministry of Health did not approve sending her to India through the medical evacuation department.\n\nThe cost of her treatment journey is estimated at around US$20,000 — far beyond what her family can afford.\n\nWe appeal to generous people, doctors, and medical and humanitarian organisations to stand with her. Every contribution, and every share, could open a new door of hope for her.", ckb: "ڕوقەیە لوئەی کازم ئیبراهیم، کچێکی گەنجی بیست و یەک ساڵانە لە پارێزگای کەربەلا، ڕووبەڕووی گەڕانەوەی نەخۆشیی ئۆستیۆسارکۆما (شێرپەنجەی ئێسک) بووەتەوە، کە ناوچەی حەوز و عەجزی نزیک بڕبڕەکانی پشتی گرتووە.\n\nنەشتەرگەرییەکی بۆ کرا و یازدە خولی چارەسەری کیمیایی وەرگرت، بەڵام پشکنینی PET/CT لە ٩ی ئابی ٢٠٢٦ دەریخست کە نەخۆشییەکە گەڕاوەتەوە و پەرەی سەندووە. لە ٢١ی ئەیلوولی ٢٠٢٦ ڕاپۆرتی نەخۆشخانەی فێرکاریی ئیمام حەسەن موجتەبا جەختی کردەوە کە پێویستی بە نەشتەرگەرییەکی پێشکەوتووە لە دەرەوەی عێراق.\n\nدوای چوار مانگ دواخستن و دواکەوتنی ڕێکارەکان، کە ڕوقەیە لەو ماوەیەدا لە کەربەلاوە دەهات و دەچوو بۆ بەدواداچوونی دۆسیەکەی، وەزارەتی تەندروستی ڕەزامەندیی نەدا بە ناردنی بۆ هیندستان لە ڕێگەی بەشی گواستنەوەی پزیشکییەوە.\n\nتێچووی گەشتی چارەسەرەکەی بە نزیکەی ٢٠،٠٠٠ دۆلاری ئەمریکی مەزەندە دەکرێت، کە زۆر لە توانای خێزانەکەی زیاترە.\n\nداوا لە خەڵکی خێرخواز، پزیشکان، و دامەزراوە پزیشکی و مرۆییەکان دەکەین لە پاڵیدا بوەستن. هەر بەشدارییەک و هەر هاوبەشکردنێک لەوانەیە دەرگایەکی نوێی هیوای لێ بکاتەوە."
    },
    footer: { ar: "قصتها ووثائقها كاملة:", en: "Her full story and documents:", ckb: "چیرۆک و بەڵگەنامەکانی بە تەواوی:" }
  },

  /* ---------------- الأسئلة الشائعة / FAQ ---------------- */
  faq: [
    { q: { ar: "من هي رقية؟", en: "Who is Ruqayya?", ckb: "ڕوقەیە کێیە؟" },
      a: { ar: "رقية لؤي كاظم إبراهيم، شابة في الحادية والعشرين من عمرها من محافظة كربلاء المقدسة في العراق.",
           en: "Ruqayya Luay Kadhim Ibrahim is a 21-year-old young woman from Karbala, Iraq.", ckb: "ڕوقەیە لوئەی کازم ئیبراهیم، کچێکی گەنجی بیست و یەک ساڵانەیە لە پارێزگای کەربەلا لە عێراق." } },
    { q: { ar: "ما المرض الذي تواجهه؟", en: "What illness is she facing?", ckb: "ڕووبەڕووی چ نەخۆشییەک بووەتەوە؟" },
      a: { ar: "ساركوما العظام، وهو ورم عظمي خبيث أصاب منطقة الحوض والعجز بالقرب من الفقرات. عاد المرض بعد الجراحة والعلاج الكيميائي، بحسب فحص PET/CT بتاريخ 9 آب 2026.",
           en: "Osteosarcoma, a malignant bone tumour in the pelvis and sacrum, close to the spine. According to a PET/CT scan dated 9 August 2026, the disease returned after surgery and chemotherapy.", ckb: "ئۆستیۆسارکۆما، کە شێرپەنجەیەکی ئێسکە و ناوچەی حەوز و عەجزی نزیک بڕبڕەکانی پشتی گرتووە. بەپێی پشکنینی PET/CT لە ٩ی ئابی ٢٠٢٦، نەخۆشییەکە دوای نەشتەرگەری و چارەسەری کیمیایی گەڕاوەتەوە." } },
    { q: { ar: "ما العلاج الذي تحتاجه؟", en: "What treatment does she need?", ckb: "پێویستی بە چ چارەسەرێکە؟" },
      a: { ar: "بحسب تقرير مستشفى الإمام الحسن المجتبى التعليمي (21 أيلول 2026)، تحتاج إلى جراحة متقدمة خارج العراق. طلبت العائلة تسفيرها إلى الهند عبر قسم الإخلاء الطبي، لكن وزارة الصحة لم توافق على ذلك بحسب العائلة، ولم يُحدَّد بعد مستشفى ولا موعد للجراحة.",
           en: "According to the Imam Al-Hassan Al-Mujtaba Teaching Hospital report (21 September 2026), she needs advanced surgery outside Iraq. The family asked for her to be sent to India through the medical evacuation department, but according to the family the Ministry of Health did not approve it. No hospital or surgery date has been set yet.", ckb: "بەپێی ڕاپۆرتی نەخۆشخانەی فێرکاریی ئیمام حەسەن موجتەبا (٢١ی ئەیلوولی ٢٠٢٦)، پێویستی بە نەشتەرگەرییەکی پێشکەوتووە لە دەرەوەی عێراق. خێزانەکەی داوایان کرد لە ڕێگەی بەشی گواستنەوەی پزیشکییەوە بنێردرێتە هیندستان، بەڵام بەپێی قسەی خێزانەکە وەزارەتی تەندروستی ڕەزامەندیی نەدا، و هێشتا نە نەخۆشخانە و نە کاتی نەشتەرگەرییەکە دیاری نەکراون." } },
    { q: { ar: "هل يستقبل هذا الموقع الأموال؟", en: "Does this website collect money?", ckb: "ئایا ئەم ماڵپەڕە پارە وەردەگرێت؟" },
      a: { ar: "لا. لا يحتوي الموقع على بوابة دفع ولا يستلم أي مبلغ. التحويل يتم مباشرة إلى والد رقية عبر البيانات المنشورة في قسم التبرع والدعم.",
           en: "No. The site has no payment gateway and receives no money. Transfers go directly to Ruqayya's father using the details in the Donate & Support section.", ckb: "نەخێر. ماڵپەڕەکە دەروازەی پارەدانی تێدا نییە و هیچ پارەیەک وەرناگرێت. پارە ڕاستەوخۆ بۆ باوکی ڕوقەیە دەگوازرێتەوە لە ڕێگەی ئەو زانیارییانەی لە بەشی بەخشین و پشتگیریدا بڵاو کراونەتەوە." } },
    { q: { ar: "كيف أتحقق من صحة الحالة والبيانات؟", en: "How can I verify the case and the details?", ckb: "چۆن دڵنیا ببمەوە لە ڕاستیی حاڵەتەکە و زانیارییەکان؟" },
      a: { ar: "الوثائق الطبية منشورة كما هي في قسم التقارير الطبية. وقبل أي تحويل، تواصل مع والد رقية عبر واتساب وتأكد من اسم المستفيد.",
           en: "The medical documents are published unedited in the Medical Reports section. Before any transfer, contact Ruqayya's father on WhatsApp and confirm the beneficiary's name.", ckb: "بەڵگەنامە پزیشکییەکان وەک خۆیان لە بەشی ڕاپۆرتە پزیشکییەکاندا بڵاو کراونەتەوە. پێش هەر گواستنەوەیەک، لە ڕێگەی واتسئەپەوە پەیوەندی بە باوکی ڕوقەیەوە بکە و لە ناوی وەرگر دڵنیا ببەرەوە." } },
    { q: { ar: "من يدير هذا الموقع؟", en: "Who runs this website?", ckb: "کێ ئەم ماڵپەڕە بەڕێوە دەبات؟" },
      a: { ar: "يديره إبراهيم علي عبد الحسين الشويلي، وهو ليس من عائلة رقية، وإنما اختار أن يساعد في إيصال استغاثتها إلى الجهات الطبية والإنسانية.",
           en: "It is run by Ibrahim Ali Abdulhussein Al-Shuwaili. He is not a member of Ruqayya's family; he chose to help bring her appeal to medical and humanitarian organisations.", ckb: "ئیبراهیم عەلی عەبدولحوسێن شوەیلی بەڕێوەی دەبات. ئەو ئەندامی خێزانی ڕوقەیە نییە، بەڵکو هەڵیبژارد یارمەتی گەیاندنی هاوارەکەی بدات بە لایەنە پزیشکی و مرۆییەکان." } },
    { q: { ar: "كيف أساعد إن لم أستطع التبرع؟", en: "How can I help if I can't donate?", ckb: "چۆن یارمەتی بدەم ئەگەر نەتوانم ببەخشم؟" },
      a: { ar: "شارك الموقع أو نص الاستغاثة. قد تصل مشاركتك إلى طبيب أو مؤسسة أو شخص قادر على المساعدة.",
           en: "Share the website or the appeal. Your share may reach a doctor, an organisation or someone who is able to help.", ckb: "ماڵپەڕەکە یان دەقی هاوارەکە هاوبەش بکە. لەوانەیە هاوبەشکردنەکەت بگاتە پزیشکێک، دامەزراوەیەک، یان کەسێک کە دەتوانێت یارمەتی بدات." } },
    { q: { ar: "هل يمكن إدراج اسمي أو اسم مؤسستي ضمن المساهمين؟", en: "Can my name or my organisation be listed as a contributor?", ckb: "ئایا دەکرێت ناوی من یان ناوی دامەزراوەکەم لە نێو بەشداربووان دابنرێت؟" },
      a: { ar: "نعم، بعد التحقق من المساهمة وبإذن صريح منك. لا يُنشر أي اسم أو شعار دون موافقة صاحبه.",
           en: "Yes — once the contribution is verified and with your explicit permission. No name or logo is published without its owner's consent.", ckb: "بەڵێ، دوای پشتڕاستکردنەوەی بەشدارییەکە و بە ڕەزامەندیی ئاشکرای خۆت. هیچ ناو یان لۆگۆیەک بێ ڕەزامەندیی خاوەنەکەی بڵاو ناکرێتەوە." } }
  ]
};
