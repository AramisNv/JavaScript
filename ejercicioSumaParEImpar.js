

//Declaro una funcion que cuenta los numeros que entran, cuales son pares y cuales son impares
function calcularSecuencias() {
    let contadorNumeros = 0;
    let contadorPares = 0;
    let contadorImpares = 0;
  

    //una variable para el numero que entra y una funcion de prompt para alerta del mensaje
    let numero = parseInt(prompt("Ingrese un número:"));


  //Se habre ciclo, en donde el número entrante que sea desigual a 0 pasara contarse a contadorNumeros.
    while (numero !== 0) {
      contadorNumeros++;
      
      //si el  numero se puede dividir entre si mismo da 0, entonces pasara a contarse como par, en caso de que no cumpla con ello, pasara a contarse como impar
      if (numero % 2 === 0) {
        contadorPares++;
      } else {
        contadorImpares++;
      }
  
      //para terminar la funcion de los numeros que ingresamos, ponemos una alterta de prompt para terminar la secuencia con un 0
      numero = parseInt(prompt("Ingrese otro número (o 0 para terminar):"));
    }
  // incluímos las constantes para sacar el porcentaje de cuales numeros son pares y cuales impares, contadorpares/ total de numero por 100
    const porcentajePares = (contadorPares / contadorNumeros) * 100;
    const porcentajeImpares = (contadorImpares / contadorNumeros) * 100;
  
    //Para mostrar los resultados en consola
    console.log("Cantidad de números ingresados:", contadorNumeros);
    console.log("Cantidad de números pares:", contadorPares);
    console.log("Cantidad de números impares:", contadorImpares);
    console.log("Porcentaje de números pares:", porcentajePares + "%");
    console.log("Porcentaje de números impares:", porcentajeImpares + "%");
  }
  
  calcularSecuencias();