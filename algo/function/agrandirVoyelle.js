function agrandirVoyelle(str) {
  const voyelle = ["a", "e", "i", "o", "u", "y"];
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    voyelle.includes(str[i])
      ? (newString += str[i].toUpperCase())
      : (newString += str[i]);
  }
  return newString;
}

module.exports = agrandirVoyelle;
