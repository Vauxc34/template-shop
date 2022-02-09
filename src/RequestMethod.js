import axios from "axios";

const BASE_URL = "https://basic-shop-apii.herokuapp.com/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcyI6IjYxZmE2ODdjY2UyOWEzNGU3OTAwODUzYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDQyNjI3MiwiZXhwIjoxNjQ0Njg1NDcyfQ.971G8fFqUh2BZYaVCeGExjgA44KvBmoth279JgMcWKs"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})