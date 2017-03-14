$(document).ready(function(){
	var modal_ajax = (function(){
		var st={
			linkSave    : "#link-save",
			tplTemplate : "#tpl-template",
			data        : ".data",
			typeTerror  : ".searchSave",
			delete	    : ".delete"
		}
		var dom={}
		var global={}

		var catchDom = function(){
			dom.linkSave    =$(st.linkSave);
			dom.tplTemplate = $(st.tplTemplate);
			dom.data        = $(st.data);
			dom.typeTerror  = $(st.typeTerror);
			dom.delete      = $(st.delete);
		}

		var afterCatchDom = function (){
			global.compiled = _.template(dom.tplTemplate.html());
			events.mostrarTable();
		}

		var suscribeEvents = function (){
			$(document).on("click",".delete",events.delete);

		}

		var events = {
			mostrarTable : function (){
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
	modal_ajax.init();
});