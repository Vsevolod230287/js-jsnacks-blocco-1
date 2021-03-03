// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
var somma = 0;

for(i = 1; i <= 10; i++) {
  var num = parseInt(prompt("Inserisci un numero: "));
  document.getElementById('risultato').innerHTML += "Il " + i + " numero inserito e: " + num + "<br>"
  somma += num;
}

document.getElementById('risultato').innerHTML += "La somma dei numeri inseriti è: " + somma;
