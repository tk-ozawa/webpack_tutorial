import _ from 'lodash'
import Animal from './utilities'

console.log(Animal.say())

function component() {
	const element = document.createElement('div')
	const array = ['Hello', 'webpack', '!!']
	element.innerHTML = _.join(array, ' ')
	return element
}

document.body.appendChild(component())