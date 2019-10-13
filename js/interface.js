var squares=9;
var win=0;
var lose=0;
var tie=0;
var full=[];

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
        full.push(false);
    }
}

function showMove(){
    if(!full[this.getAttribute("id")]){
    this.querySelector("span").innerText="o";
    full[this.getAttribute("id")]=true;

    this.style.backgroundImage='url("images/white face.png")';
    if(checkForWinner(boardArray())){
        win++;
        updateScore();
    }else if(checkEnd(boardArray())){
        tie++;
        updateScore();
        itTie();
    }
     else{
    computerTurn();
}}
}

function computerTurn(){
  
    let result=minimax(boardArray(),max)[1];
    console.log(boardArray());
    console.log("result: "+result);
    document.getElementById(result).querySelector("span").innerText="x";
    full[document.getElementById(result).getAttribute("id")]=true;
    setTimeout(function(){
    document.getElementById(result).style.backgroundImage='url("images/face.png")';
    },500);
    
    if(checkForWinner(boardArray())){
        for(let i=0;i<boardArray().length;i++){
            full[i]=true;
        }
        lose++;
        updateScore();
        playerLost();
    }else if(checkEnd(boardArray())){
        tie++;
        itTie();
        updateScore();
    }
    console.log(branches);
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
    document.querySelectorAll(".grid").forEach(function(element,i){
        element.querySelector("span").innerText="";
        element.style.backgroundImage= 'none';
        full[i]=false;

    })
    newGame();
}

function updateScore(){
    document.getElementById("player").innerText=win;
    document.getElementById("computer").innerText=lose;
    document.getElementById("ties").innerText=tie;

}