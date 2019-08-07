function sumFibs(num) {
  let fibs = [];
  fibs.push(1, 1);
  let len = 2;
  while(fibs[len - 1] + fibs[len - 2] <= num) {
    fibs.push(fibs[len - 1] + fibs[len - 2]);
    len++;
  }
  return fibs.filter(x => x%2 == 1).reduce((x, y) => x + y);  
}

sumFibs(4000000);

/*
4613732
*/