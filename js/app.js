/*
 * Create a list that holds all of your cards
 */
var myCards = document.getElementsByClassName('card');
var moveCount = document.getElementsByClassName('moves')[0];
var totalMoves = moveCount.innerText;
var stars =document.getElementsByClassName('fa-star');
var reset = document.getElementsByClassName('restart')[0];
var myDeck = document.getElementsByTagName("ul")[1];
var unMatchedCards = myCards.length;
const successMessage = "You won the game. Click to play again.";



/*
 * 1. Display the cards on the page (run esposeCard on all cards)
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 // 2. add event listener to reset icon that:
     // a. sets moves to 0
     // b. runs resetCard() on all cards

 //3 . add event listener to the table (class=deck) that when:
//a. a first card is clicked, makes the font color white , background pink and holds class name in variable first-card (function exposeCard())
//b. when a second card is clicked, run exposeCard() and store class in variable (second-car)
//c. if first-card=second-card create a css transition to indicate success. Add 1 to matches-made variable
//d. if matches-made =8 :
    // 1.hide the table and display a message
    // 2. provide a button with event handler that when clicked:
    //     a. resets the table
    //     b. hides the success message and button
//d. if first-card != second card run resetCard() on each card that takes icon color and background color back to the original
//5. add 2 to counter

// Shuffle function from http://stackoverflow.com/a/2450976

// reset.addEventListener('click', shuffle);
reset.addEventListener('click', resetGame);
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function resetGame() {
    shuffle(myCards);
    hideAll(myCards);
    resetCount();
    resetStars();
}
/* reset functions */
function hideAll(myArray) {
    for (var i = 0; i<myArray.length; i++){
        myArray[i].style.backgroundColor="#2e3d49";
        myArray[i].style.color="#2e3d49";
    }
}

function resetCount() {
    moveCount.innerText = 0;
}

function resetStars() {
    for (var i=0; i<stars.length ; i++){
        stars[i].classList.remove('outline');
    }
}
/* end reset functions */
//code to flip a card, flip a second card, test for equivalence, add moves, change stars, flip back if no match, decrement remaining cards if matched
myDeck.addEventListener("click", flipCard);
//
// function flipPair(a,b) {
//     var One = flipCard(a);
//     var Two = flipCard(b);
//     console.log(One, Two);
//     // if (One === Two) {
//     //     One.classList.add('match');
       //      One.classList.remove('open');
       //     Two.classList.add('match');
       //      Tow.classList.remove('open');
//     //     One.stopPropagation();
       //     Two.stopPropagation();

//     //    unMatchedCards = unMatchedCards -2;
                if (unMatchedCards = 0) {
                    success();
                }
//     // }
//     // else if (One !== Two) {
//     //     //i need to return the event for each and evt.classList.remove('open')
//     //
//     // }
// totalMoves +=1;
//  }
function flipCard(evt) {
    console.log("flipcard started", evt);
    var className = evt.target.classList;

    evt.target.classList.add('open');
    evt.target.style.color("white");

    console.log(className);
    return className;
}
//control the styling of the stars as number of moves increases
function stars(numMoves) {
    if (10< numMoves && numMoves <=12) {
    //add outline class to 3rd star
    }
    else if (12<numMoves && numMoves<=13) {
        //add outline class to 2nd and third star
    }
    else if (13<numMoves) {
        //add outline class to all stars
    }

}

//success function
function success() {
    //remove outlline from all stars
    var stars =document.getElementsByClassName("fa-star");
    for (var i = 0; i<stars.length; i++) {
        stars[i].classList.remove('outline');
        console.log("outline "+i);
    }
    resetGame();
    var successDiv = document.createElement('div');
    var successP = document.createElement('p');
    var successP.textContent = "Do you want to play again?";
    successDiv.style.width = "960px";
    successDiv.style.height = "500px";
    successDiv.style.background = "#F6F6F6";
    successDiv.style.color = "#FF0000";
    successDiv.style.zIndex = "10";
    successDiv.appendChild(successMessage);
    document.body.appendChild("successDiv");
    //shuffle
    //hide
    //remove div with msg
}

//code to show that you won a game
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
