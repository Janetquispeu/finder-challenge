/*
  constants and global functions
*/

var JSON_FILE   = '/books_schema.json';
var inputSearch = $("#inputSearch");
var btnSearch   = $("#btnSearch");


/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/
var loadJSON = function(url, callback){
    var xobj = new XMLHttpRequest();
    ("application/json");
    xobj.open("GET", url, true);
    xobj.onreadystatechange = function(responseText){
        if(xobj.readyState == 4 && xobj.status == "200"){
            var content = JSON.parse(xobj.responseText);
            callback.call(this, content);
            console.log(responseText);
        }
    };
    xobj.send(null);
};

