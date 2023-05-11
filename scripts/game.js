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
  if (event.target.textContent) return;

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  changePlayer();
}
