import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3000'
})
// Este é apenas um exemplo pra caso tivesse que consumir uma API