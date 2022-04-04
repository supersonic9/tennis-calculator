const matchWinnerFunction = require('./functions/matchWinnerFunction');
const totalGamesWonLostFunction = require('./functions/totalGamesWonLostFunction');
const fs = require('fs');

// check number of arguments is equal to 3
const commandLineArguments = process.argv.length;
if (commandLineArguments !== 3) {
    console.log(`** Incorrect number of arguments **\n** Usage: node app.js <filename> **`);
    return;
}

// get the file as input from the user and synchronously read in the data
const scoresFile = process.argv.slice(2)[0];
let data;
try {
    data = fs.readFileSync(scoresFile, 'utf-8');
} catch (err) {
    console.log(`** Error loading scores file **  \n** Please check the file exists and has the correct format / location **`);
    return;
}

// get tournament data into an array of objects - each object representing one match
let tournamentData;
if (data.includes(`\r\n`)) {
    tournamentData = data.split('\r\n')
} else {
    tournamentData = data.split('\n')
}
let lengthOfTournamentData = tournamentData.length;
let arrayOfMatches = [];
for (let i = 0; i < lengthOfTournamentData; i++) {
    if (tournamentData[i].includes('Match:')) {
        arrayOfMatches.push({
            matchId: tournamentData[i].split(' ').pop(),
            players: tournamentData[i + 1],
            scores: []
        })
    } else if (tournamentData[i] === '0' || tournamentData[i] === '1') {
        arrayOfMatches[arrayOfMatches.length - 1].scores.push(tournamentData[i]);
    }
}

// take a query from the user 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout 
})
try {
    readline.question(`Query: `, query => {
        console.log(queryAnswer(query));
        readline.close();
    });
} catch(err) {
    console.log(`** There was an Error - please check the query format and try again **`);
    return;
}

// take the query and call the appropriate function to return the answer
function queryAnswer(input) {
    if (input.includes(';')) {
        return '** Error: Please try again without the semi colon **'
    }
    if (input.includes('Score Match ')) {
        const matchToQuery = arrayOfMatches.filter(match => match.matchId === (input.split(' ').pop()));
        if (matchToQuery.length < 1) {
            return '** That match does not appear in the data - please check you have the right match id and try again **';
        }
        return matchWinnerFunction(matchToQuery);
    }
    if (input.includes('Games Player ')) {
        const playersNameAsASingleString = input.split(' ').splice(-2).join(' ');
        const matchesToQuery = arrayOfMatches.filter(match => match.players.includes(input.split(' ').pop()));
        if (matchesToQuery.length < 1) {
            return '** That player does not appear in the data - please check you have the right name and try again **';
        }
        return totalGamesWonLostFunction(matchesToQuery, playersNameAsASingleString);
    }
    return `** Unrecognised query, please try again **\n** Format (case-sensitive): Score Match <id> OR Games Player <Player Name> **`
}

