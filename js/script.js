/*
Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

/*
Istruzioni:
1. Con prompt, chiedere all'utente di inserire una parola;                        
2. Creare una funzione per capire se la parola inserita è palindroma;             

3. Con prompt, chiedere all'utente di scegliere pari o dispari;                   
4. Con prompt, chiedere all'utente di inserire un numero tra 1 e 5;               
5. Creare una funzione per generare un numero random da 1 a 5 per il computer;    
6. Sommare i due numeri;                                                          
7. Stabilire se la somma dei numeri è pari o dispari;                             
8. Dichiarare il vincitore.
 */

// Chiedo all'utente di inserire una parola
let parolaUtente = prompt("Inserisci una parola");
console.log("parola inserita utente", parolaUtente);

// Creo una funzione per capire se la parola inserita è palindroma
function palindroma() {
  let parolaArray = parolaUtente.split("");
  console.log("parola nell array", parolaArray);

  let arrayInverso = parolaArray.reverse();
  console.log("parola inversa nell array", arrayInverso);

  let parInversaStringa = arrayInverso.join("");
  console.log("parola inversa stringa", parInversaStringa);

  if (parolaUtente === parInversaStringa) {
    console.log("parola palindroma");
    parInversaStringa = true;
  } else {
    console.log("parola non palindroma");
    parInversaStringa = false;
  }

  return parInversaStringa;
}

let risultato = palindroma(parolaUtente);
console.log("La parola è palindroma?", risultato);

console.log("---------------------------");
// Seconda parte

// Chiedo all'utente di scegliere pari o dispari
const pariOdispari = prompt("Scegli pari o dispari");
console.log("Pari o dispari?", pariOdispari);

// Chiedo all'utente di inserire un numero da 1 a 5
const utenteNumero = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Scelta numero utente", utenteNumero);

// Creo una funzione per generare un numero random da 1 a 5
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let numeroGenerato = numeroRandom(1, 5);
console.log("Scelta numero computer", numeroGenerato);

let sommaNumeri = numeroGenerato + utenteNumero;
console.log("La somma dei numeri è: ", sommaNumeri);

// Stabisco se la somma dei numeri è pari o dispari
function pariDispari() {
  let risultato = sommaNumeri % 2 == 0;
  console.log("è pari?", risultato);

  return risultato;
}

let responso = pariDispari(sommaNumeri);

// Stabisco il vincitore
const pari = "pari";

if (responso == true && pariOdispari == pari) {
  console.log("Utente hai vinto");
} else {
  console.log("Computer hai vinto");
}
