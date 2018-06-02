/* -------------------
Scripts for my website
------------------- */

// Nav

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

// Dropdown tabs

// Show tab
function dropTab() {
	document.getElementById("drop-tab").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.drop-btn')) {

		var dropdowns = document.getElementsByClassName("drop-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}