import axios from 'axios';
const API = axios.create({baseURL: "http://3.108.190.210"})


export const userChats = (id) => API.get(`/chat/${id}`)
export const chatRequest=(data)=>API.post('/chat',data)