import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const initState = {
  changingCurrency: 'UAH',
  getingCurrency: 'UAH',
  changingValue: '0',
  getingValue: '0',
};

const exchangeReduser = createReducer(initState, {
  [actions.changeFromCurrency]: (state, { payload }) => ({
    ...state,
    changingCurrency: payload,
  }),

  [actions.changeToCurrency]: (state, { payload }) => ({
    ...state,
    getingCurrency: payload,
  }),

  [actions.changeFromValue]: (state, { payload }) => ({
    ...state,
    changingValue: payload,
  }),

  [actions.changeToValue]: (state, { payload }) => ({
    ...state,
    getingValue: payload,
  }),

  [actions.changeCurrency]: state => {
    const tempChangingCurrency = state.changingCurrency;
    const tempGetingCurrency = state.getingCurrency;

    return {
      ...state,
      changingCurrency: tempGetingCurrency,
      getingCurrency: tempChangingCurrency,
    };
  },
});

export default exchangeReduser;
