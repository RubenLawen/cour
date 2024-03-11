const sum = require("./function/sum");
const maxArray = require("./function/maxArray");
const removeVoyelle = require("./function/removeVoyelle");
const sortByAlphabet = require("./function/sortByAlphabet");
const numberToString = require("./function/numberToString");
const objectToArray = require("./function/objectToArray");
const sortByLittle = require("./function/sortByLittle");
const agrandirVoyelle = require("./function/agrandirVoyelle");
const counterVandC = require("./function/counterVandC");

const arrOb = [
    {
        nom: "jean",
        id: "1"
    },
    {
        nom: "jacques",
        id: "2"
    },
    {
        nom: "bertout",
        id: "3"
    }
];

console.log(`Addition: 5 + 9 = ${sum(5,9)}`);
console.log(`L'élement le plus grand de [5,9,19,3,5,99] est : ${maxArray([5,9,19,3,5,99])}`);
console.log(`Le mot irreprochable sans voyelle est : ${removeVoyelle("irreprochable")}`);
console.log(`Voici la liste d'élement trié par ordre alphabétiques "salut, bg, farfadet malicieux, cc cv" ] : ${sortByAlphabet(['salut', 'bg', 'farfadet malicieux', 'cc cv' ])}`);
console.log(`Voici le nombre 848 : ${numberToString(848)}`);
console.log(`Voici tous les noms de l'object arr : ${objectToArray(arrOb, "nom")}`);
console.log(`Voici le tableau [5,3,66,33,1] trié par ordre décroissant est : [${sortByLittle([5,3,66,33,1])}]`);
console.log(`Le mot irreprochable avec les voyelles en maj : ${agrandirVoyelle("irreprochable")}`);
console.log(`Le mot irreprochable compte ${counterVandC("irreprochable", "v")} voyelle(s) : `);
console.log(`Le mot irreprochable compte ${counterVandC("irreprochable", "c")} consonnes(s) : `);
