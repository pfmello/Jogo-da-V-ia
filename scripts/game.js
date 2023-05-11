function warningMessage(message) {
  warningMessageElement.textContent = message;
  backdropElement.style.display = "block";
  emptyNameOverlay.style.display = "block";
}

function startNewGame() {
  if (!players[0].name || !players[1].name) {
    warningMessage("Os dois jogadores precisam ser definidos !");
    return;
  }

  if (players[0].name === players[1].name) {
    warningMessage("Os dois jogadores tem o mesmo nome !");
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

  if (selectedGrid.textContent) {
    warningMessage("Esse bloco já foi escolhido !");
    return;
  }

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
