import axios from 'axios'
import endpoint from '../config'

const http = axios.create({ baseURL: endpoint })

http.interceptors.request.use(async (config) => {
	config.headers = {
		...config.headers,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Metods': '*',
	}
})

const httpService = {
	get: http.get,
	post: http.post,
	put: http.put,
	delete: http.delete,
	patch: http.patch,
}

export default httpService
