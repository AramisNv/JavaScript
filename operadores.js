/*/* OPERADORES 

Los operadores nos permiten realizar una operacion en una o varios operandos (variables o datos)


   
-Operadores de asignacion (=) 
-operadores de cadena
-Operadores logicos
-Operadores de comparacion
-Operadores aritmeticos

*/

/*Operadores de asignacion (=)
   Se utilizan para asignarle valor a una variable. Signa un valor al operando de la izquierda basado en el valor del operador de la derecha.*/

   let edadFelipe =31;
   var recipiente= "cafe";

/* operadores de comparacion ( > , <  >=, <= , == , === , !=, !== )

Los operadores de comparacion nos ayudan a comparar dos expresiones o valores y nos devuelven un valor boolean que representa la relacion de sus valores */

   let numero1 = 13;
   let numero2 = 25;
   let numero3 = "25";

   //operador menor que
   console.log ("El valor 13 es menor que el valor 25 " + (numero1 < numero2));


   //operador mayor que
   console.log ("El valor 13 es menor que el valor 25 " + (numero1 > numero2));
   
   //operador mayor o igual que
   console.log ("el valor 25 es mejor o igual que el valor 25 " + (numero2>= numero3));
  
   //operador de igualdad
   console.log("el valor 25 es igual que el valor 25" + (numero2 == numero3));

   //operador de igualdad estricta (evalua el valor y tipo de dato)
   console.log ("el valor es igual que el valor 25 " + (numero2 === numero3));

  //operador de desigualdad estricta (!=)
  console.log ("el valor 25 no es igual al valor 25" + (numero1 != numero2));

/* Operadores Lógicos ( && and, || or , ! not)************

Los operadores lógicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion. El resultado sera un valor boolean y sus operadores son lógicos entre ellos (los podemos combinar, y , los podemos poner en un orden especifico.)

And (&&)
 Sirve para determinar si dos expresiones son verdaderas.
  -Si ambas expresiones son verdaderas, el resultado es verdadero.
  - Si una de las dos expresiones es falsa, todo el resultado es falso.

Or (||)
 Sirve para determinar si dos expresiones son falsas.
  - si cualquiera de esas afirmaciones es verdadera, todo es verdadero.
  - si las dos afirmaciones son falsas, todo es falso.

NOT (!)
Sirve para mostrar lo contrario a lo que estamos devolviendo

*/
 
//ejemplo con AND (&&)
var num1=12;
var num2=23;

afirmacion1 = (num1 > num2);
afirmacion2 = (num1 != num2);
console.log (afirmacion1 && afirmacion2);// imprime true porque ambas son verdaderas

//ejemplo con OR (||)

afirmacion3 = (num1 < num2);
afirmacion4 = (num1 !== num2);

console.log (afirmacion3 || afirmacion4); // true porque al menos una afirmacion una es verdadera

//ejemplo con NOT (!) 
console.log(!afirmacion3);
console.log(!afirmacion4);

//ejercicio de combinacion de operaciones


/*OPERADORES ARITMETICOS ***********************
(+, -, *, /, %, **, ++, --)

+ (suma); suma dos o mas valores numericos
- (resta); resta dos o mas valores numericos
* (multiplicacion); multiplica dos o mas valores numericos
/ (division); Divide uno o mas valores en otro valor numerico
% (modulo o residuo); Nos ayuda a retornar el residuo de una division
** (exponenciacion:) retorna el resultado de una potencia. Se escribe la basa antes de los asteriscos, y el exponente de los astericos.
++ (incremento);incrementar un valor de uno en uno
-- (decremento);decrementar un valor de uno en uno


*/


let valor1=55;
let valor2=17;
console.log("La suma " , valor1 + valor2 );
console.log ("la resta" , valor1 - valor2);
console.log ("Multiplicacion" , valor1 * valor2);
console.log ("Division" , valor1 / valor2);
console.log ("residuo" , valor1 % valor2);
 //si residuo es ==0 es par y si residuo !0 es impar
 console.log ("Exponencia" , valor1** valor2);
 console.log ("incremento" , ++valor1);
 console.log ("decremento" , --valor2);
 console.log(valor1);












