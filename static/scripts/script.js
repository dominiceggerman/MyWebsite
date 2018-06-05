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
function openTab(tabnum) {
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


// Project tabs

function openPage(pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
}