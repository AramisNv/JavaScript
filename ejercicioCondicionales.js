//Programa Numeros primos

let numero = prompt("Ingrese un número entero:");

function esPrimo(numero) {
  if (numero <= 1) {
    esPrimo = false;
  }// por que cualquier numero 0 o negativo no puede ser primo

  //  si el número es divisible por otro número menor a la mitad de su valor
  for (let a = 2; a <= numero / 2; a++) {
    if (numero % a === 0) {
      return false;
    }
  }
  // Si el número no es divisible por ningún otro número, es primo
  return true;
}

if (esPrimo(numero)) {
  console.log(numero + " es un número primo.");
} else {
  console.log(numero + " no es un número primo.");
}

