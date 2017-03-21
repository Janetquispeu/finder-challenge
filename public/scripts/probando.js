/// <reference path="../../vendor/awesomplete.d.ts" />
/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/underscore/underscore.d.ts" />
var modalFinder = (function () {
    function modalFinder() {
        this.json_file = "/books-schema.json";
    }
    modalFinder.prototype.searchForm = function () {
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
    modalFinder.prototype.callingList = function () {
        var tplTemplate = document.getElementById("tpl-template");
        var compiled = _.template(tplTemplate.innerHTML);
        var xobj = new XMLHttpRequest();
        $.getJSON(this.json_file, function (value) {
            $.each(value.entities.saved, function (val, object) {
                var htmlCompiled = compiled({
                    mivariable_label: object.label
                });
                $(htmlCompiled).appendTo(".data");
            });
        });
    };
    modalFinder.prototype.activeButton = function (event) {
        var element = document.getElementById("btnSearch");
        var inputSearch = $("#inputSearch").val();
        var evento = window.event;
        element.disabled = false;
        if (inputSearch == 0) {
            element.disabled = true;
        }
    };
    modalFinder.prototype["delete"] = function () {
        var listData = $(this).parent().parent();
        listData.remove();
    };
    return modalFinder;
}());
var root = new modalFinder;
root.searchForm();
root.callingList();
$("#inputSearch").keyup(root.activeButton);
$(document).on("click", ".delete", root["delete"]);
