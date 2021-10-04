class chatSkilvul {
  constructor(shift) {
    this.shift = shift;
  }

  encrypt(str) {
    for (let i = 0; i < str.length; i++) {
      let tempLetter = str[i];
      if (
        (tempLetter >= "A" && tempLetter <= "Z") ||
        (tempLetter >= "a" && tempLetter <= "z")
      ) {
        //   A  = 0 + 2 = C
        let tempWords = tempLetter.toUpperCase().charCodeAt(0) + this.key;
        if (tempWords > "Z".charCodeAt(0)) {
          tempWords -= 26;
        }
        tempLetter = String.fromCharCode(tempWords);
      }
      str = str.slice(0, i) + tempLetter + str.slice(i + 1);
    }
    return str;
  }
}

const chat = new chatSkilvul(2);

console.log(chat.encrypt("I love Javascript!"));
