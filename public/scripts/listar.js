$(document).ready(function(){
	var modal_ajax = (function(){
		var st={
			linkSave : "#link-save",
			tplTemplate : "#tpl-template",
			data : ".data",
			typeTerror : ".searchSave"
		}
		var dom={}
		var global={}

		var catchDom = function(){
			dom.linkSave =$(st.linkSave);
			dom.tplTemplate = $(st.tplTemplate);
			dom.data = $(st.data);
			dom.typeTerror= $(st.typeTerror);
		}

		var afterCatchDom = function(){
			global.compiled = _.template(dom.tplTemplate.html());
			events.mostrarTable();
			//fn.hover();

		}

		var suscribeEvents = function(){
			$(document).on("mouseover",".listData",events.mouseOver);
			$(document).on("mouseout",".listData",events.mouseOut);
	  	$(document).on("click",".delete",events.delete);
		}

		var events = {
			mostrarTable : function(){
				$.getJSON("http://localhost:8089/books-schema.json",function(value){
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
			mouseOver : function(){
        var div ="<div class=opcion><a href='#' class='delete'>Eliminar</a>|<a href='#'>Modificar</a></div>";
        console.log($(this).parent());
        $(div).appendTo($(this));
        $(".opcion").css("display","block");
			},
			mouseOut : function () {		
		  	$(".opcion").remove();		    
			},
			delete : function(){
				$(this).parent().remove();
			}
		}

		/*var fn= {
			hover : function(){
				$(".searchSave").hover(function(){
				  $(this).css("background-color", "yellow");
					}, function(){
					$(this).css("background-color", "pink");
				});
			}
		}*/
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