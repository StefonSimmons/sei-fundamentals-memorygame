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
var scoreBoard = [];

function checkforMatch(){
    if(cardsInPlay[0] === cardsInPlay[1]){
        scoreBoard.push([cardsInPlay[0], cardsInPlay[1]]);
        //alert("You found a match! You've scored " + scoreBoard.length + " point!");   
        createScore();
    }
    else{
        alert("Sorry, try again");
    };
};

function flipCard(){
    
    var cardId = this.getAttribute("id");
    this.setAttribute("src", cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].name);
    if(cardsInPlay.length === 2){
        setTimeout(function() {checkforMatch();}, 500);

    };   
};

function createBoard(){
    for (i=0; i<cards.length; i++) {
        var cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    };
};

function createScore(){
    var score = document.querySelector(".score");
    score.innerHTML = scoreBoard.length;
};

function resetBoard(){
    var board = document.getElementsByClassName("board-clearfix")[0];
    
    while(board.hasChildNodes()){
        board.removeChild(board.firstChild);
    }
    while(cardsInPlay.length > 0){
        cardsInPlay.pop();
    }

    createBoard();
}


createBoard();

console.log(cardsInPlay);
console.log(scoreBoard);
console.log(scoreBoard.length);

