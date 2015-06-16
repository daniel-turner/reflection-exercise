//var SuperUser = require("./SuperUser.js");

function reflect(object) {

  function logProperties(properties) {

    if(properties === undefined) {

      return;
    }

    for(var i = 0; i < properties.length;i++) {

      console.log(" -- " + properties[i]);
    }
  };

  if(object === undefined || object === null) {

    return;
  }

  console.log("Reflect pass #: " + count);

  count++;

  console.log("Object name: " + object.constructor.name);

  //log object properties
  var objectProperties = Object.getOwnPropertyNames(object);
  logProperties(objectProperties, " ++ ");

  //log prototype chain properties
  var newPrototype = Object.getPrototypeOf(object);

  if(newPrototype) {

    reflect(newPrototype);
  }


};

var count = 1;

var superUser = new SuperUser("Jake",34,"male","homo sapiens");

reflect(superUser);