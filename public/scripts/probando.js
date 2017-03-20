/// <reference path="../../vendor/awesomplete.d.ts" />
/// <reference path="../../node_modules/@types/underscore/underscore.d.ts" />
"use strict";
exports.__esModule = true;
var _ = require("underscore");
var callingAjaxAwesomplete = (function () {
    function callingAjaxAwesomplete() {
        this.json_file = "/books-schema.json";
    }
    callingAjaxAwesomplete.prototype.searchForm = function () {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open("GET", this.json_file, true);
        xobj.onreadystatechange = function (responseText) {
            if (xobj.readyState == 4 && xobj.status == 200) {
                var content = JSON.parse(xobj.responseText);
                var list = content.data.map(function (object, index) {
                    return object.title;
                });
                new Awesomplete(document.querySelector("#ajax-example input"), { list: list });
            }
        };
        xobj.send();
    };
    callingAjaxAwesomplete.prototype.callingList = function () {
        var tplTemplate = document.getElementById("tpl-template");
        var xobj = new XMLHttpRequest();
        var compiled = _.template(tplTemplate.innerHTML);
        console.log(compiled);
        xobj.overrideMimeType("application/json");
        xobj.open("GET", this.json_file, true);
        xobj.onreadystatechange = function (responseText) {
            var content = JSON.parse(xobj.responseText);
            console.log(content.entities);
            content.entities.forEach(function (currentValue, index) {
                console.log(currentValue);
                console.log(index);
            });
        };
    };
    return callingAjaxAwesomplete;
}());
var root = new callingAjaxAwesomplete;
console.log(root.searchForm());
console.log(root.callingList());
