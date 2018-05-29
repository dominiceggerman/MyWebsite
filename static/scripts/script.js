// When user clicks button, toggle dropdown content
function drop() {
	document.getElementById("nav-drop");
}

// Close if user clicks outside of content
window.onclick = function(event) {
	if (!event.target.matches(".drop-btn")) {

		var drops = document.getElementByClassName("drop-content");
		for (var i = 0; i < drops.length; i++) {
			var openDrop = drops[i];
			if (openDrop.classList.contains("show")) {
				openDrop.classList.remove("show");
			}
		}
	}
}