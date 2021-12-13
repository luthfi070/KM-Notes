// Contoh 1
// Object
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

// keluar 1900
console.log(inventory.sunglasses);

// Write your code below:

// Function biasa
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

// Mengconvert function myExecutor, menjadi Promise Function
const orderSunglasses = () => {
  return new Promise(myExecutor);
};

// Manggil Function Converter
let orderPromise = orderSunglasses();

console.log(orderPromise);

// fetch adalah promise function
fetch("asdasdad");
