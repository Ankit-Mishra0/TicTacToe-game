let boxex = document.querySelectorAll(".box");

let resetButton = document.querySelector(".reset");

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxex.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const checkWinner = () => {
  for (let pattern of winPattern) {
    if (
      boxex[pattern[0]].innerText === boxex[pattern[1]].innerText &&
      boxex[pattern[1]].innerText === boxex[pattern[2]].innerText &&
      boxex[pattern[0]].innerText != ""
    ) {
      document.querySelector("h1").innerText = `winner is ${
        boxex[pattern[0]].innerText
      }`;
      boxex.forEach((box) => (box.disabled = true));
      return;
    }
    if ([...boxex].every((box) => box.innerText !== "")) {
      document.querySelector("h1").innerText = "It's a draw!";
    }
  }
};
const resetGame = () => {
  // Clear all the boxes
  boxex.forEach((box) => {
    box.innerText = ""; // Clear the text
    box.disabled = false; // Enable the button
  });

  // Reset the game state
  turnO = true; // Set turn to "O"
  document.querySelector("h1").innerText = "TIC_TAC_TOE"; // Reset header text
};
resetButton.addEventListener("click", resetGame);
