// Nothing to do with generics
const addOne = (a: number): number => {
    return a + 1;
}

const addTwo = (a: number): number => {
    return a + 2;
}

const addThree = (a: number): number => {
    return a + 3;
}

console.log(addOne(1));
console.log(addTwo(1));
console.log(addThree(1));

// With arguments, we can customize function behavior
const add = (a: number, b: number): number => {
    return a + b;
}

console.log(add(1, 1));
console.log(add(1, 2));
console.log(add(1, 3));

class HoldNumber {
    data: number = 0;
}

class HoldString {
    data: string = 'hello';
}

const holdNumber = new HoldNumber();
console.log(holdNumber);

const holdString = new HoldString();
console.log(holdString);

// Just like for functions, Generics can be used for classes
class HoldAnything<T> {
    constructor(public data: T) {
    }
}

const holdNumber2 = new HoldAnything<number>(2);
const holdString2 = new HoldAnything<string>('hello')

console.log(holdNumber2);
console.log(holdString2);

