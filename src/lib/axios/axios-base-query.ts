import { globalConfig } from '@/constants/config';
import { isTokenExpired } from '@/helpers/utils';
import { RootState } from '@/store/store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { Session } from 'next-auth';
import { axiosInstance } from '.';
import { sessionSlice } from '@/store/slices/session';
import { UPDATE_REASON } from '@/enums/auth';

const axiosBaseQuery =
  ({ baseURL }: { baseURL: string }): BaseQueryFn<AxiosRequestConfig> =>
  async (config, { getState, dispatch }) => {
    try {
      // handle read session in server or client
      // copy the state to remove the readonly problem
      const state = { ...(getState() as RootState)?.session };

      // handle token expiration and get new token if needed
      state.session = await handleTokenExpiration({ dispatch, session: state.session });

      // handle authorization token
      if (state?.session)
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${state.session?.user.accessToken}`
        };

      const result = await axiosInstance({ ...config, url: `${baseURL}${config.url}` });

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError & { data: Service.error };

      return {
        error: {
          ...(err.response?.data || {})
        }
      };
    }
  };

export { axiosBaseQuery };

// helpers ------------------------------------------------------------------------------------------

const handleTokenExpiration = async ({
  session,
  dispatch
}: {
  session: Session | null;
  dispatch: ThunkDispatch<any, any, any>;
}) => {
  if (session?.user.accessToken && isTokenExpired(session?.user.accessToken)) {
    const tokenObject = await axiosInstance.get(`${globalConfig.frontURL}/api/auth/csrf`);

    const updatedSession = (await axiosInstance.post<Session>(
      `${globalConfig.frontURL}/api/auth/session`,
      {
        csrfToken: tokenObject?.data?.csrfToken,
        data: {
          reason: UPDATE_REASON.ACCESS_TOKEN
        }
      }
    )) as { data: Session };

    dispatch(sessionSlice.actions.setSession(updatedSession.data));

    return updatedSession.data;
  }

  return session;
};
