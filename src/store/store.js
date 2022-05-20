import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const saveStore = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem('wd-covid19', JSON.stringify(getState()));
    return result;
  };
};

const loadStore = () => {
  if (localStorage.getItem('wd-covid19') !== null) {
    return JSON.parse(localStorage.getItem('wd-covid19'));
  }
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: loadStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveStore),
});
