// Nothing to do with generics
class HoldAnything<TypeOfData> {
    data: TypeOfData;

    constructor(data: TypeOfData) {
        this.data = data;
    }

    add(a: T): T {
        return a;
    }
}

const holdNumber = new HoldAnything<number>(123);
holdNumber.add(10);

const holdString = new HoldAnything<string>('123');
holdString.add('10');
