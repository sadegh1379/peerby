import { globalConfig } from '@/constants/config';
import axios, { AxiosRequestConfig } from 'axios';
import { notify } from '../toastify';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: globalConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
};

const axiosInstance = axios.create(axiosRequestConfig);

axiosInstance.interceptors.request.use(
  async requestConfig => {
    return requestConfig;
  },
  error => Promise.reject(error)
);

const toaster = (message: string) => {
  typeof window !== 'undefined' && notify.error(message);
};

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    switch (error?.response?.status) {
      case 400:
        toaster(error?.response?.data?.error?.message);
        break;

      case 401:
        // signOut();
        toaster('احراز هویت ناموفق لطفا مجدد تلاش کنید');

        break;

      case 403:
        toaster(error?.response?.data?.error?.message);
        break;

      case 404:
        toaster(error?.response?.data?.error?.message);
        break;

      case 408:
        toaster(error?.response?.data?.error?.message);
        break;

      case 422:
        toaster(error?.response?.data?.error?.message);
        break;

      case 429:
        toaster(error?.response?.data?.error?.message);
        break;

      case 500:
        toaster(error?.response?.data?.error?.message);
        break;
      case 502:

      case 503:

      case 504:
        break;

      default:
        toaster(error?.response?.data?.error?.message || 'اتصال اینترنت خود را بررسی کنید.');
        break;
    }

    return Promise.reject(error);
  }
);

export { axiosInstance };
