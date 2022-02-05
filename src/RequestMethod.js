import axios from "axios";

const BASE_URL = "https://basic-shop-apii.herokuapp.com/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcyI6IjYxZmE2ODdjY2UyOWEzNGU3OTAwODUzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDAxNTg5MSwiZXhwIjoxNjQ0Mjc1MDkxfQ.ewJAhEf9ucXqoVxDLLSk7sCsnM1E0mQS8AFuPvPDPSY"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})