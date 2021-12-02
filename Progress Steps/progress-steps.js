const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
	currentActive++

	if(currentActive > circles.length) {
		currentActive = circles.length;
	}

	update();
})

prev.addEventListener('click', () => {
	currentActive--;

	if(currentActive < 1) {
		currentActive = 1;
	}

	update();
})

function update() {
	circles.forEach((circle, idx) => {

		if (idx < currentActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	})

	const actives = document.querySelectorAll('.active');

	progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

	if (currentActive === 1) {
		prev.disabled = true;
	} else if (currentActive === circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}

/*

1. "next.addEventListener" registers a click and raises "currentActive" to 2. 

2. When "update()" function runs, it will start from the first circle in the Node list (logged with all the .circle classes from querySelectorAll), and will add .active to the current selected circle in the cycle. 

3. The update function will then cease, only to re-run when another click is registered

*/
