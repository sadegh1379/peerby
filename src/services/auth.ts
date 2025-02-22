import { axiosBaseQuery } from "@/lib/axios-base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_BASE_URL! }),
  endpoints: builder => ({
    sendOtp: builder.mutation<string, Services.OtpRequest>({
      query: data => ({ url: `/auth/request-otp`, data }),
    }),
    validateOtp: builder.mutation<Services.ValidateOtpResponse, Services.ValidateOtpRequest>({
      query: data => ({ url: `/auth/validate-otp`, data }),
    }),
  }),
});

export const { useSendOtpMutation, useValidateOtpMutation } = authApi;
