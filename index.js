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
		var dog = new Audio('sounds/cow.mp3');
		dog.play();
		break;

		case "🐱":
		var cat = new Audio('sounds/cow.mp3');
		cat.play();
		break;

		case "🐔":
		var chicken = new Audio('sounds/cow.mp3');
		chicken.play();
		break;

		case "🐵":
		var monkey = new Audio('sounds/cow.mp3');
		monkey.play();
		break;

		case "🦁":
		var lion = new Audio('sounds/frog.mp3');
		lion.play();
		break;

		case "🐘":
		var elephant = new Audio('sounds/frog.mp3');
		elephant.play();
		break;

		case "🐮":
		var cow = new Audio('sounds/frog.mp3');
		cow.play();
		break;

		case "🐐":
		var goat = new Audio('sounds/frog.mp3');
		goat.play();
		break;

		case "🐥":
		var bird = new Audio('sounds/frog.mp3');
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


