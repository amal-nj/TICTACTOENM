function playerLost(){
    setTimeout(function(){
    let $board=document.querySelector(".board");
    for(let i=0;i<squares;i++){
        let $square=document.getElementById(i);
        $square.style.margin=0;
        $square.style.boxShadow="none";
        $square.style.backgroundColor="transparent";
        $square.style.backgroundImage="none";


    }
        $board.style.boxShadow="5px 20px 20px #dfb912ea";
        $board.style.backgroundImage='url("skull.jpg")';
},1000);
}

var index=0;
var colors=["#DB162F"," #f5dd09ea","#C7FFDA"];
var shadow=["rgb(165, 8, 29)","dfb912ea","rgb(152, 219, 175)"];
// setInterval(changeColor,10000);
function changeColor(){
   
    document.querySelector("body").style.backgroundColor=colors[index];
    for(let i=0;i<squares;i++){
        let $square=document.getElementById(i);
        $square.style.backgroundColor=colors[index];
        $square.style.boxShadow="5px 10px 20px"+shadow[index];
    }
    index++;
    if(index==colors.length){
        index=0;
    }
  

}

function newGame(){
    let $board=document.querySelector(".board");
    for(let i=0;i<squares;i++){
        let $square=document.getElementById(i);
        $square.style.margin=10+"px";
        $square.style.boxShadow="5px 10px 20px #dfb912ea";
        $square.style.backgroundColor="#f5dd09ea";
    }
        $board.style.boxShadow="none";
        $board.style.backgroundImage='none';

}