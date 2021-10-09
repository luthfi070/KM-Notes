const getData = async () => {
  // Ini buat masukin url, api nya
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  // ini buat nge get hasil jsonnya
  let response = await data.json();

  // proses penampilan data menggunakan for biasa
  //   for (i = 0; i < response.length; i++) {
  //     console.log(response[i].body);
  //   }

  // proses penampilan data menggunakan .map
  response.map((result) => {
    console.log(result);

    document.write(`<li>${result.title}`);
    document.write(`<li>${result.body}</li>`);
    document.write(
      `<a href="detail-post.html"><button>go ${result.id}</button></a>`
    );
  });
};

// async-await == .then disederhanakan

getData();
