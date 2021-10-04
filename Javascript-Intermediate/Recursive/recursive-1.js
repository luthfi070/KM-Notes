let arr1 = [10, 7, 2, 3, 5];
function sumOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  // Proses Copy Array
  let temp = arr.slice();
  //   temp = [15];

  // Proses Pengeluaran Array
  temp.pop();
  // 5

  //   console.log(" hasil :" + sumOfArray(temp));
  return arr[arr.length - 1] + sumOfArray(temp);
  // return 5 + sumOfArray([1, 2, 3, 4, 5])
}

console.log(sumOfArray(arr1));
