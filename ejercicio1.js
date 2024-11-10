const characters = [
  { name: "Luke Skywalker", species: "Human" },
  { name: "Darth Vader", species: "Human" },
  { name: "Chewbacca", species: "Wookiee" },
  { name: "Leia Organa", species: "Human" },
  { name: "R2-D2", species: "Droid" },
  { name: "C-3PO", species: "Droid" },
  { name: "Obi-Wan Kenobi", species: "Human" },
  { name: "Yoda", species: "Unknown" },
  { name: "Han Solo", species: "Human" }
];
const humanCharacters = [];

// Añade tu código de bucle aquí
function getRace(arr, val) {
  let raceArr = [];
  for (let char of characters) {
    if (Object.values(char).includes(val)) {
      raceArr.push(char);
    }
  }
  console.log(raceArr);
}

getRace(characters, "Human");
getRace(characters, "Droid");
