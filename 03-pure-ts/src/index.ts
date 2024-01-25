console.log('hello ts');

class User {
  name: string;

  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const jake = new User('Jake', 'jake@j.com');
