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

function verificationDePlage(nombre) {
  return nombre > 10 && nombre < 20;
}

console.log(verificationDePlage(15)); 
console.log(verificationDePlage(9));  
console.log(verificationDePlage(25)); 

// Fonction Verification de couleur 

function verificationCouleur(couleur) {
  return couleur === "Rouge" || couleur === "Bleu";
}


console.log(verificationCouleur("Rouge")); 
console.log(verificationCouleur("Bleu"));  
console.log(verificationCouleur("Vert")); 
