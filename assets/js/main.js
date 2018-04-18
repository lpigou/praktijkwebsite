---
---
function ready(){
	var x = document.getElementsByClassName("page-image")[0];
	if(x == null) return;

	if(x.height > 300){
		x.style.marginTop = ""+-(x.height-300)/2.0+"px";
	}
}

var y = document.getElementsByClassName("page-image")[0];
if(y != null) y.onload = ready;
document.addEventListener("DOMContentLoaded", ready);
window.onresize = ready;
window.onload = ready;


function initMap() {
	var uluru = {lat: 51.0548008 , lng: 3.7512373};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 16,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}
