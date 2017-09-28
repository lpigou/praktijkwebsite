function ready(){
	console.log("test");
	var x = document.getElementsByClassName("page-image")[0];
	console.log(x);
	console.log(x.height);



	if(x.height > 300){
		x.style.marginTop = ""+-(x.height-300)/2.0+"px";
	}
}

document.getElementsByClassName("page-image")[0].onload = ready;
document.addEventListener("DOMContentLoaded", ready);
window.onresize = ready;
window.onload = ready;