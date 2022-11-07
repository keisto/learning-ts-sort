import { Sorter } from './Sorter'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'
import { NumbersCollection } from './NumbersCollection'

const numCollection = new NumbersCollection([10, 3, -5, 0])
const numSorter = new Sorter(numCollection)
numSorter.sort()
console.log(numCollection.data)

const charCollection = new CharactersCollection('TonyK')
const charSorter = new Sorter(charCollection)
charSorter.sort()
console.log(charCollection.data)

const linkedlist = new LinkedList()
linkedlist.add(500)
linkedlist.add(-10)
linkedlist.add(-32)
linkedlist.add(40)
const linkedListSorter = new Sorter(linkedlist)
linkedListSorter.sort()
linkedlist.print()
