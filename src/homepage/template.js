var yo = require("yo-yo");
var landing = require("../landing");
// var webaudioapi = require("./audio.js");
var color = require("./scripts.js");

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

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

function playSound(buffer){
    var src = audioCtx.createBufferSource();
    src.buffer = buffer;
    src.connect(audioCtx.destination);
    src.start(0);
}

var request = new XMLHttpRequest();
request.open("GET","worlds_mezcla.mp3",true);
request.responseType = "arraybuffer"

request.onload = function(argument){
    audioCtx.decodeAudioData(request.response, playSound, error);
}

function error(){
    alert("error" + error);
}
request.send();