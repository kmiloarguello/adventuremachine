var yo =require("yo-yo");

var el = yo`<footer>
              <a href="/about-me"><div id="about"><small>ABOUT ME</small></div></a>
              <div id="controls"><small><i aria-hidden="true" class="fa fa-upload"></i></small></div>
              <div id="controls"><small><i aria-hidden="true" class="fa fa-play"></i></small></div>
              <div id="controls"><small><i aria-hidden="true" class="fa fa-volume-up"></i></small></div>
              <a href="/adventure"><div id="about"><small>WHAT IS IT?</small></div></a>
              <p>Camilo Λrguello</p>
              <p>2016</p>
            </footer>`;
            
document.body.appendChild(el);