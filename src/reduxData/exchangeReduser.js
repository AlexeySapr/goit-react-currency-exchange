import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { calculate } from 'services';
import { fetchCurrencyRate } from './operations';

const initState = {
  changingCurrency: 'USD',
  getingCurrency: 'UAH',
  changingValue: 0,
  getingValue: 0,
  currencyRate: {},
  error: null,
  isLoading: true,
};

const exchangeReduser = createReducer(initState, {
  [fetchCurrencyRate.pending]: state => ({
    ...state,
    isLoading: true,
  }),

  [fetchCurrencyRate.fulfilled]: (state, { payload }) => ({
    ...state,
    currencyRate: payload,
    isLoading: false,
  }),

  [fetchCurrencyRate.rejected]: (state, { payload }) => ({
    ...state,
    error: payload,
    isLoading: false,
  }),

  [actions.changeFromCurrency]: (state, { payload }) => ({
    ...state,
    changingCurrency: payload,
    getingValue: calculate(
      state.currencyRate,
      payload,
      state.getingCurrency,
      state.changingValue,
    ),
  }),

  [actions.changeToCurrency]: (state, { payload }) => ({
    ...state,
    getingCurrency: payload,
    getingValue: calculate(
      state.currencyRate,
      state.changingCurrency,
      payload,
      state.changingValue,
    ),
  }),

  [actions.changeFromValue]: (state, { payload }) => ({
    ...state,
    changingValue: payload,
    getingValue: calculate(
      state.currencyRate,
      state.changingCurrency,
      state.getingCurrency,
      payload,
    ),
  }),

  [actions.changeToValue]: (state, { payload }) => ({
    ...state,
    getingValue: payload,
    changingValue: calculate(
      state.currencyRate,
      state.getingCurrency,
      state.changingCurrency,
      payload,
    ),
  }),

  [actions.changeCurrency]: state => {
    const tempChangingCurrency = state.changingCurrency;
    const tempGetingCurrency = state.getingCurrency;

    return {
      ...state,
      changingCurrency: tempGetingCurrency,
      getingCurrency: tempChangingCurrency,
      getingValue: calculate(
        state.currencyRate,
        tempGetingCurrency,
        tempChangingCurrency,
        state.changingValue,
      ),
    };
  },
});

export default exchangeReduser;
