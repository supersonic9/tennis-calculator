// function to determine total games won / lost for a player  
function totalGamesWonLostFunction(matchObjects, player) {
    let [totalGamesWon, totalGamesLost] = [0, 0];
    matchObjects.forEach(matchObject => {
        const matchScores = matchObject.scores;
        const scoresLength = matchScores.length;
        let [playerAPointsThisGame, playerAGamesWon, playerAGamesLost] = [0, 0, 0];
        let [playerBPointsThisGame, playerBGamesWon, playerBGamesLost] = [0, 0, 0];
        
        for (let i = 0; i < scoresLength; i++) {
            if (matchScores[i] === '0') {
                playerAPointsThisGame++;
            }
            if (matchScores[i] === '1') {
                playerBPointsThisGame++;
            }
            if (playerAPointsThisGame > 3 && (playerAPointsThisGame - playerBPointsThisGame > 1)) {
                playerAGamesWon++;
                playerBGamesLost++;
                [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
            }
            if (playerBPointsThisGame > 3 && (playerBPointsThisGame - playerAPointsThisGame > 1)) {
                playerBGamesWon++;
                playerAGamesLost++;
                [playerBPointsThisGame, playerAPointsThisGame] = [0, 0];
            }
        }
        // determine which player in the match is the player queried, update the won / lost totals accordingly
        const matchPlayers = matchObject.players.split(' vs ');
        const stringComp = matchPlayers[0].localeCompare(player);
        if (stringComp === 0) {
            [totalGamesWon, totalGamesLost] = [totalGamesWon + playerAGamesWon, totalGamesLost + playerAGamesLost]
        } else {
            [totalGamesWon, totalGamesLost] = [totalGamesWon + playerBGamesWon, totalGamesLost + playerBGamesLost]
        }
    });
    return `${totalGamesWon} : ${totalGamesLost}`;
}

module.exports = totalGamesWonLostFunction;