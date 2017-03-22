/// <reference path="../../vendor/awesomplete.d.ts" />
/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/underscore/underscore.d.ts" />
var modalFinder = (function () {
    function modalFinder() {
        var _this = this;
        this.json_file = "/books-schema.json";
        this.inputSearch = document.getElementById("#inputSearch");
        this.eliminate = document.getElementById("#delete");
        this["delete"] = function (event) {
            var parentTemporal = event.target.parentElement;
            _this.findParent(parentTemporal);
        };
        this.findParent = function (parentTemporal) {
            console.log("parentTemporal", parentTemporal);
            if (parentTemporal.classList.contains('listData')) {
                var listdata = document.getElementsByClassName("listData");
                console.log(listdata);
                listdata.remove();
            }
            else {
                var parentTemp = parentTemporal.parentElement;
                console.log("parentTemp", parentTemp);
                _this.findParent(parentTemp);
            }
        };
    }
    modalFinder.prototype.callingAJax = function (callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open("GET", this.json_file, true);
        xobj.onreadystatechange = function (responseText) {
            if (xobj.readyState == 4 && xobj.status == 200) {
                var content = JSON.parse(xobj.responseText);
                callback.call(this, content);
            }
        };
        xobj.send();
    };
    modalFinder.prototype.searchForm = function (content) {
        var list = content.data.map(function (object, index) {
            return object.title;
        });
        new Awesomplete(document.querySelector("#ajax-example input"), { list: list });
    };
    modalFinder.prototype.callingList = function (content) {
        var tplTemplate = document.getElementById("tpl-template");
        var compiled = _.template(tplTemplate.innerHTML);
        var name = content.entities.saved;
        var data = document.getElementsByClassName("data");
        var nameBook = name.map(function (object, index) {
            var htmlCompiled = compiled({
                mivariable_label: object.label
            });
            $(htmlCompiled).appendTo(data);
        });
    };
    modalFinder.prototype.activeButton = function (event) {
        var element = document.getElementById("btnSearch");
        var inputSearch = document.getElementById("inputSearch");
        var inputSearchLength = inputSearch.value.length;
        var evento = window.event;
        element.disabled = false;
        if (inputSearchLength == 0) {
            element.disabled = true;
        }
    };
    return modalFinder;
}());
var root = new modalFinder;
console.log(this.inputSearch);
console.log(this.eliminate);
root.callingAJax(root.searchForm);
root.callingAJax(root.callingList);
this.inputSearch.addEventListener("keyup", root.activeButton);
//$(document).on("click",".delete",root.delete);
document.addEventListener('click', root["delete"]);
