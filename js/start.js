var $start=document.getElementById("start");
$start.addEventListener('click',startGame);
var $mode=document.querySelectorAll(".choice");
$mode.forEach(function(element){
    element.addEventListener('click',showChoice);
})
var $boardSize=document.querySelectorAll(".option");
$boardSize.forEach(function(element){
    element.addEventListener('click',showOption);
})
var modeChoice="single";//defualt is a single player
var sizeChoice=3;//defult is a 3x3 board
var player1Icon='url("images/white face.png")';
var player2Icon='url("images/face.png")';
var computerIcon='url("images/face.png")';

var $iconList=document.querySelectorAll(".icon-link");
$iconList.forEach(function(element){
    console.log(element);
    element.addEventListener('mouseover',showIcons);
    element.addEventListener('mouseleave',hideIcons);
    let $images=element.querySelectorAll("img");
    $images.forEach(function(item){
        item.addEventListener('click',chooseIcon)
    })


})

function startGame(){
    showBoard(modeChoice,sizeChoice);

}

function showChoice(){
    document.getElementById("mode").innerText=this.innerText;
    modeChoice=this.getAttribute("id");
}

function showOption(){
    document.getElementById("board-size").innerText=this.innerText;
    sizeChoice=this.getAttribute("id");
   
}

function showIcons(){
    this.querySelector(".icon").style.display="initial";
}

function hideIcons(){

    this.querySelector(".icon").style.display="none";
}

function chooseIcon(){
    let iconChoice=this.parentNode.getAttribute("id");
    console.log(iconChoice);
    if(iconChoice=="player1Icon"){
        player1Icon="url('"+this.getAttribute("src")+"')";
        console.log(player1Icon);

    }
    else if(iconChoice=="player2Icon"){
        player2Icon="url('"+this.getAttribute("src")+"')";
    }
    else{
        computerIcon="url('"+this.getAttribute("src")+"')";

    }
}