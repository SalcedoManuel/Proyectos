const fs = require('fs');

var score = 0;
var errors = 0;

//-- Nombre del fichero JSON a leer
const FICHERO_JSON = "test.json"

//-- Leer el fichero JSON
const  test_json = fs.readFileSync(FICHERO_JSON);

//-- Crear la estructura del test a partir del contenido del fichero
const test = JSON.parse(test_json);

//-- Creamos el array que tendrá solamente el array de palabras en inglés
const english_words = [];
//-- Creamos el array que tendrá solamente el array de palabras en español
const spanish_words = [];
//-- Creamos el array que tendrá solamente el array de las descripciones en inglés.
const description_words = [];

//-- Obtener el array de las palabras en inglés
let words = JSON.parse(test_json);

//-- Nos quedamos con las palabras en inglés con su definición y descripción.
words = words[0]["words"];

//-- Recorrer el array de las palabras en inglés
words.forEach((element, index)=>{
  let word = words[index]["name"];
  english_words.push(word);
});
//-- Recorrer el array de las palabras en español
words.forEach((element, index)=>{
  let word = words[index]["definition"];
  spanish_words.push(word);
});
//-- Recorrer el array de las descripciones en inglés.
words.forEach((element, index)=>{
  let word = words[index]["description"];
  description_words.push(word);
});



// La función Engine sirve para saber si se ha acertado o no.
function Engine(question, repose)
{
   if (repose == spanish_words[question]) {
        score++;
    }else{
        errors++;
    }
}