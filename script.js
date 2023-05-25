///alert ("Estoy vivo") 




/*Variable
Es un elemento del cual su valor puede cambiar o variar dependiendo de la circunstancia.
Esta variable ocupa un espacio de memoria y dependiendo de su valor o del elemento que este dentro de este espacio, es el tipo de varible que tenemos

Variable = recipiente donde pondremos el valor
Valor = la informacion con la que llenamos el recipiente

declara= ponerle nombre a nuestro recipiente
incializador = llenar ese recipiente*/

Recipiente = "agua";
recipiente = "cafe";  //{Declaramos e inicializamos en 1 lin
recipiente = "leche";

//usamos esta linea de codigo para imprimir o mostrar la informacion de mi recipiente

console.log (recipiente);

/*Declara vs inicializar

quieresSerMiNovia;*/

edad= null
altura = null
peso = null
genero = null

/*
Tipos de datos (primitivos no primitivos)

Se llaman primitivos porque son datos que no pueden ser modificados, ya vienen con el lenguaje y se condieran el dato mas simple o más básico que existe.

-string: Sirve para agregar valores en forma de texto. Para que se considere asi, el valor debe estar dentro de comillas simples ('') comillas dobles ("") y backticks (´´)

-Number: Sirve para agregar valores en formato numerico ( para poder usarlos en operaciones aritmeticas). Estos valores no usan comillas.


-Boolean: Sirve para representar valores del tipo True o False (encendido o apagado, 0 y 1, si y no).

-Undefined: Sirve para representar un tipo de dato que no tiene valor. Cuando declaramos variables sin inicializar, tendremos datos tipo del tipo undefined.

-Null: Sirve para definir que un valor es nulo.

-NaN (Not a Number):Sirve para representar un valor que no es número. Lo obtenemos si hacemos una operacion con una variable que no es un numerp o con una operacion que no es posible.

-Symbol:

-Object ( no es primitivo):

*/


//ejemplo para la concatenacion

apodoDeFelipe = "El ¨amante numero uno¨ de los chilaquiles verdes";
console.log(apodoDeFelipe);

//Ejemplos de valores numericos

edadDeFelpie = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -120.50;
console.log(edadDeFelpie);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);

// Ejemplos de valores booleans
esAdministrador = true;
contraseñaCorrecta = false;
cuentaPremium = false;

//Ejemplos de datos indefinidos
//respuestaDeMiCrush;
//precioBoletoEstacionamiento;

//console.log(precioBoletoEstacionamiento);


//Ejemplos de valores nulos
respuestaDeMiCrush ="no";

respuestaDeMiCrush = null;

respuestaDeMiCrush = "si";
console.log(respuestaDeMiCrush);

//Ejemplos de valores NaN
operacionMatematica = 0/0;
console.log(operacionMatematica);

/*TypeOf
Es una expresion que nos ayuda a saber que tipo de dato es el que estamos evaluando 

typeof(elDatoAEvaluar);

Todos los resultados que arroja son cadenas con el tipo de dato que estamos evaluando*/

console.log (typeof(operacionMatematica));//number
console.log (typeof(edadDeFelpie));
console.log(typeof(esAdministrador));



/*SESION TIPO DE VARIABLES
En Js tenemos 3 tipos principales de variables:
  -var:
   Era la forma principal de declarar variables. Es una variable muy flexible, tiene un scope (alcance) global, esto es, que el valor de esta variable esta disponible en todo el programa.

  -let:
   Lo usamos para limitar el alcance de nuestras variables  (socope), se limita a un bloque de codigo o expresion  (meter a la mama de mbambi en una caajita), es una varible local.

  -const: se usan para declarar una variable con un valor o constante o inmutable (que no cambia).
   

(funcion=caja)
*/

// En este caso, la mamá de bambi esta visible desde cualquier lugar del programa
var mamaDeBambiViva = false;

var cazador = "listo para disparar";

let nombre ="Felipe Maqueda";

const pi = 3.1416

 
/*

Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.


Parametros = variables que necesitamos para alimentar mi funcion (todas las  variables se tienen que utilizar)
Ejemplo: limon, azucar, vasito de agua, cucharita, hielos, egua.


Nombre para la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)
Ejemplo: prepararAguitaDeLimon


Operaciones: Conjunto de instrucciones (en orden especifico).
Ejemplo: 1) Cortar el limon, 2) Exprimir el limon, etc.


Resultado: Las funciones generalmente deben tener un resultado.
Ejemplo: Vasito de aguita de limon

*/

//1- Creamos la funcion con la palabra reservada function y le ponemos un nombre. Despues, abrimos y cerramos parentesis y abrimos y cerramos llaves {}. Los parentesis () son para nuestros parametros o argumentos y los {} para delimitar el bloque o la funcion.

//2- Ponemos nuestros parametros (variables) dentro de las parentesis

//3. Poner las instrucciones dentro de las llaves, utilizando los parametros o argumentos.

//4. Invocar la funciona escribiendo su nombre y abrimos y cerramos parentesis ().



function prepararAguitaDeLimon () {


    let limon= "limon";
    let agua = "agua";
    let hielos = "hielos";
    let azucar = "azucar";
    let vaso = "vaso";
    let cuchara = "cuchara";

    console.log ("cortar el limon" + limon );
    console.log ("exprimir el limon");
    console.log ("agregar jugo de limon al vaso"+ vaso);
    console.log ("endulzamos al gusto" + azucar);
    console.log ("agregamos hielo al vaso" + hielos);
    console.log ("agregamos agua al vaso" + agua);
    console.log ("mezclar y disfrutar" + cuchara);

   
    console.log(cuchara);
}

prepararAguitaDeLimon ();

//Ejemplo de las 3 formas de agregar parametros a funciones

function suma (a, b) {//valores estan en undefined

    a=5;// cambio el undefined por 5
    b=7;// cambio el undefined por 7

    operacion= a + b ;//hago mi suma utilizando los dos valores

    console.log(operacion);//imprimir mi operacion
}

suma();//invocamos la funcion


//Segunda forma: usando parametros dentro de parentesis, ya inicializados
function resta (a = 8, b = 5){

    operacion = a - b;

    console.log(operacion);

}
resta();

//tercera forma: inicializando valores dentro de la funcion

function multiplicacion (a, b){
    operacion = a * b;
    console.log(operacion);

}
multiplicacion (5, 2);
multiplicacion (7, 3);
multiplicacion (8, 8);
multiplicacion (9, 9);
multiplicacion (45, 2);
multiplicacion (13, );// se imprime NaN porque nos falta un parametro 


//Funciones anonimas

 let funcionAnonima = function ( a, b) {
    operacion = a / b;
    console.log(operacion)
}
 funcionAnonima (10, 5);

 /*return

 La sentencia return finaliza la ejecucion de la funcion, y especifica un valor para ser devuelta a quien llama la funcion, O lo que es lo mismo, usamos return para finalizar y tambien para poder asignar el resultado a una variable.
*/


 //funcion para dar un saludo personalizado

 //primero defino mi funcion
 function saludo (){

    //declaro e inicializo mi valor del nombre
    let nombreSaludo = "Felipe";

    //uso ese nombre para personalizar mi saludo
    console.log (" Saludos " + nombreSaludo + " Bienvenid@ ");

    // Finalizo la ejecucion de mi funcion, y tomo el dato de la variable llamada nombreSaludo para poder verla (recordemos que esta en un contexto loca) y tambien para poder usarla despues en otras operaciones
    return nombreSaludo; //limbo de las variables

 }

 //para poder usar esa variable que hasta este momento sacamos de la funcion, pero que no sabemos donde esta (porque esta en el limbo de las funciones). Y en esta nueva variable ponemos la incovacion de la funcion.



 const nombreQueSaqueDeMiFuncion = saludo();

 console.log("estas son las personas que han iniciado sesion en mi aplicacion" + nombreQueSaqueDeMiFuncion);


 /*var nombreIngresadoDesdeElNavegador = prompt ("introduce tu nombre");
 console.log ("Gracias por entrar a mi página "+ nombreIngresadoDesdeElNavegador);*/






