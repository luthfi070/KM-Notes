const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
  // 1 + 2 = 3
  // 3 + 3 = 6
  // 6 + 4 = 10
});
