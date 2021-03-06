const isR18Plus = (age) => {
  return new Promise((resolve, reject) => {
    if (age > 18) {
      resolve("anda sudah dewasa");
    } else {
      reject("anda belum dewasa");
    }
  });
};

const printR18Plus = async () => {
  const properAge = await isR18Plus(19);
  const underAge = await isR18Plus(10);

  console.log(properAge);
  console.log(underAge);
};

printR18Plus();
