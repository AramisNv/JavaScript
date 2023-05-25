console.log(typeof(false));

console.log(typeof(true));

console.log(typeof(0));

console.log(typeof(1));

console.log(typeof("0"));

console.log(typeof("000"));

console.log(typeof("1"));

console.log(typeof(NaN));

console.log(typeof(Infinity));

console.log(typeof(-Infinity));

console.log(typeof(""));

console.log(typeof("20"));

console.log(typeof("Twenty"));

console.log(typeof(null));

console.log(typeof(undefined));


//* Ejercicio de payasos y muñecas
//muñecas y payasos venta
 /*numMuñecas = 14;
numPayasos= 27; 
 pesoMuñeca = 75; 
 pesoPayaso = 112;
 totalPesoMuñecas = numMuñecas*pesoMuñeca; 
 totalPesoPayasos= numPayasos*pesoPayaso;
 totalPesoPedido = totalPesoMuñecas + totalPesoPayasos;
console.log(totalPesoPedido + "gr")*/

//muñecas y payasos venta
let numMuñecas = prompt("Ingrese número de muñecas");
let numPayasos = prompt("Ingrese número de payasos");
const pesoMuñeca = 75;
const pesoPayaso = 112;

function calcularPeso (){
    const totalPesoMuñecas = numMuñecas * pesoMuñeca;
    const totalPesoPayasos = numPayasos * pesoPayaso;
    let totalPedido = totalPesoMuñecas + totalPesoPayasos;
    return totalPedido;
} 
      
alert("El peso total es " + calcularPeso() + " g.")  
    

