"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv('../football.csv');
matchReader.load();
// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United', 'report.html');
summary.buildAndPrintReport(matchReader.matches);
console.log(`Your report is ready in 'report.html' file.`);
