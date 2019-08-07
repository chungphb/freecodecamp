function convertToRoman(num) {
  // Buoc 1: Xay dung pattern cho tung truong hop tu 0 -> 9. Pattern nay se duoc ap dung tren tat ca cac hang.
  let pattern = ["", "x", "xx", "xxx", "xy", "y", "yx", "yxx", "yxxx", "xz"];
  
  // Buoc 2: Tach so da cho thanh cac hang.
  let numStr = num.toString().split("");
  let len = numStr.length;
  
  // Buoc 3: Tra ve ket qua duoc viet o dang so Latin.
  return numStr.map(function(item, index) {
    let i = parseInt(item);
    switch(len - index) {
      case 4:
        return pattern[i].replace(/x/g, "M").replace(/y/g, "5M").replace(/z/g, "10M");
      case 3:
        return pattern[i].replace(/x/g, "C").replace(/y/g, "D").replace(/z/g, "M");
      case 2:
        return pattern[i].replace(/x/g, "X").replace(/y/g, "L").replace(/z/g, "C");
      case 1: 
        return pattern[i].replace(/x/g, "I").replace(/y/g, "V").replace(/z/g, "X");
    } 
  }).join("");
}

convertToRoman(798);

// Luu y: Thay vi su dung nhom lenh switch - case, ta co the xay dung mot CTDL luu tru gia tri tuong ung cua 1, 5, 10, 50, 100, 500, 1000 va viet ham de giam bot so cau lenh.  