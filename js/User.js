function User(name,age,sex) {

  this.name = name;
  this.age = age;
  this.sex = sex;

};

User.prototype.getName = function() {

  return this.name;
}

User.prototype.getAge = function() {

  return this.age;
}

User.prototype.getSex = function() {

  return this.sex;
}

