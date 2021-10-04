let arrMultidimensi = [[10], [9, 7, 1], [2, 8]];

console.log(arrMultidimensi[0]);
function findArr(arr, numberFind) {
  let arrOneDimension = [];

  // Perulangan Pertama, untuk melakukan Looping dari luar di dalam arrMultiDimensi
  for (i = 0; i < arr.length; i++) {
    // Iterasi akan menjadi seperti berikut
    // 0
    // 1
    // 2

    // Loopingan ke dua, gunanya buat nge looping di dalam index yang didapatkan
    // dari looping pertama
    for (a = 0; a < arr[i].length; a++) {
      arrOneDimension.push(arr[i][a]);
    }
  }

  // Loopingan ke tiga, gunanya buat nge looping di hasil dari Konversi multiDimensi ke satuDimensi
  // Terus di cek pake conditional, jika index tersebut sama dengan nomer yang ingin dicari
  for (x = 0; x < arrOneDimension.length; x++) {
    if (arrOneDimension[x] == numberFind) {
      return x;
    } else {
      continue;
    }
  }
}

console.log(findArr(arrMultidimensi, 8));
