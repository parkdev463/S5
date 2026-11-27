// Fonction Calculer (retourne un nombre)
function nombre(a, b){
    return a*b;
}
let doubler=(4*5);
// console.log(doubler);

// Fonction de décision (retourne un booléen)
function estMajour(age){
    return age>=18;
}
// console.log(estMajour(22));
// console.log(estMajour(11));

function estGrand(surface){
    return surface>=111;
}
// console.log(estGrand(222));
// console.log(estGrand(99));

// function de sélection
function TrouverMaximant(a, b){
    if (a>b) {
        return a;
    }
    return b;
}
let resultat = TrouverMaximant(11, 33);
// console.log(resultat);

// misaha
function CalculerSurface(longueur, largeur)
{
return longueur* largeur;
}
function estGrand(surface){
return surface>100
}


let doublerr = CalculerSurface(100,150);
console.log(doublerr);
console.log(estGrand(111));
console.log(estGrand(88));
