function removeVoyelles(str) {
  let regex = /[aeiouy]/g;
  return str.replace(regex, "");
}

function removeChiffre(str) {
  let regex = /[0-9]/g;
  return str.replace(regex, "");
}

function removePonctuation(str) {
  let regex = /[,;?!]/g;
  return str.replace(regex, "");
}

function valideEmail(str) {
  let regex = /^[^@]+@[^@]+\.[^@]+$/;
  if (str.match(regex)) {
    return "valide";
  } else {
    return "non";
  }
}

function changeLetterRegex(str) {
    let regex = new RegExp(/^[A-Z][A-Za-z0-9_-]{3,19}$/);
    return regex.exec(str)
}

module.exports = {
  removeVoyelles,
  removeChiffre,
  removePonctuation
};
