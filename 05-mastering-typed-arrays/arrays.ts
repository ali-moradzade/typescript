const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); // Error!

// Help with 'map'
console.log(carMakers.map((car): string => {
    return car.toUpperCase();
}));

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2022-10-11');
importantDates.push(new Date());
// importantDates.push(100); // Error!
