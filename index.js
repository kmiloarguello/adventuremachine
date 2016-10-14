function btnColor(btn) {
    var property = document.getElementById(btn);
    if (property.className !== 'toggled') {
        property.className = 'toggled'
    }else {
        property.className = '';
    }
    
}


/* global AudioContext */
var context;
/* global BufferLoader */
var bufferLoader;
window.init();

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
    //source.playbackRate.value = 1.75;
    //source.loop = true;
    source.start(time);
    
}

function stopSound(buffer, time) {
    
    source.stop(time);
}

function sonido(bufferList) {
    var beat = bufferList[0];
    var startTime = context.currentTime + 0.100;//100 milisegundos desde ahora
    var tempo = 128; //BPM
    var quarterNoteTime = 60 / tempo;
    //stopSound(beat,startTime);
   if (source && source.playbackState == source.PLAYING_STATE){
       source.stop(0);
   }
    else{
    playSound(beat, startTime);
    }
}
function bufferLoadCompleted(){
}