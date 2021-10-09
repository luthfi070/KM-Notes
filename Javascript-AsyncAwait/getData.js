import { getPosts } from "./index.js";

// console.log(getPosts());

getPosts()
  .then((result) => {
    console.log(result);
  })
  .then((hasil) => {
    console.log(hasil);
  });

// document.getElementById("asd").innerHTML = getPosts();
// console.log("getPosts");
