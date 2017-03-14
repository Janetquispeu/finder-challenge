var modal_listar = (function(){
	var st = {
		linkSave    : "#link-save",
		tplTemplate : "#tpl-template",
		data        : ".data",
		typeTerror  : ".searchSave",
		delete	    : ".delete",
		inputSearch : "#inputSearch",
		btnSearch   : "#btnSearch"
	}
	var dom = {}
	var global = {}

	var catchDom = function(){
		dom.linkSave    = $(st.linkSave);
		dom.tplTemplate = $(st.tplTemplate);
		dom.data        = $(st.data);
		dom.typeTerror  = $(st.typeTerror);
		dom.delete      = $(st.delete);
		dom.inputSearch = $(st.inputSearch);
	}

	var afterCatchDom = function (){
		global.compiled = _.template(dom.tplTemplate.html());
		events.showList();
	}

	var suscribeEvents = function (){
		$(document).on("click",".delete",events.delete);
		dom.inputSearch.keyup(events.activeButton);

	}

	var events = {
		showList : function (){
			$.getJSON("/books-schema.json",function(value){
				$.each(value.entities.saved,function(val,object){
					console.log(val);
					console.log(object);
					var htmlCompiled = global.compiled({
						mivariable_label : object.label
					});

					$(htmlCompiled).appendTo(dom.data);
				});
			});
		},
		delete : function (){
			var listData = $(this).parent().parent();
			listData.remove();
			console.log(listData);
		},
		activeButton : function (event) {
			var inputSearch = dom.inputSearch.val();
		  var evento = window.event || elEvento;
		  $(st.btnSearch).attr("disabled", false);
		  
		  if(inputSearch == 0){
		 		$(st.btnSearch).attr("disabled", true);  	
		  }
		}
	}

	var initialize = function(){
		catchDom();
		afterCatchDom();
		suscribeEvents();
	}

	return{
		init:initialize
	}

})()

	
