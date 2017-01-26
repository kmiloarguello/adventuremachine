var yo = require("yo-yo");
var landing = require("../landing");
var translate = require("../translate");

var aboutme = yo`<div>
                <div id="section1">
                  <ul class="collection">
                    <li class="collection-item avatar">
                      <img src="camilo-arguello-pf.jpg" alt="Foto de Camilo Arguello en Toronto" class="circle">
                      <span class="title">
                        <b>
                          ${translate.message('texto_ab')}
                        </b>
                      </span>
                      <br>
                      <p>${translate.message('texto_ab_jb')}</p>
                    </li>
                    <li id="descripcion">
                        <p>${translate.message('texto_ab_t')}</p>
                    </li>
                    <li id="technologies">
                      <ul>
                        <li><img class="circle responsive-img" src="juli.jpg" width="100px"></li>
                        <li><img class="circle responsive-img" src="juli.jpg" width="100px"></li>
                        <li><img class="circle responsive-img" src="juli.jpg" width="100px"></li>
                        <li><img class="circle responsive-img" src="juli.jpg" width="100px"></li>
                        <li><img class="circle responsive-img" src="juli.jpg" width="100px"></li>
                      </ul>                    
                    <li>
                  </ul> 
                </div>
       
                </div>`;
                    
module.exports = landing(aboutme);
