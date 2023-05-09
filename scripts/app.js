const playerConfigOverlay = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");

const editPlayer1BtnElement = document.getElementById("edit-player1");
const editPlayer2BtnElement = document.getElementById("edit-player2");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", cancelPlayerConfig);
backdropElement.addEventListener("click", cancelPlayerConfig);
