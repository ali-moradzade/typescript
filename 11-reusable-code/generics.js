"use strict";
// Nothing to do with generics
class HoldAnything {
    constructor(data) {
        this.data = data;
    }
    add(a) {
        return a;
    }
}
const holdNumber = new HoldAnything(123);
holdNumber.add(10);
const holdString = new HoldAnything('123');
holdString.add('10');
