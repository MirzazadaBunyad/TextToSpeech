const button = document.getElementById("button");
const input = document.getElementById("input");

button.addEventListener("click", () => {
  const text = input.value;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
});
