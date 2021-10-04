const arr1 = [1, 3, 4, 1, 2, 8];

function avgArr(arr) {
  let tempAvg = 0;

  console.log(typeof tempAvg);
  // 5
  let oversizedArr = [];
  for (i = 0; i < arr1.length; i++) {
    tempAvg = tempAvg + arr[i];
  }

  tempAvg = tempAvg / arr1.length;

  for (i = 0; i < arr1.length; i++) {
    // if 1 > 3.16
    // kalo iya, push ke oversizedArr
    // kalo ngga, di continue
    if (arr1[i] > tempAvg) {
      oversizedArr.push(arr1[i]);
    } else {
      continue;
    }
  }

  console.log(tempAvg);
  console.log(oversizedArr);
  return oversizedArr.length;
}

console.log(avgArr(arr1));
