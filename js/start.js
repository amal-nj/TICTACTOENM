var $start = document.getElementById("start");
$start.addEventListener("click", startGame);
var $mode = document.querySelectorAll(".choice");
$mode.forEach(function(element) {
  element.addEventListener("click", showChoice);
});

var modeChoice = "single"; //defualt is a single player
// var sizeChoice=3;//defult is a 3x3 board
var player1Icon = 'url("images/white face.png")';
var player2Icon = 'url("images/face.png")';
var computerIcon = 'url("images/face.png")';

var $iconList = document.querySelectorAll(".icon-link");

var $inst = document.getElementById("instructions");
$inst.addEventListener("click", showInst);
$iconList.forEach(function(element) {
  console.log(element);
  element.addEventListener("mouseover", showIcons);
  element.addEventListener("mouseleave", hideIcons);
  let $images = element.querySelectorAll("img");
  $images.forEach(function(item) {
    item.addEventListener("click", chooseIcon);
  });
});

function startGame() {
  showBoard(modeChoice);
}

function showChoice() {
  document.getElementById("mode").innerText = this.innerText;
  modeChoice = this.getAttribute("id");
}

function showIcons() {
  this.querySelector(".icon").style.display = "initial";
}

function hideIcons() {
  this.querySelector(".icon").style.display = "none";
}

function chooseIcon() {
  let iconChoice = this.parentNode.getAttribute("id");
  console.log(iconChoice);
  if (iconChoice == "player1Icon") {
    player1Icon = "url('" + this.getAttribute("src") + "')";
  } else if (iconChoice == "player2Icon") {
    player2Icon = "url('" + this.getAttribute("src") + "')";
  } else {
    computerIcon = "url('" + this.getAttribute("src") + "')";
  }
}

function showInst() {
  Swal.fire({
    title: "INSTRUCTIONS",
    text:
      "Tic-Tac-Toe is a classic two-player game played on a grid of 3x3 squares. The objective of the game is for players to strategically place their respective symbols (X or O) on the grid to form a line of three symbols horizontally, vertically, or diagonally.",
    width: "80%"
  });
}
