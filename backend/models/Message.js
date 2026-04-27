// Message Model
class Message {
  constructor(id, sender, receiver, text) {
    this.id = id;
    this.sender = sender;
    this.receiver = receiver;
    this.text = text;
    this.timestamp = new Date();
    this.read = false;
  }

  markAsRead() {
    this.read = true;
  }

  getDetails() {
    return {
      id: this.id,
      sender: this.sender,
      receiver: this.receiver,
      text: this.text,
      timestamp: this.timestamp,
      read: this.read
    };
  }
}

module.exports = Message;
