//console.log("Up and running!");

/*
let cardOne = "queen";
let cardTwo = "queen";

let cardThree = "king";
let cardFour = "king";

//console.log("User flipped" + cardOne);

//console.log("User flipped" + cardTwo);
*/

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

let cardOne = cards[0];

let twoCardsPlay = false;

cardsInPlay.push(cardOne);

console.log("User flipped queen");

let cardTwo = cards[2]

cardsInPlay.push(cardOne);

console.log("User flipped king");

if (cardsInPlay.length === 2){
	twoCardsPlay = true;

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}
}