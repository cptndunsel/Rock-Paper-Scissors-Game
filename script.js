var winCount = 0;
var tieCount = 0;
var lossCount = 0;

var winEl = document.getElementById("win");
var tieEl = document.getElementById("tie");
var lossEl = document.getElementById("lose");
var resultEl = document.getElementById("result");

var r = document.getElementById("r");
var p = document.getElementById("p");
var s = document.getElementById("s");

r.addEventListener("click", function () { play("rock"); });
p.addEventListener("click", function () { play("paper"); });
s.addEventListener("click", function () { play("scissors"); });

function play(playerChoice) {
	var randomNumber = Math.floor(Math.random() * 3);
	var compChoice = "";
	if (randomNumber === 0) {
		compChoice = "rock"
	}
	else if (randomNumber === 1) {
		compChoice = "paper"
	}
	else if (randomNumber === 2) {
		compChoice = "scissors";
	}
	if (playerChoice === compChoice) {
		resultEl.textContent = "Tie!";
		tieCount++;
	}
	else if (playerChoice === "rock" && compChoice === "scissors") {
		resultEl.textContent = "The computer chose scissors. You win!";
		winCount++;
	}
	else if (playerChoice === "rock" && compChoice === "paper") {
		resultEl.textContent = "The computer chose paper. You lose!";
		lossCount++;
	}
	else if (playerChoice === "paper" && compChoice === "rock") {
		resultEl.textContent = "The computer chose rock. You win!";
		winCount++;
	}
	else if (playerChoice === "paper" && compChoice === "scissors") {
		resultEl.textContent = "The computer chose scissors. You lose!";
		lossCount++;
	}
	else if (playerChoice === "scissors" && compChoice === "paper") {
		resultEl.textContent = "The computer chose paper. You win!";
		winCount++;
	}
	else if (playerChoice === "scissors" && compChoice === "rock") {
		resultEl.textContent = "The computer chose rock. You lose!";
		lossCount++;
	}

	winEl.textContent = "Wins: " + winCount;
	tieEl.textContent = "Ties: " + tieCount;
	lossEl.textContent = "Losses: " + lossCount;
}
