import axios from 'axios'

export const api = axios.create({
    baseURL: "https://rocketnotes-api-backend-ct2y.onrender.com"
})