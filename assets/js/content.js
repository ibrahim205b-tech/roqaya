/* ==================================================================
   محتوى موقع رقية — ملف البيانات الوحيد الذي تحتاج إلى تعديله
   Ruqayya website content — the only file you need to edit.

   • كل نص يُكتب باللغتين: { ar: "...", en: "..." }
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
    alt: { ar: "رقية", en: "Ruqayya" }
  },

  /* ---------------- الوثائق الطبية / Medical documents ----------------
     cat: diagnosis | imaging | lab | genetic | opinion | treatment | official
     img: مسار الصورة المنشورة. اتركه "" لإظهار «تُنشر بعد الموافقة».
     download: true فقط لما وافقت العائلة على تحميله.               */
  documents: [
    { cat: "diagnosis", date: "2026-08-09",
      type: { ar: "تقرير فحص PET/CT · الصفحة 1", en: "PET/CT report · page 1" },
      title: { ar: "التشخيص والتاريخ المرضي", en: "Diagnosis and clinical history" },
      note: { ar: "يذكر التشخيص: ساركوما العظام من النمط الأرومي الغضروفي، والجراحة السابقة، وإحدى عشرة دورة من العلاج الكيميائي.",
              en: "States the diagnosis — chondroblastic osteosarcoma — the previous surgery, and eleven cycles of chemotherapy." },
      issuer: { ar: "مركز اللؤلؤة للبت سكان والمفراس الحلزوني، كربلاء", en: "Al-Lo'loaa Center for PET/CT Scan, Karbala" },
      img: "assets/img/docs/pet-1.jpg", download: false },
    { cat: "imaging", date: "2026-08-09",
      type: { ar: "تقرير فحص PET/CT · الصفحة 2", en: "PET/CT report · page 2" },
      title: { ar: "نتائج الحوض والفقرات", en: "Pelvis and spine findings" },
      note: { ar: "زيادة في حجم الكتلة ونشاطها قرب الفقرات القطنية (L3–L5)، مع تأثّر أجزاء من الفقرتين الرابعة والخامسة.",
              en: "Increase in the size and activity of the mass beside the lumbar spine (L3–L5), affecting parts of the L4 and L5 vertebrae." },
      issuer: { ar: "مركز اللؤلؤة للبت سكان والمفراس الحلزوني، كربلاء", en: "Al-Lo'loaa Center for PET/CT Scan, Karbala" },
      img: "assets/img/docs/pet-2.jpg", download: false },
    { cat: "imaging", date: "2026-08-09",
      type: { ar: "تقرير فحص PET/CT · الخلاصة", en: "PET/CT report · impression" },
      title: { ar: "خلاصة الفحص: المرض في حالة تقدّم", en: "Impression: progressive disease" },
      note: { ar: "تنص الخلاصة على أن الصورة العامة تشير إلى تقدّم المرض مقارنة بالفحص السابق.",
              en: "The impression states that the overall picture indicates progressive disease compared with the previous scan." },
      issuer: { ar: "مركز اللؤلؤة للبت سكان والمفراس الحلزوني، كربلاء", en: "Al-Lo'loaa Center for PET/CT Scan, Karbala" },
      img: "assets/img/docs/pet-3.jpg", download: true },
    { cat: "imaging", date: "2026-08-09",
      type: { ar: "صور الفحص", en: "Scan images" },
      title: { ar: "صور المقاطع: منطقة الحوض", en: "Cross-sections: pelvis" },
      note: { ar: "مقارنة بين الفحص السابق والفحص الحالي.", en: "Previous study compared with the current study." },
      issuer: { ar: "مركز اللؤلؤة للبت سكان والمفراس الحلزوني، كربلاء", en: "Al-Lo'loaa Center for PET/CT Scan, Karbala" },
      img: "assets/img/docs/pet-5.jpg", download: false },
    { cat: "imaging", date: "2026-08-09",
      type: { ar: "صور الفحص", en: "Scan images" },
      title: { ar: "صور المقاطع: مقاطع إضافية (1)", en: "Cross-sections: additional views (1)" },
      note: { ar: "مقارنة بين الفحص السابق والفحص الحالي.", en: "Previous study compared with the current study." },
      issuer: { ar: "مركز اللؤلؤة للبت سكان والمفراس الحلزوني، كربلاء", en: "Al-Lo'loaa Center for PET/CT Scan, Karbala" },
      img: "assets/img/docs/pet-6.jpg", download: false },
    { cat: "imaging", date: "2026-08-09",
      type: { ar: "صور الفحص", en: "Scan images" },
      title: { ar: "صور المقاطع: مقاطع إضافية (2)", en: "Cross-sections: additional views (2)" },
      note: { ar: "مقارنة بين الفحص السابق والفحص الحالي.", en: "Previous study compared with the current study." },
      issuer: { ar: "مركز اللؤلؤة للبت سكان والمفراس الحلزوني، كربلاء", en: "Al-Lo'loaa Center for PET/CT Scan, Karbala" },
      img: "assets/img/docs/pet-7.jpg", download: false },
    { cat: "treatment", date: "2026-09-21",
      type: { ar: "تقرير طبي رسمي", en: "Official medical report" },
      title: { ar: "تقرير مستشفى الإمام الحسن المجتبى التعليمي", en: "Imam Al-Hassan Al-Mujtaba Teaching Hospital report" },
      note: { ar: "ينص على أنها مصابة بسرطان عظم راجع، وتحت العلاج الكيميائي، وبحاجة إلى جراحة متقدمة خارج العراق.",
              en: "States that she has recurrent bone cancer, is receiving chemotherapy, and needs advanced surgery outside Iraq." },
      issuer: { ar: "دائرة صحة كربلاء المقدسة", en: "Karbala Health Directorate" },
      img: "assets/img/docs/report-mujtaba.jpg", download: true },
    { cat: "opinion", date: "",
      type: { ar: "وثيقة طبية", en: "Medical document" },
      title: { ar: "وثيقة عدم توفر العملية داخل العراق", en: "Statement that the operation is unavailable in Iraq" },
      note: { ar: "صادرة عن مستشفى وارث الدولي لعلاج الأورام. تُنشر صورتها بعد موافقة العائلة.",
              en: "Issued by Warith International Cancer Hospital. The image will be published once the family approves." },
      issuer: { ar: "مستشفى وارث الدولي لعلاج الأورام", en: "Warith International Cancer Hospital" },
      img: "", download: false },
    { cat: "official", date: "",
      type: { ar: "مراسلة رسمية", en: "Official letter" },
      title: { ar: "مناشدة عاجلة إلى السيد وزير الصحة", en: "Urgent appeal to the Minister of Health" },
      note: { ar: "تطلب الإسراع في تقييم ملفها وإحالته إلى لجنة الإخلاء الطبي، وإرسالها للعلاج خارج العراق، وتحديداً إلى الهند، إذا تعذّر توفير العلاج داخل البلاد.",
              en: "Asks for her file to be assessed quickly and referred to the medical evacuation committee, so she can be treated abroad — specifically in India — if the treatment cannot be provided in Iraq." },
      issuer: { ar: "والد رقية: لؤي كاظم إبراهيم", en: "Ruqayya's father, Luay Kadhim Ibrahim" },
      img: "assets/img/docs/letter-minister.jpg", download: true }
  ],

  /* ---------------- الرحلة العلاجية / Treatment journey ----------------
     status: "done" موثّق | "pending" قيد الانتظار | "next" قرار قادم
     date: اكتبه فقط إذا كان موثّقاً. */
  journey: [
    { status: "done", date: "",
      when: { ar: "التشخيص", en: "Diagnosis" },
      title: { ar: "ساركوما العظام في الحوض والعجز", en: "Osteosarcoma of the pelvis and sacrum" },
      text: { ar: "شُخّصت رقية بساركوما العظام من النمط الأرومي الغضروفي في منطقة الحوض والعجز.",
              en: "Ruqayya was diagnosed with chondroblastic osteosarcoma in the pelvis and sacrum." },
      source: { ar: "تقرير PET/CT، الصفحة 1", en: "PET/CT report, page 1" } },
    { status: "done", date: "",
      when: { ar: "العلاج الأول", en: "First treatment" },
      title: { ar: "جراحة ثم علاج كيميائي", en: "Surgery, then chemotherapy" },
      text: { ar: "خضعت لاستئصال جراحي لجناح العجز الأيسر والجزء الخلفي من عظم الحرقفة الأيسر، ثم تلقّت إحدى عشرة دورة من العلاج الكيميائي.",
              en: "She underwent surgical removal of the left sacral ala and the back part of the left iliac bone, followed by eleven cycles of chemotherapy." },
      source: { ar: "تقرير PET/CT، الصفحة 1", en: "PET/CT report, page 1" } },
    { status: "done", date: "2026-02-27",
      when: { ar: "", en: "" },
      title: { ar: "فحص PET/CT سابق", en: "Earlier PET/CT scan" },
      text: { ar: "أُجري في مركز آخر، واعتُمد أساساً للمقارنة في الفحص اللاحق.",
              en: "Performed at another centre and used as the baseline for the later comparison." },
      source: { ar: "تقرير PET/CT، الصفحة 1", en: "PET/CT report, page 1" } },
    { status: "done", date: "2026-08-09",
      when: { ar: "", en: "" },
      title: { ar: "الفحص يُظهر تقدّم المرض", en: "Scan shows the disease is progressing" },
      text: { ar: "أظهر فحص PET/CT زيادة في حجم الكتلة ونشاطها قرب الفقرات القطنية، وخلص إلى أن المرض في حالة تقدّم.",
              en: "A PET/CT scan showed growth and increased activity of the mass beside the lumbar spine, and concluded that the disease is progressing." },
      source: { ar: "تقرير PET/CT، الخلاصة", en: "PET/CT report, impression" } },
    { status: "done", date: "2026-09-21",
      when: { ar: "", en: "" },
      title: { ar: "تقرير طبي: جراحة متقدمة خارج العراق", en: "Medical report: advanced surgery abroad" },
      text: { ar: "أكّد تقرير مستشفى الإمام الحسن المجتبى التعليمي أنها مصابة بسرطان عظم راجع، وتحت العلاج الكيميائي، وبحاجة إلى جراحة متقدمة خارج العراق.",
              en: "A report from Imam Al-Hassan Al-Mujtaba Teaching Hospital confirmed recurrent bone cancer, ongoing chemotherapy, and the need for advanced surgery outside Iraq." },
      source: { ar: "تقرير طبي رسمي", en: "Official medical report" } },
    { status: "done", date: "",
      when: { ar: "بعد التقرير", en: "After the report" },
      title: { ar: "مناشدة إلى وزير الصحة", en: "Appeal to the Minister of Health" },
      text: { ar: "رفعت العائلة مناشدة لإحالة ملفها إلى لجنة الإخلاء الطبي وإرسالها للعلاج خارج العراق، وتحديداً إلى الهند، إذا تعذّر العلاج داخل البلاد.",
              en: "The family appealed for her file to be referred to the medical evacuation committee and for her to be treated abroad — specifically in India — if treatment is not available in Iraq." },
      source: { ar: "نص المناشدة", en: "Text of the appeal" } },
    { status: "pending", date: "",
      when: { ar: "الآن", en: "Now" },
      title: { ar: "ملف مكتمل بانتظار الإحالة", en: "Complete file, awaiting referral" },
      text: { ar: "ملفها الطبي مكتمل، وهي تنتظر استكمال إجراءات الإحالة العلاجية.",
              en: "Her medical file is complete and she is waiting for the treatment referral to be finalised." },
      source: { ar: "", en: "" } },
    { status: "next", date: "",
      when: { ar: "القرار القادم", en: "Next decision" },
      title: { ar: "تحديد جهة العلاج وموعده", en: "Choosing where and when she is treated" },
      text: { ar: "لم يُحدَّد بعد المستشفى ولا موعد الجراحة. يُنشر أي قرار هنا فور تأكيده.",
              en: "Neither the hospital nor the date of surgery has been decided yet. Any decision will be posted here once it is confirmed." },
      source: { ar: "", en: "" } }
  ],

  /* ---------------- التحديثات / Updates (الأحدث أولاً) ---------------- */
  updates: [
    { date: "2026-11-24", photo: "",
      title: { ar: "إطلاق النسخة الجديدة من منصة رقية", en: "The new Ruqayya platform is live" },
      summary: { ar: "صار الموقع متاحاً بالعربية والإنجليزية، مع أرشيف منظّم للوثائق الطبية ومسار زمني للرحلة العلاجية.",
                 en: "The site is now available in Arabic and English, with an organised archive of medical documents and a timeline of her treatment journey." },
      body: { ar: "أطلقنا النسخة الجديدة من هذه المنصة لتصل قصة رقية إلى عدد أكبر من الناس داخل العراق وخارجه.\n\nتضم المنصة الآن قصتها كاملة، والوثائق الطبية مصنّفة حسب نوعها وتاريخها، ومساراً زمنياً يفصل ما هو موثّق عمّا لا يزال بانتظار القرار، إضافة إلى نص الاستغاثة باللغتين جاهزاً للنسخ والمشاركة والطباعة.\n\nستُنشر هنا كل مستجدات حالتها فور التحقق منها.",
              en: "We have launched the new version of this platform so that Ruqayya's story can reach more people, in Iraq and beyond.\n\nIt now brings together her full story, her medical documents sorted by type and date, and a timeline that separates what is documented from what is still awaiting a decision. Her appeal is available in both languages, ready to copy, share or print.\n\nEvery new development in her case will be posted here once it has been verified." } },
    { date: "2026-09-21", photo: "",
      title: { ar: "تقرير طبي يؤكد حاجتها إلى جراحة خارج العراق", en: "Medical report confirms she needs surgery outside Iraq" },
      summary: { ar: "صدر تقرير مستشفى الإمام الحسن المجتبى التعليمي في كربلاء بشأن حالتها.",
                 en: "Imam Al-Hassan Al-Mujtaba Teaching Hospital in Karbala issued a report on her condition." },
      body: { ar: "أصدر مستشفى الإمام الحسن المجتبى التعليمي في كربلاء تقريراً طبياً بتاريخ 21 أيلول 2026، ينص على أن رقية مصابة بسرطان عظم راجع، وأنها تحت العلاج الكيميائي، وبحاجة إلى جراحة متقدمة خارج العراق.\n\nالتقرير منشور كاملاً في قسم التقارير الطبية.",
              en: "On 21 September 2026, Imam Al-Hassan Al-Mujtaba Teaching Hospital in Karbala issued a medical report stating that Ruqayya has recurrent bone cancer, is receiving chemotherapy, and needs advanced surgery outside Iraq.\n\nThe full report is published in the Medical Reports section." },
      doc: "assets/img/docs/report-mujtaba.jpg" },
    { date: "2026-08-09", photo: "",
      title: { ar: "فحص PET/CT يُظهر تقدّم المرض", en: "PET/CT scan shows the disease is progressing" },
      summary: { ar: "أظهر الفحص زيادة في حجم الكتلة قرب الفقرات القطنية.",
                 en: "The scan showed the mass beside the lumbar spine had grown." },
      body: { ar: "أُجري لرقية فحص PET/CT في مركز اللؤلؤة في كربلاء بتاريخ 9 آب 2026، وقورن بفحص سابق أُجري في 27 شباط 2026.\n\nأظهر الفحص زيادة في حجم الكتلة ونشاطها قرب الفقرات القطنية، مع تأثّر أجزاء من الفقرتين الرابعة والخامسة، وخلص إلى أن الصورة العامة تشير إلى تقدّم المرض.\n\nصفحات التقرير منشورة في قسم التقارير الطبية.",
              en: "Ruqayya had a PET/CT scan at the Al-Lo'loaa Center in Karbala on 9 August 2026, compared with an earlier scan from 27 February 2026.\n\nThe scan showed the mass beside the lumbar spine had grown and become more active, affecting parts of the L4 and L5 vertebrae. Its impression was that the overall picture indicates progressive disease.\n\nThe report pages are published in the Medical Reports section." },
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
      { label: { ar: "رقم المحفظة (ماستر كارد)", en: "Wallet number (Mastercard)" }, value: "910192624815", copy: true },
      { label: { ar: "رقم الحساب المصرفي (مصرف الرافدين)", en: "Bank account (Rafidain Bank)" }, value: "3673129643", copy: true }
    ],
    holder: { ar: "لؤي كاظم إبراهيم", en: "Luay Kadhim Ibrahim" },
    receiver: { ar: "والد رقية", en: "Ruqayya's father" },
    whatsapp: "9647801513941"
  },

  /* ---------------- جهات التواصل / Contacts ---------------- */
  contacts: [
    { key: "father",
      name: { ar: "لؤي كاظم إبراهيم (أبو فاطمة)", en: "Luay Kadhim Ibrahim (Abu Fatima)" },
      role: { ar: "والد رقية — للاستفسار عن الحالة والتحقق من المعلومات", en: "Ruqayya's father — for questions about her case and to verify information" },
      phone: "+964 780 151 3941", whatsapp: "9647801513941", email: "" },
    { key: "advocate",
      name: { ar: "إبراهيم علي عبد الحسين الشويلي", en: "Ibrahim Ali Abdulhussein Al-Shuwaili" },
      role: { ar: "ساعٍ لإيصال الحالة إلى الجهات الطبية والإنسانية", en: "Advocate connecting her case with medical and humanitarian bodies" },
      phone: "+964 774 652 0005", whatsapp: "9647746520005", email: "" }
  ],

  /* ---------------- الأحاديث (لا تُضِف حديثاً قبل التحقق من صحته ومصدره) ---------------- */
  hadiths: [
    { text: { ar: "واللهُ في عونِ العبدِ ما كان العبدُ في عونِ أخيه", en: "God helps His servant as long as the servant helps his brother." },
      source: { ar: "صحيح مسلم", en: "Sahih Muslim" } },
    { text: { ar: "من نفَّس عن مؤمنٍ كُربةً من كُرَبِ الدنيا نفَّس اللهُ عنه كُربةً من كُرَبِ يوم القيامة", en: "Whoever relieves a believer of one of the hardships of this world, God will relieve him of one of the hardships of the Day of Resurrection." },
      source: { ar: "صحيح مسلم", en: "Sahih Muslim" } }
  ],

  /* ---------------- نص الاستغاثة / Appeal text (فقرات مفصولة بسطر فارغ) ---------------- */
  appeal: {
    title: { ar: "استغاثة إنسانية لعلاج رقية", en: "A humanitarian appeal for Ruqayya's treatment" },
    body: {
      ar: "رقية لؤي كاظم إبراهيم، شابة في الحادية والعشرين من عمرها من محافظة كربلاء المقدسة، تواجه انتكاساً في مرض ساركوما العظام الذي أصاب منطقة الحوض والعجز بالقرب من الفقرات.\n\nخضعت لعملية جراحية وإحدى عشرة دورة من العلاج الكيميائي، ثم أظهر فحص PET/CT في 9 آب 2026 أن المرض عاد وتقدّم. وفي 21 أيلول 2026 أكّد تقرير مستشفى الإمام الحسن المجتبى التعليمي حاجتها إلى جراحة متقدمة خارج العراق.\n\nتُقدَّر تكاليف رحلتها العلاجية بنحو 20,000 دولار أمريكي، وهو مبلغ يفوق قدرة عائلتها.\n\nنناشد أصحاب الأيادي البيضاء، والأطباء، والمؤسسات الطبية والإنسانية، الوقوف إلى جانبها. كل مساهمة، وكل مشاركة، قد تفتح أمامها باب أمل جديد.",
      en: "Ruqayya Luay Kadhim Ibrahim is a 21-year-old young woman from Karbala, Iraq. She is facing a relapse of osteosarcoma, a bone cancer affecting her pelvis and sacrum, close to the spine.\n\nShe underwent surgery and eleven cycles of chemotherapy, but a PET/CT scan on 9 August 2026 showed that the disease had returned and was progressing. On 21 September 2026, a report from Imam Al-Hassan Al-Mujtaba Teaching Hospital confirmed that she needs advanced surgery outside Iraq.\n\nThe cost of her treatment journey is estimated at around US$20,000 — far beyond what her family can afford.\n\nWe appeal to generous people, doctors, and medical and humanitarian organisations to stand with her. Every contribution, and every share, could open a new door of hope for her."
    },
    footer: { ar: "قصتها ووثائقها كاملة:", en: "Her full story and documents:" }
  },

  /* ---------------- الأسئلة الشائعة / FAQ ---------------- */
  faq: [
    { q: { ar: "من هي رقية؟", en: "Who is Ruqayya?" },
      a: { ar: "رقية لؤي كاظم إبراهيم، شابة في الحادية والعشرين من عمرها من محافظة كربلاء المقدسة في العراق.",
           en: "Ruqayya Luay Kadhim Ibrahim is a 21-year-old young woman from Karbala, Iraq." } },
    { q: { ar: "ما المرض الذي تواجهه؟", en: "What illness is she facing?" },
      a: { ar: "ساركوما العظام، وهو ورم عظمي خبيث أصاب منطقة الحوض والعجز بالقرب من الفقرات. عاد المرض بعد الجراحة والعلاج الكيميائي، بحسب فحص PET/CT بتاريخ 9 آب 2026.",
           en: "Osteosarcoma, a malignant bone tumour in the pelvis and sacrum, close to the spine. According to a PET/CT scan dated 9 August 2026, the disease returned after surgery and chemotherapy." } },
    { q: { ar: "ما العلاج الذي تحتاجه؟", en: "What treatment does she need?" },
      a: { ar: "بحسب تقرير مستشفى الإمام الحسن المجتبى التعليمي (21 أيلول 2026)، تحتاج إلى جراحة متقدمة خارج العراق. اقترحت العائلة الهند وجهةً للعلاج، لكن المستشفى والموعد لم يُحدَّدا بعد.",
           en: "According to the Imam Al-Hassan Al-Mujtaba Teaching Hospital report (21 September 2026), she needs advanced surgery outside Iraq. The family has proposed India, but no hospital or date has been decided yet." } },
    { q: { ar: "هل يستقبل هذا الموقع الأموال؟", en: "Does this website collect money?" },
      a: { ar: "لا. لا يحتوي الموقع على بوابة دفع ولا يستلم أي مبلغ. التحويل يتم مباشرة إلى والد رقية عبر البيانات المنشورة في قسم التبرع والدعم.",
           en: "No. The site has no payment gateway and receives no money. Transfers go directly to Ruqayya's father using the details in the Donate & Support section." } },
    { q: { ar: "كيف أتحقق من صحة الحالة والبيانات؟", en: "How can I verify the case and the details?" },
      a: { ar: "الوثائق الطبية منشورة كما هي في قسم التقارير الطبية. وقبل أي تحويل، تواصل مع والد رقية عبر واتساب وتأكد من اسم المستفيد.",
           en: "The medical documents are published unedited in the Medical Reports section. Before any transfer, contact Ruqayya's father on WhatsApp and confirm the beneficiary's name." } },
    { q: { ar: "من يدير هذا الموقع؟", en: "Who runs this website?" },
      a: { ar: "يديره إبراهيم علي عبد الحسين الشويلي، وهو ليس من عائلة رقية، وإنما اختار أن يساعد في إيصال استغاثتها إلى الجهات الطبية والإنسانية.",
           en: "It is run by Ibrahim Ali Abdulhussein Al-Shuwaili. He is not a member of Ruqayya's family; he chose to help bring her appeal to medical and humanitarian organisations." } },
    { q: { ar: "كيف أساعد إن لم أستطع التبرع؟", en: "How can I help if I can't donate?" },
      a: { ar: "شارك الموقع أو نص الاستغاثة. قد تصل مشاركتك إلى طبيب أو مؤسسة أو شخص قادر على المساعدة.",
           en: "Share the website or the appeal. Your share may reach a doctor, an organisation or someone who is able to help." } },
    { q: { ar: "هل يمكن إدراج اسمي أو اسم مؤسستي ضمن المساهمين؟", en: "Can my name or my organisation be listed as a contributor?" },
      a: { ar: "نعم، بعد التحقق من المساهمة وبإذن صريح منك. لا يُنشر أي اسم أو شعار دون موافقة صاحبه.",
           en: "Yes — once the contribution is verified and with your explicit permission. No name or logo is published without its owner's consent." } }
  ]
};
