//-- Servidor JSON

const http = require('http');
const fs = require('fs');
const PUERTO = 8080;

//-- Leer fichero JSON con los productos JSON
const CUBOS_JSON = fs.readFileSync('tienda.json');

//-- Obtener el array de los productos
let cubos = JSON.parse(CUBOS_JSON);
cubos = cubos[0]["products"];

//-- Array con el nombre de los productos
let productos = [];

//-- Recorrer el array de productos
cubos.forEach((element, index)=>{
    let cubo = cubos[index]["name"];
    productos.push(cubo);
  });
console.log(productos);