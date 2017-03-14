function activeButton (event) {
	var inputSearch = $("#inputSearch").val();
  var evento = window.event || elEvento;
  $("#btnSearch").attr("disabled", false);
  if(inputSearch == 0){
 		$("#btnSearch").attr("disabled", true);  	
  }
}


