// // Resolve, Reject wajib ada ( disebut executor function )
// Resolve = Promise berhasil
// const executorFunction = (resolve, reject) => {
//   let jumlah = 2;
//   if (jumlah === 2) {
//     resolve("I resolved!");
//   } else {
//     reject("I rejected!");
//   }
// };

// // Mengconvert function executorFunction menjadi promise function menggunakan
// // keyword 'new Promise' ( ini wajib ada new promise )
// const myFirstPromise = new Promise(executorFunction);
// console.log(myFirstPromise);

const returnPromiseFunction = (resolve, reject) => {
  setTimeout(() => {
    resolve("Berhasil");
  }, 1000);
};

const secondPromise = (resolve, reject) => {
  resolve("berhasil kedua");
};

let prom = new Promise(returnPromiseFunction);
let prom2 = new Promise(secondPromise);

prom
  .then((result) => {
    console.log(result);
    return prom;
  })
  .then((data) => {
    console.log(data);
  });

// console.log(prom);
