const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

const printVehicle = (vehicle: {
    name: string;
    year: number;
    broken: boolean;
}): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);

interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}

const printVehicleShort = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
};

printVehicleShort(oldCivic);

interface Vehicle2 {
    name: string;
    year: Date;
    broken: boolean;

    summary(): string;
}

const oldCivic2: Vehicle2 = {
    name: 'civic',
    year: new Date(),
    broken: true,

    summary(): string {
        return `Name: ${this.name}, Date: ${this.year}, Broken: ${this.broken}`;
    }
};

const printVehicle2 = (vehicle: Vehicle2): void => {
    console.log(vehicle.summary());
};

printVehicle2(oldCivic2);

interface Reportable {
    summary(): string;
}

const printSummary = (reportable: Reportable) => {
    console.log(reportable.summary());
};

printSummary(oldCivic2);

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,

    summary(): string {
        return `My drink has ${this.sugar} grams of sugar, and its color is: ${this.color}`;
    }
};
