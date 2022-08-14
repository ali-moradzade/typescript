import {MatchReader} from "./MatchReader";
import {CsvFileReader} from "./CsvFileReader";
import {MatchResult} from "./MatchResult";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('../football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

enum Columns {
    Date,
    HomeTeam,
    AwayTeam,
    HomeGoals,
    AwayGoals,
    Winner,
    Nothing
}

let manUnitedWins = 0;

for (let match of matchReader.matches) {
    if (match[Columns.HomeTeam] === 'Man United' && match[Columns.Winner] === MatchResult.HomeWin ||
        match[Columns.AwayTeam] === 'Man United' && match[Columns.Winner] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games.`);
