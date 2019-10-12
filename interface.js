var squares=9;
var win=0;
var lose=0;
createBoard();
function createBoard(){
    let $board=document.querySelector(".board");
    for(let i=0;i<squares;i++){
        let $square=document.createElement("div");
        let $squareText=document.createElement("span");
        $square.appendChild($squareText);

        $square.classList.add("grid");
        $square.setAttribute("id",i);
        $square.addEventListener('click',showMove);
        $board.appendChild($square);
    }
}

function showMove(){
    this.querySelector("span").innerText="o";
    this.style.backgroundImage='url("white face.png")';
    if(checkForWinner(boardArray())){
        win++;
        updateScore();
    }else if(checkEnd(boardArray())){
        alert("it's a tie");
    }
     else{
    computerTurn();
}
}

function computerTurn(){
  
    let result=minimax(boardArray(),max)[1];
    console.log(boardArray());
    console.log("result: "+result);
    document.getElementById(result).querySelector("span").innerText="x";
    document.getElementById(result).style.backgroundImage='url("face.png")';
    
    if(checkForWinner(boardArray())){
        lose++;
        updateScore();
        playerLost();
    }else if(checkEnd(boardArray())){
        alert("it's a tie");
    }
}

function boardArray(){
    let currentBoard=[];
    document.querySelectorAll(".grid").forEach(function(element){
        currentBoard.push(element.querySelector("span").innerText);
    })

    return currentBoard;

}

var $reset=document.getElementById("reset");
$reset.addEventListener('click',resetBoard);
function resetBoard(){
    document.querySelectorAll(".grid").forEach(function(element){
        element.querySelector("span").innerText="";
        element.style.backgroundImage= 'none';
    })
    newGame();
}

function updateScore(){
    document.getElementById("score").innerText="wins: "+win+", loses: "+lose;
}