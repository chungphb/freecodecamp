function sumPrimes(num) {
  let arr = [];
  for(let i = 2; i <= num; i++) {
    arr.push(i);
  }
  return arr.filter(function(x) {
    for(let i = 2; i <= Math.sqrt(x); i++)
      if(x % i == 0) return false;
    return true;
  }).reduce((x, y) => x + y);
}

sumPrimes(10);

/*
17
*/