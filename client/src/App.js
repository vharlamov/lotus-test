/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import httpService from './services/http.servise.js'
import formatTime from './utils/formatTime.js'
import { Watch } from 'react-loader-spinner'

function App() {
	const [time, setTime] = useState('')

	const getTime = async () => {
		const { data } = await httpService.get('/time')
		setTime(formatTime(data))
	}

	// const timer = setInterval(getTime)

	useEffect(() => {
		setTime('')
		const timer = setInterval(getTime, 1000)
		return () => clearInterval(timer)
	}, [])

	const loaderStyles = {
		position: 'relative',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		marginRight: '5px',
		flex: 'column',
	}

	const wrapperStyles = {
		backgroundColor: '#700',
		padding: '5px',
		width: '150px',
		hight: '40px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		borderRadius: '10px',
	}

	return (
		<>
			<h1>Main Page</h1>
			<div style={wrapperStyles}>
				<div style={{ marginRight: '10px' }}>
					<Watch
						type='Oval'
						color='#fff'
						height={30}
						width={30}
						style={loaderStyles}
					/>
				</div>
				<h1 style={{ color: 'white', margin: 0 }}>{time}</h1>
			</div>
		</>
	)
}

export default App
