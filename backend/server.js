const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const socketio = require('socket.io');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: process.env.REACT_APP_API_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running! ✅' });
});

app.get('/api/users', (req, res) => {
  res.json({
    message: 'قائمة المستخدمين',
    users: [
      { id: 1, name: 'Ahmed', status: 'online' },
      { id: 2, name: 'Fatma', status: 'online' },
      { id: 3, name: 'Ali', status: 'offline' }
    ]
  });
});

app.post('/api/messages', (req, res) => {
  const { sender, receiver, text } = req.body;
  res.json({
    message: 'تم إرسال الرسالة بنجاح ✅',
    data: { sender, receiver, text, timestamp: new Date() }
  });
});

app.get('/api/messages/:userId', (req, res) => {
  const userId = req.params.userId;
  res.json({
    message: 'الرسائل',
    messages: [
      { id: 1, sender: 'Ahmed', text: 'مرحبا! كيفك؟', timestamp: new Date() },
      { id: 2, sender: 'You', text: 'بخير والحمد لله! وأنت؟', timestamp: new Date() }
    ]
  });
});

// Socket.io Connection
io.on('connection', (socket) => {
  console.log('👤 مستخدم جديد متصل:', socket.id);

  socket.on('send_message', (data) => {
    console.log('📨 رسالة جديدة:', data);
    io.emit('receive_message', data);
  });

  socket.on('user_typing', (data) => {
    socket.broadcast.emit('user_typing', data);
  });

  socket.on('disconnect', () => {
    console.log('👤 المستخدم غير متصل:', socket.id);
  });
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'حدث خطأ في الخادم!' });
});

// Start Server
server.listen(PORT, () => {
  console.log(`\n🚀 الخادم يعمل على المنفذ: ${PORT}`);
  console.log(`📡 تم تفعيل WebSocket`);
  console.log(`💬 تطبيق B-Chat جاهز!\n`);
});
