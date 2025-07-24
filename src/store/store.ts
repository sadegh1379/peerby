import { configureStore } from '@reduxjs/toolkit';
import { userSettingSlice } from './slices/user-setting';

export const store = configureStore({
  reducer: {
    [userSettingSlice.reducerPath]: userSettingSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
