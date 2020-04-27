

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



                 let cardsInPlay = [];




                             function flipCard() {
  
                                   let cardId = this.getAttribute('data-id');

                                        cardsInPlay.push(cards[cardId].rank);

                                          this.setAttribute('src', cards[cardId].cardsImages);

                           if (cardsInPlay.length === 2) {
                               checkForMatch();

                           }

//console.log("User flipped " + cards[cardId].rank);
//console.log(cards[cardId].cardsImages);
//console.log(cards[cardId].suit);

                           };


function checkForMatch() {

  if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}
};



                              function createBoard() {

                                     for (let i = 0; i < cards.length; i++) {
	
	                                       const cardElement = document.createElement('img');
	
	                                       cardElement.setAttribute('src', 'images/back.png');
	
	                                          cardElement.setAttribute('data-id', i);

	                                              cardElement.addEventListener('click', flipCard);

	                                    document.getElementById('game-board').appendChild(cardElement);
                                      }

                                 cardsInPlay = [];

                             };


//flipCard(0);
//flipCard(2);

createBoard();


























