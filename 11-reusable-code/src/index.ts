import {CsvFileReader} from "./CsvFileReader";
import {MatchReader,MatchResult} from "./MatchReader";

// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader(__dirname + '/../data/football.csv')

// Create instance of MatchReader and pass in something satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(matchReader.matches);

let manUnitedWins = 0;

for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin ||
        match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
        manUnitedWins++;
}

console.log(`Man United won ${manUnitedWins} games!`);
