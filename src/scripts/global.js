/*
  constants and global functions
*/

var modal_ajax =(function(){
  var st={
    JSON_FILE : "/books-schema.json"
  }

  var dom={}

  var beforeCatchDom = function (){
    fn.loadJson(st.JSON_FILE,fn.searchForm);
  }

  var fn ={
    loadJson : function (url,callback){
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
    },
    searchForm : function (content) {
      var list = content.data.map(function(object, index) { 
        return object.title;
      });
      new Awesomplete(document.querySelector("#ajax-example input"),{ list: list });
    }
  }
  
  var initialize = function(){
    beforeCatchDom();
  }

  return{
    init:initialize
  }

})()




