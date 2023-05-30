/* 
Arreglos (arrays, matrices, coleccion de datos)

En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos r*egulares en JavaScript.




*/

//Formas de declarar un array o arreglo
// 1. usando los corchetes 
var array =

// Variable sin inicializar var colores;

//Arreglo sin asignar a una variable
["azul", "rojo", "Naranja", "verde"];

//Variable colores declarada e inicializada
var colores = ["azul", "rojo", "Naranja", "verde", ["verde pastel", "amarillo pastel", "rosa pastel"]];

//podemos tener distintos tipos de datos en un mismo arreglo
var datosDeFelipe = ["Felipe", 31, "guadalajara", "Nikky", true, undefined, null];




//Cada asignatura esta asociada a una variable individual
var asignatura1= "Matematicas";
var asignatura2=" Literatura";
var asignatura3="Fisica";

//Array
var asignaturas = ["Matematicas", "Literatura", "Fisica"];

console.log (typeof(asignaturas));

//cantidad de elementos ejemplo 5 y posiciones 4, porque empieza en posicion 0. se le llama index o indice

//acceso a elementos de un arreglo
console.log ("El elemento en la posicion 2 de mis asignaturas es : ", asignaturas [2]);

//Si accedemos a un elemento que no existe, nos motrara undefined porque el espacio existe pero no tiene ningun valor
console.log ("El elemento en la posicion 2 de mis asignaturas es : ", asignaturas [10]);

//Mostrar la longitud de mi array
console.log(asignaturas.length);


//Ejemplos de arrays


var carrito =["pantalon", "camisa", "corbata"];

var publicacion = ["Felipe", 137, "29-mayo-2023"];
console.log(publicacion);


//Modificar los elementos dentro del arrays
publicacion[1]= 138;

console.log (publicacion);

//No teniamos un elemento en la posicion (index) 4 (indefinido=150)
publicacion[4] = 150;

//Metodo para agregar el elemento al final de un arreglo
asignaturas.push("Biologia");

console.log(asignaturas);
asignaturas.push("ingles");
console.log(asignaturas);

//Metodo para eliminar el ultimo elemento de un arreglo
asignaturas.pop();
console.log(asignaturas);

//Método para agregar elementos al principío de un arreglo
asignaturas.unshift("Quimica", "Educacion Fisica", "Artes");
console.log(asignaturas);

//Metodo para eliminar elementos del principio de un arreglo
asignaturas.shift();
console.log(asignaturas);

//Metodo para saber si mi arreglo incluye un elemento especifico
let carritoWalmart = ["gansitos","coquita", "galletas maria", "mazapan"];

regalo = carritoWalmart.includes("coquita");

if (regalo === true){
    console.log("te regalo un sarten");
}

var amigos = ["Felipe", "Mariana", "Fernanda", "Maara", "Gaby", "Marina"];

var mejoresAmigos;

var publico;

//Metodo para concatenar arreglos

var listaDeGolosinas = ["gansitos","coquita", "galletas maria", "mazapan"];

var listaDeFrutitas = ["Manzanas", "Mangos", "toronjas", "platanos", "fresas"];

var listaDeComprasDeLaQuincena = listaDeGolosinas.concat (listaDeFrutitas);

console.log(listaDeComprasDeLaQuincena);


//Metodo para buscar un elemento y devolver el indice de su primera aparicion. Si el elemento no se encuentra, retorna -1

console.log(listaDeComprasDeLaQuincena.indexOf("gansitos"));

console.log (listaDeComprasDeLaQuincena.indexOf("chicharrones"));

//Metodo para unir elementos de un arreglo en una cadena de texto
console.log(listaDeComprasDeLaQuincena.join(" -"));

//Metodo para revertir el orden del arreglo (reverse)

console.log(listaDeComprasDeLaQuincena.reverse());

//Metodo para ordenar los elementos de una matriz (sort)
console.log(listaDeComprasDeLaQuincena.sort());



//Metodo para convertir una matriz en una cadena y devuelve el resultado (toString)

console.log(listaDeComprasDeLaQuincena.toString());

//Metodo para agregar o eliminar elementos de una matriz (splice)
console.log (listaDeComprasDeLaQuincena.splice());

//Modificaciones del arreglo (push, pop, shist, unshift, splice)

//Acceso y busqueda de elementos (indexOf, lastIndexOf() includes )

//Transformacion de elementos (sort, reverse, map, forEach)

//Creacion de nuevos arreglos (slice, concat, join,)

let precios = [100, 54, 67, 45];

function descuento (){
    //codigo para aplicar descuento
}

let preciosConDescuento = []


/*splice (agregar, eliminar, o reemplazar elementos en posiciones especificas)

sintaxis del splice:

array.splice(iniciamos, numeroElementosABorrar, ElementosAInsertar, ElementoAInsertar);*/


//Para borrar elementos
var abecedario = ["A", "B", "C", "D", "E"]; //borrar "c""d"

abecedario.splice(2,2);
console.log(abecedario);

//para insertar elementos
abecedario.splice(2, 0, "C", "D");
console.log(abecedario)


//splice para reemplazar elementos del arreglo
var vocales= ["A", "E", "I", "O", "U"];//reemplazar "e","i"

vocales.splice(1,2, "COMER", "COMER", "COMER");

console.log(vocales);






