import _ from 'lodash'
import Animal from './utilities'

console.log(Animal.say())

import style from './css/style.css'

console.log(style.toString())

function component() {
	const element = document.createElement('div')
	const array = ['Hello', 'webpack', '!!']
	element.innerHTML = _.join(array, ' ')
	return element
}

document.body.appendChild(component())
document.body.classList.add('background')