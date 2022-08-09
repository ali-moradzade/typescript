const add = (a: number, b: number): number => {
    return a + b;
};

// Type inference
const subtract = (a: number, b: number) => {
    return a - b;
}

// But we don't use it!
function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): never => {
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

logWeather(forecast)

