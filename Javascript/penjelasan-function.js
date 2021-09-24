// Function menggunakan Javascript Biasa
// a = 1, b = 1
// console.log(a) == 1
// console.log(b) == f
// return sama dengan mengganti isi dari function
// console hanya menampilkan ke console, ga ada efek ke sistem
const penjumlahanBiasa = (a, b) => {
  /// Javascript biasa
  return a + b;
};

// const ga bisa
const nama = "luthfi";
console.log(nama);
nama = "dia";
// error, karena, const itu konstan ( ga bisa diganti isinya )
console.log(nama);

// var isi nya bisa diubah
// var / let sama aja
var nama2 = "luthfi";
console.log(nama2);
// bisa diganti, karena var / let
nama2 = "aku";
console.log(nama2);

// penjumlahanBiasa == 2

// Function menggunakan Javascript ES6 ( Arrow Function )
// Bisa menggunakan Const / Let
let penjumlahanArrow = (a, b) => {
  return a + b;
};

// console.log(penjumlahanBiasa() + 1);

// console.log(penjumlahanBiasa(1, 1));
