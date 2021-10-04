let arr1 = [1, 2, 3, 4, 5];
// 5, 4, 3, 2, 1

// console.log(arr1.length);

function reverse(arr) {
  let panjangArr = arr1.length - 1;
  // panjangArr = 4
  let reversedArr = [];
  for (i = panjangArr; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
}

let reverseArr = reverse(arr1);

console.log(arr1, reverseArr);
