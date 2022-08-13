import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 4]);

console.log(numbersCollection.data);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaaayb');

console.log(charactersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedListCollection = new LinkedList();

linkedListCollection.add(5);
linkedListCollection.add(4);
linkedListCollection.add(3);
linkedListCollection.add(2);
linkedListCollection.add(1);

linkedListCollection.print();
linkedListCollection.sort();
linkedListCollection.print();
