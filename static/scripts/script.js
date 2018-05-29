function openNav() {
	document.getElementById("side-nav").style.width = "20%";
	document.getElementById("body").style.marginLeft = "20%";
	// Opacity
	document.body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
}

function closeNav() {
	document.getElementById("side-nav").style.width = "0";
	document.getElementById("body").style.marginLeft = "0";
	// Opacity
	document.body.style.backgroundColor = "#818181";
}