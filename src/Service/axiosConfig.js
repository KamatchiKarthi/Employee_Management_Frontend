import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_TOKEN_KEY,
  // timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    console.log(
      'request ',
      config.method.toUpperCase(),
      config.url,
      config.data || ''
    );
    return config;
  },
  error => {
    console.log('request error', error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    console.log('response ', response);
    return response.data;
  },
  error => {
    if (error.response) {
      console.error('response error', error.response.data);
      alert(error.response.data.message || 'something wrong');
    } else {
      console.log('Network error', error.message);
      alert('Network error, Please try again later');
    }
    return Promise.reject(error);
  }
);

export default instance;
