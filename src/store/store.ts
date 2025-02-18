import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter-slice";
import { authApi } from "@/services/auth";
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    counter: counterReducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
