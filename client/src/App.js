/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import httpService from './services/http.servise.js'
import formatTime from './utils/formatTime.js'

function App() {
	const [time, setTime] = useState('')

	const getTime = async () => {
		const { data } = await httpService.get('/')
		setTime(formatTime(data))
	}

	useEffect(() => {
		setTime('')
		setInterval(getTime, 1000)
	}, [])

	return (
		<>
			<h1>Main Page</h1>
			<h1>{time}</h1>
		</>
	)
}

export default App
