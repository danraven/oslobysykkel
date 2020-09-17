import axios from 'axios';

export default axios.create({
    baseURL: `${process.env.API_URL}`,
    headers: { 'Client-Identifier': process.env.IDENTIFIER }
});
