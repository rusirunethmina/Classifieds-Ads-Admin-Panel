/* eslint-disable prettier/prettier */
import axios from 'axios'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: 'https://autosoukbackend.gethorcrm.com/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  },
  timeout: 5000
})

// Request interceptor
service.interceptors.request.use(
  config => {
    // Add an Authorization header to every request
    const token = localStorage.getItem('token');
    if (token) {
      if (!headers.Authorization) config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// Response interceptor
// service.interceptors.response.use(
//   response => response,
//   error => {
//     console.log('err' + error)
//     // Message({
//     //   message: error.message,
//     //   type: 'error',
//     //   duration: 5000
//     // })
//     return Promise.reject(error)
//   }
// )

// Response interceptor
service.interceptors.response.use(
  response => {
    console.log('response data' + response)
    // Modify response data if needed
    return response;
  },
  error => {
    console.log('err' + error)
    // Handle errors globally
    if (error.response.status === 401) {
      // Redirect to login page or refresh token
    }
    return Promise.reject(error);
  }
);

export default service
