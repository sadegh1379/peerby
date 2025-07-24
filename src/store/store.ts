import { configureStore } from '@reduxjs/toolkit';
import { userSettingSlice } from './slices/user-setting';
import { sessionSlice } from './slices/session';
import { authApi } from '@services/auth';

export const store = configureStore({
  reducer: {
    [userSettingSlice.reducerPath]: userSettingSlice.reducer,
    [sessionSlice.reducerPath]: sessionSlice.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
