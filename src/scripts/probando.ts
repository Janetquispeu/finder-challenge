/// <reference path="../../vendor/awesomplete.d.ts" />
/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/underscore/underscore.d.ts" />

class modalFinder{
  private json_file:string = "/books-schema.json";
  
  
  public searchForm(){
    var xobj= new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET",this.json_file,true);
    xobj.onreadystatechange = function(responseText){
      if(xobj.readyState == 4 && xobj.status == 200){
        var content = JSON.parse(xobj.responseText);
        var list = content.data.map(function(object:any, index:number) { 
          return object.title;
        });
        new Awesomplete(<HTMLElement>document.querySelector("#ajax-example input"),{ list: list });
      }
    };
    xobj.send();
  }
  
  public callingList(){
    var tplTemplate = document.getElementById("tpl-template");
    var compiled = _.template(tplTemplate.innerHTML);
    var xobj= new XMLHttpRequest();
    $.getJSON(this.json_file,function(value){
      $.each(value.entities.saved,function(val:number,object:any){
        var htmlCompiled = compiled({
          mivariable_label : object.label
        });

        $(htmlCompiled).appendTo(".data");
      });
    });
  }
  
  public activeButton(event:any):any{
    var element = <HTMLButtonElement> document.getElementById("btnSearch");
    var inputSearch = $("#inputSearch").val();
    var evento = window.event;
    element.disabled = false;
    
    if(inputSearch == 0){
      element.disabled = true;
    }
  }
  

  public delete(){
    var listData = $(this).parent().parent();
    listData.remove();
  }
}

var root= new modalFinder;
root.searchForm();
root.callingList();
$("#inputSearch").keyup(root.activeButton);
$(document).on("click",".delete",root.delete);
