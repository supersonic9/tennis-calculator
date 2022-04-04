test('Basic scoring approach', () => {
    const data = [1, 0, 1, 2, 4, 0, 1];
    let [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
    for (let i = 0; i < data.length; i++) {
      if (data[i] === 0) {
        playerAPointsThisGame++
      }
      if (data[i] === 1) {
        playerBPointsThisGame++
      }
    }
    expect(playerAPointsThisGame).toEqual(2);
    expect(playerBPointsThisGame).toEqual(3);  
  });
  
  test('Determination of game winners - game score of 1 - 3', () => {
    let [playerAGamesWon, playerBGamesWon] = [0, 0]; 
    let [playerAPointsThisGame, playerBPointsThisGame] = [1, 3];
    if (playerAPointsThisGame > 3 && (playerAPointsThisGame - playerBPointsThisGame > 1)) {
      playerAGamesWon++;
      [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
    }
    if (playerBPointsThisGame > 3 && (playerBPointsThisGame - playerAPointsThisGame > 1)) {
      playerBGamesWon++;
      [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
    }
    expect(playerAGamesWon).toEqual(0);
    expect(playerBGamesWon).toEqual(0);
    expect(playerAPointsThisGame).toEqual(1);
    expect(playerBPointsThisGame).toEqual(3);
  });
  
  test('Determination of game winners - game score of 4 - 3', () => {
    let [playerAGamesWon, playerBGamesWon] = [0, 0];  
    let [playerAPointsThisGame, playerBPointsThisGame] = [4, 3];
    if (playerAPointsThisGame > 3 && (playerAPointsThisGame - playerBPointsThisGame > 1)) {
      playerAGamesWon++;
      [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
    }
    if (playerBPointsThisGame > 3 && (playerBPointsThisGame - playerAPointsThisGame > 1)) {
      playerBGamesWon++;
      [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
    }
    expect(playerAGamesWon).toEqual(0);
    expect(playerBGamesWon).toEqual(0);
    expect(playerAPointsThisGame).toEqual(4);
    expect(playerBPointsThisGame).toEqual(3);
  });
  
  test('Determination of game winners - game score of 4 - 2', () => {
    let [playerAGamesWon, playerBGamesWon] = [0, 0]; 
    let [playerAPointsThisGame, playerBPointsThisGame] = [4, 2];
    if (playerAPointsThisGame > 3 && (playerAPointsThisGame - playerBPointsThisGame > 1)) {
      playerAGamesWon++;
      [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
    }
    if (playerBPointsThisGame > 3 && (playerBPointsThisGame - playerAPointsThisGame > 1)) {
      playerBGamesWon++;
      [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
    }
    expect(playerAGamesWon).toEqual(1);
    expect(playerBGamesWon).toEqual(0);
    expect(playerAPointsThisGame).toEqual(0);
    expect(playerBPointsThisGame).toEqual(0);
  });
  
  test('Determination of game winners - game score of 7 - 6', () => {
    let [playerAGamesWon, playerBGamesWon] = [0, 0];  
    let [playerAPointsThisGame, playerBPointsThisGame] = [7, 6];
    if (playerAPointsThisGame > 3 && (playerAPointsThisGame - playerBPointsThisGame > 1)) {
      playerAGamesWon++;
      [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
    }
    if (playerBPointsThisGame > 3 && (playerBPointsThisGame - playerAPointsThisGame > 1)) {
      playerBGamesWon++;
      [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
    }
    expect(playerAGamesWon).toEqual(0);
    expect(playerBGamesWon).toEqual(0);
    expect(playerAPointsThisGame).toEqual(7);
    expect(playerBPointsThisGame).toEqual(6);
  });

  test('Players game point scores reset at end of each game', () => {
    let [playerAPointsThisGame, playerBPointsThisGame] = [4, 2];
    if (playerAPointsThisGame > 3 && (playerAPointsThisGame - playerBPointsThisGame > 1)) {
      [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
    }
    expect(playerAPointsThisGame).toEqual(0);
    expect(playerBPointsThisGame).toEqual(0);
  });
  
  test('Player A winning multiple games', () => {
    let [playerAPointsThisGame, playerAGamesWon, playerBPointsThisGame, playerBGamesWon] = [0, 0, 0, 0];
    const scores = ['0', '1', '0', '1', '0', '0', '0', '0', '0', '0'];
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] === '0') {
        playerAPointsThisGame++
      }
      if (scores[i] === '1') {
        playerBPointsThisGame++
      }
      if (playerAPointsThisGame > 3 && ((playerAPointsThisGame - playerBPointsThisGame) > 1)) {
        playerAGamesWon++;
        [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
      }
    }
    if (playerBPointsThisGame > 3 && (playerBPointsThisGame - playerAPointsThisGame > 1)) {
      playerBGamesWon++;
      [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
    }
    expect(playerAGamesWon).toEqual(2);
    expect(playerBGamesWon).toEqual(0);
    expect(playerAPointsThisGame).toEqual(0);
    expect(playerBPointsThisGame).toEqual(0);
  })
  
  test('Player B winning multiple games', () => {
    let [playerAPointsThisGame, playerAGamesWon, playerBPointsThisGame, playerBGamesWon] = [0, 0, 0, 0];
    const scores = [0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1];
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] === 0) {
        playerAPointsThisGame++
      }
      if (scores[i] === 1) {
        playerBPointsThisGame++
      }
      if (playerAPointsThisGame > 3 && (playerAPointsThisGame - playerBPointsThisGame > 1)) {
        playerAGamesWon++;
        [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
      }
      if (playerBPointsThisGame > 3 && (playerBPointsThisGame - playerAPointsThisGame > 1)) {
        playerBGamesWon++;
        [playerAPointsThisGame, playerBPointsThisGame] = [0, 0];
      }
    }
    expect(playerAGamesWon).toEqual(0);
    expect(playerBGamesWon).toEqual(2);
    expect(playerAPointsThisGame).toEqual(0);
    expect(playerBPointsThisGame).toEqual(0);
  })
  
  test('Determination of set winners - set score of 6 - 4', () => {
    let [playerASets, playerBSets] = [0, 0];
    let [playerAGamesWon, playerBGamesWon] = [6, 4];
    if (playerAGamesWon === 6) {
      playerASets++
    }
    if (playerBGamesWon === 6) {
      playerBSets++;
    }
    [playerAGamesWon, playerBGamesWon] = [0,0];
    expect(playerASets).toEqual(1);
    expect(playerBSets).toEqual(0);
    expect(playerAGamesWon).toEqual(0);
    expect(playerBGamesWon).toEqual(0);
  });
  
  test('Determination of set winners - set score of 1 - 6', () => {
    let [playerASets, playerBSets] = [0, 0];
    let [playerAGamesWon, playerBGamesWon] = [1, 6];
    if (playerAGamesWon === 6) {
      playerASets++
    }
    if (playerBGamesWon === 6) {
      playerBSets++;
    }
    [playerAGamesWon, playerBGamesWon] = [0,0];
    expect(playerASets).toEqual(0);
    expect(playerBSets).toEqual(1);
    expect(playerAGamesWon).toEqual(0);
    expect(playerBGamesWon).toEqual(0);
  })
  
  test('Determination of Player A winning', () => {
    let [playerASets, playerBSets] = [2, 1];
    if (playerASets === 2) {
      expect(playerASets).toEqual(2);
      expect(playerBSets).toEqual(1);
    }
  });
  
  test('Determination of Player B winning', () => {
    let [playerASets, playerBSets] = [0, 2];
    if (playerBSets === 2) {
      expect(playerASets).toEqual(0);
      expect(playerBSets).toEqual(2);
    }
  });