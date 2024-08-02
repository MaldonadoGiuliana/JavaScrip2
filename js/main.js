let productos = [];

function agregarProducto(nombre, precio) {
  productos.push({ nombre, precio });
}

let continuar = true;

while (continuar) {
  let nombreProducto = prompt("Ingresa el nombre del producto:");
  let precioProducto = parseFloat(prompt("Ingresa el precio del producto:"));

  agregarProducto(nombreProducto, precioProducto);

  continuar = confirm("¿Deseas agregar otro producto?");
}

let total = productos.reduce((suma, producto) => suma + producto.precio, 0);

console.log("Lista de productos:");
productos.forEach(producto => {
  console.log(`- ${producto.nombre}: $${producto.precio.toFixed(2)}`);
});
console.log(`Total: $${total.toFixed(2)}`);
