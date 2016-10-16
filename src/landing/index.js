var yo = require("yo-yo");
var translate = require("../translate");

module.exports = function landing(box){
    return yo`<div class="container">
                    <div class="row">
                        <div class="col s12">
                            
                            <a href="/"><h1>${translate.message('titulo')}</h1></a>
                            
                            ${ box }
                        </div>
                    </div>
                </div>`;
}

