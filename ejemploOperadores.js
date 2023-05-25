//!Combinando operaciones2

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);

//num5 es mayor que num2 = true
//num4 es menor que num3 = false
//true && false = false

//num1 no es igual estrictamente a num2 =false y !false es true
// num3 no es desigualdad a num3 entonces = false
//false || false = true

//false || false = true
  console.log (op);


//El IMC resulta de la division de la masa del individuo (en kilogramos) entre el cuadrado de la estatura ( en metros). El indice de masa corporal es un indicador del peso de una persona en relacion con su altura.
/*Clasificacion del IMC de acuerdo con la OMS de la ONU:

(a) menor a 16: criterio de ingreso
(b) 16 a 16.9: infrapeso
(c) 17 a 18.5: bajo personalbar
(d) 18.5 a 24.9: peso normal
(e) 25 a 29.9: sobrepreso
(f) 30 a 34.9: obesidad premorbida
(g) 40 a 45: obesidad morbida.Clasificacion
(h) Mayor a 45: obesidad hipermorbida

Escriba un programa que dado el peso de una persona en libras (1 libra = 0.2453592 kg) y su estatura en centimetros, calcule su IMC de la persona y la categoria en la cual fue clasificiado. */

/*Clasificación del IMC de acuerdo con la OMS de la ONU:
・Menor a 16: Criterio de ingreso.
・16 a 16.9: infrapeso.
・17 a 18.4: bajopeso
・18.5 a 24.9: peso normal.
・25 a 29.9: sobrepeso
・30 a 34.9: obesidad premórbida
・50 a 45: obesidad mórbida
・Mayor a 45: obesidad hipérmorbida

Escriba un programa que dado el peso de una persona en libras (1 libra = 0.453592 kg) y su estatura en centímetros, calcule su IMC e indique como salida el peso en kilogramos, el valor de IMC de la person a y la categoría en la cual fue clasificado.*/


let pesoLibras = prompt("Ingrese su peso en libras");
let estaturaCM = prompt("Ingrese su estatura en centímetros");
     
function calculoIMC() {
    pesoKG = pesoLibras * 0.453592;
    estaturaMetros = estaturaCM / 100;
    indiceMasa = pesoKG / (estaturaMetros ** 2);
    console.log("Su peso en kilogramos es:", pesoKG);
    console.log("Su estatura en metros es:", estaturaMetros);
    console.log("Su IMC es", indiceMasa);
    if (indiceMasa < 16) {
        console.log("Criterio de ingreso");
    } else if (indiceMasa >= 16 && indiceMasa <= 16.9) {
        console.log("Infrapeso");
    } else if (indiceMasa >= 17 && indiceMasa <= 18.4) {
        console.log("Bajopeso");
    } else if (indiceMasa >= 18.5 && indiceMasa <= 24.9) {
        console.log("Peso normal");
    } else if (indiceMasa >= 25 && indiceMasa <= 29.9) {
        console.log("Sobrepeso");
    } else if (indiceMasa >= 30 && indiceMasa <= 34.9) {
        console.log("Obesidad premórbida");
    } else if (indiceMasa >= 35 && indiceMasa <= 45) {
        console.log("Obesidad mórbida");
    } else if (indiceMasa > 45) {
        console.log("Obesidad hipérmorbida");
    }
}
calculoIMC();