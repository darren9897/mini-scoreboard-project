const homeOnePointer = document.getElementById("home-one-point");
const homeTwoPointer = document.getElementById("home-two-point");
const homeThreePointer = document.getElementById("home-three-point");

const awayOnePointer = document.getElementById("away-one-point");
const awayTwoPointer = document.getElementById("away-two-point");
const awayThreePointer = document.getElementById("away-three-point");

const resetGame = document.getElementById("reset-game");


const homeScoreboard = document.getElementById("home-scoreboard");
const awayScoreboard = document.getElementById("away-scoreboard");

let homeScore = Number(homeScoreboard.textContent)
let awayScore = Number(awayScoreboard.textContent)

// HOME
homeOnePointer.addEventListener("click", function() {
    homeScore += 1
    homeScoreboard.textContent = homeScore;
})

homeTwoPointer.addEventListener("click", function() {
    homeScore += 2
    homeScoreboard.textContent = homeScore;
})

homeThreePointer.addEventListener("click", function() {
    homeScore += 3
    homeScoreboard.textContent = homeScore;
})

// AWAY
awayOnePointer.addEventListener("click", function() {
    awayScore += 1
    awayScoreboard.textContent = awayScore;
})

awayTwoPointer.addEventListener("click", function() {
    awayScore += 2
    awayScoreboard.textContent = awayScore;
})

awayThreePointer.addEventListener("click", function() {
    awayScore += 3
    awayScoreboard.textContent = awayScore;
})

resetGame.addEventListener("click", function() {
    homeScore = 0;
    awayScore = 0;

    homeScore = Number(homeScoreboard.textContent = 0)
    awayScore = Number(awayScoreboard.textContent = 0) 
})