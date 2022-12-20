/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import Table from './components/Table.jsx'
import httpService from './services/http.servise.js'
import formatTime from './utils/formatTime.js'

function App() {
	const [time, setTime] = useState('')
	const [current, setCurrent] = useState(0)
	const [users, setUsers] = useState([])

	const getTime = async () => {
		const { data } = await httpService.get('/time')
		setTime(formatTime(data.time))
		setCurrent(data.current)
	}

	const getUsers = async () => {
		const { data } = await httpService.get('/users')
		setUsers(data)
	}

	useEffect(() => {
		getUsers()
		setTime('')
		const timer = setInterval(getTime, 1000)
		return () => clearInterval(timer)
	}, [])

	return (
		<>
			<h3 className='topMessage green'>
				Уважаемые участники, во время вашего хода вы можете изменить параметры
				торгов, указанных в таблице:
			</h3>
			<Table current={current} time={time} users={users} />
		</>
	)
}

export default App
