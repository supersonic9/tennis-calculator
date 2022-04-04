test('Which is the queried player in a particular match - Player 1', () => {
    let playerPosition;
    const sampleMatchData =  [{matchId: '01', players: 'Person A vs Person B', scores: ['0','1','1','0','0','0']}]
    const queriedPlayer = 'Person A';
    sampleMatchData.forEach(match => {
      const matchPlayers = match.players.split(' vs ');
      const stringComparison = matchPlayers[0].localeCompare(queriedPlayer);
      if (stringComparison === 0) {
        playerPosition = 'Queried player is 1st Player in this match';
      } else {
        playerPosition = 'Queried player is 2nd Player in this match';
      }
    });
    expect(playerPosition).toMatch(/Queried player is 1st Player in this match/)
  });
  
  test('Which is the queried player in a particular match - Player 2', () => {
    let playerPosition;
    const sampleMatchData =  [{matchId: '01', players: 'Person A vs Person B', scores: ['0','1','1','0','0','0']}]
    const queriedPlayer = 'Person B';
    sampleMatchData.forEach(match => {
      const matchPlayers = match.players.split(' vs ');
      const stringComparison = matchPlayers[0].localeCompare(queriedPlayer);
      if (stringComparison === 0) {
        playerPosition = 'Queried player is 1st Player in this match';
      } else {
        playerPosition = 'Queried player is 2nd Player in this match';
      }
    });
    expect(playerPosition).toMatch(/Queried player is 2nd Player in this match/)
  });
  
  test('Update players total games won / lost', () => {
    let [playerAPointsThisGame, playerAGamesLost] = [3, 21];
    let [playerBPointsThisGame, playerBGamesWon] = [5, 1];
    if (playerBPointsThisGame > 3 && (playerBPointsThisGame - playerAPointsThisGame > 1)) {
      playerBGamesWon++;
      playerAGamesLost++;
    }
    expect(playerBGamesWon).toEqual(2);
    expect(playerAGamesLost).toEqual(22);
  });
  