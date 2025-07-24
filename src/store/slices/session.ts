import { createSlice } from '@reduxjs/toolkit';
import { Session } from 'next-auth';

type TState = Session | null;

const initialState: {
  session: TState;
} = {
  session: null
};

const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {
    setSession(state, action: { payload: TState }) {
      state.session = action.payload ? { ...action.payload } : null;
    },
    clearSession(state) {
      state.session = null;
    }
  }
});
export { sessionSlice };

export const { setSession, clearSession } = sessionSlice.actions;

export default sessionSlice.reducer;
