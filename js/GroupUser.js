// require('User.js');

function GroupUser(name,age,sex,group) {

  this.group = group;

  User.call(this,name,age,sex);

}

GroupUser.prototype = Object.create(User.prototype, {

  constructor: {

    value: GroupUser }
});

GroupUser.prototype.getGroup = function() {

  return this.group;
};
