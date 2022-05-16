
display = document.getElementById("display")
suma = document.getElementById("suma")
resta = document.getElementById("resta")
producto = document.getElementById("producto")
division = document.getElementById("division")
decimal = document.getElementById("decimal")
exponencial = document.getElementById("exponencial")
igual = document.getElementById("igual")
clear = document.getElementById("clear")
borrar = document.getElementById("del")
var score = 0;
var error = 0;
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
let digitos = document.getElementsByClassName("cdigito");
for (var i = 0; i < digitos.length; i++) {
  digitos[i].onclick = (ev)=>{
    digito(ev.target);
  }
};
function digito(boton)
{
  if (display.innerHTML=="0") {
    display.innerHTML = boton.value;
  }else {
    display.innerHTML += boton.value;
  }
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Resultado: " + eval(score) + " / 10";
}

function addScore() {
  score += "+" + 1;
}

function addError() {
  error += "+" + 1;
}

igual.onclick = () =>{
  display.innerHTML = eval(display.innerHTML);
}


var alfab="abcdefghijklmnñopqrstuvxyz"
var nump=2
var nrp=3
function corrixe(){
var acertos=0
var sol=""
fiestrar=open("","novar","width=300,height=350,scrollbars")
fiestrar.document.write("<table border='0' width='100%' cellspacing='0' cellpadding='4' bgcolor='#FFFFF2'><tr><td><p align='center'>")
for(i=1;i<=nump;i++){var senresp=true 
	for(j=1;j<=nrp;j++){
		if(eval("document.test.resp"+i+"["+(j-1)+"].checked")==true){
			sol+=alfab.substring(j-1,j);senresp=false;break
		}
}
if(senresp==true){sol+="-"}
}
var tempo= new Date()
fiestrar.document.write("<br>Hora: "+tempo.getHours()+":"+tempo.getMinutes())
fiestrar.document.write("<br>Fecha: "+tempo.getDate()+"/"+eval(tempo.getMonth()+1)+"/"+tempo.getYear())
fiestrar.document.write("<p align='center'><table>")
fiestrar.document.write("<tr><td colspan='4' align='center'><font size='5'>Resultados del test</font><p></td></tr>")
fiestrar.document.write("<tr><td width='33' bgcolor='#FFF4F4'>"+
"<p align='center'>Preg</td><td width='35' bgcolor='#FFF4F4' align='center'>"+
"Solu</td><td width='35' bgcolor='#FFF4F4' align='center'>Resp</td>"+
"<td width='35' bgcolor='#FFF4F4'><p align='center'>Resul</td></tr>")
for(i=1;i<=sol.length;i++){
	resposta=document.test.tras.value.substring(i-1,i)
	solucion=sol.substring(i-1,i)	
	if(resposta==solucion){
	acertos+=1
	fiestrar.document.write("<tr><td align='center'>"+i+
	"</td><td align='center'>"+resposta+"</td><td align='center'>"+solucion+
	"</td><td align='center'><font color='#009933'>acierto</font></td></tr>")
	}
	else{
	fiestrar.document.write("<tr><td align='center'>"+i+"</td><td align='center'>"+resposta+
	"</td><td align='center'>"+solucion+"</td><td align='center'><font color='#FF0000'>fallo</font></td></tr>")
	}
}
nota=10/nump*acertos;
if(Math.floor(nota)!=Math.ceil(nota)){cadea=""+nota;for(var i=0;i<=cadea.length;i++){
if(cadea.charAt(i)=="."){nota=cadea.substring(0,i+3);break;}}}
fiestrar.document.write("<tr><td colspan='4' align='center'>Aciertos: "+acertos+" de "+nump+"</td></tr>")
fiestrar.document.write("<tr><td colspan='4' align='center'>Nota: "+nota+"</td></tr>")
fiestrar.document.write("</td></tr><tr><td colspan='4' align='center'><p><form><input type='button' value='Cerrar' name='pecharf' onClick='window.close()' style='background-color: #FFCC66'></form></td></tr></table></td></tr></table>")
fiestrar.document.write("</table>")
fiestrar.document.close()
}
