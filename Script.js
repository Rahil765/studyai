function askQuestion() {
  const question = document.getElementById("question").value;

  document.getElementById("answer").innerText =
    "AI explanation for: " + question +
    "\n\n(Backend connection coming next step)";
}