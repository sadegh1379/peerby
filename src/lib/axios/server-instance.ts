import { envResolver } from '@/helper/env-resolver';
import axios, { AxiosRequestConfig } from 'axios';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: envResolver.serverBaseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
};

const axiosServerInstance = axios.create(axiosRequestConfig);

axiosServerInstance.interceptors.request.use(
  async requestConfig => {
    return requestConfig;
  },
  error => Promise.reject(error)
);

axiosServerInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    switch (error?.response?.status) {
      case 400:
        break;

      case 401:
        break;

      case 403:
        break;

      case 404:
        break;

      case 422:
        break;

      case 500:
        break;
      case 502:

      case 503:

      case 504:
        break;

      default:
        break;
    }

    return Promise.reject(error);
  }
);

export { axiosServerInstance };
