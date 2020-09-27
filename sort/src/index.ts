import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 8, 4, 7]);
const charactersCollection = new CharactersCollection('Xaayb');
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const numSorter = new Sorter(numbersCollection);
// const charSorter = new Sorter(charactersCollection);
// const linkedListSorter = new Sorter(linkedList);
numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();
// numSorter.sort();
// charSorter.sort();
// linkedListSorter.sort();
console.log('Numbers', numbersCollection.data);
console.log('Characters', charactersCollection.data);
linkedList.print();
