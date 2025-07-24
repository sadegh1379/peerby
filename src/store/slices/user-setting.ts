import { createSlice } from '@reduxjs/toolkit';

type TTheme = 'dark' | 'light';

// Utility to get theme from localStorage or system preference
const getTheme = () =>
  typeof window === 'undefined'
    ? 'dark'
    : (localStorage?.getItem?.('theme') as 'dark' | 'light') ||
      (window?.matchMedia?.('(prefers-color-scheme: dark)') ? 'dark' : 'light');

// Utility to get seen promotions from localStorage
const getSeenPromotions = () => {
  if (typeof window !== 'undefined') {
    const seenStr = localStorage.getItem('seen-promotions');
    if (seenStr) {
      return JSON.parse(seenStr);
    }
  }
  return [];
};

const initialState: {
  theme: TTheme;
  menu: {
    isOpen: boolean;
  };
  view: {
    isScaled: boolean;
  };
  seenPromotions: string[];
} = {
  theme: getTheme(),

  menu: {
    isOpen: false
  },
  view: {
    isScaled: false
  },
  seenPromotions: getSeenPromotions()
};

export const userSettingSlice = createSlice({
  name: 'userSetting',
  initialState: initialState,
  reducers: {
    changeTheme(state, action: { payload: TTheme }) {
      localStorage.setItem('theme', action.payload);
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (action.payload === 'dark' || (!action.payload && systemPreference)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      state.theme = action.payload;
    },
    openMenu(state) {
      state.menu.isOpen = true;
    },
    closeMenu(state) {
      state.menu.isOpen = false;
    },
    changeScale(state, action: { payload: boolean }) {
      state.view.isScaled = action.payload;
    },
    addSeenPromotion(state, action: { payload: string[] }) {
      const _seen = [...state.seenPromotions, ...action.payload];
      state.seenPromotions = _seen;
      localStorage.setItem('seen-promotions', JSON.stringify(_seen));
    }
  }
});

export const { changeTheme, closeMenu, openMenu, addSeenPromotion } = userSettingSlice.actions;

export default userSettingSlice.reducer;
