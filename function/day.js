function oneToTen(){
    const arr = [1,2,3,4,5,6,7,8,9,10]
    arr.map((n)=>console.log(n))
}

function joursSemaine(){
    const arr = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
    console.log(arr[0])
}

function deuxAdix(){
    const arr = [2,4,6,8,10]
    let result = 0
    arr.map((n)=>result+=n)
    console.log(result)
}

function cinqFruits(){
    const arr = ["Pomme", "Poire", "Bannane", 'Fraise', "Framboise"]
    arr.push("cerise")
}

function moyenne(){
    const arr = [10, 14, 9, 5, 19]
    let moyenne = 0
    arr.map((n)=> moyenne += n)
    moyenne = moyenne / arr.length
}

function nomOiseau(nom){
    const arr = ["partrik", "Jean", "nonoeille"]
    arr.includes(nom) ? console.log("L'oiseau est bien présent") : console.log("L'oiseau n'est pas présent")
}

function nomPaysSort(){
    const arr = ["Tchéquie", "Pays-bas", "Suisse", "Maroc", "Inde", "Russie", "Angleterre"]
    console.log(arr.sort())
}

function troisimeMoisAnne(){
    const arr = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]
    console.log(arr[2])
}

function getRandom(min, max){
    console.log((Math.random() * (max - min + 1)))
}

function getPlusLongue(){
    const arr = ["Le Lorem Ipsum", "employé dans la composition et la mise en page avant impression.", "dans les années"]
    let min = ""
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > min.length) min = arr[i]
    }
    console.log(min)
}
  
module.exports = {
    oneToTen,
    joursSemaine,
    deuxAdix,
    cinqFruits,
    moyenne,
    nomOiseau,
    nomPaysSort,
    troisimeMoisAnne,
    getRandom,
    getPlusLongue
}