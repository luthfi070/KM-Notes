console.log("JS Tersambung");

document
  .getElementById("card-02")
  .addEventListener("click", () =>
    clickedButton(
      "V60 Coffee",
      "Deskripsi Kopi 1 abcajshdkjasdasdkasjdh",
      "card-02"
    )
  );

document
  .getElementById("card-01")
  .addEventListener("click", () =>
    clickedButton(
      "Milk Based Coffee",
      "Deskripsi Kopi 2 azxczxczxczxczczxczdh",
      "card-01"
    )
  );

// document
//   .getElementById("button3")
//   .addEventListener("click", () => clickedButton("Button 3"));

// document
//   .getElementById("button4")
//   .addEventListener("click", () => clickedButton("Button 4"));

function clickedButton(judul, deskripsi, idButton) {
  let imgSrc = idButton + "-image";
  document.getElementById("modal-title").innerHTML = judul;
  document.getElementById("modal-text").innerHTML = deskripsi;
  document.getElementById("modal-image").src =
    document.getElementById(imgSrc).src;
}
