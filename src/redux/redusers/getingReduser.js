import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const currency = createReducer('UAH', {
  [actions.changeToCurrency]: (_, { payload }) => payload,
});

const value = createReducer(0, {
  [actions.changeToValue]: (_, { payload }) => payload,
});

export const getingForm = combineReducers({ currency, value });
