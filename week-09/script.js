let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset');

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
	counter++;
	counterValue.innerHTML = counter;
    localStorage.setItem("count", counter);
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
	counter--;
	counterValue.innerHTML = counter;
    localStorage.setItem("count", counter);
});

// To reset the counter to zero
resetBtn.addEventListener('click', reset);

function reset() {
	counter = 0;
	counterValue.innerHTML = counter;
}

counterValue.innerHTML = localStorage.getItem('count');