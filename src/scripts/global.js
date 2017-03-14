/*
  constants and global functions
*/

var JSON_FILE   = '/books-schema.json';

var loadJSON = function(url, callback){
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", url, true);
  xobj.onreadystatechange = function(responseText){
    if(xobj.readyState == 4 && xobj.status == "200"){
      var content = JSON.parse(xobj.responseText);
      callback.call(this, content);
    }
  };
  xobj.send();
};



