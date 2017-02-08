var BufferLoader = require("./buffer-loader.js");

// Funcion que guarda la clase y el id del color
function myColor(clase, id){
  clase.split(' ').forEach(function(s) {
    id.classList.toggle(s);
  });
}

// Funciones color verde
function toggleColorGreen() {
  var myGreen = document.getElementById(event.srcElement.id);
  myColor('box-green',myGreen);
}

//Funciones color Rojo
function toggleColorRed() {
  var myRed = document.getElementById(event.srcElement.id);
  myColor('box-red', myRed);
  
}


//Funciones color Azul
function toggleColorBlue() {
  var myBlue = document.getElementById(event.srcElement.id);
  myColor('box-blue',myBlue);
}

function randomColor(){
  getRandom(72,1);
}


function getRandom(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
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

module.exports = {
  green  : toggleColorGreen,
  red    : toggleColorRed, 
  blue   : toggleColorBlue,

};
