import { configureStore, combineReducers } from '@reduxjs/toolkit';
import exchangeReduser from './redusers';

const rootReducer = combineReducers({
  currencyExchange: exchangeReduser,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});
