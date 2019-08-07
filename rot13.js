function rot13(str) { // LBH QVQ VG!
  return str.split("").map(function(char) {
    let ascii = char.charCodeAt(0);
    if('A' <= char && char <= 'M') {
      return String.fromCharCode(ascii + 13);
    } else if('N' <= char && char <= 'Z') {
      return String.fromCharCode(ascii - 13);
    } else {
      return char;
    }
  }).join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

// Luu y: Do cac ky tu khac chu cai khong bi thay doi nen can chia 'A' -> 'Z' thanh hai doan la 'A' -> 'M' va 'N' -> 'Z' thay vi chi <= 'M' va > 'M'.