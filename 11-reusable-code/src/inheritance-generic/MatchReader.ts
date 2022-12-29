import {CsvFileReader} from "./CsvFileReader";

export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D',
}

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData>{
    mapRow(row: string[]): MatchData {
        return [
            MatchReader.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6],
        ];
    }

    private static dateStringToDate(dateString: string): Date {
        // 28/10/2018
        const pieces = dateString
            .split('/')
            .map((piece: string): number => parseInt(piece));

        return new Date(pieces[2], pieces[1] - 1, pieces[0]);
    }
}
