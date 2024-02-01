import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  isReady: false,
  authToken: null,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
// export const {  } = userSlice.actions

export const getUser = (state) => state.user.user;
export const getToken = (state) => state.user.authToken;

export default userSlice.reducer;
