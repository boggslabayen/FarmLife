var animalLength = document.querySelectorAll(".animals").length;

for (var i =0; i < animalLength; i++) {

	document.querySelectorAll(".animals")[i].addEventListener("click", function(){

	

	var buttonText = this.textContent
	


	makeSound(buttonText);
	clickState(buttonText);
	

	} );

	
}



	function makeSound(key) {

	switch (key) {

		case "🐶":
		var dog = new Audio('sounds/Dog.wav');
		dog.play();
		break;

		case "🐱":
		var cat = new Audio('sounds/Cat.wav');
		cat.play();
		break;

		case "🐔":
		var chicken = new Audio('sounds/Chicken.wav');
		chicken.play();
		break;

		case "🐵":
		var monkey = new Audio('sounds/Monkey.wav');
		monkey.play();
		break;

		case "🦁":
		var lion = new Audio('sounds/Lion.wav');
		lion.play();
		break;

		case "🐘":
		var elephant = new Audio('sounds/Elephant.wav');
		elephant.play();
		break;

		case "🐮":
		var cow = new Audio('sounds/Cow.wav');
		cow.play();
		break;

		case "🐐":
		var goat = new Audio('sounds/Goat.wav');
		goat.play();
		break;

		case "🐥":
		var bird = new Audio('sounds/Bird.wav');
		bird.play();
		break;

		default:
		console.log("No Music Found");

	}


	}

	function clickState(key) {

		var activeButton = document.querySelector("."+ key);
		activeButton.classList.add("pressed");

		setTimeout (function(){
		activeButton.classList.remove("pressed");
		}, 200);


	}


