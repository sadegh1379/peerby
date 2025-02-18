import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

interface AxiosBaseQuery {
  baseUrl: string;
}
// Custom Axios Base Query Function
export const axiosBaseQuery =
  ({
    baseUrl,
  }: AxiosBaseQuery): BaseQueryFn<
    { url: string; method?: AxiosRequestConfig["method"]; data?: any; params?: any },
    unknown,
    { status?: number; data?: any }
  > =>
  async ({ url, method = "GET", data, params }) => {
    try {
      const axiosInstance = axios.create({
        baseURL: baseUrl,
        headers: {
          "Content-Type": "application/json",
        },
      });

      axiosInstance.interceptors.request.use((config) => {
        const token = JSON.parse(localStorage.getItem("token") as string);
        config.headers = config.headers || {};
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      });

      const response = await axiosInstance({ url, method, data, params });
      return { data: response.data };
    } catch (error) {
      const axiosError = error as AxiosError;

      // const errorMessage = axiosError?.response?.data?.error?.message || "خطای نامشخصی رخ داده است";
      const errorMessage = "خطای نامشخصی رخ داده است";
      const status = axiosError?.response?.status;

      // Handle different error cases with toast notifications
      switch (status) {
        case 400:
        case 403:
        case 422:
        case 429:
        case 500:
          toast.error(errorMessage);
          break;
        case 401:
          toast.error("احراز هویت ناموفق لطفا مجدد تلاش کنید");
          break;
        case 404:
          toast.error("صفحه مورد نظر یافت نشد");
          break;
        case 408:
          toast.error("درخواست شما زمان‌بر بود، لطفا مجددا تلاش کنید");
          break;
        case 502:
        case 503:
        case 504:
          toast.error("خطای سرور، لطفا بعدا تلاش کنید");
          break;
        default:
          toast.error(errorMessage);
          break;
      }

      return { error: { status, data: axiosError?.response?.data } };
    }
  };

