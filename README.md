# موقع رقية — Ruqayya humanitarian website

موقع ثابت (HTML وCSS وJavaScript) بلا خادم ولا قاعدة بيانات ولا خدمات مدفوعة. يعمل على Cloudflare Pages
(مكان استضافته الحالي `roqayya.pages.dev`) وعلى GitHub Pages أو أي استضافة ثابتة.

A static site (HTML/CSS/JS): no server, no database, no paid services. Runs on Cloudflare Pages
(current host), GitHub Pages or any static host.

## التشغيل محلياً / Run locally

```bash
python3 -m http.server 8765
```

ثم افتح `http://localhost:8765` في المتصفح. للنسخة الإنجليزية: `http://localhost:8765/?lang=en`.

Then open `http://localhost:8765`. For English, add `?lang=en`.

## النشر / Deploy

الكود في هذا المستودع على GitHub، ومشروع Cloudflare Pages مربوط به (`roqayya.pages.dev`).
كل دفع (push) إلى الفرع `main` يُنشر تلقائياً. والدفع إلى أي فرع آخر يولّد رابط معاينة منفصلاً
دون المساس بالموقع المنشور.

The code lives on GitHub and Cloudflare Pages is connected to this repository. Pushing to `main`
deploys automatically; pushing to any other branch creates a separate preview URL.

يعمل أيضاً على GitHub Pages دون تعديل (الملف `.nojekyll` موجود). الملف `_headers` خاص بـ Cloudflare،
ويتجاهله GitHub Pages دون ضرر.

## هيكل المشروع / Structure

```
site/
├── index.html            الصفحة والنص العربي الأساسي (لمحركات البحث)
├── assets/js/content.js  ← كل بيانات الموقع باللغتين: هذا الملف الوحيد الذي تحتاج إلى تعديله
├── assets/js/i18n.js     الترجمة الإنجليزية لنصوص الواجهة
├── assets/js/app.js      المنطق: اللغة، والوثائق، والعارض، والمشاركة، والنموذج
├── assets/css/style.css  الهوية البصرية
├── assets/fonts/         خطوط مستضافة محلياً (IBM Plex Sans Arabic، Noto Naskh Arabic، Playfair Display)
├── assets/img/           صورة رقية، والوثائق، وصورة المشاركة og.png، والأيقونات
├── _headers  robots.txt  sitemap.xml
```

## تحديث المحتوى / Editing content

افتح `assets/js/content.js`. كل نص مكتوب بالشكل `{ ar: "...", en: "..." }`.

| ما تريد | أين |
|---|---|
| نشر تحديث جديد | `updates` (انسخ عنصراً وعدّل التاريخ والعنوان والنص؛ `photo` اختياري) |
| إضافة وثيقة | ضع الصورة في `assets/img/docs/` (ونسخة مصغرة باسم `-thumb.jpg` اختيارية)، ثم أضف عنصراً في `documents` |
| تصنيف الوثيقة | `cat`: `diagnosis` · `imaging` · `lab` · `genetic` · `opinion` · `treatment` · `official` |
| مرحلة في الرحلة العلاجية | `journey` (`status`: `done` موثّق · `pending` قيد الانتظار · `next` لم يُحسم) |
| إضافة مساهم | `contributors`، **بعد التحقق وبإذن صاحبه فقط** |
| وسائل التبرع | `donation` (اجعل `enabled: false` لإظهار إشعار «قيد التحقق» بدلاً منها) |
| إخفاء قسم كامل | `sections` (اجعل قيمته `false`) |
| نص الاستغاثة | `appeal` |
| الأسئلة الشائعة | `faq` |

**قاعدة ثابتة:** لا تُضِف معلومة طبية أو مالية أو اسم داعم قبل التحقق منه وموافقة صاحبه.

## نظام الإدارة مستقبلاً / Future admin

لا توجد لوحة إدارة في الموقع، عن قصد: الموقع ثابت، ولوحة لا تحفظ البيانات ستكون مضلّلة.
البيانات كلها في `content.js` ببنية واضحة. لربط نظام إدارة حقيقي لاحقاً:

1. انقل `window.SITE` إلى ملف `content.json` بالبنية نفسها، واجعل `app.js` يقرؤه عبر `fetch`.
2. اربط المستودع بنظام إدارة يعمل مع Git، مثل **Decap CMS** (مجاني، ويعمل مع Cloudflare Pages وGitHub)،
   وعرّف فيه المجموعات نفسها: `updates` و`documents` و`journey` و`contributors` و`donation` و`sections`.
3. كل حفظ في اللوحة يصبح commit، وتعيد Cloudflare Pages النشر تلقائياً.

The site intentionally has no admin dashboard (a static dashboard could not save anything).
All data lives in one structured file, so a Git-based CMS such as Decap CMS can be connected later
without redesigning anything.

## ما يتطلب خدمة خارجية / Needs an external service

- **نموذج التواصل:** لا يوجد خادم، لذلك يفتح النموذج واتساب برسالة جاهزة، ولا يدّعي أنه أرسل شيئاً.
  لاستقبال الرسائل على الموقع نفسه تلزم خدمة نماذج (مثل Formspree أو Cloudflare Workers).
- **أرقام الزيارات أو المشاركات:** غير مفعّلة. تتطلب أداة إحصاء.
