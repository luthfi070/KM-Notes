// Array selalu mulai dari 0
// Array dibawah memiliki panjang data sebesar 3
//0         1       2       3
let data = ["lutfhi", "aku", "kamu", "dia"];

console.log(data);
console.log(data[1]);
// for (i = 0; i < data.length; i++) {
//   console.log(data[i]);
// }
data[1];

// Proses memasukan data kedalam Array, dengan cara
// namaArray.push(dataBaru)
data.push("saya");

// console.group(data);

// array isinya array
let dataArray = [
  ["luthfi", "kamu"], //0 array
  ["saya", "dia"], //1 array
  ["dia", "aku"], //2 array
];

console.log(dataArray[1]);
console.log(dataArray[1][1]);
// console.log(dataArray[0][1]);
// Looping di Array dalam
for (i = 0; i < dataArray.length; i++) {
  // Looping di Array anak
  for (a = 0; a < dataArray[i].length; a++) {
    console.log(dataArray[i][a]);
  }
}
