let apples = 5;
let speed = 'fast';
let hasName = true;
let nothingMuch = null;
let nothing = undefined;

// built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5, 6];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}

let car: Car = new Car();

// Object literal
let point: {
    x: number;
    y: number;
} = {
    x: 10,
    y: 20,
}

// Function
const logNumber: (i: number)=> void = (i: number) => {
    console.log(i);
};
