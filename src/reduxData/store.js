import { configureStore } from '@reduxjs/toolkit';
import exchangeReduser from './exchangeReduser';

export const store = configureStore({
  reducer: {
    currencyExchange: exchangeReduser,
  },
  devTools: process.env.NODE_ENV === 'development',
});
