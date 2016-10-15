var page = require("page");


var main = document.getElementById('main-container');

page('/about-me', function(ctx, next) {
    main.innerHTML ="HOLAAA";
});