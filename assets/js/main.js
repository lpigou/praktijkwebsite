---
---

var links = [ "https://www.mtc-it4.be/patient/index.html#/appointments/multi/bjNkcWkyQmFRMkpDVTRFNndleFgzQUVXOUM5YmFUWU4wbHNlWHF6MnJNSDdDYUFQdWNjdzZNcm82MU9pYk00Uw==/",
              "https://www.mtc-it4.be/patient/index.html#/appointments/day/bjNkcWkyQmFRMkpDVTRFNndleFgzTlliK2NyRnpSbkdTQ2dVTjRhbUw3MVpTaVhobExFdVowTnVQUG5vZGM2Tw==/"];

var afspraakLink = function() {
	// get a random number between 0 and the number of links
	var randIdx = Math.random() * links.length;
	// round it, so it can be used as array index
	randIdx = parseInt(randIdx, 10);
	// construct the link to be opened
	var link = links[randIdx];

	return link;
};

var randomLinks = function(){
	var knoppen = document.getElementsByClassName("afspraak-knop");
	//console.log("random");

    for (var i = knoppen.length - 1; i >= 0; i--) {
    	var knop = knoppen[i];
    	if(knop){
    		knop.href = afspraakLink();
    	}
    }
    return;
};


function ready(){
	var x = document.getElementsByClassName("page-image")[0];
	if(x != null){
		if(x.height > 300){
			x.style.marginTop = ""+-(x.height-300)/2.0+"px";
		}
	}

	randomLinks();
	return;
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
