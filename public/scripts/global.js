/*
  constants and global functions
*/

var JSON_FILE   = '/books_schema.json';

var ajax = new XMLHttpRequest();
ajax.open("GET", "http://localhost:8089/books-schema.json", true);
ajax.onload = function() {
  var list = JSON.parse(ajax.responseText).data.map(function(object, index) { 
    return object.title;
  });
  new Awesomplete(document.querySelector("#ajax-example input"),{ list: list });
};
ajax.send();