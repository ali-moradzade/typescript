import fs from 'fs';
import {DataReader} from "./MatchReader";

export class CsvFileReader implements DataReader{
    data: string[][] = [];

    constructor(public filename: string) {
    }

    read(): void {
        this.data = fs.readFileSync(this.filename, {encoding: 'utf8'})
            .split('\n')

            // Separate each line based of comma
            .map((row: string): string[] => row.split(','));
    }

}
