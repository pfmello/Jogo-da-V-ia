function openPlayerConfig() {
  playerConfigOverlay.style.display = "block";
  backdropElement.style.display = "block";
}

function cancelPlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
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
}
