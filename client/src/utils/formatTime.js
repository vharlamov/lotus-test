const formatTime = (data) => {
	const time = 120 - Number(data)
	const min = Math.trunc(time / 60)
	const sec = time % 60
	const extMin = min < 10 ? '0' : ''
	const extSec = sec < 10 ? '0' : ''
	const formatedTime = `${extMin}${min} | ${extSec}${sec}`

	return formatedTime
}

export default formatTime
