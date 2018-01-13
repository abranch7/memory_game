/*
 * Create a list that holds all of your cards
 */
var myCards = document.getElementsByClassName('card');
var moveCount = document.getElementsByClassName('moves')[0];
var stars =document.getElementsByClassName('fa-star');
var reset = document.getElementsByClassName('restart');

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
function resetGame(myCards) {
    shuffle(myCards);
    hideAll(myCards);
    resetCount();
    resetStars();
}

function hideAll(myArray) {
    for (var i = 0; i<myArray.length; i++){
        myArray[i].style.backgroundColor=" #2e3d49";
        myArray[i].style.color="#2e3d49";
    }
}

function resetCount() {
    moveCount = 0;
}

function resetStars() {
    for (var i=0; i<stars.length ; i++){
        stars[i].classList.remove('outline');
    }
}

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
