var ajax = new XMLHttpRequest();
ajax.open("GET", "https://restcountries.eu/rest/v1/lang/fr", true);
ajax.onload = function() {
  var list = JSON.parse(ajax.responseText).map(function(i) { return i.name; });
  new Awesomplete(document.querySelector("#ajax-example input"),{ list: list });
};
ajax.send();