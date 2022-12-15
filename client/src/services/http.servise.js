import axios from 'axios'
import endpoint from '../config'

const http = axios.create({ baseURL: endpoint })

const httpService = {
	get: http.get,
	post: http.post,
	put: http.put,
	delete: http.delete,
	patch: http.patch,
}

export default httpService
