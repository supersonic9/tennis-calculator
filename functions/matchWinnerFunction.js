// function to determine who won a Match
function matchWinnerFunction(matchObject) {
    const matchScores = matchObject[0].scores;
    const scoresLength = matchScores.length;
    const players = matchObject[0].players.split(' vs ');
    let [playerAPointsThisGame, playerAGamesWon, playerASets] = [0, 0, 0];
    let [playerBPointsThisGame, playerBGamesWon, playerBSets] = [0, 0, 0];
    // iterate through match scores, incrementing points, games, sets accordingly. Reset current game points for both players each time a game is won 
    for (let i = 0; i < scoresLength; i++) {
        if (matchScores[i] === '0') {
            playerAPointsThisGame++;
        }
        if (matchScores[i] === '1') {
            playerBPointsThisGame++;
        }
        if (playerAPointsThisGame > 3 && (playerAPointsThisGame - playerBPointsThisGame > 1)) {
            playerAGamesWon++;
            [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
        }
        if (playerBPointsThisGame > 3 && (playerBPointsThisGame - playerAPointsThisGame > 1)) {
            playerBGamesWon++;
            [playerBPointsThisGame, playerAPointsThisGame] = [0, 0];
        }
        if (playerAGamesWon === 6) {
            playerASets++;
            [playerAGamesWon, playerBGamesWon] = [0, 0]
        }
        if (playerBGamesWon === 6) {
            playerBSets++;
            [playerBGamesWon, playerAGamesWon] = [0, 0]
        }
        if (playerASets === 2) {
            return `${players[0]} defeated ${players[1]}\n${playerASets} sets to ${playerBSets}`;
        }
        if (playerBSets === 2) {
            return `${players[1]} defeated ${players[0]}\n${playerBSets} sets to ${playerASets}`
        }
    }
    return `No result`;
}

module.exports = matchWinnerFunction;