// Conversation Model
class Conversation {
  constructor(id, participants) {
    this.id = id;
    this.participants = participants;
    this.messages = [];
    this.createdAt = new Date();
    this.lastMessage = null;
  }

  addMessage(message) {
    this.messages.push(message);
    this.lastMessage = message;
  }

  getMessages() {
    return this.messages;
  }

  getDetails() {
    return {
      id: this.id,
      participants: this.participants,
      messageCount: this.messages.length,
      lastMessage: this.lastMessage,
      createdAt: this.createdAt
    };
  }
}

module.exports = Conversation;
