class ArrayOfNumbers {
    constructor(public collection: number[]) {
    }

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {
    }

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {
    }

    get(index: number): T {
        return this.collection[index];
    }
}

console.log(new ArrayOfAnything(['a', 'b', 'c', 'd']).get(2));

// Example of generics with functions
function printStrings(array: string[]): void {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function printNumbers(array: number[]): void {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function printAnything<T>(array: T[]): void {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

console.log();
printAnything(['a', 'b', 'c']);
printAnything([1, 2, 3]);

// Generic Constrains
class Car {
    print() {
        console.log('I am a car!');
    }
}

class House {
    print() {
        console.log('I am a house!');
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

console.log();
printHousesOrCars([new House(), new Car(), new House()]);
