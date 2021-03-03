// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.
do {
  var numero = prompt("Inserisci un numero di 4 cifre: ");
} while (numero.length != 4);

var sum = 0;

for (i = 0; i < numero.length; i++) {
   sum += parseInt(numero[i]);
}

console.log(sum);
