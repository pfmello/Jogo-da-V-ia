function warningMessage(message) {
  warningMessageElement.textContent = message;
  backdropElement.style.display = "block";
  emptyNameOverlay.style.display = "block";
}

function checkErrorInPlayerNames() {
  if (!players[0].name || !players[1].name) {
    warningMessage("Os dois jogadores precisam ser definidos !");
    return true;
  }

  if (players[0].name === players[1].name) {
    warningMessage("Os dois jogadores tem o mesmo nome !");
    return true;
  }

  return false;
}

function resetGame() {
  activePlayer = 0;

  gameOverElement.style.display = "none";
  gameOverElement.firstElementChild.innerHTML =
    'Parabéns, <span id="winner-name">VENCEDOR</span>, você venceu !';

  let gameBoardIndex = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardGridElement = gameFieldElements[gameBoardIndex];
      gameBoardGridElement.textContent = "";
      gameBoardGridElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (checkErrorInPlayerNames()) return;

  resetGame();
  gameIsOver = false;
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function changePlayer() {
  if (activePlayer === 0) activePlayer = 1;
  else activePlayer = 0;

  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameGrid(event) {
  if (gameIsOver) {
    warningMessage("Esse jogo já terminou !");
    return;
  }

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

  let winnerID = checkWinner();
  let gameDraw = checkGameDraw();

  if (winnerID !== 0 || gameDraw) {
    endGame(winnerID, gameDraw);
    return;
  }

  changePlayer();
}

function checkWinner() {
  // Checando as LINHAS
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  // Checando as COLUNAS
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // Checando a primeira DIAGONAL ! Topo esquerda para baixo direita
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[0][0] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // Checando a segunda DIAGONAL ! Topo direita para baixo esquerda
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[0][2] === gameData[2][0]
  ) {
    return gameData[0][2];
  }

  return 0;
}

function checkGameDraw() {
  let counter = 0;
  for (const gameFieldElement of gameFieldElements) {
    if (gameFieldElement.textContent) {
      counter++;
    }
  }

  if (counter === 9) return true;

  return false;
}

function endGame(winnerID, gameDidDraw) {
  gameIsOver = true;
  gameOverElement.style.display = "block";

  if (gameDidDraw) {
    gameOverElement.firstElementChild.textContent = "EMPATOU NESSA PORRA !";
    return;
  }

  let winnerName = players[winnerID - 1].name;
  gameOverElement.firstElementChild.children[0].textContent = winnerName;
}
