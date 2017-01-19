var yo = require("yo-yo");
var landing = require("../landing");
var webaudioapi = require("../webaudioapi/index.js");
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

