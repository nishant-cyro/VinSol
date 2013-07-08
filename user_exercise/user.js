function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.compare = function(user) {
  if(this.age > user.age) {
    console.log(this.name + " is older than " + user.name);
  } else if(this.age == user.age) {
    console.log('Both are of equal age');
  } else {
    console.log(user.name + " is older than " + this.name);
  }
}

user1 = new User('John', 50);
user2 = new User('Mary', 50);

user1.compare(user2);