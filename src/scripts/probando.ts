/// <reference path="../../vendor/awesomplete.d.ts" />
/// <reference path="../../typings/globals/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/underscore/underscore.d.ts" />

class modalFinder{
  private json_file:string = "/books-schema.json";
  public inputSearch : HTMLInputElement = <HTMLInputElement>document.getElementById("#inputSearch");
  public eliminate : HTMLElement = <HTMLAnchorElement>document.getElementById("#delete");

  public callingAJax(callback:any):any{
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET",this.json_file,true);
    xobj.onreadystatechange = function(responseText){
      if(xobj.readyState == 4 && xobj.status == 200){
        let content = JSON.parse(xobj.responseText);
        callback.call(this, content);
      }
    }
    xobj.send();
  }
  public searchForm(content:any):any{
    let list = content.data.map(function(object:any, index:number){
      return object.title;
    });
    new Awesomplete(<HTMLElement>document.querySelector("#ajax-example input"),{ list: list });
  }
  
  public callingList(content:any){
    let tplTemplate = document.getElementById("tpl-template");
    let compiled    = _.template(tplTemplate.innerHTML);
    let name        = content.entities.saved;
    let data:any    = (<HTMLScriptElement[]><any>document.getElementsByClassName("data"));

    let nameBook=name.map(function(object:any, index:number):any{
      let htmlCompiled : any = compiled({
        mivariable_label : object.label
      });
      $(htmlCompiled).appendTo(data);
    });
  }
  
  public activeButton(event:any):any{
    let element = <HTMLButtonElement> document.getElementById("btnSearch");
    let inputSearch = <HTMLInputElement>document.getElementById("inputSearch");
    let inputSearchLength = inputSearch.value.length;
    let evento = window.event;
    element.disabled = false;
    
    if(inputSearchLength == 0){
      element.disabled = true;
    }
  }
  
  public delete = (event: any) => {
    let parentTemporal = event.target.parentElement;
    this.findParent(parentTemporal);
  }

  public findParent = (parentTemporal:any):any => {
    console.log("parentTemporal", parentTemporal);
    if(parentTemporal.classList.contains('listData')){
      var listData:any = <HTMLScriptElement[]><any>document.getElementsByClassName("listData");
      console.log(listData);
      listData.remove();
    } else {
      let parentTemp= parentTemporal.parentElement;
      console.log("parentTemp", parentTemp);
      this.findParent(parentTemp);
    }
  }
}

var root= new modalFinder;

console.log(this.inputSearch);
console.log(this.eliminate);
root.callingAJax(root.searchForm);
root.callingAJax(root.callingList);
this.inputSearch.addEventListener("keyup",root.activeButton);
//$(document).on("click",".delete",root.delete);
document.addEventListener('click', root.delete);

