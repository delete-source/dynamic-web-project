var main = function() {

	var paused = false

	$('.arrowR').click(function() {
		paused = true;
		$('#slideshow > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
	});
		
	$('.arrowL').click(function() {
		paused = true;
		$('#slideshow > div:last')
		.fadeIn(1000)
		.prependTo('#slideshow')
		.next()
		.fadeOut(1000)
		.end();
	});


	
	setInterval(function() {
		if (paused === false) { 
			$('#slideshow > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slideshow');
		}
	},  5000);

};

$(document).ready(main);

window.addEventListener("load", function() {
	let datum = new Date();
	document.getElementById("date").innerHTML = datum.getDate() + '.' + datum.getMonth() + 1 + '.' + datum.getFullYear();
});

function rainbowTextAnim() {
	const textElement = document.querySelector('.jsAnimRainbow');
	textElement.classList.add('wave-animation');

	// Remove the animation class after the animation duration
	setTimeout(function() {
		textElement.classList.remove('wave-animation');
	}, 1000);
}

