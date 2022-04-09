const axios = require('axios');
const myaxios = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        post: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

})
export default myaxios