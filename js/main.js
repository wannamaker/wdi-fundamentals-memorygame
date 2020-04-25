

const cards = [
{
rank: "queen",
suit: "hearts",
cardsImages: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardsImages: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardsImages: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "king-of-diamonds",
cardsImages: "images/king-of-diamonds.png"
}
];



const cardsInPlay = [];


function checkForMatch() {

  if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}
};


function flipCard(cardId) {

cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);

console.log(cards[cardId].cardsImages);
console.log(cards[cardId].suit);

checkForMatch();




};

flipCard(0);
flipCard(2);


























