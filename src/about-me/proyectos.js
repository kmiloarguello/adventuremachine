var translate = require("../translate");
var yo = require("yo-yo");

var card1 = yo`<div>
              <div class="card col s12 m6 l4">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="juli2.jpg" height="300">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Juliana Ruiz<i class="fa fa-angle-up right" aria-hidden="true"></i></span>
                  <p><a href="#">Website for a company</a></p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">K@PTA Website<i class="fa fa-angle-down right" aria-hidden="true"></i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    <div class="chip">
                      Website
                    </div>
                    <div class="chip">
                      HTML5
                    </div>
                    <div class="chip">
                      SASS
                    </div>
                    <div class="chip">
                      JQuery
                    </div>
                </div>
              </div>
              </div>`;
              
var card2 = yo`<div>
              <div class="card col s12 m6 l4">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="juli2.jpg" height="300">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Juliana Ruiz<i class="fa fa-angle-up right" aria-hidden="true"></i></span>
                  <p><a href="#">Website for a company</a></p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">K@PTA Website<i class="fa fa-angle-down right" aria-hidden="true"></i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    <div class="chip">
                      Website
                    </div>
                    <div class="chip">
                      HTML5
                    </div>
                    <div class="chip">
                      SASS
                    </div>
                    <div class="chip">
                      JQuery
                    </div>
                </div>
              </div>
              </div>`;

var card3 = yo`<div>
              <div class="card col s12 m6 l4">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="juli2.jpg" height="300">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">Juliana Ruiz<i class="fa fa-angle-up right" aria-hidden="true"></i></span>
                  <p><a href="#">Website for a company</a></p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">K@PTA Website<i class="fa fa-angle-down right" aria-hidden="true"></i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    <div class="chip">
                      Website
                    </div>
                    <div class="chip">
                      HTML5
                    </div>
                    <div class="chip">
                      SASS
                    </div>
                    <div class="chip">
                      JQuery
                    </div>
                </div>
              </div>
              </div>`;

module.exports = {
  card1 : card1,
  card2 : card2,
  card3 : card3
};