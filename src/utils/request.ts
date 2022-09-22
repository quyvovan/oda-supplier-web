import axios from 'axios';

const URL = process.env.HOST_NAME;
const TIME_OUT_API = parseInt(process.env.TIME_OUT_API ?? '0', 10);

const instance = axios.create({
  baseURL: URL,
  timeout: TIME_OUT_API,
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default instance;
