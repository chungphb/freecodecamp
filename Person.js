var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var fullname = firstAndLast;
  this.getFullName = function() {
    return fullname;
  };
  this.setFullName = function(name) {
    fullname = name;
  }
  this.getFirstName = function() {
    return fullname.split(" ")[0];
  }
  this.setFirstName = function(name) {
    fullname = name + " " + fullname.split(" ")[1];
  }
  this.getLastName = function() {
    return fullname.split(" ")[1];
  }
  this.setLastName = function(name) {
    fullname = fullname.split(" ")[0] + " " + name;
  }
  return fullname;
};

var bob = new Person('Bob Ross');
