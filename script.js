var dropdown = document.getElementById("colorSelect");
var button = document.querySelector('input[type="button"]');
button.addEventListener("click", function(){
	var selectedIndex = dropdown.selectedIndex;
	dropdown.remove(selectedIndex);
})