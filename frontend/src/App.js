import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const socket = io(API_URL);

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // جلب المستخدمين عند تحميل التطبيق
  useEffect(() => {
    fetchUsers();
  }, []);

  // الاستماع للرسائل الجديدة
  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages(prev => [...prev, data]);
    });

    return () => {
      socket.off('receive_message');
    };
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/users`);
      setUsers(response.data.users);
    } catch (error) {
      console.error('خطأ في جلب المستخدمين:', error);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() && selectedUser) {
      const newMessage = {
        sender: 'You',
        receiver: selectedUser.name,
        text: inputValue,
        timestamp: new Date()
      };
      socket.emit('send_message', newMessage);
      setInputValue('');
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>💬 B-Chat</h1>
        <p>تطبيق التواصل الفوري</p>
      </header>

      <div className="chat-container">
        {/* قائمة المستخدمين */}
        <aside className="users-sidebar">
          <h2>المستخدمون</h2>
          <ul className="users-list">
            {users.map(user => (
              <li
                key={user.id}
                className={`user-item ${selectedUser?.id === user.id ? 'active' : ''}`}
                onClick={() => setSelectedUser(user)}
              >
                <span className={`status ${user.status}`}></span>
                <span>{user.name}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* منطقة الرسائل */}
        <main className="chat-main">
          {selectedUser ? (
            <>
              <div className="chat-header">
                <h2>{selectedUser.name}</h2>
                <span className={`status-badge ${selectedUser.status}`}>
                  {selectedUser.status === 'online' ? '🟢 متصل' : '⚫ غير متصل'}
                </span>
              </div>

              <div className="messages-container">
                {messages.length === 0 ? (
                  <p className="no-messages">لا توجد رسائل بعد. ابدأ المحادثة! 👋</p>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}
                    >
                      <p className="message-text">{msg.text}</p>
                      <span className="message-time">
                        {new Date(msg.timestamp).toLocaleTimeString('ar-EG')}
                      </span>
                    </div>
                  ))
                )}
              </div>

              <form className="message-form" onSubmit={handleSendMessage}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="اكتب رسالتك هنا..."
                  className="message-input"
                />
                <button type="submit" className="send-btn">📤 إرسال</button>
              </form>
            </>
          ) : (
            <div className="no-user-selected">
              <p>اختر مستخدماً لبدء المحادثة 👋</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
