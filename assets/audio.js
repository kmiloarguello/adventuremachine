
/* global AudioContext */
var context;
/* global BufferLoader */
var bufferLoader;
window.onload = init;

function init() {
    try {
        context = new AudioContext();
    }
    catch(e) {
        alert("Web Audio API no es soportado por este navegador");
    }
    bufferLoader = new BufferLoader(context,
    [
        'worlds_mezcla.mp3',
        '01.mp3',
    ],
    bufferLoadCompleted);
    bufferLoader.load();
}
var source;
function playSound(buffer, time) {
    source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    //source.loop = true;
    source.start(time);
    
}


function sonido(bufferList) {
    var beat = bufferList[0];
    var startTime = context.currentTime + 0.100;//100 milisegundos desde ahora
    var tempo = 128; //BPM
    var quarterNoteTime = 60 / tempo;

    playSound(beat, startTime);
    
}
function bufferLoadCompleted(){
}
