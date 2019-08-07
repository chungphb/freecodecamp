function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  var f = function(item) {
    if(!Array.isArray(item)) {
      newArr.push(item);
    } else {
      for(let i = 0; i < item.length; i++) {
        f(item[i]);
      } 
    }
  }
  f(arr);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);