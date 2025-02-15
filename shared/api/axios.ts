import axios from 'axios'

import { errorInterceptor, responseInterceptor } from './interceptors'

const axiosConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const axiosInstance = axios.create(axiosConfig)
export const authAxiosInstance = axios.create({ ...axiosConfig, withCredentials: true })

axiosInstance.interceptors.response.use(responseInterceptor, errorInterceptor)
authAxiosInstance.interceptors.response.use(responseInterceptor, errorInterceptor)
