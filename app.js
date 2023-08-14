let homeScore = 0
let awayScore = 0

function homeGoal() {
    homeScore += 1
    saveScore()
    winner()
}

function home3Goal() {
    homeScore += 3
    saveScore()
    winner()
}

function awayGoal() {
    awayScore += 1
    saveScore()
    winner()
}

function away3Goal() {
    awayScore += 3
    saveScore()
    winner()
}
function reset() {
    homeScore = 0
    awayScore = 0
    saveScore()
}
function removeGoalHome() {
    if (homeScore > 0) {
        homeScore -= 1
    }
    saveScore()
}
function removeGoalAway() {
    if (awayScore > 0) {
        awayScore -= 1
    }
    saveScore()
}
function winner() {
    if (homeScore >= 10) {
        window.alert('Home Team Wins!')
        reset()
    } else if (awayScore >= 10) {
        window.alert('Away Team Wins')
        reset()
    }
}

function saveScore() {
    let hscore = document.getElementById('Home')
    hscore.toString()
    hscore.innerText = homeScore
    let ascore = document.getElementById('Away')
    ascore.toString()
    ascore.innerText = awayScore
}

