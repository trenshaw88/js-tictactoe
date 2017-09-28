// Globals
var restartButton =  document.getElementById('restartButton');
var spaces = document.getElementsByClassName('space');
var symbols = ['0', 'X'];
var turn = 0;

// Waits for page to load before doing interesting things
 document.onreadystatechange = function() {
 	if (document.readyState === "interactive") {
 		restartButton.onclick = startGame;
 		startGame();
 	}
 };

 function startGame() {

 	// Reset turn counter

 	turn = 0;

 	// Remove winner notification and make sure div is hidden

 	// Clear board and add click events on squares
 	for (var i = 0; i < spaces.length; i++) {

 		spaces[i].addEventListener("click", takesSpace);
 		}

 	}

 	function takesSpace() {
 		console.log(wins);

 		turn++;
 		this.innerHTML = symbols[turn % 2];
 		this.removeEventListener("click", takeSpace);

 		for ( var i=0; i < wins.length; i++) {
 			checkForWin(wins[i]);
 		}

 	}

 	function checkForWin(winArray) {

 		var temp = '';

 		for (var i = 0; i < winArray.length; i++) {

 			temp += spaces[i].innerHTML;
 		}

 			console.log(temp);
 			
 

 	}


 