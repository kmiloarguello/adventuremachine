var yo = require("yo-yo");
var translate = require("../translate");

module.exports = yo`<div id="menu">

              <a href="/about-me"><div id="about"><small>${translate.message('about')}</small></div></a>
              
              <div id="controls" onclick=${liked} class="btn tooltipped" data-position="bottom" data-delay="50" data-tooltip=${translate.message('menu-like')}>
                <small id="no-like" class="no-like"><i class="fa fa-heart" aria-hidden="true"></i></small>
                <small id="like"><i class="fa fa-heart-o" aria-hidden="true"></i></small>
              </div>              
              
              <div id="controls" onclick=${onchange} class="btn tooltipped" data-position="bottom" data-delay="50" data-tooltip=${translate.message('menu-play')}>
                <small id="sm1"><i aria-hidden="true" class="fa fa-play"></i></small>
                <small id="sm2" class="hide"><i class="fa fa-stop" aria-hidden="true"></i></small>
              </div>
            
              <div id="controls" class="btn tooltipped range-field" onclick=${slider} data-position="bottom" data-delay="50" data-tooltip=${translate.message('menu-volumen')}>
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
function liked(){
  document.getElementById('no-like').classList.toggle('no-like');
  document.getElementById('like').classList.toggle('no-like');   
}

function slider(){
  document.getElementById('volume1').classList.toggle('hide');
}
