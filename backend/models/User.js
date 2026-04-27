// User Model
class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.status = 'offline';
    this.createdAt = new Date();
  }

  setStatus(status) {
    this.status = status;
  }

  getProfile() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      status: this.status,
      createdAt: this.createdAt
    };
  }
}

module.exports = User;
