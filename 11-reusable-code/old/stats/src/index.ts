import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";

const matchReader = MatchReader.fromCsv('../football.csv');
matchReader.load();

// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
const summary = Summary.winsAnalysisWithHtmlReport('Man United', 'report.html');
summary.buildAndPrintReport(matchReader.matches);
console.log(`Your report is ready in 'report.html' file.`);
