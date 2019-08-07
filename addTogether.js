function addTogether() {
  if(arguments.length == 2 && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    return arguments[0] + arguments[1];
  } else if (arguments.length == 1 && typeof arguments[0] == "number") {
    return (anotherNumber) => typeof anotherNumber == "number"? arguments[0] + anotherNumber: undefined;
  } else {
    return undefined;
  }
}

addTogether(2, [3])

// isNaN() van xem '123' hay [123] la mot so.
