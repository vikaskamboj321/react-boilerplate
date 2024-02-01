import { configureStore } from '@reduxjs/toolkit';
import user from '@Store/user';

export const store = configureStore({
  reducer: {
    user,
  },
});
