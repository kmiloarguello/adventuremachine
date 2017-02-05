var BufferLoader = require("./buffer-loader.js");

// Funcion que guarda la clase y el id del color
function myColor(clase, id){
  clase.split(' ').forEach(function(s) {
    id.classList.toggle(s);
  });
}
window.onload = init;
var context;
var audio;

function init(){
    try{
        context = new window.AudioContext();
    }
    catch(e){
        alert("Web Audio API no es soportado por este navegador");
    }
    audio = new BufferLoader.BufferLoader(
        context,
        [
            "01.mp3",
            "worlds_mezcla.mp3"
        ],
        audioCompletado);
    audio.load();
}
function audioCompletado(){}
function loadSonido(buffer, time){
    var src = context.createBufferSource();
    src.buffer = buffer;
    src.connect(context.destination);
    src.start(time);    
}
function playSonido(bufferList){
    var beat = bufferList[0];
    var tiempo = context.currentTime;
    loadSonido(beat,tiempo);
    console.log("Juli ♥");
}

// Funciones color verde
function toggleColorGreen() {
  var myGreen = document.getElementById("btnHousing1");
  myColor('box-green',myGreen);
  console.log(BufferLoader);
  // playSonido(BufferLoader.bufferList);
}
function toggleColorGreen2() {
  var myGreen = document.getElementById("btnHousing5");
  myColor('box-green',myGreen);
}
function toggleColorGreen3() {
  var myGreen = document.getElementById("btnHousing9");
  myColor('box-green',myGreen);
}

//Funciones color Rojo
function toggleColorRed() {
  var myRed = document.getElementById("btnHousing2");
  myColor('box-red',myRed);
}
function toggleColorRed2() {
  var myRed = document.getElementById("btnHousing3");
  myColor('box-red',myRed);
}
function toggleColorRed3() {
  var myRed = document.getElementById("btnHousing6");
  myColor('box-red',myRed);
}

//Funciones color Azul
function toggleColorBlue() {
  var myBlue = document.getElementById("btnHousing4");
  myColor('box-blue',myBlue);
}
function toggleColorBlue2() {
  var myBlue = document.getElementById("btnHousing7");
  myColor('box-blue',myBlue);
}
function toggleColorBlue3() {
  var myBlue = document.getElementById("btnHousing8");
  myColor('box-blue',myBlue);
}


module.exports = {
  green  : toggleColorGreen,
  green2 : toggleColorGreen2,
  green3 : toggleColorGreen3,
  red    : toggleColorRed,
  red2   : toggleColorRed2,
  red3   : toggleColorRed3,
  blue   : toggleColorBlue,
  blue2  : toggleColorBlue2,
  blue3  : toggleColorBlue3
};
