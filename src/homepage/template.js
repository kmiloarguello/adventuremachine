var yo = require("yo-yo");
var landing = require("../landing");

var beatBox = yo`<div id="contenedor">
                       <ul>
                           <li id="btnHousing1"  onclick="btnColor('btnHousing1'); sonido(bufferLoader.bufferList);"></li>
                           <li id="btnHousing2"  onclick="btnColor('btnHousing2'); sonido(bufferLoader.bufferList);"></li>
                           <li id="btnHousing3"  onclick="btnColor('btnHousing3'); sonido(bufferLoader.bufferList);"></li>
                           <li id="btnHousing4"  onclick="btnColor('btnHousing4'); sonido(bufferLoader.bufferList);"></li>
                           <li id="btnHousing5"  onclick="btnColor('btnHousing5'); sonido(bufferLoader.bufferList);"></li>
                           <li id="btnHousing6"  onclick="btnColor('btnHousing6'); sonido(bufferLoader.bufferList);"></li>
                           <li id="btnHousing7"  onclick="btnColor('btnHousing7'); sonido(bufferLoader.bufferList);"></li>
                           <li id="btnHousing8"  onclick="btnColor('btnHousing8'); sonido(bufferLoader.bufferList);"></li>
                           <li id="btnHousing9"  onclick="btnColor('btnHousing9'); sonido(bufferLoader.bufferList);"></li>
                        </ul>
                        <br>
                        <br>
                        <br>
                        <a href="/about-me">About Me</a>
                        <a href="/adventure">Adventure</a>
                    </div>`;
                    
module.exports = landing(beatBox);



