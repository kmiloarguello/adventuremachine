var yo = require("yo-yo");
var landing = require("../landing");
var color = require("./toggle-color.js");
var BufferLoader = require("./buffer-loader.js");

var beatBox = yo`<div id="contenedor">
                       <ul>
                           <li id="btnHousing1" onclick=${color.green}></li>
                           <li id="btnHousing2" onclick=${color.red}></li>
                           <li id="btnHousing3" onclick=${color.red2}></li>
                           <li id="btnHousing4" onclick=${color.blue}></li>
                           <li id="btnHousing5" onclick=${color.green2}></li>
                           <li id="btnHousing6" onclick=${color.red3}></li>
                           <li id="btnHousing7" onclick=${color.blue2}></li>
                           <li id="btnHousing8" onclick=${color.blue3}></li>
                           <li id="btnHousing9" onclick=${color.green3}></li>
                            
                        </ul>
                    </div>`;
                    
module.exports = landing(beatBox);

/////////////////////////////

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