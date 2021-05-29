//-- Importar el módulo FS
const fs = require('fs');

//-- Nombre del fichero JSON a leer
const FICHERO_JSON = "tienda.json";

//-- Leer el fichero JSON
const  tienda_json = fs.readFileSync(FICHERO_JSON);

//-- Crear la estructura tienda a partir del contenido del fichero
const tienda = JSON.parse(tienda_json);
username = 'Manuel';
direction = 'Moreno Nieto';
card_number = '123456789';

//-- Cantidad de pedidos realizados
number_orders = tienda[2]["pedidos"].length;
tienda[2]["pedidos"][number_orders] = Crear_Pedido(username,direction,card_number);

//-- Convertir la variable a cadena JSON
let myJSON = JSON.stringify(tienda);
//-- Guardarla en el fichero destino
fs.writeFileSync(FICHERO_JSON, myJSON);