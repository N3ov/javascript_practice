const byId = (id) => document.getElementById(id);

function pool(size, lowest, highest) {
	var numbers = [];
	for (let i = 0; i < size; i++) {
		let add = true;
		let randomNumber = Math.floor(Math.random() * highest) + 1;
		for (let j = 0; j < highest; j++) {
			if (numbers[j] == randomNumber) {
				add = false;
			}
		}
		if (add) {
			numbers.push(randomNumber);
		} else {
			i--;
		}
	}
	byId("numbers").innerHTML = numbers.join('-');
	byId("len").innerHTML = numbers.length;
	byId("1st").innerHTML = numbers[0];


}