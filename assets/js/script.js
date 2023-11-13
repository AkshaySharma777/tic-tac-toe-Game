var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function game() {
  var count = 0;
  var boxes = document.querySelectorAll(".box");

  boxes.forEach(function (box) {
    box.addEventListener("click", function () {
      if (box.innerHTML.length == 0) {
        if (count % 2 == 0) {
          box.innerHTML = "X";
          count++;
        } else {
          box.innerHTML = "O";
          count++;
        }
      }
     

        
    });
  });
  
  boxes.forEach(function (box) {
    // alert(box.getAttribute("id"));
    let resultCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < board.length; i++) {
      board[i] = box.getAttribute("id");
      
    }
  });
  console.log(`Present Array = ${board}`)
}
game();

reset.addEventListener('click', () => {
  location.reload();
});
 