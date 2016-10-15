var page = require("page");
var empty = require("empty-element");
var template = require("./template");

var main = document.getElementById('main-container');

page('/adventure', function(ctx, next) {
    empty(main).appendChild(template);
});