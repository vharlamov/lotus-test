import { currentGen } from './currentGen.js'

let time = 0

function startTime() {
	setInterval(() => {
		time = time + 1
		if (time === 120) {
			time = 0
			currentGen()
		}
	}, 1000)
}

export { time, startTime }
