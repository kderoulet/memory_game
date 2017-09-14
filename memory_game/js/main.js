var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen", 
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var successfulMatches = 0;
var failedMatches = 0;

var checkForMatch = function () {
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
		successfulMatches += 1;
	}
	else {
		alert("Sorry, try again.")
		failedMatches += 1;
	}
}
updateScore();
}

var flipCard = function () {
 var cardId = this.getAttribute("data-id");
 this.setAttribute("src", cards[cardId].cardImage);
 console.log("User flipped " + cards[cardId].rank);
 cardsInPlay.push(cards[cardId].rank);
 console.log(cards[cardId].cardImage);
 console.log(cards[cardId].suit);
 checkForMatch();
}

var createBoard = function () {
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement("img");
	cardElement.setAttribute("src", "images/back.png");
	cardElement.setAttribute("data-id", i);
	cardElement.addEventListener("click", flipCard);
	document.getElementById("game-board").appendChild(cardElement);

}
}

var newCards = document.getElementById("game-board").childNodes;
var resetBoard = function () {
	for (var i = 0; i < 4; i++) {
	newCards[i + 1].setAttribute("src", "images/back.png");
	cardsInPlay.pop();
}
}

var updateScore = function () {
document.getElementById("scoreboard").innerHTML = "Successful matches: " + successfulMatches + " | " + "Failed matches: " + failedMatches;
}

document.getElementById("reset").addEventListener("click", resetBoard);

createBoard();

