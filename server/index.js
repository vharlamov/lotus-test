import { fileURLToPath } from 'url'
import express from 'express'
import cors from 'cors'
import chalk from 'chalk'
import { time, startTime } from './utils/timeGen.js'
import path from 'path'
import config from 'config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(cors())

const PORT = config.get('port') ?? 8040

if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, 'client')))

	const indexPath = path.join(__dirname, 'client', 'index.html')

	app.get('/', (req, res) => {
		res.sendFile(indexPath)
	})

	app.get('/time', (req, res) => {
		res.send(time.toString())
	})
} else {
	app.get('/time', (req, res) => {
		res.setHeader('Access-Control-Allow-Method', 'GET').send(time.toString())
	})
}

app.listen(PORT, () => {
	console.log(
		chalk.green(`Server has been started on ${PORT}...
  `)
	)
	startTime()
})
