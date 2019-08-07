function telephoneCheck(str) {
  // Good luck!
  let patterns = [/^1? ?[0-9]{3}(-| )?[0-9]{3}\1[0-9]{4}$/, /^1? ?\(([0-9]){3}\) ?[0-9]{3}-[0-9]{4}$/, ]
  return patterns.some(regex => regex.test(str));
}

telephoneCheck("555-555-555");

// Y tuong: Xay dung mot mang cac regex. Neu xau nhap vao match mot trong so cac regex thuoc mang nay thi tra ve true va nguoc lai (Su dung arr.some()).
// Luu y: Mot so pattern co the duoc viet vao cung mot regex.
// Luu y: Khong su dung \1 vi no se co gia tri hoan toan giong voi cai ma no tham chieu den.

