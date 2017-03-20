/// <reference path="../../vendor/awesomplete.d.ts" />
/// <reference path="../../node_modules/@types/underscore/underscore.d.ts" />


import * as _ from 'underscore';

class callingAjaxAwesomplete{
	public json_file:string = "/books-schema.json";
	
	public searchForm(){
		var xobj= new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open("GET",this.json_file,true);
		xobj.onreadystatechange = function(responseText){
      if(xobj.readyState == 4 && xobj.status == 200){
        var content = JSON.parse(xobj.responseText);
        var list = content.data.map(function(object, index) { 
        	return object.title;
	      });
	      new Awesomplete(<HTMLElement>document.querySelector("#ajax-example input"),{ list: list });
	    }
    };
    xobj.send();
	}
	

	public callingList(){
		var tplTemplate = document.getElementById("tpl-template");
		var xobj= new XMLHttpRequest();
		var compiled = _.template(tplTemplate.innerHTML);
		console.log(compiled);
		xobj.overrideMimeType("application/json");
		xobj.open("GET",this.json_file,true);
		xobj.onreadystatechange = function(responseText){
      var content = JSON.parse(xobj.responseText);
      console.log(content.entities);
      content.entities.forEach(function(currentValue,index) {
      	console.log(currentValue);
      	console.log(index);
      	
      });
    }	
	}
}

var root= new callingAjaxAwesomplete;
console.log(root.searchForm());
console.log(root.callingList());

