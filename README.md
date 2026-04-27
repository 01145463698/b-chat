# B-Chat 💬

تطبيق تواصل فوري مع ميزات متقدمة

## ✨ المميزات

- 👥 إنشاء حسابات وتسجيل دخول آمن
- 💬 إرسال رسائل فورية
- 👤 ملفات شخصية للمستخدمين
- 🔐 تشفير آمن للبيانات
- 📱 واجهة سهلة وجميلة
- 🌙 دعم الوضع الليلي

## 🚀 البدء السريع

### المتطلبات
- Node.js v14+
- npm أو yarn
- MongoDB (اختياري للبيانات الحقيقية)

### التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/01145463698/b-chat.git
cd b-chat

# تثبيت الخادم
cd backend
npm install

# تثبيت الواجهة
cd ../frontend
npm install
```

### الإعدادات

#### الخادم (Backend):
```bash
cd backend
cp .env.example .env
# عدّل .env بمعلومات قاعدة البيانات
npm run dev
```

#### الواجهة (Frontend):
```bash
cd frontend
npm start
```

الآن التطبيق يعمل على:
- الخادم: http://localhost:5000
- الواجهة: http://localhost:3000

## 📁 هيكل المشروع

```
b-chat/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Message.js
│   │   └── Conversation.js
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   └── package.json
└── README.md
```

## 🔧 الأوامر المتاحة

### الخادم:
```bash
npm run dev      # تشغيل الخادم في وضع التطوير
npm start        # تشغيل الخادم في الإنتاج
npm test         # تشغيل الاختبارات
```

### الواجهة:
```bash
npm start        # تشغيل التطبيق
npm build        # بناء للإنتاج
npm test         # تشغيل الاختبارات
```

## 📚 التوثيق

اقرأ [QUICKSTART.md](QUICKSTART.md) للبدء السريع

اقرأ [CONTRIBUTING.md](CONTRIBUTING.md) لتعرف كيف تساهم

## 📝 الترخيص

هذا المشروع مرخص تحت [MIT License](LICENSE)

## 👨‍💻 المطور

**Baher** - [@01145463698](https://github.com/01145463698)

## 💡 أفكار للمستقبل

- [ ] مكالمات صوتية وفيديو
- [ ] مجموعات ودردشات جماعية
- [ ] مشاركة الملفات والصور
- [ ] الإشعارات المباشرة
- [ ] البحث عن الرسائل
- [ ] التشفير من طرف إلى طرف

---

**هل أعجبك المشروع؟** ⭐ أعط نجمة!