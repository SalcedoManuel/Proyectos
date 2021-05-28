//-- Importar el módulo FS
const fs = require('fs');

//-- Nombre del fichero JSON a leer
const FICHERO_JSON = "tienda.json";

//-- Leer el fichero JSON
const  tienda_json = fs.readFileSync(FICHERO_JSON);

//-- Crear la estructura tienda a partir del contenido del fichero
const tienda = JSON.parse(tienda_json);

//-- Cantidad de pedidos realizados
number_orders = tienda[2]["pedidos"].length;
console.log(number_orders);
//-- Añadir los pedidos al JSON
tienda[2]["pedidos"][number_orders] = new Object();
tienda[2]["pedidos"][number_orders].username = 'Manuel';
tienda[2]["pedidos"][number_orders].direction = 'Moreno';
tienda[2]["pedidos"][number_orders].card_number = '123456789';
tienda[2]["pedidos"][number_orders].products = {};

//-- Convertir la variable a cadena JSON
let myJSON = JSON.stringify(tienda);
//-- Guardarla en el fichero destino
fs.writeFileSync(FICHERO_JSON, myJSON);
console.log(tienda[2]);