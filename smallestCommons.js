function smallestCommons(arr) {
  let newArr = [];
  let min = (arr[0] < arr[1])? arr[0]: arr[1];
  let max = (arr[0] + arr[1]) - min;
  for(let i = min; i <= max; i++) {
    newArr.push(i);
  }
  return newArr.reduce(function(bcd, item) {
    let a = (bcd > item)? bcd: item;
    let b = (bcd + item) - a;
    while(b != 0) {
      let c = b;
      b = a%b;
      a = c;
    }
    return (bcd*item)/a;
  });
}


smallestCommons([2,7]);

// Buoc 1. Them tat ca cac phan tu nam trong khoang da cho vao mot mang.
// Buoc 2. Ta su dung reduce de tinh lan luot BCNN giua phan tu thu 1 va phan tu thu 2 2, giua BCCN(1, 2) voi phan tu thu 3,..., cu the cho den cuoi mang.
// Luu y: De tinh BCNN cua 2 so, ta lay tich cua chung chia cho UCLN. 
