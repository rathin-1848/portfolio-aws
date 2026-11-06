const revealButton = document.getElementById("revealButton");
const revealResult = document.getElementById("revealResult");

revealButton.addEventListener("click", () => {
  revealResult.textContent =
    "My tech superpower: turning curiosity into practical projects — one small step at a time. ✨";
  revealButton.textContent = "Superpower discovered ✓";
  revealButton.disabled = true;
});

document.getElementById("year").textContent = new Date().getFullYear();
