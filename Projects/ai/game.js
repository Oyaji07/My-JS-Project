// Load score from localStorage or initialize
let Score = JSON.parse(localStorage.getItem("Overall")) || {
  Win: 0,
  Lose: 0,
  Tie: 0,
};

// Rules: what each choice beats
const rules = {
  Bat: "Stump",   // Bat beats Stump
  Ball: "Bat",    // Ball beats Bat
  Stump: "Ball"   // Stump beats Ball
};

// Random computer choice
function getComputerChoice() {
  return ["Bat", "Ball", "Stump"][Math.floor(Math.random() * 3)];
}

// Update scoreboard UI
function updateScoreboard() {
  document.querySelector("#one").textContent = `${Score.Win} \n You`;
  document.querySelector("#two").textContent = `${Score.Lose} \n Comp`;
  document.querySelector("#three").textContent = `${Score.Tie} \n Tie`;
}

// Display message
function display(result) {
  const msg = document.querySelector("#displaymsg");
  const container = document.querySelector(".container");

  if (result === "Win") {
    msg.textContent = "You Win 🎉";
    container.style.backgroundColor = "rgb(51, 244, 45)";
  } else if (result === "Lose") {
    msg.textContent = "Computer Wins 💻";
    container.style.backgroundColor = "rgb(244, 45, 45)";
  } else if (result === "Tie") {
    msg.textContent = "It's a Tie 🤝";
    container.style.backgroundColor = "rgba(105, 104, 104, 1)";
  } else {
    msg.textContent = "Let's Play";
    container.style.backgroundColor = "rgba(105, 104, 104, 1)";
  }
}

// Main game function
function play(userChoice) {
  let computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    display("Tie");
    Score.Tie++;
  } else if (rules[userChoice] === computerChoice) {
    display("Win");
    Score.Win++;
  } else {
    display("Lose");
    Score.Lose++;
  }

  localStorage.setItem("Overall", JSON.stringify(Score));
  updateScoreboard();
}

// Reset game
function reset() {
  Score = { Win: 0, Lose: 0, Tie: 0 };
  localStorage.removeItem("Overall");
  updateScoreboard();
  display("reset");
}

// Initialize on page load
updateScoreboard();
display("reset");
