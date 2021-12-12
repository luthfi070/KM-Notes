const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

const hewan = [
  { id: 1, nama: "Snowy", spesies: "kucing" },
  { id: 2, nama: "Blacki", spesies: "anjing" },
  { id: 3, nama: "Molly", spesies: "kucing" },
  { id: 4, nama: "Milo", spesies: "kelinci" },
  { id: 5, nama: "Rere", spesies: "kucing" },
];

app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
  });
});

//ambil hewan keseluruhan
app.get("/hewan", (req, res) => {
  res.json({
    msg: "Data Hewan Keseluruhan",
    hewan,
  });
});

//masukan data hewan
app.post("/hewan", postChecker, (req, res) => {
  let lengthHewan = hewan.length;

  const payload = {
    id: lengthHewan + 1,
    nama: req.body.namaHewan,
    spesies: req.body.namaSpesies,
  };

  hewan.push(payload);

  res.json({
    msg: "Data Hewan Berhasil Dimasukan",
    hewan,
  });
});

// Ambil data hewan berdasarkan id
app.get("/hewan/:id/:nama", (req, res) => {
  res.json({
    msg: "Berikut Data Hewan",
    data: hewan[req.params.id],
  });
});

// Edit Hewan Berdasarkan ID
app.put("/hewan/:id", (req, res) => {
  const payload = {
    nama: req.body.namaHewan,
    spesies: req.body.spesies,
  };

  console.log(hewan.find((item) => item.id == req.params.id));

  hewan[req.params.id - 1].nama = payload.nama;
  hewan[req.params.id - 1].spesies = payload.spesies;

  res.json({
    msg: "Data berhasil di update",
    hewan,
  });
});

//Delete hewan berdasarkan id
app.delete("/hewan/:id", (req, res) => {
  let hapus = hewan.splice(req.params.id - 1, 1);

  res.json({
    msg: "Data berhasil di hapus",
    data: hewan,
  });
});

function logger(req, res, next) {
  console.log("this is logger");
  next();
}

function postChecker(req, res, next) {
  const payload = {
    nama: req.body.namaHewan,
    spesies: req.body.namaSpesies,
  };

  if (
    payload.spesies === "Kucing" ||
    payload.spesies === "anjing" ||
    payload.spesies === "kelinci"
  ) {
    next();
  } else {
    res.sendStatus(400);
  }
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
