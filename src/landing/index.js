var yo = require("yo-yo");
var translate = require("../translate");
var $ = require("jquery");

module.exports = function landing(box){
    return yo`<div class="container">
                    <div class="row">
                        <div class="col s12">
                            
                            <a href="/"><h1>${translate.message('titulo')}</h1></a>
                            
                            ${ box }
                        </div>
                    </div>
                </div>`;
};


$(document).ready(function(){
    
    $(window).scroll(function(){
        var barra = $(window).scrollTop();
        var posicion = barra * 0.10;
        
        $('body').css({
            'background-position' : '0 -' + posicion + 'px'
        });
    });
    
});

