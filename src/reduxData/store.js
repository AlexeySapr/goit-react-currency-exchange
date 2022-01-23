import { configureStore } from '@reduxjs/toolkit';
import exchangeReduser from './exchangeReduser';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { currencyRateApi } from 'services/currencyRateAPI';

// const rootReducer = combineReducers({
//   currencyExchange: exchangeReduser,
// });

export const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    currencyExchange: exchangeReduser,
    [currencyRateApi.reducerPath]: currencyRateApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    currencyRateApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

// setupListeners(store.dispatch);
