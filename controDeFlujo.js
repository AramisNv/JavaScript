/*
Control de flujo

Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).


Condicionales

Son estructuras o condiciones que nos permiten modificar el orden natural de ejecucion de nuestro programa. Son sentencias especificas que nos ayudaran a decidir si una condicion se cumple o no (true o false), a partir de esta respuesta se ejecuta una o avarias instrucciones.

Ejemplo 
Tengo limpia mi playera de la suerte?  //pregunta o instruccion que detona la condicion
    true: Entonces voy a la fiesta //respuesta con su posible instruccion
    false: Entonces me quedo a mimir //respuesta con su posible instruccion


*/

/*Condicional if (SI) Estructura basica de un IF
if (condicion){
    //ejecuto este bloque de codigo
}*/

//Felipe tiene 17 años, y quiere ir a una fiesta. Dicha fiesta solo es para personas adultas (mayores de 18 años). Ayuda a felipe decidir si puede ir a la fiesta o no

//Evaluamos solo una expresion (si Felipe tiene menos de 18 años), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situacion (incertidumbre).

let edadFelipe = 19; //Debemos tomar en cuenta primero la edad de felipe
let edadPermitida = 18;

if (edadFelipe < edadPermitida ){
    console.log ("lo siento felipe, no puedes ir ala fiesta");
}

/*Else (de otro modo-si no)

Utilizamos esta instruccion o sentencia para especificar que un bloque de codigo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejectua en caso de que la condicion sea falsa.

if (condicion){
    //Este bloque se ejecuta si la condicion es verdadera

}else {//este bloque se ejecuta si la condicion es falsa}

*/

let edadAxel = 17;
let edadParaEntrarALaFiesta = 18;

if(edadAxel<edadParaEntrarALaFiesta){
    console.log ("Lo siento no puedes entrar a la fiesta");

}else{
    console.log("Felicidades, tienes la edad permitida para entrar a la fiesta");
}

/*Test de nuestro programa (valores que tambien se evaluan como falso)
   -"false" (string)
   -NaN 
   -false (boolean dispara verdadero)




/*Else if (si hacemos, o entonces)
 
Esta condicion nos ayuda a ejecutar una nueva condicion en caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesarias, terminando con una estructura else.

Estructura básica del else if

if (condicion 1){
    //bloque de codigo que se ejecuta si la condicion 1 es verdadera
}else if (condicion 2){
    bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
}
 else if (condicion 3){
    bloque se codigo que se ejecuta si la condicion 1 es falsa, y si la condicion 2 tambien es falsa
 }else {
 bloque de codigo que se ejecuta si la condicion 1, 2 y 3 son falsas
 }

 Se pueden anidar x cantidad de else if que evalua la condicion inicial y el else que termina toda la expresion
*/

/*edadDavid = 19;
edadPermitidaAntro = 18;
dineroDeDavidad = 20;
coverDeAntro = 150;

if (edadDavid > edadPermitidaAntro){
    console.log ("Puedes ir al antro")
} else if (dineroDeDavidad > coverDeAntro){
    console.log ("Puedes pagar el cover");
} else {
    console.log ("lo siento, no tienes peso suficiente para pagar el cover");

}*/



let hora = prompt("ingrese la hora actual")
if (hora < 12){
    console.log("buenos dias");
} else if (hora <=19){
    console.log("buenas tardes ya, que barbaro como pasa el tiempo")
}else {
    console.log("Buenas noches, ya vamos a mimir")
}


/* Switch
Esta condicional nos pemite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables. Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.

- case: evalua el caso o condicion asociado que dispara un bloque de codigo
- Break: termina el proceso sin que tengamos que pasar por todas las iteraciones o casos.
- Default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else).

switch (expresion o condicion){
    case valor1:
        //valor que se ejecuta si la condiciones es igual a valor 1
    break;

    case valor2:case valor1:
        //valor que se ejecuta si la condiciones es igual a valor 2
    break;
    
    case valor3:
        //valor que se ejecuta si la condiciones es igual a valor 3
    break;

    case valor4:
        //valor que se ejecuta si la condiciones es igual a valor 4
    break;
    
    default:
        //Ingresaste un piso incorrecto (bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
    
}
*/

//Ejemplo de switch

let pisoDestino = prompt("ingresa el piso al que quieras ir (1 al 5)");

switch(pisoDestino) {
    //Para jugar con nuestros datos el tipo de dato debe coincidir para que se ejecute correctamente
    case "1":
    console.log ("vamos a piso 1 (suena música de fondo)");
    break;

    case "2":
        console.log ("vamos a piso 2 (suena música de fondo)");
        break;
    
    case "3":
        console.log ("vamos a piso 3 (suena música de fondo)");
        break;

    case "4":
     console.log ("vamos a piso 4 (suena música de fondo)10");
       break;

    case "5":
    console.log ("vamos a piso 5 (suena música de fondo");
        break;

        default:
            console.log ("Ingresaste un piso que no es valido")

}

var elementoEvolucion = prompt ("Ingresa el elemento al que deseas que evolucione tu Eevee ")

switch (elementoEvolucion) {

    case "Fuego":
        console.log("Tu Eevee ha evolucionado a Flareon")
        break;

    case "Trueno":
        console.log("Tu Eevee ha evolucionado a Jolteon")
        break;
    case "Agua":
        console.log("Tu Eevee ha evolucionado a Vaporeon")
        break;
    case "Sombra":
        console.log("Tu Eevee ha evolucionado a Umbreon")
        break;
    case "Hierba":
        console.log("Tu Eevee ha evolucionado a Leafeon")
        break;
    case "Psiquico":
        console.log("Tu Eevee ha evolucionado a Umbreon")
        break;
    case "Hielo":
        console.log("Tu Eevee ha evolucionado a Glaceon")
        break;
    case "Hada":
        console.log("Tu Eevee ha evolucionado a Sylveon")
        break;
    default:
        console.log("Ese no es un elemento, introduzca de nuevo")
}

