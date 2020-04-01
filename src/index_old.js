import _ from 'lodash'
import logo from './img/logo.png'
import Animal from './utilities'

console.log(Animal.say())

import './css/style.css'
import './css/style.scss'

function component() {
	const element = document.createElement('div')
	const array = ['Hello', 'webpack', '!!']
	element.innerHTML = _.join(array, ' ')
	return element
}

document.body.appendChild(component())
document.body.classList.add('background')
const image = new Image()
image.src = logo
document.body.appendChild(image)