function playerLost() {
  setTimeout(function() {
    let $board = document.querySelector(".board");
    for (let i = 0; i < squares; i++) {
      let $square = document.getElementById(i);
      $square.style.margin = 0;
      $square.style.boxShadow = "none";
      $square.style.backgroundColor = "transparent";
      $square.style.backgroundImage = "none";
      full[i] = true;
    }
    $board.style.boxShadow = "5px 10px 20px black";
    $board.style.backgroundImage = 'url("images/skull.jpg")';
  }, 2000);
}

var index = 0;
var colors = ["#DB162F", " #FFCD1B", "#F8EFE4"];
var shadow = ["#be1229", "#FFB81C", "#e6d9c6"];
//setInterval(changeColor,10000);

//function is not actually used
function changeColor() {
  document.querySelector("body").style.backgroundColor = colors[index];
  for (let i = 0; i < squares; i++) {
    let $square = document.getElementById(i);
    $square.style.backgroundColor = colors[index];
    $square.style.boxShadow = "5px 10px 20px " + shadow[index];
  }
  index++;
  if (index == colors.length) {
    index = 0;
  }
}

function newGame() {
  let $board = document.querySelector(".board");
  for (let i = 0; i < squares; i++) {
    let $square = document.getElementById(i);
    $square.style.margin = 10 + "px";
    $square.style.boxShadow = "5px 10px 20px #FFB81C";
    $square.style.backgroundColor = "#FFCD1B";
  }
  $board.style.boxShadow = "none";
  $board.style.backgroundImage = "none";
}

function itTie() {

  Swal.fire("It's a tie");

  let $board = document.querySelector(".board");
  for (let i = 0; i < squares; i++) {
    let $square = document.getElementById(i);
    $square.style.backgroundColor = "rgba(240, 240, 240, 0.4)";
  }
  setTimeout(function() {
    for (let i = 0; i < squares; i++) {
      let $square = document.getElementById(i);
      $square.style.backgroundColor = " #FFCD1B";
    }
  }, 3000);


}
