import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const currency = createReducer('UAH', {
  [actions.changeFromCurrency]: (_, { payload }) => payload,
});

const value = createReducer(0, {
  [actions.changeFromValue]: (_, { payload }) => payload,
});

export const changingForm = combineReducers({ currency, value });
