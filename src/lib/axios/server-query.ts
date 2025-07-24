import { globalConfig } from '@/constants/config';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { axiosInstance } from '.';
import { auth } from '../auth';

interface baseQueryRes<T> {
  data?: T;
  error?: Service.error;
}

const serverAxiosQuery =
  ({
    baseURL
  }: {
    baseURL: string;
  }): (<D, T>(_config: AxiosRequestConfig<D>) => Promise<baseQueryRes<T>>) =>
  async config => {
    try {
      // handle read session in server or client
      const state = { session: await auth() };

      // handle token
      if (state?.session) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${state.session?.user.accessToken}`
        };
      }

      const res = await axiosInstance({ ...config, url: `${baseURL}${config.url}` });

      return { data: res.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError & { data: Service.error };

      return {
        error: {
          ...(err.response?.data || {})
        } as Service.error
      };
    }
  };

const serverBaseQuery = <D, T>(config: AxiosRequestConfig<D>) =>
  serverAxiosQuery({ baseURL: globalConfig.baseUrl })<D, T>(config);

export { serverAxiosQuery, serverBaseQuery };
