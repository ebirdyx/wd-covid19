import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const users = [
  {
    username: 'admin',
    password: 'admin',
    email: 'admin@example.com',
    fullname: 'Pamela Brahollari',
  },
  {
    username: 'jdoe',
    password: 'admin',
    email: 'jdoe@example.com',
    fullname: 'John Doe',
  },
];

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, action) => {
      const user = users.find((u) => u.username === action.payload.username);
      if (user === undefined) {
        return;
      }

      if (user.password !== action.payload.password) {
        return;
      }

      state.isAuthenticated = true;
      state.user = user;
    },
    signup: (state, action) => {
      users.push(action.payload);
    },
    signout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { signin, signup, signout } = authSlice.actions;

export default authSlice.reducer;
