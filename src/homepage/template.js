var yo = require("yo-yo");
var landing = require("../landing");
var color = require("./scripts.js");
var BufferLoader = require("./buffer-loader.js");

var beatBox = yo`<div id="contenedor">
                       <ul>
                           <li id="btnHousing1"></li>
                           <li id="btnHousing2"></li>
                           <li id="btnHousing3"></li>
                           <li id="btnHousing4"></li>
                           <li id="btnHousing5"></li>
                           <li id="btnHousing6"></li>
                           <li id="btnHousing7"></li>
                           <li id="btnHousing8"></li>
                           <li id="btnHousing9"></li>
                            ${color}
                        </ul>
                    </div>`;
                    
module.exports = landing(beatBox);

/////////////////////////////

/*var audioCtx = new window.AudioContext();
var sonido;
function playSound(buffer,time){
    var src = audioCtx.createBufferSource();
    src.buffer = buffer;
    src.connect(audioCtx.destination);
    src.start(time);
}

var request = new XMLHttpRequest();
request.open("GET","01.mp3",true);
request.responseType = "arraybuffer";

request.onload = (argument) => {audioCtx.decodeAudioData(request.response, startShow, error)};
var error = () => { alert("error" + error) };
var startShow = (buffer) => { sonido = buffer };

function reproducir() {
    playSound(sonido);
}
request.send();
*/
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

var src;
function loadSonido(buffer,time){
    src = context.createBufferSource();
    console.log("holaaaa");
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

function audioCompletado() {
}

// document.addEventListener("keydown", playSonido(BufferLoader.BufferLoader.bufferList));



function suma(a,b){
    return a + b;
}
function resultado(){
    console.log(suma(30,4));
}
// var Rhythm = {};

// Rhythm.play = () => {
//     function playSound(buffer, time){
//         var source = context.createBufferSource();
//         source.buffer = buffer;
//         source.connect(context.destination);
//         source.start(time);
//     }
    
//     function sonido(bufferList){
//         var beat = bufferList[1];
//         var startTime = context.currentTime + 0.100;
//         var tempo = 80;
//         var eigthNoteTime = (60 / tempo) / 2;
        
//         for (var i=0; i<2; i++){
//             var time = startTime + i * 8 * eigthNoteTime;
//             playSound(beat, time);
//         }        
//     }
// };