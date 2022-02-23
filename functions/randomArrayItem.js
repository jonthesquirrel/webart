import randomInRange from './randomInRange'

export default (array) => array[randomInRange(0, array.length - 1)]