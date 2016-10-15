var yo = require("yo-yo");

module.exports = function landing(box){
    return yo`<div class="container">
                    <div class="row">
                        <div class="col s12">
                            
                            <h1>Adventure Machine</h1>
                            
                            ${ box }
                        </div>
                    </div>
                </div>`;
}

