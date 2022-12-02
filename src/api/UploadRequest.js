import axios from 'axios';


const API = axios.create({baseURL: "http://3.108.190.210"})

export const uploadImage = (data) => API.post('/upload',data)

export const uploadPost = (data) => API.post('/post',data)