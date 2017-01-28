var yo = require("yo-yo");
var translate = require("../translate");

module.exports = yo`<div id="menu">

              <a href="/about-me"><div id="about"><small>${translate.message('about')}</small></div></a>
              
              <div id="controls" onclick=${onchange}>
                <small id="sm1"><i aria-hidden="true" class="fa fa-play"></i></small>
                <small id="sm2" class="hide"><i class="fa fa-pause" aria-hidden="true"></i></small>
              </div>
              
              <div id="controls" class="range-field" onclick=${slider}>
                <small><i aria-hidden="true" class="fa fa-volume-up"></i></small>
                <input class="hide" type="range" id="volume1" min=0 max=100 step=0 value='30'/>
              </div>
              
              <a href="/adventure"><div id="about"><small>${translate.message('whats')}</small></div></a>
              
              </div>
              `;

function onchange() {
  document.getElementById('sm1').classList.toggle('hide');
  document.getElementById('sm2').classList.toggle('hide');
}

function slider(){
  document.getElementById('volume1').classList.toggle('hide');
}
