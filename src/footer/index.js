var yo =require("yo-yo");
var translate = require("../translate");

var el = yo`<footer>
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

document.body.appendChild(el);