function palindrome(str) {
  // Good luck!
  // Buoc 1. Xoa het cac ky tu khong phai so/chu cai, chuyen xau ve chu thuong va tach xau thanh mang cac ky tu.
  let chars = str.replace(/[^0-9a-zA-Z]+/g, "").toLowerCase().split("");
  let len = chars.length;
  
  // Buoc 2. Kiem tra tinh palindrome
  return chars.every(function(element, index) {
    return element == chars[len - 1 - index];
  });
}



palindrome("e$y *&e2");
