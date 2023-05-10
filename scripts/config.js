function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = "block";
  backdropElement.style.display = "block";

  console.log(editedPlayer);
}

function cancelPlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const currentPlayerName = formData.get("username").trim();
  // trim serve para remover excesso de espaço branco

  // Truthy e Falsie value
  if (!currentPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "ERROU !";
    return;
  }

  const updatePlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatePlayerDataElement.children[1].textContent = currentPlayerName;
  players[editedPlayer - 1].name = currentPlayerName;

  console.log(players);
  cancelPlayerConfig();
}
