// Specs
// Buatlah sebuah function untuk mengecek apakah sebuah string kosong (blank) atau tidak

// Expected Result
// console.log(is_Blank(''));

// output: TRUE

// console.log(is_Blank('abc'));

// output: FALSE

const is_Blank = (kalimat) => {
  if (kalimat.length == 0) {
    return true;
  } else {
    return false;
  }
  // Kalau mau ngecek suatu kalimat ada spasi atau tidak
  //   for (i = 0; i <= kalimat.length; i++) {
  //     if (kalimat[i] == "") {
  //       return false;
  //     } else {
  //       continue;
  //     }
  //   }
  //   return true;
};

console.log(is_Blank(""));
