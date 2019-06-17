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
	// byId("numbers").innerHTML = numbers.join('-');
	byId("len").innerHTML = numbers.length;
	byId("1st").innerHTML = numbers.slice(0,1);

	// var lst = []
	// for (let k = 0; k < 3; k++){
	// 	lst.push(numbers[k+1]);
	// }
	byId("2nd").innerHTML = numbers.slice(1, 4).join('-');

	// var third = []
	// for (let l = 0; l < 10; l++){
	// 	third.push(numbers[l+5]);
	// }
	byId("3rd").innerHTML = numbers.slice(4, 14).join('-');
	byId('4st').innerHTML = numbers.slice(14, -1).join('-')


}