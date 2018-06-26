import axios from 'axios';

const apiServer = 'https://shrouded-refuge-10145.herokuapp.com/'

// const endpoints = {
//     check: (domain) => `${apiServer}/check/${domain}`
// }

export default axios.create({
    baseURL: apiServer
});