var yo =require("yo-yo");
var translate = require("../translate");

var el = yo`<footer>
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
              <br>
              <div class="row">
                <div class="col s12 m6 idiomas">
                    <a class='dropdown-button btn' href='#' data-activates='dropdown1'><i class="fa fa-language" aria-hidden="true"></i></a>
                    <ul id='dropdown1' class='dropdown-content'>
                      <li><a href="#!" onclick=${lang.bind(null,'en-US')}>${translate.message('english')}</a></li>
                      <li><a href="#!" onclick=${lang.bind(null,'fr')}>${translate.message('french')}</a></li>
                      <li><a href="#!" onclick=${lang.bind(null,'es')}>${translate.message('spanish')}</a></li>
                    </ul>
                </div>
                
                <div class="col s12 m6 camilo"> 
                    <small>2017 | Camilo Λrguello ®</small>
                </div>
              </div>
            </footer>
            `;

/* global localStorage */
/* global location */

function lang(local){
  localStorage.local = local;
  location.reload();
  return false;
}


function onchange() {
  document.getElementById('sm1').classList.toggle('hide');
  document.getElementById('sm2').classList.toggle('hide');
}

function slider(){
  document.getElementById('volume1').classList.toggle('hide');
}



document.body.appendChild(el);