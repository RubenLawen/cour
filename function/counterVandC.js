function counterVandC(str, type) {
  const voyelle = ["a", "e", "i", "o", "u", "y"];
  let counter = 0;
  if (type == "v") {
    for (let i = 0; i < str.length; i++) {
      voyelle.includes(str[i]) ? counter++ : "";
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      !voyelle.includes(str[i]) ? counter++ : "";
    }
  }

  return counter;
}

module.exports = counterVandC;
