// OOP = Object Oriented Programming
// Pemrograman yang berorientasikan dari object

// Object Literal
let manusia = {
  nama: "luthfi",
  umur: 20,
};

// Pembuatan Class Object
class Absensi {
  // Pembangun
  constructor(nama, jumlah) {
    this.namaSiswa = nama;
    this.Keterangan = jumlah;
  }

  // Method
  absen() {
    return this.namaMobil;
  }
}

// Pembuatan Instance baru dari Class mobil
const mobilBaru = new mobil("mobil merah", 2);

console.log(mobilBaru.jalan());
console.log(mobilBaru.namaMobil);
