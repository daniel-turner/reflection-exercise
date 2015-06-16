// require(GroupUser.js);

function SuperUser(name,age,sex,group) {

  GroupUser.call(this,name,age,sex,group);

}

SuperUser.prototype = Object.create(GroupUser.prototype, {

  constructor: {

    value: SuperUser}
});

SuperUser.prototype.beSuper = function() {

  console.log("so super");
}