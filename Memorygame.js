let card = document.getElementsByClassName("card");
let cards = [...card];
for (var i = 0; i < cards.length; i++) {
	cards[i].addEventListener("click", flipCard);
};

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let movesCounter = document.querySelector(".moves")
var second = 0 
var minute = 0;
var timer = document.querySelector(".timer");
var interval;
var matchedPair = 0;
let modal = document.getElementById("modal")

function shuffle(array) {
	var copy = array.slice(0);
	return array.reduce(function(acc) {
		acc.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
		return acc;
	}, []);
}

const deck = document.getElementById("card-deck");
function startGame() {
	matchedPair = 0;
	
	moves = 0;
	movesCounter.innerHTML = moves;

	var timer = document.querySelector(".timer");
	timer.innerHTML = "0 mins 0 secs";
	clearInterval(interval);

	var shuffledCards = shuffle(cards);
	for (var i= 0; i < shuffledCards.length; i++){
      Array.prototype.forEach.call(shuffledCards, function(item){
         deck.appendChild(item);
      });
	  cards[i].addEventListener("click", flipCard);
   }
}

window.onload = startGame();

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
  moveCounter();
  if (matchedPair === 12) {
	modalPopup ()
  }
}

function checkForMatch() {
  let isMatch = firstCard.type === secondCard.type;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  matchedPair++;
  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

function moveCounter(){    
    moves++;    
    movesCounter.innerHTML = moves;
	if (moves === 1) {
		second = 0;
		minute = 0; 
        hour = 0;
        startTimer();
	}
}

function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

function modalPopup () {
	 
		clearInterval(interval);
		finalTime = timer.innerHTML
		modal.classList.add("show");
		document.getElementById("final-moves").innerHTML = moves;
		document.getElementById("finalTime").innerHTML = finalTime;
	
}

function playAgain(){
    modal.classList.remove("show");
	for (var i = 0; i < cards.length; i++) {
		cards[i].classList.remove('flip')
	}
	resetBoard()
    startGame();
}