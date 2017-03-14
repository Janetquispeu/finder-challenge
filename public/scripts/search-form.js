function searchForm(content){
	var list = content.data.map(function(object, index) { 
    return object.title;
  });
  new Awesomplete(document.querySelector("#ajax-example input"),{ list: list });
}

