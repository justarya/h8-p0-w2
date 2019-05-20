function konversiMenit(menit) {
  var hasil,hasilMenit,hasilDetik;
  hasilMenit = Math.floor(menit/60);
  hasilDetik = menit%60;

  if(hasilDetik < 10){
    hasilDetik = "0" + hasilDetik;
  }

  hasil = hasilMenit + ":" + hasilDetik;
  return hasil;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00