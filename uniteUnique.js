function uniteUnique(arr) {
  let newArr = [];
  for(let i = 0; i < arguments.length; i++)
    newArr = newArr.concat(arguments[i]);
  let resultArr = newArr.filter(function(element, index, newArr) {
    for(let i = 0; i < index; i++) 
      if(element == newArr[i])
        return false;
    return true;
  });
  return resultArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


/*
1,3,2,5,4
*/