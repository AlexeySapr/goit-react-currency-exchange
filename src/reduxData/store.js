import { configureStore } from '@reduxjs/toolkit';
import exchangeReduser from './exchangeReduser';

// const rootReducer = combineReducers({
//   currencyExchange: exchangeReduser,
// });

export const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    currencyExchange: exchangeReduser,
  },
  devTools: process.env.NODE_ENV === 'development',
});
