import axios from 'axios';
const API = axios.create({baseURL: "https://sharegram.tk"})


export const userChats = (id) => API.get(`/chat/${id}`)
export const chatRequest=(data)=>API.post('/chat',data)