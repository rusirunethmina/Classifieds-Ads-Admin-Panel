/* eslint-disable prettier/prettier */
import axios from 'axios'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: 'https://autosoukbackend.gethorcrm.com/api/',
  baseURL: 'http://127.0.0.1:8000/api/',
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
    const token = localStorage.getItem('userInfo');
    const user = JSON.parse(token);
    const tokeen = user.access_token;
    if (tokeen) {
      config.headers['Authorization'] = `Bearer ${tokeen}`;
      // if (!headers.Authorization) config.headers['Authorization'] = `Bearer ${tokeen}`;
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
      if (error.code === 'ECONNABORTED') {
        console.log('Request timed out');
  }
    // Handle errors globally
    if (error.response.status === 401) {
      // Redirect to login page or refresh token
    }
    return Promise.reject(error);
  }
);

export default service
