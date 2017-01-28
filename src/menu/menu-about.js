var yo = require("yo-yo");
var translate = require("../translate");

module.exports = yo`<div id="menu">

                      <a href="/"><div id="about"><small>${translate.message('gohome')}</small></div></a>
                      <a href="/about-me"><div id="about" class="menu-activo"><small>${translate.message('about')}</small></div></a>
                      <a href="/adventure"><div id="about"><small>${translate.message('whats')}</small></div></a>
                      
                  </div>`;