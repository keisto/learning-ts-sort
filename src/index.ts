import { Sorter } from './Sorter'
import { CharactersCollection } from './CharactersCollection'
import { NumbersCollection } from './NumbersCollection'

const numCollection = new NumbersCollection([10, 3, -5, 0])
const numSorter = new Sorter(numCollection)
numSorter.sort()
console.log(numCollection.data)

const charCollection = new CharactersCollection('TonyK')
const charSorter = new Sorter(charCollection)
charSorter.sort()
console.log(charCollection.data)
