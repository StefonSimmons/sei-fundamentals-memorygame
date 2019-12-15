var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkforMatch(){
    if(cardsInPlay[0] === cardsInPlay[1]){
        console.log("You found a match!");
    }
    else{
        console.log("Sorry, try again");
    }
}

function flipCard(cardId){
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    if(cardsInPlay.length === 2){
        checkforMatch();
    }    
}

flipCard(3);
flipCard(2);
console.log(cardsInPlay);
