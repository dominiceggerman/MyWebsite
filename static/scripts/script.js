/* -------------------
Scripts for my website
------------------- */

// Nav

function openNav() {
	// Set side-nav width to 20% of page
	document.getElementById("side-nav").style.width = "20%";
	// Shift body by 20% of page
	document.getElementById("body").style.marginLeft = "20%";
	// Opacity
	document.body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
}
function closeNav() {
	// Close side-nav
	document.getElementById("side-nav").style.width = "0";
	// Reposition body to full page
	document.getElementById("body").style.marginLeft = "0";
	// Opacity
	document.body.style.backgroundColor = "#818181";
}


// CV tabs
function toggleAll() {
	// Get all pannels
	var alltabs = document.getElementsByClassName("panel-tab");
	for (var i = 0; i < alltabs.length; i++) {
		// Use toggleTab for every number in alltabs range
		toggleTab(i);
	}
}
function toggleTab(tabnum) {
	// Get all of the pannel tabs
	var pantab = document.getElementsByClassName("panel-tab");
	// For the specific panel, toggle active class
	pantab[tabnum].classList.toggle("active")
	// Select the panel content - next element after panel-tab
	var panel = pantab[tabnum].nextElementSibling;
	// Open and close panel to reveal content
	if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
	} else {
		panel.style.maxHeight = panel.scrollHeight + "px";
	}
}