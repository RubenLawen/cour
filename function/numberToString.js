function numberToString(number) {
  let result = "";

  function chiffreToLetter(chiffre) {
    switch (chiffre) {
      case "9":
        return "neuf";
      case "8":
        return "huit";
      case "7":
        return "sept";
      case "6":
        return "six";
      case "5":
        return "cinq";
      case "4":
        return "quatre";
      case "3":
        return "trois";
      case "2":
        return "deux";
      case "1":
        return "un";
    }
  }

  function nombreToDizaine(nombre) {
    switch (nombre) {
      case "90":
        return "quatre-vingt-dix";
      case "80":
        return "quatre-vingt";
      case "70":
        return "soixante-dix";
      case "60":
        return "soixante";
      case "50":
        return "cinquante";
      case "40":
        return "quarante";
      case "30":
        return "trente";
      case "20":
        return "vingt";
      case "10":
        return "dix";
    }
  }

  if (number > 999) {
    return "Je ne prends pas en compte plus grands";
  } else {
    while (number !== 0) {
      if (number > 99) {
        if (toString(number)[0] == "1") {
          result += "cent ";
          number -= 100;
        } else {
          result += `${chiffreToLetter(String(number)[0])} cent `;
          number -= parseInt(`${String(number)[0]}00`);
        }
      } else if (number > 9) {
        result += `${nombreToDizaine(String(number)[0] + "0")} `;
        number -= parseInt(`${String(number)[0]}0`);
      } else {
        result += `${chiffreToLetter(String(number)[0])}`;
        number -= parseInt(`${String(number)[0]}`);
      }
    }
  }
  return result;
}

module.exports = numberToString;
