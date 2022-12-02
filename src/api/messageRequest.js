import axios from 'axios';
const API = axios.create({baseURL: "http://3.108.190.210"})

export const getMessages =(id) => API.get(`/message/${id}`)
export const addMessage =(data) => API.post('/message',data)