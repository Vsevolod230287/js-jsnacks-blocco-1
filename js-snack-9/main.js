// Calcola la somma e la media dei primi 10 numeri.
var sum = 0
var media = 0;

for (i = 0; i <= 10; i++) {
  sum += i;
  console.log("Soma dei primi " + i + " numeri e: " + sum);
  media = sum / i;
  console.log("Media dei primi " + i + " numeri e: " + media);
}
