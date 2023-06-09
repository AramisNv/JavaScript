/*

JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

// Objeto normal de JAVASCRIPT (tiene colores, me muestra las palabra reservadas)
objeto = {
    nombre: "Felipe",
    edad: 15,
}

console.log ("Este es un objeto normal: ", objeto);
console.log("Este es el nombre de mi objeto: ", objeto.nombre);


/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

La sintaxis para pasar de objeto normal de JS a JSON es:


JSON.stringify(objeto que quiero serializar)

*/

let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerializado.nombre);

//1. Creamos un arreglo de objetos para nuestras tareas, estas tareas tendran atributos como id, titulo, estatus completada o no completada

//Esto donde se ejecuta? Del lado del cliente 

let tareas = [
    {
        id : 1,
        titulo : "Baniar al perro",
        estatus : true,
    },
    {
        id : 2,
        titulo : "Preparar la comida",
        estatus : false,
    }
]


//Enviar ese arreglo al servidor 
let tareasJSON = JSON.stringify(tareas);
console.log(tareasJSON);



//Ejemplo del carrito de compras

//Declaramos un arreglo de objetos vacio
let carritoDeCompras = [];

//Producto de mi catalogo
let producto = {
    id : 1,
    nombre : "Camisa de Pokemon",
    precio: 299.99,
    cantidad: 1
};

//Mostrar informacion del carrito de compras
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //undefined

//Agregar un nuevo producto a mi carrito de compras
carritoDeCompras.push(producto);

//Muestro la nueva informacion de mi carrito
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1


//Actualizar la cantidad de productos en el carrito
let productoId = 1; //producto a actualizar
let nuevaCantidad = 3; //cantidad nueva de productos que voy a comprar

//Verifico si mi producto existe dentro del carrito de compras para poder modificarlo, si exsite, actualizo la cantidad, si no, no hago nada. Todo esto se evalua con base en el id que estoy buscando y este debe coincidir con el id del producto que deberia tener dentro de mi carrito de compras.
let productoExiste = carritoDeCompras.find(function(producto){
    return producto.id === productoId; //true or false
})
if (productoExiste) {
    productoExiste.cantidad = nuevaCantidad;
}

console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1

console.log(producto);


//Eliminar un producto del carrito
let productoAeliminar = 1;

//Reviso el id del producto a eliminar en cada uno de los indices de mi arreglo, si encuentro un indice que dentro tenga un objeto que coincida con el id que quiero borrar, entonces lo elimino.
let indiceProductoAEliminar = carritoDeCompras.findIndex (function (producto){
    return producto.id === productoAeliminar;
});

//verificar si el indice del elemento que se encontro es válido. Con el findIndex por a devolver el primer indice del elemento que cumpla con la condicion. Si no se encuentra el elemento que coincida con la condición, que no sea (pensado que tenemos un indice 0)
if (indiceProductoAEliminar !== -1 ){//0,1,2,3 disparan true y se activa el if. que el -1 dispara un false, ya no se activa el if.

    carritoDeCompras.splice(indiceProductoAEliminar, 1);
}
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito");


function vaciarCarritoCompleto(){
//Para vaciar todo el carrito
carritoDeCompras = [];

}


//Con funcion flecha 
carritoDeCompras.find(producto => producto.id === productoId);


//Sin funcion flecha
carritoDeCompras.find(function(producto){
    return producto.id === productoID; //true or false
})


/* El método forEach es un método de array de JS, que nos va a ayudar a poder ejecutar una función en cada elemento de nuestro array.

sintaxis de un forEach :
array.forEach (function(elemento, indice, arreglo))

*/

//Se agrega otra vez producto
carritoDeCompras.push(producto);

let total =0;

//oye js, en mi carrito de compras, para cada producto que encuentres, ejecuta una funcion donde tomes un producto como parametros, y al encontrarlo lo vas a multiplicar el precio de ese producto por tu cantidad. Ya que lo hayas hecho, vas a tomar ese valor y lo vas a sumar y a reasignar a la variable llamada total que declaré alla arribita
carritoDeCompras.forEach (
    function (producto){
    total += producto.precio * producto.cantidad;

});
console.log ("El total de tu carrito de compras es de: ", total);