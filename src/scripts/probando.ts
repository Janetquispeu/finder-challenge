class callingAjax{
	public JSON_FILE:string;
	public xobj:any;

	constructor(url:string, ){
		xobj= new XMLHttpRequest();

	}
	public sendRequest(){
      xobj.overrideMimeType("application/json");
      xobj.open("GET", url, true);
      xobj.onreadystatechange = function(responseText){
        if(xobj.readyState == 4 && xobj.status == "200"){
          var content = JSON.parse(xobj.responseText);
          callback.call(this, content);
        }
      };
      xobj.send();
	}
}

class searchForm {
	public list:string;
	constructor(content:string) {
		list= content.data.map(function(object, index){
			return object.title;
		});
		new Awesomplete(document.querySelector("#ajax-example input"),{ list: list}
	}
}