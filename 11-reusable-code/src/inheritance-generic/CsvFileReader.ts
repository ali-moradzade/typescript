import fs from 'fs';

export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public filename: string) {
    }

    read(): void {
        this.data = fs.readFileSync(this.filename, {encoding: 'utf8'})
            .split('\n')

            // Separate each line based of comma
            .map((line: string): string[] => line.split(','))

            // Correct the data types
            .map(this.mapRow);
    }

    abstract mapRow(row: string[]): T;
}
