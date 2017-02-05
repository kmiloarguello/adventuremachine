var yo = require("yo-yo");
var landing = require("../landing");
var color = require("./toggle-color.js");
var menu = require("../menu/menu-home.js");

//Array para el numero de botones a renderizar con function map
var beatBox = lista(Array(72).fill(0).map( (e,i) => 'btnHousing' + (i + 1) ));
  
function lista(items){
  return yo`<div id="contenedor" class="container">
            <div class="row">
              <ul>
                ${items.map((item) => { return yo`<li id=${item} class="col s1" onclick=${color.red}></li>` })}
              </<ul>
            </div>
              ${menu}
            </div>`;
}

module.exports = landing(beatBox);
