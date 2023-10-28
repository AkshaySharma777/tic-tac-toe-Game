var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

var bx = [];
function game() {
  var count = 0;
  var boxes = document.querySelectorAll(".box");
  var reset = document.getElementById("reset");
 

  boxes.forEach(function (box) {
    
    
    reset.addEventListener("click", function () {
      box.innerHTML = " ";
    });

    box.addEventListener("click", function () {
      if (box.innerHTML.length == 0) {
        if (count % 2 == 0) {
          box.innerHTML = "X";
          count++;
        } else {
          box.innerHTML = "O";
          count++;
        }
        // bx.push(box.getAttribute("id"));
      }
     
        if(box1.innerHTML=="X" && box2.innerHTML=="X" && box3.innerHTML=="X"){
          alert("Success");
     
      }
     
    });
  });
  
}
game();
