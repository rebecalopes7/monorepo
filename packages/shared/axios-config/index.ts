import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:33303'
})

export default api
