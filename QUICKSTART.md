# 🚀 البدء السريع

## الخطوة 1: التثبيت

```bash
git clone https://github.com/01145463698/b-chat.git
cd b-chat
```

## الخطوة 2: تثبيت المكتبات

```bash
# الخادم
cd backend
npm install

# الواجهة (نافذة جديدة)
cd frontend
npm install
```

## الخطوة 3: إعداد البيئة

### في مجلد backend:
```bash
cp .env.example .env
```

ثم عدّل `.env` بمفاتيحك الخاصة

### في مجلد frontend:
```bash
cp .env.example .env
```

## الخطوة 4: التشغيل

### الخادم (Backend):
```bash
cd backend
npm run dev
```

### الواجهة (Frontend) - نافذة جديدة:
```bash
cd frontend
npm start
```

## ✅ تم!

افتح المتصفح على: http://localhost:3000

---

### استكشاف الأخطاء

**المشكلة:** لا يعمل npm install
**الحل:** تأكد من تثبيت Node.js

**المشكلة:** خطأ في الاتصال بقاعدة البيانات
**الحل:** تأكد من أن MongoDB يعمل أو استخدم خدمة سحابية

**المشكلة:** المنفذ 5000 قيد الاستخدام
**الحل:** غيّر المنفذ في ملف .env