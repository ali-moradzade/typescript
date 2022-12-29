export interface DataReader {
    data: string[][];

    read(): void;
}

export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D',
}

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader {
    matches: MatchData[] = []

    constructor(public reader: DataReader) {
    }

    load(): void {
        this.reader.read();

        // Correct the data types
        this.matches = this.reader.data
            .map((row: string[]): MatchData => {
                return [
                    this.dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6],
                ];
            });
    }

    private dateStringToDate(dateString: string): Date {
        // 28/10/2018
        const pieces = dateString
            .split('/')
            .map((piece: string): number => parseInt(piece));

        return new Date(pieces[2], pieces[1] - 1, pieces[0]);
    }

}
