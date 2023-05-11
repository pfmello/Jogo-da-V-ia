function startNewGame() {
  if (!players[0].name || !players[1].name) {
    backdropElement.style.display = "block";
    emptyNameOverlay.style.display = "block";
    return;
  }

  gameAreaElement.style.display = "block";
}

function testing(event) {
  event.target.textContent = "oiii";
}
