import React from 'react';
import axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://my-json-server.typicode.com'
});

instanse.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
export default instanse;