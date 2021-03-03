// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

var numeri = [];

for (i = 0; i < 6; i++) {
  var numUtente = prompt("Mi un numero per piacere: ");
  if (numUtente % 2 != 0) {
    numeri[i] = numUtente;
  }
}

var stringNum = numeri.toString();
console.log(stringNum);
  document.getElementById('risultato').innerHTML = "Ecco l'array con tutti i numeri dispari: " + numeri;
