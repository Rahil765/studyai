function askQuestion() {
  const question = document.getElementById("question").value;

  document.getElementById("answer").innerText =
    "AI explanation for: " + question +
    "\n\n(Backend connection coming next step)";
}async function askQuestion() {
  const question = document.getElementById("question").value;
  const answerDiv = document.getElementById("answer");

  answerDiv.innerText = "Loading... ⏳";

  setTimeout(() => {
    answerDiv.innerText =
      "AI explanation for: " + question +
      "\n\n(Backend connection coming soon)";
  }, 1000);
  function clearText() {
  document.getElementById("question").value = "";
  document.getElementById("answer").innerText = "";
  let history = [];

async function askQuestion() {
  const question = document.getElementById("question").value;
  const answerDiv = document.getElementById("answer");

  history.push(question);

  answerDiv.innerText = "Loading... ⏳";

  setTimeout(() => {
    answerDiv.innerText =
      "AI explanation for: " + question +
      "\n\nQuestions Asked: " + history.length;
  }, 1000);
}
}
}
function saveEmail() {
  const email = document.getElementById("emailInput").value;
  
  if (email === "") {
    document.getElementById("emailMessage").innerText = "Please enter email.";
    return;
  }

  document.getElementById("emailMessage").innerText =
    "You're on the early access list! 🚀";
}
async function saveEmail() {
  const email = document.getElementById("emailInput").value;

  if (email === "") {
    document.getElementById("emailMessage").innerText = "Please enter email.";
    return;
  }

  await fetch("PASTE_YOUR_WEB_APP_URL_HERE", {
    method: "POST",
    body: JSON.stringify({ email: email }),
  });

  document.getElementById("emailMessage").innerText =
    "You're on the early access list! 🚀";

  document.getElementById("emailInput").value = "";
}