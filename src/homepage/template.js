var yo = require("yo-yo");
var landing = require("../landing");
var color = require("./scripts.js");
var menu = require("../menu/menu-home.js");

var beatBox = lista([
  'btnHousing1',
  'btnHousing2',
  'btnHousing3',
  'btnHousing4',
  'btnHousing5',
  'btnHousing6',
  'btnHousing7',
  'btnHousing8',
  'btnHousing9'
  ]);
  
function lista(items){
  return yo`<div id="contenedor">
              <ul>
                ${items.map((item) => { return yo`<li id=${item}></li>` })}
              </<ul>
              ${color}
              ${menu}
            </div>`;
}

module.exports = landing(beatBox);
