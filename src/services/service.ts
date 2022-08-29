import axios from 'axios'

const request = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5/" as string,
    timeout: 8000,
})


request.interceptors.response.use((response) => response.data)

export default request