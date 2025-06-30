let homeScoreEl = document.getElementById("score-home");
let guestScoreEl = document.getElementById("score-guest");

let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");
let resetHomeScore = document.getElementById("home-restart-score-btn");

let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");
let resetGuestScore = document.getElementById("guest-restart-score-btn");

let homeScore = 0;
let guestScore = 0;

function plusOneHome() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function plusTwoHome() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function plusThreeHome() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}
function resetHome() {
  homeScore = 0;
  homeScoreEl.textContent = homeScore;
}

function plusOneGuest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function plusTwoGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function plusThreeGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function resetGuest() {
  guestScore = 0;
  guestScoreEl.textContent = guestScore;
}
