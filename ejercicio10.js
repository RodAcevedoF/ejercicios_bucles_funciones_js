const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin"
};

function getCapital(obj, val) {
  for (let key in obj) {
    if (key === val) {
      return obj[key];
    }
  }
  return new Error("Not found");
}
console.log(getCapital(capitals, "Ireland"));
console.log(getCapital(capitals, "Spain"));
