function checkCashRegistr(price, cash, cid) {
  var currencyUnit = {"PENNY": 0.01], "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};
  var charge = cash - price;
  var total = cid.map(x => x[1]).reduce((x1, x2) => x1 + x2);
  var possibleUnit = cid.filter(x => currencyUnit[x[0]] < charge);
  possibleUnit.map(function(x) {
    let remainder = 
  });
  var change;
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// Input: (giaSanPham, soTienMaKhachHangDua, SoTienConTrongNganKeo)
// Output: {status: trangThaiThanhToan, change: cacToTienDuaChoKhachHang}
