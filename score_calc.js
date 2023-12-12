/* 
Jinwoo Kim
CS351-01 Rahman
Final Project
*/


//implements on and off feature for buttons
function toggle(button) {
	if(button.classList.contains("on")) {
		button.classList.remove("on");
		button.classList.add("off");
	}
	else {
		button.classList.remove("off");
		button.classList.add("on");
	}

	updateDisplay();
}

//updates the text on page according to the sum of data values of buttons selected
function updateDisplay() {
	const count = document.querySelectorAll(".on");
	const display = document.getElementById("display");

	let sum = 0;
	count.forEach(btn => {
		sum += parseInt(btn.getAttribute("data-value"));
	});

	if (`${sum}` == 0) {
		display.textContent = " ";
	}
	else if (`${sum}` == 1) {
		display.textContent = "Parent: 1500-2400\nChild: 1000(300/500)-1600(400/800)";
	}
	else if (`${sum}` == 2) {
		display.textContent = "Parent: 2900-4800\nChild: 2000(500/1000)-3200(800/1600)";
	}
	else if (`${sum}` == 3) {
		display.textContent = "Parent: 4800-9600\nChild: 3200(800/1600)-6400(1600/3200)";
	}
	else if (`${sum}` > 3 && `${sum}` < 6) {
		display.textContent = "Parent: 12000\nChild: 18000(2000/4000)";
	}
	else if (`${sum}` > 5 && `${sum}` < 8) {
		display.textContent = "Parent: 18000\nChild: 12000(3000/6000)";
	}
	else if (`${sum}` > 7 && `${sum}` < 11) {
		display.textContent = "Parent: 24000\nChild: 16000(4000/8000)";
	}
	else if (`${sum}` > 10 && `${sum}` < 13) {
		display.textContent = "Parent: 36000\nChild: 24000(6000/12000)";
	}
	else if (`${sum}` >12) {
		display.textContent = "Parent: 48000\nChild: 32000(8000/16000)";
	}
	else {
		display.textContent = "exception: number out of bounds at updateDisplay()";
	}
}


//implements a drop down menu that changes data value for the bonus tile button specifically
function updateValue(select) {
	const button = select.parentNode;
	const replacement = select.value;
	button.setAttribute("data-value", replacement);
	updateDisplay();
}

//implements on and off feature for yakuman buttons and fixes the score until unselected
function yakuman(button) {
	if(button.classList.contains("on")) {
		button.classList.remove("on");
		button.classList.add("off");
		updateDisplay();
	}
	else {
		button.classList.remove("off");
		button.classList.add("on");
		display.textContent = "Parent: 48000\nChild: 32000(8000/16000)";
	}
}