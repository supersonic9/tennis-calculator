# Tennis Calculator

## Solution Details & Rationale 
- the application is written in Javascript, using Node.js
- Jest is used as the testing framework and a TDD approach was utilised. Tests were written and failed prior to writing the relevant code to make them pass and then inserting these chunks into the relevant functions and files 
- the calculator's implementation is designed around the concept that splitting the scores data into an array of objects representing each match would be the easiest way to handle queries, particularly if uploading a file with many matches.
- the design is intended to support uploading files with many matches and users being able to write and upload their own txt files 
- the two major functions - one to determine the winner of a match, another to determine a player's total games won and lost - and their associated tests were kept in a seperate folder, primarily to keep the app.js and app.test.js files leaner and easier to read 
- a focus was given to error messaging and attempting to provide useful, contextual feedback to users if their input created an error 

## Dependencies & Set up 
- Node.js is required. To check Node.js is installed on your machine, run the following 
```
node -v
```
- If node is installed, this will print a version number. If node is not installed, visit https://nodejs.dev/learn/how-to-install-nodejs 
- Once confirmed that Node is installed, run the following from the root folder
```
npm install
```
- This will ensure set up of Jest as a dev dependency

## Usage 
- To run the calculator, from the root folder run 
```
node app.js <filename.txt>
e.g. node app.js tournament.txt
```
- Where the file being passed in is a txt file and is in the same folder as app.js 
- 2 files have been provided for usage - tournament.txt and single_match.txt. Users are encouraged to try their own files, provided they are .txt and precisely match the format of the other files 

Upon running the calculator, users will be prompted for a query: 
- Users can query for the winner and scores in a particular match, with the winning player printed first
```
Score Match <id>
e.g. Score Match 01 
```
- Users can also query for the total games won and lost by a particular player across all their matches
```
Games Player <player name>
e.g. Games Player Person A
```
- After providing the data to answer the query, the calculator will exit and stop running 

## Testing 
- to run the calculator's tets, from the root folder run
```
npm run test
```

