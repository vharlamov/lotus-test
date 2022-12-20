import users from '../db/users.mjs'

let prevLength = 0
let current = 0
const length = users.length

function currentGen() {
	current = current >= length - 1 ? 0 : current + 1
	prevLength = length
}

export { current, currentGen, length }
