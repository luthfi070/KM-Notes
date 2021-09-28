// Object dengan nama Siswa, yang memiliki key
// nama dan umur
// dengan Value
// "luthfi" dan 12

let siswa = {
  nama: "luthfi",
  umur: 12,
  kegiatan: function () {
    return "bermain";
  },
};

// let murid = [];
// Cara pertama menampilkan isi Object
// menggunakan namaObject.Key
console.log(siswa);
console.log(siswa.kegiatan());
console.log(siswa.umur);
console.log(siswa.nama);

// Cara kedua menggunakan Object Destructuring
// { key1, key2 } = namaObject
let { nama, umur, kegiatan } = siswa;

console.log(umur);
console.log(nama);
console.log(kegiatan());

// Cara ketiga
console.log(siswa["nama"]);
console.log(siswa["kegiatan"]());

let kucing = {
  warna: "kuning",
  umur: "12",
  //method
  suara: function () {
    return "meong";
  },
};

console.log(kucing.umur);
console.log(kucing.suara());
