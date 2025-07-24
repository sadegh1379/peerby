import { axiosBaseQuery } from '@/lib/axios/axios-base-query';
import { createApi } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: axiosBaseQuery({ baseURL: `/auth` }),
  tagTypes: ['get-info'],
  endpoints: builder => ({
    getAuthorizationInfo: builder.query<Service.result<Service.auth.userInformation>, void>({
      query: () => ({
        url: '/get-info'
      }),
      providesTags: ['get-info']
    }),
    getFrontSession: builder.query<Service.result<Service.auth.frontSession>, void>({
      query: () => ({
        url: '/front-session'
      }),
      keepUnusedDataFor: 0,
      providesTags: ['get-info']
    }),
    postVerifyPhone: builder.mutation<void, { body: Service.auth.phone }>({
      query: ({ body }) => ({
        url: `/send-code`,
        method: 'POST',
        // body: body,
        data: body
      })
    }),
    postVerifyCode: builder.mutation<Service.auth.ResCode, { body: Service.auth.code }>({
      query: ({ body }) => ({
        url: `/verify-code`,
        method: 'POST',
        data: body
      })
    }),
    postInformationCompletion: builder.mutation<void, { body: Service.auth.userInformation }>({
      query: ({ body }) => ({
        url: '/complete-info',
        method: 'POST',
        data: body
      }),
      invalidatesTags: ['get-info']
    })
  })
});

export const {
  usePostVerifyPhoneMutation,
  usePostVerifyCodeMutation,
  usePostInformationCompletionMutation,
  useGetAuthorizationInfoQuery
} = authApi;
