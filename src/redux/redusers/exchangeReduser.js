import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';
/************************************** */
const currencyRate = {
  EUR: 1,
  USD: 1.1228,
  UAH: 32,
  RUB: 85.3333,
};

const calculate = (changingCur, getingCur, value) => {
  const newValue =
    (currencyRate[getingCur] / currencyRate[changingCur]) * value;
  return Math.round(newValue * 100) / 100;
};
/************************************** */

const initState = {
  changingCurrency: 'UAH',
  getingCurrency: 'UAH',
  changingValue: 0,
  getingValue: 0,
};

const exchangeReduser = createReducer(initState, {
  [actions.changeFromCurrency]: (state, { payload }) => ({
    ...state,
    changingCurrency: payload,
    getingValue: calculate(payload, state.getingCurrency, state.changingValue),
  }),

  [actions.changeToCurrency]: (state, { payload }) => ({
    ...state,
    getingCurrency: payload,
    getingValue: calculate(
      state.changingCurrency,
      payload,
      state.changingValue,
    ),
  }),

  [actions.changeFromValue]: (state, { payload }) => ({
    ...state,
    changingValue: payload,
    getingValue: calculate(
      state.changingCurrency,
      state.getingCurrency,
      payload,
    ),
  }),

  [actions.changeToValue]: (state, { payload }) => ({
    ...state,
    getingValue: payload,
    changingValue: calculate(
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
        tempGetingCurrency,
        tempChangingCurrency,
        state.changingValue,
      ),
    };
  },
});

export default exchangeReduser;
