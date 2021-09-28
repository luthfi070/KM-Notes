console.log("JS Tersambung");

// console.log(document) = menghasilkan seluruh baris html yang tersambung ke js
// document.getElement = memanggil element html berdasarkan cara yang dipilih
// contoh cara :
// - id
// - class
// - tags name

// Mengakses seluruh baris html
// document = seluruh baris html
console.log(document);

// Mengakses element html yang memiliki id "tagger"
console.log(document.getElementById("tagger"));

// Mengakses isi dari tag "tagger" yaitu Hello World
console.log(document.getElementById("tagger").innerHTML);

// Merubah / Melakukan Update isi dari tag "tagger" yaitu Hello World menjadi Rumah
document.getElementById("tagger").innerHTML = "Rumah";

// Merubah isi dari tag "tagger" yaitu Hello World menjadi HTML
// document.getElementById("tagger").innerHTML = `<ol>
// <li>123</li>
// <li>124</li>
// </ol>
// `;

// Membuat Element Baru menggunakan List menggunakan Document.write
document.write(`<ol>
<li>123</li>
<li>124</li>
</ol>
`);

// Menambahkan Element baru yang dibuat menggunakan createElement dengan isi nama Tag HTML
let buttonSubmit = document.createElement("button");

// Mengisi isi dari Tag Button menjadi <button>Submit Nama</button>
buttonSubmit.innerHTML = "Submit Nama";

// Menempelkan element buttonSubmit ke formNama
formNama.append(buttonSubmit);

// Membuat function submitNama untuk melakukan action ketika button ditekan
const submitNama = () => {
  // Melakukan Prevent Default terhadap Event Click, agar Page tidak melakukan
  // Redirect ke halaman lain / Refresh
  event.preventDefault();
  // Menampilkan isi dari element HTML yang memiliki Id "Tagger"
  console.log(document.getElementById("tagger"));
  // Menampilkan isi dari input form HTML yang memiliki id inputNama menggunakan
  // getElementById
  console.log(document.getElementById("inputNama").value);

  let form = document.getElementById("formNama");

  // FormData, berisi function yang memiliki informasi mengenai Data dari suatu Form
  let formData = new FormData(form);

  console.log(formData);

  // Merubah inputan dari formData menjadi Object
  let values = Object.fromEntries(formData);

  // Memanggil isi yang telah dimasukan dari formData
  console.log(values);

  document.getElementByID("formNama").style.visibility = "hidden";
};

// menambahkan event click ketika button ditekan dan memasukan function submitNama
buttonSubmit.addEventListener("click", () => submitNama(event));
