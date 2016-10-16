var yo = require("yo-yo");
var landing = require("../landing");
var translate = require("../translate");

var aboutme = yo`<div><p>${translate.message('texto_ab')}</p>
                    <p>${translate.message('texto_ab_t')}</p>
                    </div>`;
                    
module.exports = landing(aboutme);