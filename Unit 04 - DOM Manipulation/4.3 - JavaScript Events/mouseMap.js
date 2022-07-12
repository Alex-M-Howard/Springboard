document.addEventListener('DOMContentLoaded', function() {
	// My code here
	let body = document.querySelector('body');

	addEventListener('mousemove', function(event) {
		let viewHeight = window.innerHeight;
		let viewWidth = window.innerWidth;
		let x = event.pageX / viewWidth * 100;
		let y = event.pageY / viewHeight * 100;
		console.log('ViewHeight', viewHeight);
		console.log('ViewWidth', viewWidth);
		console.log('X', x);
		console.log('Y', y);
		body.style.backgroundColor = `rgb(${x}%, 0%, ${y}%)`;
	});

	//body.style.backgroundColor = 'blue';
});
