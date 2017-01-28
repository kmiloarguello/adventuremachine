var yo = require("yo-yo");
var landing = require("../landing");
var translate = require("../translate");
var menu = require("../menu/menu-it.js");

var adventure = yo`<div>
                    ${menu}
                    <p>${translate.message('texto_ad')}</p>
                    <p>${translate.message('texto_ad_t')}</p>
                    </div>`;
                    
module.exports = landing(adventure);