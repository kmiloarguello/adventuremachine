var page = require("page");
var empty = require("empty-element");
var template = require("./template");
var title = require("title");

var main = document.getElementById('main-container');

page('/', function(ctx, next) {
    title('Adventure Machine');
    empty(main).appendChild(template);
});