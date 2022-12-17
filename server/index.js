import { fileURLToPath } from 'url'
import express from 'express'
import cors from 'cors'
import chalk from 'chalk'
import { time, startTime } from './utils/timeGen.js'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = 8080

const app = express()

app.use(cors())

app.get('/time', (req, res) => {
	res.send(time.toString())
})

app.listen(PORT, () => {
	console.log(
		chalk.green(`Server has been started on ${PORT}...
  `)
	)
	startTime()
})
