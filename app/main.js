// Globals
var restartButton =  document.getElementById('restartButton');
var spaces = document.getElementsByClassName('space');
var symbols = ['0', 'X'];
var turn = 0;
var notification = document.getElementById('notification');
var winnerMessage = document.getElementById('winnerMessage');

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
  winnerMessage.innerHTML = '';
  notification.style.display = 'none'

 	// Clear board and add click events on squares
 	for (var i = 0; i < spaces.length; i++) {
    spaces[i].innerHTML = '';
 		spaces[i].addEventListener("click", takesSpace);
 		}

 	}

 	function takesSpace() {

 		turn++;
 		this.innerHTML = symbols[turn % 2];
 		this.removeEventListener("click", takeSpace);

 		for (var i= 0; i < wins.length; i++) {
 		 if	(checkForWin(wins[i])) {
		
		// Clicking stops
		for (var j = 0; j < spaces.length; j++) {
        spaces[j].removeEventListener("click", takeSpace);
      }

       // Dislpay player victor notification
       notification.style.display = 'block';
       winnerMessage.innerHTML = "Yay! " + currentPlayer + " won!";

 		
 	}
 	else {
 		if (turn === 9) {

       // Dislpay player draw notification
 			notification.style.display = "block";
        	winnerMessage.innerHTML += "Bummer! It's a draw!";
     	}
      }
 	} 

 	}

 function checkForWin(winArray) {

  return spaces[winArray[0]].innerHTML !== '' && 
    spaces[winArray[0]].innerHTML === spaces[winArray[1]].innerHTML && 
    spaces[winArray[0]].innerHTML === spaces[winArray[2]].innerHTML;

}

 			
 




 