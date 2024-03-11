function removeVoyelle( str ) {
    const voyelle = ["a", "e", "i", "o", "u", "y"];
    let newString = "";
    for(let i = 0; i < str.length; i++){
        if(!voyelle.includes(str[i])) newString += str[i]
    }
    return newString
}

module.exports = removeVoyelle