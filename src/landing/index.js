var yo = require("yo-yo");

module.exports = function landing(box){
    return yo`<div class="container">
                    <div class="row">
                        <div class="col s12">
                            
                            <a href="/"><h1>Adventure Machine</h1></a>
                            
                            ${ box }
                        </div>
                    </div>
                </div>`;
}

