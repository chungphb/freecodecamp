function binaryAgent(str) {
  let chars = str.split(" ");
  return chars.map(x => String.fromCharCode(parseInt(x, 2))).join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// Luu y: Su dung parseInt(binary, 2) de chuyen mot xau nhi phan ve so thap phan tuong ung. 
// Luu y: Su dung String.fromCharCode(num) de chuyen mot so thap phan ve ky tu tuong ung voi no trong bang ma ASCII.