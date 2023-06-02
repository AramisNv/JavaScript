 /* bubles e iteracion

En JS un bucle es una estructura de control. Que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetir una tarea tantas veces como queramos. Gracias a esto vamos a poder automatizar tareas repetitivas.

-while (mientras)
-do while (hacer mientras)
-for (para)

while (mientras)

Este bucle nos sirve para realizar una tarea repetitiva, mientras una condicion sea VERDADERA. A diferencia del if, que pregunta una vez y despues ejecuta el bloque de codigo, el while pregunta continuamente la condicion y ejecuta el bloque de codigo hasta que la condicion devuelva FALSE.

Casos de uso del ciclo while
-para verificar si un usuario esta registrado o no
-verificamos la disponibilidad de un producto (stock)
-Realizar acciones sobre nuestro carrito de compras (revisar productos, aplicar descuentos, impuestos, actualizar informacion, etc.)
- Para recorrer publicaciones de un usuario
 */

/*Ejemplo de bucle infinito
while (true){
    //bloque a ejecutar
}*/

/*let rolUsuario ="Premiun"

while (!"premiun"){
    function registraUsuario(){
        console.log("usuario registrado")
    }
}*/

//Codigo de mi sopita de verduras con pollo

//Declarar e inicializar un array con los ingredientes

var ingredientes = ["zanahorias", "cebollas", "apio", "papa", "espinacas", "pollito"];//6 elementos con 5 posiciones

//Declaramos una variable llamada contador inicializando en 0, para usarla como un contador 
var ingredientesAgregadosALaOlla = 0;

//mientras los ingredientes agregados a la olla sean menos que los ingredientes que me quedan disponibles...
while (ingredientesAgregadosALaOlla < ingredientes.length){

    //...ire agregando ingredientes a la olla...
    console.log ("agregando " + ingredientes[ingredientesAgregadosALaOlla]+ " a la olla ");
    
    //y voy aumentando el contador para saber cuando parar
    ingredientesAgregadosALaOlla ++ ;

}
console.log("la sopita ya esta lista, yumi");

function imprimirAstericos (){
    console.log("*****************************");
}
imprimirAstericos ();

/*let Felipe ="listaDeAmigos";
let Fernanda = "bloqueada";

while ("listaDeAmigos"){
    console.log;("Mostrar publicidad");
}*/


/* DO WHILE (hacer mientras)

Es similar al while, con la diferencia de que la condicion se evalua despues de cada iteracion. Esto garantiza que el bloque de codigo se ejecute al menos una vez, incluso si la condicion inicial es falsa.

do{
    //bloque de codigo que vamos a ejecutar 
} while (condicion)*/

console.log("Ejemplo de Galletitas con Do-While")

//variable tiempo de coccion que servira como contador
var tiempoTranscurridoDeCoccion = 0;

//usamos el ciclo do-while

do {

    console.log("Horneando las galletas...");
    tiempoTranscurridoDeCoccion +=5;


//Todo el bloque de codigo se va evaluar mientras el tiempo de coccion sea menor a 30 minutos. Esto es porque las galletas se puden cocinar en 5, 10, 15, 20 o 25 minutos, teniendo un maximo de 30. Si pasamos de ese tiempo, puede que las galletas se quemen. 

//Esto es como si revisaramos el horno cada 5 minutos


} while (tiempoTranscurridoDeCoccion <30);


console.log("Las galletas estan listas");

/*For (para)

Se utiliza cuando se conoce el número de iteraciones que se realizaran. Consiste en tres partes: inicializacíon, condicíon y expresíon final.
El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.

for(inicializacion; condicion; expresion de iteracion){
    //bloque de codigo a ejecutar
}

-inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

-condicion: se verifica antes de cada iteracion, y si se evalua como verdadera, el bucle se ejecuta.

-expresion de iteracion: se ejecuta al final de cada iteracion, y se utiliza para actualizar o modificar la variable de control.

*/
/*For (para)

Se utiliza cuandos se conoce el numero exacto de iteraciones que se realizaran. Consiste en tres partes: inicializacion, condicion y expresion final.
El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.


for (inicializacion; condicion ; expresion de iteracion){
    //Bloque de codigo a ejecutar
}


 - inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

 - condicion: se verificar antes de cada iteracion, y si se evalua como verdadera, el bucle se ejcuta. 

 - expresion de iteracion: se ejecuta al final de cada iteaciones, y se utiliza para actualizar o modificar la variable de control.


*/

imprimirAstericos ();
console.log("Ejemplo de la pizza con For")


//Definir mi lista de pasos
var pasosDeReceta = ["Preparar la masa", "Agregar los ingredientes", "Hornear la pizza"]; //3 pasos

//Definir mi lista de tiempo por paso
var tiempoPorPaso = [15, 10, 20];


//En el ciclo for, para cada paso, se tiene un tiempo estimado.

//Para cada paso de la lista, voy a tomar en cuenta el tiempo que se necesita para hacerlo. Cada que vaya cumpliendo un paso, voy incrementando mi variable paso para saber cuantos pasos me quedan pendientes. Cuando ya no haya pasos, termino el proceso.
for (var i = 0; i < pasosDeReceta.length; i++){
 console.log("Realizando paso " + pasosDeReceta[i]);
 console.log("Esperando " + tiempoPorPaso[i] + " minutos");

}

console.log("Disfruta tu pizza");

imprimirAstericos ();
//EJEMPLO CONTADOR FOR (contaodr de cohetes)

for (let i = 10; i>0; i--){
    console.log("Faltan" + i + "segundos para el despegue");
}

imprimirAstericos();

for (let cupones = 9; cupones>=0 ; cupones -- ){
    console.log("Tienes un cupon de descuento, nos quedan " + cupones);
}



/*Programa para calcular numeros enteros


Escribe un programa que pida al usuario un numero entero, y muestre en pantalla si es un numero primo o no.

Que es un numero primo? es un numero mayor que 1, que solo se puede divir entre 1 y entre si mismo. Ejemplos de numeros primos: 2, 3, 5, 7, 11, 13, 17, 19, etc.

Operaciones que necesitaremos: dvision, comparacion, residuo*/




//1. Solicitamos al usuario un numero entero
var numeroIngresado = prompt("Ingresa un numero entero");


//2. Evaluamos los dos posibles escenarios: sea o no primo (estado inicial de mis numeros)
var esNumeroPrimo = true;


//3. Operacion para demostrar si es o no es primo
if (numeroIngresado <=1) {
    esNumeroPrimo = false; //demuestro que no es primo, y cambio el estado inicial a false


//Al calcular el numero primo, se tendran que hacer divisiones desde el 2 hasta el numero que definimos (este sera nuestro tope). Como no queremos hacer tantas divisiones, vamos a marcar un tope hasta la mitad del numero ingresado. 


} else {
    let divisor = 2; //Este es nuestro divisor. Lo inicializamos en 0

    //Mientras el divisor sea menor que el dato ingresado (limite) y el numero ingresado tenga un valor como true (que sea un numero primo), comenzaremos a dividir
    while (divisor <= numeroIngresado/2 && esNumeroPrimo){

        //Si al momento de hacer la division el residuo es igual a cero, se entiende que el numero ingresado es un numero par, por lo que el valor inicial se sobreasignara a false y ahi terminamos el proceso.
        if (numeroIngresado % divisor === 0){
            esNumeroPrimo = false; //no es primo
        }

        //En caso de no encontrar un cero como residuo al hacer la division, se incrementara en uno el valor del divisor, y se volvera a hacer la division (recordar que marcamos el tope para estas operaciones en la mitad del numero ingresado)
        divisor ++; //contador que aumenta los divisores de uno en uno
    }
}


//Mostramos los resultados

if (esNumeroPrimo) {
    console.log(numeroIngresado + " es un numero primo.");
} else {
    console.log(numeroIngresado + " no es un numero primo.");
}