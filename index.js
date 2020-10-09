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
		var dog = new Audio ("sounds/dog.wav");
		dog.play();
		break;

		case "🐱":
		var cat = new Audio ("sounds/cat.wav");
		cat.play();
		break;

		case "🐔":
		var chicken = new Audio ("sounds/chicken.wav");
		chicken.play();
		break;

		case "🐵":
		var monkey = new Audio ("sounds/monkey.wav");
		monkey.play();
		break;

		case "🦁":
		var lion = new Audio ("sounds/lion.wav");
		lion.play();
		break;

		case "🐘":
		var elephant = new Audio ("sounds/elephant.wav");
		elephant.play();
		break;

		case "🐮":
		var cow = new Audio ("sounds/cow.wav");
		cow.play();
		break;

		case "🐐":
		var goat = new Audio ("sounds/goat.wav");
		goat.play();
		break;

		case "🐥":
		var bird = new Audio ("sounds/bird.wav");
		bird.play();
		break;

		default:
		var horn = new Audio ("sounds/bike.wav");
		horn.play();

	}


	}

	function clickState(key) {

		var activeButton = document.querySelector("."+ key);
		activeButton.classList.add("pressed");

		setTimeout (function(){
		activeButton.classList.remove("pressed");
		}, 200);


	}


