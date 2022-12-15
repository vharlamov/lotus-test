let time = 0

function startTime() {
	setInterval(() => {
		time = time + 1
		if (time === 120) time = 0
	}, 1000)
}

export { time, startTime }
