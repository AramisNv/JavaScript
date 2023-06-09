//1. Obtener los elementos del HTML para guardarlos en variables

//Almaceno el lugar de destino de mi tarjeta en una constante
const container = document.getElementById("product-container")
const botonAgregarProducto = document.getElementById("agregarProducto")

//Almacenar elementos del formulario en variables de JS objeto completo
let nombreProducto = document.getElementById("nombreProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let imagenProducto = document.getElementById("imagenProducto");

//Guardo los valores de mis inputs

let valorInputProducto= nombreProducto.value;

let valorInputDescripcion = descripcionProducto.value;

let valorInputImagen = imagenProducto.value;

console.log(valorInputDescripcion);




function agregarProducto(){

//Quiero que cada tarjetita tenga su propio div/contenedor
const productCard = document.createElement("div");

//Creo el elemento
productCard.innerHTML = `
    <img src="${valorInputImagen}" alt="Producto">
    <h3> ${valorInputProducto} </h3>
    <p> Descripcion: ${valorInputDescripcion}</p>
    <p> Precio: $9.99 </p>
    <button class="btn"> Agregar al carrito </button>
`;
//Agregar esa tarjeta de producto al container especificado(hijo)Inserto elemento
container.appendChild (productCard);
}

//Creamos el evento
botonAgregarProducto.addEventListener("click", agregarProducto);


