window.addEventListener("load", function() {
	let datum = new Date();
	let month = datum.getMonth()+1;
	document.getElementById("date").innerHTML = datum.getDate() + '.' + month + '.' + datum.getFullYear();
});

function rainbowTextAnim() {
	const textElement = document.querySelector('.jsAnimRainbow');
	textElement.classList.add('wave-animation');

	// Remove the animation class after the animation duration
	setTimeout(function() {
		textElement.classList.remove('wave-animation');
	}, 1000);
}

function mouseOver() {
	document.getElementById("date").style.color = 'red';
}

function mouseOut() {
	document.getElementById("date").style.color = 'black';
}


