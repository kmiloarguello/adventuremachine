var yo = require("yo-yo");
var landing = require("../landing");
var color = require("./scripts.js");


var beatBox = yo`<div id="contenedor">
                       <ul>
                           <li id="btnHousing1" onclick="sonido(bufferLoader.bufferList);"></li>
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
