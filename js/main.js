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

/*


*/

function checkForMatch() {

  if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}
};


function flipCard(cardId) {

//let cardOne = cards[0];



//cardsInPlay.push(cardOne);

//console.log("User flipped queen");

//let cardTwo = cards[2]

//cardsInPlay.push(cardOne);

//console.log("User flipped king");

//console.log("user flipped " + cards[cardId]);

cardsInPlay.push(cards[cardId]);
console.log("User flipped " + cards[cardId]);

checkForMatch();

/*
let twoCardsPlay = false;
if (cardsInPlay.length === 2){
	twoCardsPlay = true;

	
}
*/

};

flipCard(0);
flipCard(2);

























