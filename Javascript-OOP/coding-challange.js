class enkripsi {
  constructor(kalimat) {
    this.kalimat = kalimat % 26;
  }

  enkripsiKata(kata) {
    for (let i = 0; i < kata.length; i++) {
      let tempLetter = kata[i];
      if (
        (tempLetter >= "A" && tempLetter <= "Z") ||
        (tempLetter >= "a" && tempLetter <= "z")
      ) {
        let tempWords = tempLetter.toUpperCase().charCodeAt(0) - this.kalimat;
        if (tempWords > "Z".charCodeAt(0)) {
          tempWords -= 26;
        }
        tempLetter = String.fromCharCode(tempWords);
      }
      kata = kata.slice(0, i) + tempLetter + kata.slice(i + 1);
    }
    return kata;
  }
}

const chat = new enkripsi(2);

console.log(chat.enkripsiKata("I love Javascript!"));

// .toUpperCase
