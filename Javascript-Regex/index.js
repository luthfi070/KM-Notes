/// luthfi123

/// bisa pake regex buat ngecek, di kalimat atas ada angka / tidak
/// Berguna untuk melakukan filter / checking / mencari pattern
/// Regex akan mengembalikan nilai dalam bentuk Boolean ( True / False )

/// Misal ada kalimat " Saya hari ini belajar "

/// Kalimat diatas bisa dibandingin sama " Saya hari ini Main "

/// Ketentuan

/// 1. Huruf kapital dan Huruf kecil di bedakan ( M tidak sama dengan m )

// RegExp adalah function bawaan dari Javascript
// Cara penulisan Regexp pertama
let regex1 = new RegExp("monk/eys");
let testRegex = regex1.test("smonk/eyss");

// True, karena "smonkeyss" masih memiliki pola "monkeys" di tengah
console.log(testRegex);

// Cara Penulisan Regexp kedua
let regex2 = /Monkeys/;
let testRegex2 = regex2.test("monkeys");

// False, karena "monk2eys" tidak memiliki pola "monkeys"
console.log(testRegex2);

// Pencarian pola kalimat dengan huruf a sampai c
let regex3 = /[a - c]/;
let testRegex3 = regex3.test("qcq");

// true, karena masih mengandung huruf c yang mana berada di dalam kumpulan a - c
console.log(testRegex3);

// RegExp Flags
// i = Tidak memperdulikan huruf besar atau kecil, maka ketentuan nomer 1 tidak akan berlaku
/// Jika ini diimplementasikan
// g = Mencari secara keseluruhan, karena jika tidak menggunakan /g , regex akan berhenti begitu menemukan
// string yang dicari

// RegExp menggunakan flag g dan i
let regex4 = /d/gi;

// Test Regex4 menggunakan string "David winalda" menggunakan metode .match
let testRegex4 = "David winalda".match(regex4);

// akan mengembalikan array dalam bentuk 2 elemen yaitu d dan d
console.log(testRegex4);

// Penggunaan regex dalam pengecekan emaik
let regex5 = /@gmail.com/i;
let testRegex5 = regex5.test("luthfimusafa@gmail.com");

console.log(testRegex5);

// Penggunaan regex menggunakan flag ^ dan $ dari ujung depan kalimat hingga ujung belakang kalimat secara
// keseluruhan
let regex6 = /^Hari ini saya bermain$/;
let testRegex6 = regex6.test("hari ini bermain");

// false, karena
console.log(testRegex6);

let nomerHP = "089646459831";
if (nomerHP.length >= 10 && nomerHP.length <= 12) {
  let regex7 = /\d/;
  let testRegex7 = regex7.test(089646459831);

  console.log(testRegex7);
} else {
  console.log("Jumlah nomer HP harus 10 atau 12");
}

let username = "luthf";
if (username.length >= 6) {
  let regexSoal = /\d/;
  let testRegex = regexSoal.test(username);

  if (testRegex) {
    console.log("ada angkanya");
  } else {
    console.log("oke");
  }
} else {
  console.log("gabisa");
}
