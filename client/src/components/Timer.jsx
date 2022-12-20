import React from 'react'
import { Watch } from 'react-loader-spinner'

const styles = {
	position: 'relative',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	marginRight: '5px',
	flex: 'column',
}

const Timer = ({ time }) => {
	return (
		<div className='timer'>
			<div style={{ marginRight: '10px' }}>
				<Watch type='Oval' color='#fff' height={25} width={25} style={styles} />
			</div>
			<p style={{ color: 'white', margin: 0 }}>{time}</p>
		</div>
	)
}

export default Timer
