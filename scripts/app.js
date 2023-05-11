const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let editedPlayer = 0;
let activePlayer = 0;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

// Elementos HTML
const playerConfigOverlay = document.getElementById("config-overlay");
const emptyNameOverlay = document.getElementById("empty-name-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.querySelector("#config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");

// BOTÕES
const editPlayer1BtnElement = document.getElementById("edit-player1");
const editPlayer2BtnElement = document.getElementById("edit-player2");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const emptyNameBtnElement = document.getElementById("empty-name-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");

const gameFieldElements = document.querySelectorAll("#game-board li");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", cancelPlayerConfig);
backdropElement.addEventListener("click", cancelPlayerConfig);

emptyNameBtnElement.addEventListener("click", fixEmptyNameButton);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameGrid);
}
