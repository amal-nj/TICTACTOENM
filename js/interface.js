var squares=9;
var win=0;
var lose=0;
var tie=0;
var full=[];
var currentPlayer=true;
function showBoard(mode,size){


createBoard();
function createBoard(){
    showGamePage();
    setGrid();
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
    this.querySelector("span").innerText=currentPlayer?"o":"x";
  
    full[this.getAttribute("id")]=true;

    this.style.backgroundImage=currentPlayer?player1Icon:player2Icon;
   
    if(checkForWinner(boardArray())){
        if(currentPlayer){
            win++;}
        else{
            lose++;
        }
        updateScore();
    }else if(checkEnd(boardArray())){
        tie++;
        updateScore();
        itTie();
    }
     else{
    (mode=="single")?computerTurn():'';
    }
    if(mode=="multiplayer"){//give the turn to the next player if it's multiplyer mode
    currentPlayer= !currentPlayer;
    }
}
}


function computerTurn(){
  
    let result=minimax(boardArray(),max)[1];
    console.log(boardArray());
    console.log("result: "+result);
    document.getElementById(result).querySelector("span").innerText="x";
    full[document.getElementById(result).getAttribute("id")]=true;
    setTimeout(function(){
    document.getElementById(result).style.backgroundImage=computerIcon;
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
    currentPlayer=true;
    newGame();
}

function updateScore(){
    document.querySelectorAll(".player")[(mode=="single")?0:1].innerText=win;
    document.querySelectorAll(".computer")[(mode=="single")?0:1].innerText=lose;
    document.querySelectorAll(".ties")[(mode=="single")?0:1].innerText=tie;

}

function showGamePage(){

    document.querySelector(".start-page").style.display="none";
    document.querySelector(".main-game").style.display="initial";
    if(mode=="single"){
        document.getElementById("score-multi").style.display="none";
    }else{
        document.getElementById("score-single").style.display="none";
    
    }
    


}

function setGrid(){
    if(size=="3x3"){
        squares=9;
    }
    else if(size=="5x5"){
        console.log($(".grid"));
        console.log($(".board"));
        
        $(".board").css({"grid-template-columns": "1fr 1fr 1fr 1fr 1fr","grid-template-rows": "1fr 1fr 1fr 1fr 1fr"});
        squares=25;
    }else{

    }

}
}