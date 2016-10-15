var page = require("page");
var yo = require("yo-yo")

var main = document.getElementById('main-container');



page('/', function(ctx, next) {
    
    var el = yo`<div class="container">
                    <div class="row">
                        <div class="col s12">
                            <div id="contenedor">
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
                            </div>
                        </div>
                    </div>
                </div>`;
                    
    main.appendChild(el);
});

page('/about-me' , function (ctx, next){
    main.innerHTML = '<h1>ABOUT ME</h1>';
});

page();