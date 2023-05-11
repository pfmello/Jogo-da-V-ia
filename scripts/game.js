function startNewGame() {
  if (!players[0].name || !players[1].name) {
    backdropElement.style.display = "block";
    emptyNameOverlay.style.display = "block";
    return;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function changePlayer() {
  if (activePlayer === 0) activePlayer = 1;
  else activePlayer = 0;

  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameGrid(event) {
  const selectedGrid = event.target;

  if (selectedGrid.textContent) return;

  const selectedColumn = selectedGrid.dataset.col - 1;
  const selectedRow = selectedGrid.dataset.row - 1;

  selectedGrid.textContent = players[activePlayer].symbol;
  selectedGrid.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  console.log(gameData);

  changePlayer();
  checkWinner();
}

function checkWinner() {}
