import { fileURLToPath } from 'url'
import { createServer } from 'http'
import chalk from 'chalk'
import { time, startTime } from './utils/timeGen.js'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = 8080

console.log('dirname: ', __dirname)

const server = createServer((req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
	res.end(time.toString())
})

server.listen(PORT, () => {
	console.log(
		chalk.green(`Server has been started on ${PORT}...
  `)
	)
	startTime()
})
