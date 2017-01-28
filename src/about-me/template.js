var yo = require("yo-yo");
var landing = require("../landing");
var translate = require("../translate");
var menu = require("../menu/menu-about.js");
var card = require("./proyectos.js");

var aboutme = yo`<div>
                ${menu}
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
                  </ul>
                </div>
                <div>
                  <ul class="collection">
                  <li>${card}</li>
                  </ul>
                </div>
                </div>`;
module.exports = landing(aboutme);

console.log(translate.message('texto_ab_t'));

