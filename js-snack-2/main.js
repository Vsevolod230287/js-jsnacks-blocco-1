// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.
var parola1 = prompt("Dammi la prima parola:");
var parola2 = prompt("Dammi la seconda parola:");

var parola1len = 0;
var parola2len = 0;

for (i = 0; i < parola1.length; i++) {
  parola1len += i;
}

for (n = 0; n < parola2.length; n++) {
 parola2len += n;
   }

   if (parola1len > parola2len) {
     document.getElementById('risultato').innerHTML = "Il prima parola: \"" + parola1 + "\" e più lunga della seconda parola: \"" + parola2 + "\".";
   } else if (parola1len < parola2len) {
     document.getElementById('risultato').innerHTML = "La seconda parola: \"" + parola2 + "\" e più lunga della prima parola: \"" + parola1 + "\".";
   } else {
     document.getElementById('risultato').innerHTML = "La prima parola: \"" + parola1 + "\" e la seconda parola \"" + parola2 + "\" hanno linghezze uguali!";

   }
