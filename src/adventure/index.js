var page = require("page");
var empty = require("empty-element");
var template = require("./template");
var title = require("title");

var main = document.getElementById('main-container');

page('/adventure', function(ctx, next) {
    title('What is it?');
    empty(main).appendChild(template);
});