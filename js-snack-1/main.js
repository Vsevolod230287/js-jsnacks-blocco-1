// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

var numero1 = parseInt(prompt("Dammi il primo numero:"));
var numero2 = parseInt(prompt("Dammi il secondo numero:"));

// 1 e maggiore
// secondo e maggiore
// sono uguali

if (numero1 > numero2) {
  document.getElementById('risultato').innerHTML = "Il primo numero: \"" + numero1 + "\" è maggiore del secondo numero: \"" + numero2 + "\".";
} else if (numero1 < numero2) {
  document.getElementById('risultato').innerHTML = "Il secondo numero: \"" + numero2 + "\" è maggiore del primo numero: \"" + numero1 + "\".";
} else {
  document.getElementById('risultato').innerHTML = "Il primo numero: \"" + numero1 + "\" e il secondo numero: \"" + numero1 + "\" sono uguali.";

}
