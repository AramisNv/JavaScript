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

