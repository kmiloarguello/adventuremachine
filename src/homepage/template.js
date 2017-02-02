var yo = require("yo-yo");
var landing = require("../landing");
var color = require("./toggle-color.js");
var BufferLoader = require("./buffer-loader.js");

var beatBox = yo`<div id="contenedor">
                       <ul>
                           <li id="btnHousing1" onclick=${color.green}  ></li>
                           <li id="btnHousing2" onclick=${color.red}    ></li>
                           <li id="btnHousing3" onclick=${color.red2}   ></li>
                           <li id="btnHousing4" onclick=${color.blue}   ></li>
                           <li id="btnHousing5" onclick=${color.green2} ></li>
                           <li id="btnHousing6" onclick=${color.red3}   ></li>
                           <li id="btnHousing7" onclick=${color.blue2}  ></li>
                           <li id="btnHousing8" onclick=${color.blue3}  ></li>
                           <li id="btnHousing9" onclick=${color.green3} ></li>
                            
                        </ul>
                    </div>`;
                    
module.exports = landing(beatBox);

/////////////////////////////



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