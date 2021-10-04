const finalParticipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

function firstLetter(letter) {
  return letter[0];
}

// Akan membentuk dalam bentuk Array Baru, berbeda dari finalParticipants
const announcements = finalParticipants.map((member) => {
  return firstLetter(member);
});

for (i = 0; i < finalParticipants.length; i++) {
  console.log(firstLetter(finalParticipants[i]));
}

console.log(announcements);
console.log(finalParticipants);
