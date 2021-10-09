const getData = async () => {
  // Ini buat masukin url, api nya
  let data = await fetch("https://jsonplaceholder.typicode.com/comments");
  // ini buat nge get hasil jsonnya
  let response = await data.json();

  // proses penampilan data menggunakan for biasa
  //   for (i = 0; i < response.length; i++) {
  //     console.log(response[i].body);
  //   }

  // proses penampilan data menggunakan .map
  response.map((result) => {
    console.log(result);
    if (result.postId === 1) {
      document.write(`<li>${result.email}`);
      document.write(`<li>${result.body}</li>`);
    }
  });
};

// async-await == .then disederhanakan

getData();
