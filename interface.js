var squares=9;
createBoard();
function createBoard(){
    let $board=document.querySelector(".board");
    for(let i=0;i<squares;i++){
        let $square=document.createElement("div");
        $square.classList.add("grid");
        $square.setAttribute("id",i);
        $square.addEventListener('click',showMove);
        $board.appendChild($square);
    }
}

function showMove(){
    this.innerText="O";
    computerTurn();
}

function computerTurn(){
    let currentBoard=[];
    document.querySelectorAll(".grid").forEach(function(element){
            currentBoard.push(element.innerText);
    })
    console.log(currentBoard);
    let result=minimaxPrune(currentBoard,6,-Infinity,Infinity,max)[1];
    console.log("result: "+result);
    document.getElementById(result).innerText="X";



}