import {CsvFileReader} from "./CsvFileReader";
import {MatchResult} from "./MatchResult";
import {MatchReader} from "./MatchReader";

enum Columns {
    Date,
    HomeTeam,
    AwayTeam,
    HomeGoals,
    AwayGoals,
    Winner,
    Nothing
}

const reader = new MatchReader('../football.csv');
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
    if (match[Columns.HomeTeam] === 'Man United' && match[Columns.Winner] === MatchResult.HomeWin ||
        match[Columns.AwayTeam] === 'Man United' && match[Columns.Winner] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games.`);
