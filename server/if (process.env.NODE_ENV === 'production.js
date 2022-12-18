if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, 'client')))

	const indexPath = path.join(__dirname, 'client', 'index.html')

	app.get('/', (req, res) => {
		res.sendFile(indexPath)
	})
	app.get('/time', (req, res) => {
		console.log('get time', time)
		res.send(time.toString())
	})
} else {
	app.get('/time', (req, res) => {
		res.send(time.toString())
	})
}
