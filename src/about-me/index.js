var page = require("page");
var empty = require("empty-element");
var template = require("./template");
var title = require("title");
var translate = require("../translate");

var main = document.getElementById('main-container');

page('/about-me', function(ctx, next) {
    title('About Camilo');
    empty(main).appendChild(template);
});