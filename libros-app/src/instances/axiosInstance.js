import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/LauraMayorga/DataHTTP'
});

export default instance;