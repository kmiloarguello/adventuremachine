var yo = require("yo-yo");
var landing = require("../landing");
var color = require("./toggle-color.js");
var color = require("./scripts.js");
var menu = require("../menu/menu-home.js");

//Array para el numero de botones a renderizar
var beatBox = lista(Array(72).fill(0).map((e,i)=> 'btnHousing'+(i+1)));
  
function lista(items){
  return yo`<div id="contenedor">
              <ul>
                ${items.map((item) => { return yo`<li id=${item}></li>` })}
              </<ul>
              ${menu}
            </div>`;
}

module.exports = landing(beatBox);
