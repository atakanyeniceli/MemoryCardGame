import angular from '../../Assets/angular.png'
import babel from '../../Assets/babel.png'
import covid from '../../Assets/covid.png'
import ember from '../../Assets/ember.png'
import react from '../../Assets/react.png'
import vue from '../../Assets/vue.png'
import { ICard } from '../../Interfaces/ICard'


const tempArray: Array<ICard> = [
    { key: 0, image: angular, status: false },
    { key: 1, image: babel, status: false },
    { key: 2, image: covid, status: false },
    { key: 3, image: ember, status: false },
    { key: 4, image: react, status: false },
    { key: 5, image: vue, status: false },
]
const tempArray2 = tempArray.map((e, i) => {
    return { ...e, key: i + tempArray.length }
})

const tempCardList: Array<ICard> = [...tempArray, ...tempArray2].sort(() => Math.random() - 0.5)

export default tempCardList