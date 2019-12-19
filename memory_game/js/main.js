var cards = [
    {
        name: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png" 
    },
    {
        name: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"   
    },
    {
        name: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        name: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
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
    console.log("User flipped " + cards[cardId].name);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);

    cardsInPlay.push(cards[cardId].name);
    if(cardsInPlay.length === 2){
        checkforMatch();
    }    
}

flipCard(0);
flipCard(1);
console.log(cardsInPlay);
