import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const initCurrencyState = {
  changingCurrency: 'UAH',
  getingCurrency: 'UAH',
};

const initValueState = {
  changingValue: '0',
  getingValue: '0',
};

const currency = createReducer(initCurrencyState, {
  [actions.changeFromCurrency]: (state, { payload }) => ({
    ...state,
    changingCurrency: payload,
  }),
  [actions.changeToCurrency]: (state, { payload }) => ({
    ...state,
    getingCurrency: payload,
  }),
  [actions.changeCurrency]: state => {
    const tempChangingCurrency = state.changingCurrency;
    const tempGetingCurrency = state.getingCurrency;

    return {
      changingCurrency: tempGetingCurrency,
      getingCurrency: tempChangingCurrency,
    };
  },
});

const value = createReducer(initValueState, {
  [actions.changeFromValue]: (state, { payload }) => ({
    ...state,
    changingValue: payload,
  }),
  [actions.changeToValue]: (state, { payload }) => ({
    ...state,
    getingValue: payload,
  }),
});

export default combineReducers({
  currency,
  value,
});
