import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'

const numCollection = new NumbersCollection([10, 3, -5, 0])
const sorter = new Sorter(numCollection)
sorter.sort()
console.log(numCollection.data)
