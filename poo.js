//Creación de un objeto casa

/*const casa = {
    numHabitacion : 3,
    numPisos : 2,
    numBanios :1,
    color: "rojo",
}*/
//console.log (casa.color);

//plantilla para repetir 50 veces casa (estandarizar esa produccion en cadena)

//Arreglos (objeto)
var casaArreglo =[3, 2, 1, 4, 2 , "verde", 6, "rojo"];

//objeto casa
const casa = {numHabitacion:3,numBanios :1, numPisos : 2, color: "rojo",}

//para imprimir la informacion de un objeto, utilizo la referencia al objeto, despues un punto, y por último el nombre de la propiedad o metodo que quiero mostrar

console.log ("El color de mi casa es :", casa.color);

//class para generar una plantilla, va a tener predefinidas las llaves (keys)de nuestras propiedades y cada que instancie o cree un nuevo objeto, esa informacion se va a ir personalizando. 

class casaPlantilla {
    //1.-Definir propiedades como variables para posteriormente agregarle valores (este valor se lo vamos a dar cuando instanciemos el objeto)
    numHabitacion= 0;
    numBanios=0;
    numPisos=0;
    color = "";

//3.- Definir una funcion constructora. Esta funcion es una funcion especial que se dedica unica y exclusivamente a tomar los datos que definimos como variables, para usarlas como parametros de construccion y asi poder instancias nuestro objeto.

//Los parametros se pasan en el orden que fueron declarados, para que cada valor que se use, se asige a la variable correspondiente
constructor(numHabitacion, numBanios, numPisos, color){}




//2.- Definimos los métodos como funciones, porque estas nos dicen que puede hacer mi objeto
encenderLuces(){
    console.log("click, luces encendidas")
}
abrirVentanas (){
    console.log ("ñuii, ventanas abiertas")
}
guardarmeDelFresnito(){
    console.log("que aguisticidad")
}
imprimirInforDeLaCasa(){
    console.log("El numero de habitaciones es de:", this.numHabitacion)
}

}

//En la clase definimos todo de forma "normal"(declaran las variables como normalmente las usamos = y ;, pero cuando el objeto se crea o se (instancia ), se visualiza de otra forma con : y , entre cada valor)

/*Instanciar objetos
para instanciar objetos , usamos la siguiente sintaxis:

variable con nombre = palabraReservadaNew referenciaDeLaClase ( parametros de construccion);

let objeto =newClaseObjeto(parametro)
*/

//tengo una variable llamada "casa de felipe" que es un nuevo objeto de la clase "clasa plantilla" y que tiene los siguientes parametros
/*let casa1 =new casaPlantilla (6,3,3,"azul");
console.log(casaDeFelipe);*/
    
   
//Ejemplo de POO con gatitos
class gatitos{
    //1.-Propiedades 
    nombre ="";
    edad = "";
    tamaño = "";
    caracter = "";
    numeroVidas = "";
    color = "";
    raza = "";
    vacunas = false;

//3.- Constructor
constructor (nombre, edad, tamaño, caracter, numeroVidas, color, raza, vacunas) {
    this.nombre = nombre;
    this.edad = edad;
    this.tamaño = tamaño;
    this.caracter= caracter;
    this.numeroVidas= numeroVidas;
    this.color = color;
    this.raza = raza;
    this.vacunas = vacunas;
}

    //.2- Metodos
    imprimirInfo(){
        console.log("El nombre de mi gato es", this.nombre);
        console.log("edad de mi gato es", this.edad)
        console.log("tamaño de mi gato es", this.tamaño)
        console.log("El caracter de mi gato es", this.caracter)
        console.log("Numero de vida que quedan :C", this.numeroVidas)
        console.log("Su color es", this.color)
        console.log("Su raza es", this.raza)
        console.log("¿Tiene su vacuna?", this.vacunas)
 };
    maullar(){
        console.log("miauu")
    };
    rasguñar (){
        console.log("El gato a rasguñado el sillon")
    };
    ronronear (){
      console.log("brrrrbgrrrr")  
    };
    cuidarGato (){
    if (this.numeroVidas<3){
        console.log("cuida a tu gatito, le queda pocas vidas")
    }
}
}

//instanciar
let juanchoDelCampo= new gatitos("Juancho Del Campo", 5, "Grande", "Tranquilo", 6, "gris", "angora", true);

let gandalf = new gatitos("Gandalf", 8, "grande", "flojo", 2, "gris", "desconocido", true);

juanchoDelCampo.imprimirInfo();
juanchoDelCampo.cuidarGato();
gandalf.imprimirInfo();
gandalf.cuidarGato();




/* JSON (JavaScript Object Notation) Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :}) JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor. Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado. */

let objetoSerializado = (JSON.stringify(objeto));

console.log("este es un objeto serializado", objetoSerializado);
console.log (objetoDeserializado.nombre);
