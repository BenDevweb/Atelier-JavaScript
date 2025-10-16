// Exercice  fonction age majeur

function ageMajeur(age) {
    if (age >= 18) {
        return "Vous êtes majeur.";
    } else {
        return "Vous êtes mineur.";
    }
}


console.log(ageMajeur(20)); 
console.log(ageMajeur(16)); 

// Fonction passer ou echouer 

function passerOuEchouer(note) {
    if (note > 50) {
        return "Vous avez réussi.";
    } else {
        return "Vous avez échoué.";
    }
}

console.log(passerOuEchouer(51)); 
console.log(passerOuEchouer(49));

// Fonction jour de la seamine avec switch

function jourDeLaSemaine(nombre) {
  let jour;

  switch (nombre) {
    case 1:
      jour = "Lundi";
      break;
    case 2:
      jour = "Mardi";
      break;
    case 3:
      jour = "Mercredi";
      break;
    default:
      jour = "Jour non reconnu";
  }

  return jour;
}


console.log(jourDeLaSemaine(1)); 
console.log(jourDeLaSemaine(2)); 
console.log(jourDeLaSemaine(3)); 
console.log(jourDeLaSemaine(5)); 

// Fonction verification de plage

function verifierPlage(nombre) {
 if (nombre > 10 && nombre < 20) {
    return true;
 }
 else {
    return false;
 }
}

console.log(verifierPlage(15)); 
console.log(verifierPlage(9));  
console.log(verifierPlage(25)); 

// Fonction Verification de couleur 

function verifierCouleur(couleur) {
 
    if (couleur === "Rouge" || couleur === "Bleu") {
        return true;
    }   else {  
        return false;
    } 
}


console.log(verifierCouleur("Rouge")); 
console.log(verifierCouleur("Bleu"));  
console.log(verifierCouleur("Vert")); 


// Fonction d'un compteur avec la boucle while

function compteur(){
  let i = 1;
  while(i <= 10){
    console.log(i);
    i++;
  }
}
compteur();

// fonction compteur avec la boucle for
function compterFor(){
  for(let i = 1; i <= 10; i++){
    console.log(i);
    
  }
}
compterFor();


//Fonction somme avec la boucle for
function somme(){
  let total = 0;
  for(let i = 1; i <= 10; i++){
    console.log(total);
    total += i;
  }
}
somme();

// Fonction somme du N avec boucle for

function sommeDe1aN(n) {
  let somme = 0;

  for (let i = 1; i <= n; i++) {
    
    somme += i; 

  }

  return somme;
}

console.log(sommeDe1aN(5)); 


//Fonction compteur decroissant avec while

function compterDecrementer(){
  let i = 10;
  while(i >= 0){
    console.log(i);
    i --;

  }
}
compteurDecroissant()

