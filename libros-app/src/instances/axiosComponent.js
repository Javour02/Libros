import axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://my-json-server.typicode.com'
});

export default instanse;